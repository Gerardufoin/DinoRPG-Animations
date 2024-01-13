// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/AddFighter.hx

import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { Timer } from '../Timer.js';

/**
 * Action adding a new Fighter to the scene.
 */
export class AddFighter extends State {
	/**
	 * Enum stating an entrance effect of a Fighter:
	 * - Stand is a normal entrance.
	 * - Grow makes the Fighter grows from 0% to 100%.
	 * - Fall makes the Fighter fall from the top of the scene.
	 * - Ground makes the Fighter emerge from the ground.
	 * - Anim makes the Fighter do a custom animation.
	 */
	static EntranceEffect = {
		Stand: 0,
		Grow: 1,
		Fall: 2,
		Run: 3,
		Ground: 4,
		Anim: 5
	};

	/**
	 * Fighter information used for instantiation.
	 */
	_fInfos;
	/**
	 * The new Fighter instantiated.
	 * @type {Fighter}
	 */
	_fighter;

	/**
	 * Add a Fighter to the scene. The entrance propery will decide how the Fighter arrives on the scene.
	 * If the entrance is undefined, the Fighter does its default entrance animation, which is a jumpdown.
	 * @param {Scene} scene The scene where the Fighter is added.
	 * @param {{props: Array, dino: boolean, life: number, name: string, side: boolean, size: number, fid: number, gfx: string, entrance?: number, anim?: string, x?: number, y?: number}} fighter The Fighter to add.
	 */
	constructor(scene, fighter) {
		super(scene);
		this._fInfos = fighter;
		this._fighter = new Fighter(this._fInfos, scene);
		this._coefSpeed = 0.03;
		this._endTimer = 5;
		scene.addFighter(this._fighter);
		this.addActor(this._fighter);
		this.checkCasting();
		// TODO add slot to scene
	}

	/**
	 * Initialize the Fighter position depending on its desired entrance type.
	 *
	 * Its x and y coordinates will be randomly choosen on the scene depending on the Fighter side.
	 *
	 * The x and y coordinates can be passed in the fighter info in the constructor if they are not desired to be random.
	 */
	init() {
		const w = Scene.WIDTH * 0.5;
		let ex = this._fInfos.x ? this._fInfos.x : w + -this._fighter.intSide * (w - (30 + Math.random() * 100));
		let ey = this._fInfos.y ? this._fInfos.y : this._scene.getRandomPYPos();

		this._fighter._x = ex;
		this._fighter._y = ey;

		const xOffset = -this._fighter.intSide * (w + 50);

		switch (this._fInfos.entrance) {
			case AddFighter.EntranceEffect.Stand:
			case AddFighter.EntranceEffect.Grow:
				break;
			case AddFighter.EntranceEffect.Fall:
				this._fighter._z = -800;
				this._fighter.playAnim('fall');
				break;
			case AddFighter.EntranceEffect.Run:
				this._fighter._x += xOffset;
				this._fighter.moveTo(ex, ey);
				break;
			case AddFighter.EntranceEffect.Ground:
				// Update the pose to instantiate the mask at the right position.
				this._fighter.updatePos();
				// TODO
				/*holeMask = Scene.me.dm.attach("mcHoleMask",Scene.DP_FIGHTER);
				f.root.setMask(holeMask);
				holeMask._x = f.root._x;
				holeMask._y = f.root._y;*/

				this._fighter.playAnim('stand');
				this._fighter.bounceFrict = 0;
				this._fighter.updateShadeSize(0);
				break;
			case AddFighter.EntranceEffect.Anim:
				this._fighter.playAnim(this._fInfos.anim);
				break;
			default:
				this._fighter._x += xOffset;
				this._fighter.moveTo(ex, ey, Fighter.MovementType.JumpDown);
		}
	}

	/**
	 * Update the Fighter entrance animation.
	 * @param {Timer} timer The fight Timer containing the current time elasped.
	 */
	update(timer) {
		super.update(timer);
		switch (this._fInfos.entrance) {
			case AddFighter.EntranceEffect.Stand:
			case AddFighter.EntranceEffect.Anim:
				break;
			case AddFighter.EntranceEffect.Grow:
				this.growFighter();
				break;
			case AddFighter.EntranceEffect.Fall:
				this._fighter._z = -800 * (1 - this._coef);
				this._fighter.updateShadeSize(this._coef);
				break;
			case AddFighter.EntranceEffect.Ground:
				// TODO
				//holeMask._xscale = holeMask._yscale = (f.ray+20)*2;
				//holeMask._xscale *= 3 ;

				this._fighter._z = (this._fighter.height * 2 + 50) * (1 - this._coef);
				if (this._coef > 0.8) {
					this._fighter.updateShadeSize((this._coef - 0.8) / 0.2);
				}
				if (this._coef == 1) {
					this._fighter.bounceFrict = 0.5;
					//holeMask.removeMovieClip();
				}
				this._fighter.fxLand(1, 1, 20);
				break;
			default:
				this._fighter.updateMove(this._coef);
		}

		if (this._coef === 1) {
			if (this._fInfos.entrance === AddFighter.EntranceEffect.Fall) {
				this._fighter.playAnim('land');
			} else if (this._fInfos.entrance !== undefined /* And not jump? */) {
				this._fighter.backToDefault();
			}
			this._fighter.setLockTimer(20);
			if (!this._fighter.isDino || !this._fighter.side) {
				this._fighter.showName();
			}
			this.kill();
		}
	}

	/**
	 * Grows the Fighter between a scale of 0 and 1 depending on the coefficient.
	 */
	growFighter() {
		const growth = Math.pow(this._coef, 0.5);
		const fScale = this._fighter.getRootContainer().scale;
		fScale.x = growth;
		fScale.y = fScale.x;
		this._fighter.updateShadeSize(growth);
	}
}
