// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/MoveTo.hx
import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { Timer } from '../Timer.js';

/**
 * A Fighter physically attacks another one.
 */
export class Damages extends State {
	static Step = {
		Approach: 0,
		Hit: 1,
		JumpBehind: 2,
		Fall: 3
	};
	static Effect = {
		Normal: 0,
		Drop: 1,
		Back: 2,
		Eject: 3,
		Counter: 4
	};

	/**
	 * The Fighter attacking.
	 * @type {Fighter}
	 */
	_attacker;
	/**
	 * The Fighter being attacked.
	 * @type {Fighter}
	 */
	_target;
	/**
	 * Damages done to the target.
	 * If the damages are null, the attack is dodged.
	 * @type {number | null}
	 */
	_damages;
	/**
	 * Type of effect to apply to the attack, based on Fighter.LifeEffect.
	 * @type {number}
	 */
	_lifeFx;
	/**
	 * Determines how the attacker approaches the target, based on Damages.Effect.
	 * @type {number}
	 */
	_effect;
	/**
	 * The current step of the attacker approach.
	 * @type {number | null}
	 */
	_step = null;

	/**
	 * A Fighter (fid) attacks another Fighter (tid) and inflict a certain amount of damages.
	 * @param {Scene} scene The scene where the action happens.
	 * @param {number} fid The Fighter's id of the attacker.
	 * @param {number} tid The Fighter's id of the target.
	 * @param {number | null} damages The damages inflicted on the target.
	 * @param {number} lifeFx The Fighter.LifeEffect to apply on the target.
	 * @param {number} effect The Damages.Effect used to approach the target.
	 */
	constructor(scene, fid, tid, damages, lifeFx, effect = Damages.Effect.Normal) {
		super(scene);

		this._attacker = this._scene.getFighter(fid);
		this._target = this._scene.getFighter(tid);
		if (!this._attacker || !this._target) {
			this.kill();
			console.error(`Damages Error: Fighter with id ${this._attacker ? tid : fid} does not exist in the scene.`);
			return;
		}

		this._damages = damages;
		this._lifeFx = lifeFx;
		this._effect = effect;
		this.addActor(this._attacker);
		this.addActor(this._target);
	}

	/**
	 * Initialize the behavior of the Fighter based on its desired Damages.Effect.
	 */
	init() {
		this._coef = 0;
		this._coefSpeed = 0.15;
		if (this._effect === Damages.Effect.Drop && this._attacker.position.z == 0) {
			this._effect = Damages.Effect.Normal;
		}

		switch (this._effect) {
			case Damages.Effect.Back:
				{
					const pos = this._attacker.getBrawlPos(this._target, -1);
					this._coefSpeed = this._attacker.runSpeed / this._attacker.getDist(pos);
					this._attacker.moveTo(pos.x, pos.y, Fighter.MovementType.Jump);
					this._step = Damages.Step.JumpBehind;
				}
				break;
			case Damages.Effect.Drop:
				this._attacker.playAnim('air');
				this._step = Damages.Step.Fall;
				break;
			default: {
				if (this._attacker.atRange(this._target)) {
					this.attack();
				} else {
					const pos = this._attacker.getBrawlPos(this._target, -1);
					this._coefSpeed = this._attacker.runSpeed / this._attacker.getDist(pos);
					this._attacker.moveTo(pos.x, pos.y);
					this._attacker.setSens(true);
					this._step = Damages.Step.Approach;
				}
			}
		}
	}

	/**
	 * Start the attack animation and register the hit callback.
	 */
	attack() {
		this._step = Damages.Step.Hit;
		this._attacker.registerCallback('hit', (anim, args) => {
			this.hit(args[0], args[1]);
		});
		if (this._damages == null) {
			if (this._target.haveStatus(Fighter.Status.Fly)) {
				this._target._vx += -this._target.intSide * 5;
			} else {
				this._target.dodge(this._attacker);
			}
		}
		switch (this._effect) {
			case Damages.Effect.Back:
			case Damages.Effect.Eject:
				this._attacker.playAnim('big');
				break;
			case Damages.Effect.Drop:
				this._attacker.playAnim('land');
				break;
			default:
				this._attacker.playAnim('attack');
		}
	}

	/**
	 * Update the state based on the current step.
	 * @param {Timer} timer The fight's Timer containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		if (this._castingWait) return;

		switch (this._step) {
			case Damages.Step.Approach:
				this._attacker.updateMove(this._coef);
				if (this._coef === 1) {
					this.attack();
				}
				break;
			case Damages.Step.JumpBehind:
				this._attacker.updateMove(this._coef);
				if (this._coef === 1) {
					this._attacker.setSens(false);
					this.attack();
					this._attacker.setLockTimer(25);
				}
				break;
			case Damages.Step.Fall:
				this._attacker._vz += 5;
				if (this._attacker.position.z === 0) {
					this._attacker._vz = 0;
					this.attack();
				}
				break;
			case Damages.Step.Hit:
				// Safeguard in case the Fighter does not have a hit callback in its animation.
				if (!this.toDelete && this._attacker._animator.hasAnimEnded) {
					this.hit();
				}
				break;
		}
	}

	/**
	 * The attacker hits the target, dealing damages and locking both Fighter for the given time.
	 * @param {number} lock Lock time of the attacker and default lock time for the target if tlock is null.
	 * @param {number | undefined} tlock If defined, the lock time for the target.
	 */
	hit(lock = 5, tlock = undefined) {
		if (this._damages !== null) {
			this._target.hit(this._attacker, this._damages, this._lifeFx);
		}
		this._attacker.setLockTimer(lock);
		this._target.setLockTimer(tlock !== undefined ? tlock : lock);
		this.end();
	}

	/**
	 * End the State and clear any callbacks registered on hit.
	 */
	end() {
		super.end();
		this._attacker.clearCallback('hit');
	}
}
