// @ts-check
import { Animator } from '../../../../display/Animator.js';
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references_invocations.js';
import { IScene, SCENE_FULL_WIDTH, SCENE_HEIGHT } from '../../../IScene.js';
import { Timer } from '../../../Timer.js';
import { Invocation } from './Invocation.js';
import { invoc_leviathan_wave } from '../../../../gfx/invocations/leviathan_wave.js';
import { Container, Graphics } from 'pixi.js';

/**
 * Invokes Leviathan upon the Scene.
 */
export class Leviathan extends Invocation {
	/**
	 * Number of frames taken by the wave to rise.
	 * @type {number}
	 */
	static WAVE_RISE_TIMER = 10;
	/**
	 * Y position of the wave at the end of the timer.
	 * @type {number}
	 */
	static WAVE_OFFSET_Y_MIN = 30;
	/**
	 * Y position of the wave at the start of the timer.
	 * @type {number}
	 */
	static WAVE_OFFSET_Y_MAX = 350;

	/**
	 * The animator for the wave of Leviathan.
	 * @type {Animator}
	 */
	_wave;
	/**
	 * Timer used to make the wave rise.
	 * @type {number | undefined}
	 */
	_waveTimer;
	/**
	 * Container used to make the wave rise.
	 * @type {Container}
	 */
	_waveContainer = new Container();

	/**
	 * Invokes Leviathan upon the Scene.
	 * @param {IScene} scene The scene where Leviathan is invoked.
	 */
	constructor(scene) {
		super(scene);

		this._wave = new Animator(false).loadAnimation(invoc_leviathan_wave);
		this._wave.playing = false;
		this._wave.visible = false;
		this._wave.x = -2;
		this._wave.y = -47;
		this._waveContainer.addChild(this._wave);

		const mask = new Graphics().beginFill(0xff0000).drawRect(0, -20, SCENE_FULL_WIDTH, SCENE_HEIGHT);
		this._wave.getPart('water').mask = mask;
		this._waveContainer.addChild(mask);

		this._waveContainer.y = Leviathan.WAVE_OFFSET_Y_MAX / 2;
		this._body.addChild(this._waveContainer);

		this._body.addChild(new Asset(ref.leviathan.body));

		this._body.x = -210;
		this._body.y = -285;
	}

	/**
	 * Starts Leviathan' wave once the descent is over.
	 */
	descended() {
		this._wave.playing = true;
		this._wave.visible = true;
		this._waveTimer = 0;
	}

	/**
	 * Updates the animations.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._wave.update(timer.deltaTimeMS);
		if (this._waveTimer !== undefined) {
			this._waveTimer = Math.min(this._waveTimer + timer.tmod, Leviathan.WAVE_RISE_TIMER);
			this._waveContainer.y =
				Leviathan.WAVE_OFFSET_Y_MAX -
				(Leviathan.WAVE_OFFSET_Y_MAX - Leviathan.WAVE_OFFSET_Y_MIN) *
					(this._waveTimer / Leviathan.WAVE_RISE_TIMER);
		}
	}
}
