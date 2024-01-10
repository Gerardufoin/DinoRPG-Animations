// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/AddFighter.hx

import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';

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
	 */
	_fighter;

	/**
	 * Add a Fighter to the scene. The entrance propery will decide how the Fighter arrives on the scene.
	 * If the entrance is undefined, the Fighter does its default entrance animation, which is a jumpdown.
	 * @param {Scene} scene The scene where the Fighter is added.
	 * @param {{props: Array, dino: boolean, life: number, name: string, side: boolean, size: number, fid: number, gfx: string, entrance?: number, anim?: string, x?: number, y:?number}} fighter The Fighter to add.
	 */
	constructor(scene, fighter) {
		super();
		this._fInfos = fighter;
		this._fighter = new Fighter(this._fInfos, scene);
		this._spc = 0.03;
		this._endTimer = 5;
		scene.addFighter(this._fighter);
		this.addActor(this._fighter);
		this.checkCasting();
		this._fighter.body.x = 100;
		this._fighter.body.y = 100;
		// TODO add slot to scene
	}

	init() {}
}
