// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/AddFighter.hx
import { Container } from 'pixi.js';
import { ref as gfx } from '../../gfx/references.js';
import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { Timer } from '../Timer.js';
import { Asset } from '../../display/Asset.js';

/**
 * Enum stating an entrance effect of a Fighter:
 * - Stand is a normal entrance.
 * - Grow makes the Fighter grows from 0% to 100%.
 * - Fall makes the Fighter fall from the top of the scene.
 * - Ground makes the Fighter emerge from the ground.
 * - Anim makes the Fighter do a custom animation.
 */
export const EntranceEffect = {
	Stand: 0,
	Grow: 1,
	Fall: 2,
	Run: 3,
	Ground: 4,
	Anim: 5
};

/**
 * Action adding a new Fighter to the scene.
 */
export class AddFighter extends State {
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
	 * Mask used to make the Fighter pop out of the ground for EntranceEffect.Ground.
	 * @type {Container}
	 */
	_holeMask = new Container();

	/**
	 * Add a Fighter to the scene. The entrance propery will decide how the Fighter arrives on the scene.
	 * If the entrance is undefined, the Fighter does its default entrance animation, which is a jumpdown.
	 * @param {Scene} scene The Scene where the State is happening.
	 * @param {() => void} endCall The function to call at the end of the State, if any.
	 * @param {{props: number[], dino: boolean, life: number, maxLife?: number, name: string, side: boolean, scale: number, fid: number, gfx: string, entrance?: number, anim?: string, x?: number, y?: number}} fighter The Fighter to add.
	 */
	constructor(scene, endCall, fighter) {
		super(scene, endCall);
		this._fInfos = fighter;
		this._fighter = new Fighter(this._fInfos, this._scene);
		this._scene.addSprite(this._fighter, Scene.LAYERS.FIGHTERS);

		this._coefSpeed = 0.03;
		this._endTimer = 5;
		this._scene.addFighter(this._fighter);
		this.addActor(this._fighter);
		this.checkCasting();
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
			case EntranceEffect.Stand:
			case EntranceEffect.Grow:
				break;
			case EntranceEffect.Fall:
				this._fighter._z = -800;
				this._fighter.playAnim('fall');
				break;
			case EntranceEffect.Run:
				this._fighter._x += xOffset;
				this._fighter.moveTo(ex, ey);
				break;
			case EntranceEffect.Ground:
				{
					// Update the pose to instantiate the mask at the right position.
					this._fighter.updatePos();

					const holeSprite = new Asset(gfx.parts.hole_mask);
					const scale = ((this._fighter._ray + 20) * 2) / 100;
					holeSprite.x *= scale * 3;
					holeSprite.y *= scale;
					holeSprite.scale.x = scale * 3;
					holeSprite.scale.y = scale;
					this._holeMask.addChild(holeSprite);
					const root = this._fighter.getRootContainer();
					root.addChild(this._holeMask);
					root.mask = this._holeMask;

					this._fighter.playAnim('stand');
					this._fighter.bounceFrict = 0;
					this._fighter.updateShadeSize(0);
				}
				break;
			case EntranceEffect.Anim:
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
			case EntranceEffect.Stand:
			case EntranceEffect.Anim:
				break;
			case EntranceEffect.Grow:
				this.growFighter();
				break;
			case EntranceEffect.Fall:
				this._fighter._z = -800 * (1 - this._coef);
				this._fighter.updateShadeSize(this._coef);
				break;
			case EntranceEffect.Ground:
				this._fighter._z = (this._fighter.height * 2 + 50) * (1 - this._coef);
				this._holeMask.y = -this._fighter._z * 0.5;
				if (this._coef > 0.8) {
					this._fighter.updateShadeSize((this._coef - 0.8) / 0.2);
				}
				if (this._coef == 1) {
					this._fighter.bounceFrict = 0.5;
					const root = this._fighter.getRootContainer();
					root.mask = undefined;
					root.removeChild(this._holeMask);
				}
				this._fighter.fxLand(1, 1, 20);
				break;
			default:
				this._fighter.updateMove(this._coef);
		}

		if (this._coef === 1) {
			if (this._fInfos.entrance === EntranceEffect.Fall) {
				this._fighter.playAnim('land');
			} else if (this._fInfos.entrance !== undefined /* TODO And not jump? */) {
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
