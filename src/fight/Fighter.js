// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Fighter.hx

import { ColorMatrixFilter, Container, Filter, Graphics, Matrix, Rectangle, RenderTexture } from 'pixi.js';
import { PixiHelper } from '../display/PixiHelper.js';
import { Animator } from '../display/Animator.js';
import { sdino } from '../sdino.js';
import { Phys } from './Phys.js';
import { State } from './State.js';
import { Timer } from './Timer.js';
import { SimpleTween } from './SimpleTween.js';
import { Slot } from './Slot.js';
import { Score } from './parts/text/Score.js';
import { smonster } from '../smonster.js';
import { Title } from './parts/text/Title.js';
import { Sprite } from './Sprite.js';
import { Bolt } from './parts/life/Bolt.js';
import { Flameche } from './parts/life/Flameche.js';
import { Leaf } from './parts/life/Leaf.js';
import { Wind } from './parts/life/Wind.js';
import { Drip } from './parts/life/Drip.js';
import { Acid } from './parts/life/Acid.js';
import { Skull } from './parts/life/Skull.js';
import { Heal } from './parts/life/Heal.js';
import { Explosion } from './parts/life/Explosion.js';
import { StatusDisplay } from './StatusDisplay.js';
import { GlowFilter } from '@pixi/filter-glow';
import { Light } from './parts/life/Light.js';
import { DepthManager, Layers } from './DepthManager.js';
import { IScene } from './IScene.js';
import { WaterOnde } from './parts/scene/WaterOnde.js';
import { FighterProperty, FighterStatus, GroundType, LifeEffect } from './Enums.js';
import { FireSpark } from './parts/life/FireSpark.js';
import { ShadowType } from './parts/Shadow.js';
import { QuickAnim } from './parts/QuickAnim.js';
import { fx_brule, fx_brule_small } from '../gfx/fx/attach/smoke/brule.js';
import { fx_slash } from '../gfx/fx/attach/slash.js';
import { fx_coq_patte_a, fx_coq_patte_b } from '../gfx/fx/attach/coq_pattes.js';
import { fx_hole } from '../gfx/fx/attach/hole.js';
import { QuickAnim2D } from './parts/QuickAnim2D.js';
import { fx_brulure } from '../gfx/fx/attach/brulure.js';
import { fx_steam, fx_steam_small } from '../gfx/fx/attach/smoke/steam.js';
import { fx_smoke, fx_smoke_small } from '../gfx/fx/attach/smoke/dirt.js';
import { ConstantShaderManager } from '../display/ConstantShaderManager.js';
import { IceBlock } from './parts/skills/ice/IceBlock.js';
import { IceShard } from './parts/skills/ice/IceShard.js';
import { MudWall } from './parts/skills/MudWall.js';
import { TFx, Tween } from '../display/Tween.js';
import { EnumConverter } from './data/EnumConverter.js';
import { dino } from '../dino.js';
import { fx_grop_stain } from '../gfx/fx/attach/grop_stain.js';

/**
 * A DinoRPG fighter. Can be either a dino or a monster.
 * Contains all the components related to the fighters.
 */
export class Fighter extends Phys {
	static Mode = {
		Waiting: 0,
		Anim: 1,
		Dead: 2,
		Dodge: 3
	};
	static MovementType = {
		Jump: 0,
		JumpAbove: 1,
		JumpDown: 2,
		Run: 3
	};
	/**
	 * The ice block skin filter. Static to share it between each fighters.
	 * @type {Filter}
	 */
	static IceBlockSkin;

	/**
	 * The depth manager of the Fighter, managing its layers.
	 * @type {DepthManager}
	 */
	_depthManager;
	/**
	 * Get the Depth Manager of the Fighter.
	 * @type {DepthManager}
	 */
	get dm() {
		return this._depthManager;
	}

	/**
	 * False while the fighter's Animator is loading, true once it has finished.
	 * @type {boolean}
	 */
	_fighterLoaded = false;
	/**
	 * False while the fighter's portrait is loading, true once it has finished.
	 * @type {boolean}
	 */
	_portraitLoaded = false;
	/**
	 * True if all the graphical elements of the Fighter have finished loading, false otherwise.
	 * @type {boolean}
	 */
	get loaded() {
		return this._fighterLoaded && this._portraitLoaded;
	}

	/**
	 * The PixiJS representation of the Fighter.
	 * @type {Animator}
	 */
	_animator;
	/**
	 * Skin of the Fighter, contains the Animator.
	 * Is used by actions to make the Fighter glow.
	 * @type {Container}
	 */
	_skin = new Container();
	/**
	 * Get the skin of the Fighter.
	 * @type {Container}
	 */
	get skin() {
		return this._skin;
	}
	/**
	 * Body of the fighter. Add in the scene and contains the layers.
	 * @type {Container}
	 */
	body;
	/**
	 * Fighter id, used to determinate which fighter does which action.
	 * @type {number}
	 */
	id;
	/**
	 * Slot display of the Fighter.
	 * @type {Slot}
	 */
	_slot;
	/**
	 * The type of shadow of the Fighter.
	 * @type {number}
	 */
	_shadeType = ShadowType.Normal;

	/**
	 * If true, the Fighter is locked and cannot start a new action.
	 * @type {boolean}
	 */
	_lock = false;
	/**
	 * Name of the Fighter.
	 * @type {string}
	 */
	_name;
	/**
	 * If true, the Fighter is a dino and instantiated via sdino.
	 * Otherwise it is a monster.
	 * @type {boolean}
	 */
	_isDino;
	/**
	 * Current life of the Fighter.
	 * Life is the yellow bar in the slots.
	 * @type {number}
	 */
	_life;
	/**
	 * Max life of the Fighter.
	 * @type {number}
	 */
	_maxLife;
	/**
	 * Current energy of the Fighter.
	 * Energy is the blue bar in the slots.
	 * @type {number}
	 */
	_energy = 100;
	/**
	 * Maximum energy of the Fighter.
	 * @type {number}
	 */
	_maxEnergy = 100;
	/**
	 * Size of the Fighter.
	 * Bigger size will increase the display of the Fighter and the force applied to others.
	 * Cannot be changed at runtime.
	 * @type {number}
	 */
	_size = 1;
	/**
	 * List of properties attached to the Fighter, based on FighterProperty.
	 * @type {number[]}
	 */
	_props = [];

	/**
	 * Side of the Fighter, true for left side, false for right side.
	 * @type {boolean}
	 */
	_side = true;
	/**
	 * Direction the Fighter is facing, based on their side.
	 * 1 is facing the opposite direction from the side, 0 to face their own side.
	 * @type {number}
	 */
	_sens = 1;

	/**
	 * Default animation the Fighter reverts to when an animation is over.
	 * This will change if the Fighter is sleeping, for example.
	 * @type {string}
	 */
	_defaultAnim = 'stand';
	/**
	 * Current animation being played by the Animator.
	 * @type {string}
	 */
	_currentAnim = 'stand';
	/**
	 * Current walking speed of the Fighter.
	 * @type {number}
	 */
	_walkSpeed = 1.8;
	/**
	 * Current running speed of the Fighter.
	 * @type {number}
	 */
	_runSpeed = 8;
	/**
	 * Reach of the Fighter. Used with the ray to determine if the Fighter can hit another dino or should get closer.
	 * @type {number}
	 */
	_range = 10;

	/**
	 * Height of the Fighter. Defined by the _box entity in MT.
	 * In this project, defined by the value returned by the entity collider.
	 * @type {number}
	 */
	_height;
	/**
	 * Width of the Fighter, defined by the value returned by the entity collider.
	 * @type {number}
	 */
	_width;

	/**
	 * Get the height of the fighter.
	 * @type {number}
	 */
	get height() {
		return this._height;
	}
	/**
	 * Get the width of the fighter.
	 * @type {number}
	 */
	get width() {
		return this._width;
	}

	/**
	 * Get the running speed of the fighter.
	 * @type {number}
	 */
	get runSpeed() {
		return this._runSpeed;
	}

	/**
	 * Current status of the Fighter as a list of FighterStatus.
	 * @type {number[]}
	 */
	_status = [];
	/**
	 * Status icons of the Fighter.
	 * @type {StatusDisplay}
	 */
	_statusDisplay = new StatusDisplay();
	/**
	 * Timer for the status which spawn particles.
	 * @type {number}
	 */
	_statusSpawnTimer = 0;
	/**
	 * States if the Fighter is frozen or not.
	 * Frozen Fighter cannot move.
	 * @type {boolean}
	 */
	_flFreeze = false;
	/**
	 * Return true if the Fighter is frozen.
	 * @type {boolean}
	 */
	get isFrozen() {
		return this._flFreeze;
	}
	/**
	 * States if the Fighter is flying or not.
	 * @type {boolean}
	 */
	_flFly = false;
	/**
	 * Return true if the Fighter is flying.
	 * @type {boolean}
	 */
	get isFlying() {
		return this._flFly;
	}
	/**
	 * If true, the Fighter will not update the fly status even while having it.
	 * To use with skill which needs the Fighters to hit the ground, ex. Tornado.
	 * @type {boolean}
	 */
	_pauseFlying = false;
	/**
	 * Pause or resume a Fighter flying animation.
	 * Do not forget to resume it if paused, it will not happend automatically.
	 * @type {boolean}
	 */
	set pauseFlying(v) {
		this._pauseFlying = v;
	}
	/**
	 * States if the Fighter is currently in the landing process or not.
	 * @type {boolean}
	 */
	_flLand = false;
	/**
	 * Return true if the Fighter is landing.
	 * @type {boolean}
	 */
	get isLanding() {
		return this._flLand;
	}
	/**
	 * Both parts of a water onde, going in front and behind a Fighter.
	 * @type {{front: Sprite, back: Sprite}}
	 */
	_waterOnde;
	/**
	 * Both parts of am ice block, going in front and behind a Fighter.
	 * @type {{front: Container, back: Container}}
	 */
	_iceBlock;
	/**
	 * The mud wall in front of the Fighter, if any.
	 * @type {MudWall}
	 */
	_mudWall;
	/**
	 * While greated than 0, the Fighter will generate drips each frame.
	 * @type {number}
	 */
	_dripTimer = 0;
	/**
	 * While greater than 0, the Fighter shakes each frame.
	 * @type {{force: number, timer: number}}
	 */
	_shake = {
		force: 0,
		timer: 0
	};
	/**
	 * Displacement value for status moving over time (fly, poison, shield, bless).
	 * @type {number}
	 */
	_decal = 0;
	/**
	 * Status filters.
	 * Storing them to prevent WebGL to create them each time.
	 * @type {Filter[]}
	 */
	static StatusFilters;
	/**
	 * Shield status glow filter.
	 * @type {GlowFilter}
	 */
	_shieldGlowFilter;
	/**
	 * Moving part of the blessed status.
	 * @type {GlowFilter}
	 */
	_blessGlowFilter;
	/**
	 * Poison status ColorMatrixFilter.
	 * @type {ColorMatrixFilter}
	 */
	_poisonColorFilter = new ColorMatrixFilter();

	/**
	 * The last registered coordinates of the Fighter.
	 * Used to send back the Fighter to this position via the return action.
	 * @type {{x: number, y: number} | null}
	 */
	_lastCoord = null;
	/**
	 * Walk path of the Fighter. Null if the Fighter is not currently walking.
	 * @type {{x: number, y: number, to: number} | null}
	 */
	_walkPath = null;
	/**
	 * Current movement of the Fighter. Null is the Fighter is not currently moving.
	 * @type {SimpleTween | null}
	 */
	_tweenMove = null;
	/**
	 * Current movement type associated with the movement Tween. Value of the enum Fighter.MovementType.
	 * @type {number | null}
	 */
	_moveType = null;

	/**
	 * Current state of the Fighter, locking it out of certain action until the mode changes.
	 * @type {number}
	 */
	_mode = Fighter.Mode.Waiting;

	/**
	 * Current State using the Fighter for an action. Null if the Fighter does not have a state.
	 * @type {State | null}
	 */
	_focus = null;
	/**
	 * While this number is greater than 0, the Fighter cannot participate in a new action.
	 * @type {number}
	 */
	_lockTimer = 0;
	/**
	 * True if the Fighter's animator should be playing backward, false otherwise.
	 * Reseted in the udpate function, updated in the updateWait function.
	 * @type {boolean}
	 */
	_backwardAnim = false;

	/**
	 * Force of the Fighter against other Fighters.
	 * Fighters with force push against each others.
	 * The forces are applied in the Scene's update.
	 * If the force is null, the Fighter is not influenced by any force and does not applies any force either.
	 * @type {number | null}
	 */
	_force = null;
	/**
	 * Get the current force of the Fighter.
	 * The force is the strength the Fighter applies on the body of other Fighters around it.
	 * @type {number | null}
	 */
	get force() {
		return this._force;
	}

	/**
	 * Texture of the dino in its big format.
	 * @type {RenderTexture}
	 */
	_portraitTexture;
	/**
	 * The frame of the portrait for the big dino texture.
	 * @type {Rectangle}
	 */
	_portraitFrame;
	/**
	 * Get the display of the Fighter when making an Announce, if any.
	 * @type {RenderTexture}
	 */
	get announcePortrait() {
		return this._portraitTexture;
	}

	/**
	 * Creates a new Fighter based on the given Fighter's information.
	 * @param {{props: number[], dino: boolean, life: number, maxLife?: number, name: string, side: boolean, scale: number, fid: number, gfx: string, entrance?: number, anim?: string, x?: number, y?: number}} fInfos The Fighter's informations.
	 * @param {IScene} scene The Scene where the Fighter is added.
	 */
	constructor(fInfos, scene) {
		super(new Container(), scene);
		this.body = new Container();
		this._root.addChild(this.body);

		if (!Fighter.StatusFilters) {
			Fighter.GenerateStatusFilters();
		}

		this.id = fInfos.fid;
		this._isDino = fInfos.dino;
		this._name = fInfos.name;
		this._props = fInfos.props;
		this._life = fInfos.life;
		this._maxLife = fInfos.maxLife ?? fInfos.life;
		const scale = !this.isDino || this._scene.settings.scaleDinoz ? fInfos.scale ?? 1 : 1;
		this._size = Math.pow(scale, 0.65);

		this._depthManager = new DepthManager(Object.keys(Layers.Fighter).length);
		this.body.addChild(this._depthManager);

		// If the Fighter is a dino, creates the announce portrait and the slot display
		if (this.isDino) {
			const smallDino = new sdino({
				data: fInfos.gfx,
				autoUpdate: false,
				pflag: true,
				scale: this._size,
				shadow: false,
				dark: this.haveProp(FighterProperty.Dark)
			});
			this._height = smallDino.collider.height * this._size;
			this._width = smallDino.collider.width * this._size;
			this._animator = smallDino;

			// Prepares the slot to receive the texture later on.
			this._slot = new Slot(
				this._life,
				this._maxLife,
				this._energy,
				this._maxEnergy,
				fInfos.side,
				this._scene.tm
			);
			this._scene.addSlot(this._slot, fInfos.side);

			// Creates the big version of the dino for the slot and the announces.
			const bigDino = new dino({
				data: fInfos.gfx,
				autoUpdate: false,
				pflag: false,
				dark: this.haveProp(FighterProperty.Dark),
				shadow: false
			});
			// If the dino is not added to the Scene and renderer at least once, the filters are bugged when rendered to the render texture.
			// If this is fixed one day, this step and the hidden layer can be removed.
			this._scene.dm.addContainer(bigDino, Layers.Scene.HIDDEN);
			// Generate texture of the big dino to use for announce and slot
			bigDino.onLoad = () => {
				this._scene.dm.removeContainer(bigDino, Layers.Scene.HIDDEN);
				const b = bigDino.getBounds();
				// Get the bounds of the big dino
				this._portraitFrame = new Rectangle(
					Math.round(b.x),
					Math.round(b.y),
					Math.round(b.width),
					Math.round(b.height)
				);
				this._portraitTexture = RenderTexture.create({
					width: this._portraitFrame.width,
					height: this._portraitFrame.height
				});
				const m = new Matrix();
				m.translate(-this._portraitFrame.x, -this._portraitFrame.y);
				// Render the big dino as an image
				this._scene.renderer.render(bigDino, {
					renderTexture: this._portraitTexture,
					transform: m
				});

				this._slot.setPortrait(this._portraitTexture, this._portraitFrame, bigDino.getView());

				this._portraitLoaded = true;
			};
		} else {
			const monster = new smonster({
				type: fInfos.gfx,
				autoUpdate: false,
				pflag: true,
				scale: this._size,
				shadow: false,
				dark: this.haveProp(FighterProperty.Dark)
			});
			this._height = monster.collider.height * this._size;
			this._width = monster.collider.width * this._size;
			this._animator = monster;
			this._shadeType = monster.getShadeType();
			// No portrait for monsters
			this._portraitLoaded = true;
		}
		this._animator.onLoad = () => {
			this._fighterLoaded = true;
		};
		this._skin.addChild(this._animator);
		this._skin.filters = [];
		this.dm.addContainer(this._skin, Layers.Fighter.BODY);
		this.setSide(fInfos.side);

		this.dm.addContainer(this._statusDisplay, Layers.Fighter.STATUS_ICON);

		this._ray = this._width * 0.5;
		this.dropShadow(this._shadeType);
		this._force = 10 * this._size;
		this._friction = 0.9;

		// Callbacks
		this._animator.registerCallback('fxShake', (_anim, args) => {
			this._scene.fxShake(args[0], args[1], args[2]);
		});
		this._animator.registerCallback('fxAttach', (_anim, args) => {
			this.fxAttach(args[0], args[1], args[2], args[3]);
		});
		this._animator.registerCallback('fxAttachScene', (_anim, args) => {
			this.fxAttachScene(args[0], args[1], args[2], args[3], args[4]);
		});

		if (!this._animator.filters) {
			this._animator.filters = [];
		}

		// If the Fighter is static, we freeze it (prevent it from walking) and remove its force (prevent it from pushing).
		if (this.haveProp(FighterProperty.Static)) {
			this._flFreeze = true;
			this._force = null;
		}

		// Creates the water onde if the Scene has water as ground.
		if (this._scene.groundType === GroundType.Water) {
			this._waterOnde = {
				front: new WaterOnde(0, -5, (this._ray * 2) / 100, this._ray / 100),
				back: new WaterOnde(0, -5, (this._ray * 2) / 100, -this._ray / 100)
			};
			this.dm.addSprite(this._waterOnde.front, Layers.Fighter.FRONT);
			this.dm.addSprite(this._waterOnde.back, Layers.Fighter.BACK);
		}

		this.createHitbox();

		// On fighter click callback
		if (this._scene.settings._onFighterClick) {
			const cb = () => {
				this._scene.settings.onFighterClick(this.id);
			};
			this._root.onclick = cb;
			this._root.ontap = cb;
			this._root.eventMode = 'dynamic';
			this._root.cursor = 'pointer';

			if (this._slot) {
				this._slot.onclick = cb;
				this._slot.ontap = cb;
				this._slot.eventMode = 'static';
				this._slot.cursor = 'pointer';
			}
		}
	}

	/**
	 * Update the physic, animator, Sprites attached to the Fighter, current Figther's mode, as well as fx and status display.
	 * @param {Timer} timer The Timer managing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		this.dm.update(timer);
		if (this._lockTimer > 0) {
			this._lockTimer -= timer.tmod;
		}
		this._backwardAnim = false;
		switch (this._mode) {
			case Fighter.Mode.Waiting:
				if (this._focus == null && this._lockTimer <= 0) {
					this.updateWait(timer);
				}
				this.checkBounds(timer);
				break;
			case Fighter.Mode.Anim:
				if (this._animator.hasAnimEnded) {
					this.setWaiting();
				}
				break;
			case Fighter.Mode.Dead:
				break;
			case Fighter.Mode.Dodge:
				this.updateDodge();
				break;
		}
		// Animator updated after updateWait, to make the Fighter walk backward if needed
		this._animator.update(timer.deltaTimeMS, this._backwardAnim);
		this.updateFx(timer);
		this.updateStatus(timer);
		if (this._slot) {
			this._slot.update(timer);
		}
	}

	/**
	 * Check if the Fighter is available to start walking.
	 *
	 * To start walking, a Fighter must be waiting, not have a current state, not be locked, not be frozen, and not currently walking.
	 * @returns {boolean} True if the Fighter is ready to walk, false otherwise.
	 */
	isReadyToWalk() {
		return (
			this._mode == Fighter.Mode.Waiting &&
			this._focus == null &&
			this._lockTimer <= 0 &&
			this._walkPath == null &&
			!this.isFrozen
		);
	}

	/**
	 * Update the waiting mode the of the Fighter.
	 *
	 * In this mode, the Fighter can only walk around if not frozwn or static.
	 * @param {Timer} timer The Timer managing the elapsed time.
	 */
	updateWait(timer) {
		if (this.isFrozen || this.haveProp(FighterProperty.Static)) return;
		if (this._walkPath != null) {
			const a = this.getAng(this._walkPath);
			const d = this.getDist(this._walkPath);
			this._vx = -Math.cos(a) * this._walkSpeed * 0.5;
			this._vy = -Math.sin(a) * this._walkSpeed * 0.5;
			this._walkPath.to -= timer.tmod;
			if (d < this._walkSpeed * 2 || this._walkPath.to <= 0) {
				this.stopWalk();
			}
			if (this._vx * this.intSide < 0) {
				this._backwardAnim = true;
			}
		}
	}

	/**
	 * Set a random destination and make the Fighter walk toward it.
	 */
	startWalk() {
		this.playAnim('walk');
		const w = this._scene.width * 0.5;
		this._walkPath = {
			x: w - this.intSide * (20 + Math.random() * (w - 80)),
			y: PixiHelper.mm(
				this._ray,
				this._y + (Math.random() * 2 - 1) * 20,
				this._scene.getPYSize() - 2 * this._ray
			),
			to: 150.0
		};
	}

	/**
	 * Stop the current walk animation of the Fighter.
	 */
	stopWalk() {
		this.playAnim(this._defaultAnim, false);
		this._walkPath = null;
		this._vx = 0;
		this._vy = 0;
	}

	/**
	 * Set the side of the fighter.
	 * @param {boolean} side The side of the fighter. True for left side (facing right), False for right side (facing left).
	 */
	setSide(side) {
		this._side = side;
		this._animator.flip(side);
	}

	/**
	 * Return the side of the Fighter as an integer.
	 * @returns {number} 1 for left side, -1 for right side.
	 */
	get intSide() {
		return this._side ? 1 : -1;
	}

	/**
	 * Check if the Fighter is a dino or not.
	 * @returns {boolean} True if the Fighter is a dino, false otherwise.
	 */
	get isDino() {
		return this._isDino;
	}

	/**
	 * Returns the side of the Fighter.
	 * @returns {boolean} True if the Fighter is on the left side, false otherwise.
	 */
	get side() {
		return this._side;
	}

	/**
	 * The Fighter flips around and change side.
	 */
	flip() {
		this.backToDefault();
		this._side = !this._side;
		this._animator.flip(this._side);
	}

	/**
	 * Set the current direction of the Fighter.
	 * Different from side, where side is the global direction, while sens is the temporary one (if the Fighter is moving backward for example).
	 * @param {boolean} sens The direction the Fighter will be facing. True for the default direction, False for the opposite direction.
	 */
	setSens(sens) {
		this._sens = sens ? 1 : -1;
		this.body.scale.x = this._sens;
	}

	/**
	 * Get the coordinates where the Fighter needs to be to physically attack another Fighter.
	 * @param {Fighter} target Target of the attack.
	 * @param {number} sens Direction of the attack.
	 * @returns {{x: number, y: number}} The xy coordinates where the Fighter has to go.
	 */
	getBrawlPos(target, sens = 1) {
		return { x: target._x + (this._range + this._ray + target._ray) * target.intSide * sens, y: target._y + 2 };
	}

	/**
	 * Checks if the Fighter is in attack range of another Figther.
	 * @param {Fighter} target The Fighter to attack.
	 * @returns {boolean} True if the Fighter is in attack range, false otherwise.
	 */
	atRange(target) {
		return this.getDist({ x: target._x, y: target._y }) <= this._range + this._ray + target._ray;
	}

	/**
	 * Reset the direction of the Fighter to their default (based on their side).
	 * Set the animation to the current default animation except if they are currently landing.
	 */
	backToDefault() {
		this.setSens(true);
		if (this._currentAnim !== 'land') {
			this.playAnim(this._defaultAnim, false);
		}
	}

	/**
	 * Prepare the Fighter to go back to its last saved coordinate, using the desired movement type passed as parameter.
	 * @param {number | null} moveType A value from the Fighter.MoveType enum or null for the default movement.
	 * @returns {number} The ratio between the Fighter's running speed and the expected distance to cover.
	 */
	initReturn(moveType = null) {
		if (!this._lastCoord) return 0;
		const rec = 40;
		const p = this._lastCoord;
		this._lastCoord = null;
		if (Math.abs(this._scene.width * 0.5 - p.x) > this._ray + rec + 20) {
			p.x += rec * this.intSide;
		}
		const c = 0.25;
		p.y = p.y * (1 - c) + p.y * c;
		this.moveTo(p.x, p.y, moveType);
		this.setSens(false);
		return this._runSpeed / this.getDist(p);
	}

	/**
	 * Check if the Fighter is still in the scene area.
	 * If the Fighter is getting out of bound, guide it back into the Scene.
	 * @param {Timer} timer Fight timer containing the elapsed time.
	 */
	checkBounds(timer) {
		if (this.haveProp(FighterProperty.Static)) return;
		const m = 4;
		const wmod = 10;
		if (this._x < m + this._ray || this._x > this._scene.width - (this._ray + m + this._scene.margins.right)) {
			const dx =
				PixiHelper.mm(m + this._ray + wmod, this._x, this._scene.width - (m + this._ray + wmod)) - this._x;
			this._x += dx * 0.3 * timer.tmod;
			this._vx = 0;
		}
		const up = this._ray * 0.5;
		const down = this._scene.getPYSize() - this._ray;
		if (this._y < up || this._y > down) {
			this._y = PixiHelper.mm(up, this._y, down);
			this._vy = 0;
		}
	}

	/**
	 * Save the current coordinates of the Fighter for a futur return action.
	 * If there are already saved coordinates, does nothing.
	 * @returns {void}
	 */
	saveCurrentCoords() {
		if (this._lastCoord) {
			return;
		}
		this._lastCoord = {
			x: this._x,
			y: this._y
		};
	}

	/**
	 * Adds the desired FighterStatus to the status of the Fighter.
	 * @param {number} status The FighterStatus enum indicating which status to add.
	 */
	addStatus(status) {
		if (!this.haveStatus(status)) {
			this._status.push(status);
			this.displayStatus();
			this._scene.settings.onStatusChange(
				this.id,
				this._status.map((s) => EnumConverter.convert(s, FighterStatus, true).toString())
			);
		}
	}

	/**
	 * Removes the selected status from the Fighter if it has it.
	 * If null is passed, remove all the status.
	 * @param {number | null} status A FighterStatus enum value.
	 */
	removeStatus(status = null) {
		this._status = this._status.filter((s) => {
			if (status === null || s === status) {
				switch (s) {
					case FighterStatus.Fly:
						this._flLand = true;
						break;
				}
				return false;
			}
			return true;
		});
		this.displayStatus();
		this._scene.settings.onStatusChange(
			this.id,
			this._status.map((s) => EnumConverter.convert(s, FighterStatus, true).toString())
		);
	}

	/**
	 * Check if the Fighter has the current status applied.
	 * @param {number} status The FighterStatus value to check for.
	 * @returns {boolean} True if the Fighter has the given status, false otherwise.
	 */
	haveStatus(status) {
		return this._status.find((s) => s === status) !== undefined;
	}

	/**
	 * Display the status of the Fighter.
	 */
	displayStatus() {
		this._defaultAnim = 'stand';
		this.body.alpha = 1;
		this.body.filters = [];
		this._walkSpeed = 1.8;
		this._runSpeed = 8;
		this._flFreeze = this.haveProp(FighterProperty.Static);
		this._flFly = false;
		this._decal = 0;
		if (this._force !== null) {
			this._force = 10;
		}

		for (const s of this._status) {
			switch (s) {
				case FighterStatus.Sleep:
					this._defaultAnim = 'sleep';
					this.playAnim('sleep', false);
					this._flFreeze = true;
					break;
				case FighterStatus.Intang:
					this.body.alpha = 0.5;
					break;
				case FighterStatus.Fly:
					this._defaultAnim = 'jump';
					this.playAnim('jump', false);
					this._flFly = true;
					this.setGroundFx(false);
					break;
				case FighterStatus.Slow:
					this._walkSpeed *= 0.5;
					this._runSpeed *= 0.5;
					break;
				case FighterStatus.Quick:
					this._walkSpeed *= 2;
					this._runSpeed *= 2;
					break;
				case FighterStatus.Stoned:
				case FighterStatus.Stun:
					this._flFreeze = true;
					if (this._force !== null) {
						this._force = 100000;
					}
					break;
			}
		}
		this._statusDisplay.showIcons(this._status);
	}

	/**
	 * Update the visual effect of the status applied to the Fighter.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	updateStatus(timer) {
		if (this.isLanding) {
			this._z += 5;
			if (this._z > 0) {
				this._z = 0;
				this._flLand = false;
				if (this._mode !== Fighter.Mode.Dead) {
					this.playAnim('stand');
				}
				this.setGroundFx(true);
			}
		}

		this._decal = (this._decal + 27 * timer.tmod) % 628;
		this._statusSpawnTimer += timer.tmod;
		let spawn = false;
		if (this._statusSpawnTimer >= 1) {
			spawn = true;
			this._statusSpawnTimer = 0;
		}
		this.body.filters = [];
		this._animator.filters = [];
		for (const s of this._status) {
			switch (s) {
				case FighterStatus.Flames:
					if (spawn) {
						this.dm.addSprite(
							new Flameche(this._scene, (Math.random() * 2 - 1) * 15, -Math.random() * 20, 0, 0),
							Layers.Fighter.BODY
						);
					}
					break;
				case FighterStatus.Burn:
					if (spawn) {
						this.dm.addSprite(
							new Flameche(this._scene, (Math.random() * 2 - 1) * 15, -Math.random() * 20, 0, 0, true),
							Layers.Fighter.BODY
						);
					}
					break;
				case FighterStatus.Fly:
					if (!this._pauseFlying) {
						const tz = Math.sin(this._decal * 0.01) * 15 - 60;
						const dz = tz - this._z;
						var lim = 3;
						this._z += PixiHelper.mm(-lim, dz, lim);
					}
					break;
				case FighterStatus.Stoned:
					this._animator.filters.push(Fighter.StatusFilters[FighterStatus.Stoned]);
					break;
				case FighterStatus.Shield:
					{
						if (!this._shieldGlowFilter) {
							this._shieldGlowFilter = new GlowFilter({
								color: 0xffffff,
								distance: 2,
								outerStrength: 4,
								quality: 0.5
							});
						}
						const rcol = PixiHelper.getRainbow(this._decal / 628);
						const c = PixiHelper.mergeCol(rcol, 0xffff00, 0.2);
						this._shieldGlowFilter.color = c.toNumber();
						this.body.filters.push(this._shieldGlowFilter);
					}
					break;
				case FighterStatus.Bless:
					{
						if (!this._blessGlowFilter) {
							this._blessGlowFilter = new GlowFilter({
								color: 0xffffff,
								distance: 4,
								outerStrength: 2,
								quality: 0.4
							});
						}
						const c = Math.sin(this._decal * 0.01);
						this._blessGlowFilter.outerStrength = 2 + 4 * c;
						this.body.filters.push(Fighter.StatusFilters[FighterStatus.Bless]);
						this.body.filters.push(this._blessGlowFilter);
					}
					break;
				case FighterStatus.Poison:
					this._animator.filters.push(this._poisonColorFilter);
					// Index 6 of the ColorMatrixFilter impacts the green.
					this._poisonColorFilter.matrix[6] = (1 + Math.cos(this._decal * 0.01)) * 0.5 + 1;
					break;
				case FighterStatus.Heal:
					if (spawn) {
						this.dm.addSprite(
							new Light(
								this._scene,
								(Math.random() * 2 - 1) * 17,
								(5 - Math.random() * 15) * 2,
								0,
								-Math.random() * 3,
								10 + Math.random() * 10,
								true
							),
							Layers.Fighter.BODY
						);
					}
					break;
				case FighterStatus.Stun:
					this.body.filters.push(Fighter.StatusFilters[FighterStatus.Stun]);
					break;
			}
		}
	}

	/**
	 * Show or hides the ground fxs.
	 * @param {boolean} v If true, the ground fx are visible. Otherwise they are not.
	 */
	setGroundFx(v) {
		if (this._waterOnde) {
			this._waterOnde.front.getRootContainer().visible = v;
			this._waterOnde.back.getRootContainer().visible = v;
		}
	}

	/**
	 * Switch the current animation being played by the Fighter's Animator.
	 * @param {string} anim The animation to play.
	 * @param {boolean} unpauseIfSame If true, unpause the animation if the new animation is the same as the one currently playing. True by defalut.
	 */
	playAnim(anim, unpauseIfSame = true) {
		if (this.isFlying && ['run', 'walk'].includes(anim)) return;
		this._currentAnim = anim;
		this._animator.playAnim(anim, unpauseIfSame);
	}

	/**
	 * Dodge the attack of another Fighter.
	 * @param {Fighter} attacker The Fighter attacking.
	 */
	dodge(attacker) {
		this.playAnim('dodge');
		const angle = this.getAng(attacker.position) + 0.75 * (Math.random() * 4 - 1);
		const sp = 7;
		this._vz = -15;
		this._vx = Math.cos(angle) * sp;
		this._vy = Math.sin(angle) * sp;
		this._weight = 1.5;
		this._mode = Fighter.Mode.Dodge;
	}

	/**
	 * Stops the dodge animation of the Fighter once it reaches the ground.
	 */
	updateDodge() {
		if (this._z == 0) {
			this._weight = 0;
			this._vx = 0;
			this._vy = 0;
			this._vz = 0;
			this.backToDefault();
			this._mode = Fighter.Mode.Waiting;
		}
	}

	/**
	 * The Fighter gets hit by another Fighter, losing [damages] health with the [lifeFx] effect.
	 * @param {Fighter} attacker The Fighter attacking this one.
	 * @param {number} damages The damages inflicted. If 0, the guard animation is played.
	 * @param {{fx: number, amount?: number, size?: number}} lifeFx The life gain/loss effect to play, based on LifeEffect.
	 * @returns {void}
	 */
	hit(attacker, damages, lifeFx) {
		if (damages == 0) {
			this.playAnim('guard');
			return;
		}
		if (!this.haveProp(FighterProperty.Static)) {
			var angle = this.getAng(attacker.position);
			const sp = 3;
			this._vx = Math.cos(angle) * sp;
			this._vy = Math.sin(angle) * sp;
		}
		this.damages(damages, 6, lifeFx);
	}

	/**
	 * The Fighter takes damages.
	 * @param {number} damages The amount of damages taken.
	 * @param {number} stunDuration The stun duration following the damage. 50 by default.
	 * @param {{fx: number, amount?: number, size?: number} | null} lifeFx The LifeEffect effect to play while receiving the damages, or null if none.
	 */
	damages(damages, stunDuration = 50, lifeFx = null) {
		this.playAnim('hit');
		this._life = Math.max(0, this._life - damages);
		this._scene.settings.onLifeChange(this.id, this._life);
		if (this._slot) {
			this._slot.setLife(this._life / this._maxLife);
			this._slot.fxDamage();
		}

		this.showDamages(damages);
		this._lockTimer = stunDuration;
		this.setShake(30);

		if (lifeFx !== null) {
			this.lifeEffect(lifeFx);
		}
	}

	/**
	 * The Fighter regenerates the given amount of life.
	 * If a LifeEffect is given, it will be played.
	 * @param {number} amount The amount of health to regenerate.
	 * @param {{fx: number, amount?: number, size?: number} | null} lifeFx The LifeEffect to play. Null by default.
	 */
	gainLife(amount, lifeFx = null) {
		this._life += amount;
		this._scene.settings.onLifeChange(this.id, this._life);
		if (this._slot) {
			this._slot.setLife(this._life / this._maxLife);
		}
		this.showDamages(amount, false);
		this._lockTimer = 5;
		if (lifeFx !== null) {
			this.lifeEffect(lifeFx);
		}
	}

	/**
	 * Display the damage received above the Fighter by spawning a new Score object.
	 * @param {number} damages The number to display.
	 * @param {boolean} hurt If true, the number is red, otherwise it is green. True by default.
	 */
	showDamages(damages, hurt = true) {
		if (damages <= 0) return;
		const dmg = new Score(
			this._scene,
			this._x,
			this._scene.getY(this._y) + (this._z - this._height) * 0.5,
			damages,
			hurt
		);
		this._scene.dm.addSprite(dmg, Layers.Scene.INTER);
	}

	/**
	 * Change the Fighter into waiting mode, setting its current animation to the current default one.
	 */
	setWaiting() {
		this._mode = Fighter.Mode.Waiting;
		this.playAnim(this._defaultAnim, false);
	}

	/**
	 * Try to lock a Fighter to do a specific action (State). If the Fighter is unavailable, return false.
	 * @param {State} state The state the Fighter has to focus on.
	 * @returns {boolean} False if the Fighter is unavailable, true otherwise.
	 */
	setFocus(state) {
		if (this._lockTimer > 0 || this._mode != Fighter.Mode.Waiting || this.isLanding) {
			return false;
		}

		this._walkPath = null;
		if (this._focus == null) {
			this.backToDefault();
			this._focus = state;
			this._vx = 0;
			this._vy = 0;
			if (this._force !== null) {
				this._force *= 1000;
			}
			return true;
		} else {
			return this._focus.id === state.id;
		}
	}

	/**
	 * Unset the current State the Fighter is focusing on.
	 */
	unfocus() {
		this._focus = null;
		if (this._force !== null) {
			this._force /= 1000;
		}
	}

	/**
	 * Move the Fighter to the desired position over time.
	 *
	 * The type of movement can be chosend based on Fighter.MovementType.
	 * @param {number} dx The x coordinate of the destination.
	 * @param {number} dy The y coordinate of the destination.
	 * @param {number} moveType A value from the Fighter.MovementType enum. Null by default.
	 */
	moveTo(dx, dy, moveType = null) {
		if ((dx - this._x) * this.intSide < 0) {
			this.setSens(false);
		}
		this._tweenMove = new SimpleTween(this, { x: this._x, y: this._y }, { x: dx, y: dy });
		this._moveType = moveType;
		switch (this._moveType) {
			case Fighter.MovementType.Jump:
			case Fighter.MovementType.JumpAbove:
				this.playAnim('jump');
				this.fxJump();
				break;
			case Fighter.MovementType.JumpDown:
				this.playAnim('jumpDown');
				this.fxJump();
				break;
			default:
				this.playAnim('run');
		}
	}

	/**
	 * Set the position of the current Tween movement by a coefficience between 0 and 1.
	 * The coefficient is the current linear progression of the tween (0 = start position, 1 = end position).
	 * @param {number} coeff The current progression of the Tween movement between 0 and 1.
	 */
	updateMove(coeff) {
		if (!this._tweenMove) return;
		this._tweenMove.update(coeff);
		switch (this._moveType) {
			case Fighter.MovementType.Jump:
				this._z = -Math.sin(coeff * 3.14) * 120;
				if (coeff == 1) {
					this.fxLand(12);
				}
				break;
			case Fighter.MovementType.JumpAbove:
				this._z = -Math.sin(coeff * 1.57) * 160;
				break;
			case Fighter.MovementType.JumpDown:
				this._z = -Math.sin(1.57 + coeff * 1.57) * 160;
				if (coeff == 1) {
					this.fxLand(12);
				}
				break;
			default:
				this._scene.genGroundPart(
					this._x + (Math.random() * 2 - 1) * this._ray,
					this._y + (Math.random() * 2 - 1) * this._ray * 0.5
				);
		}
		if (coeff >= 1) {
			this._tweenMove = null;
		}
	}

	/**
	 * Set the current lock timer for the Fighter.
	 * @param {number} lt The new lock timer.
	 */
	setLockTimer(lt) {
		this._lockTimer = lt;
	}

	// FX SECTION

	/**
	 * Sets the shake value of the Fighter, making it shake over time.
	 * @param {number} force The strength of the shaking.
	 */
	setShake(force) {
		this._shake = {
			force: force,
			timer: 1
		};
	}

	/**
	 * Update the shake animation by moving the animator by the shake force.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	updateShake(timer) {
		if (this._shake.force) {
			this._shake.timer += timer.tmod;
			if (this._shake.timer > 1) {
				this._shake.timer--;
				this._shake.force *= -0.6;
				this._animator.x = this._shake.force;

				if (Math.abs(this._shake.force) < 1) {
					this._shake.force = 0;
					this._animator.x = 0;
				}
			}
		}
	}

	/**
	 * Updates the FX effect attached to the Fighter (shake and drip).
	 * @param {Timer} timer Fight's timer, containing the elapsed time.
	 */
	updateFx(timer) {
		this.updateShake(timer);
		if (this._dripTimer > 0) {
			if (Math.floor(this._dripTimer) != Math.floor(this._dripTimer - timer.tmod)) {
				this.fxDrip();
			}
			this._dripTimer -= timer.tmod;
		}
	}

	/**
	 * Adds flameches particles to the Fighter.
	 * @param {number} max The number of flames to spawn in.
	 * @param {number} sleep Random delay before the flames appears.
	 */
	fxBurn(max, sleep = 10) {
		for (let i = 0; i < max; ++i) {
			const flameche = new Flameche(
				this._scene,
				(Math.random() * 2 - 1) * this._ray,
				-Math.random() * this._height,
				this.intSide,
				Math.random() * sleep
			);
			this.dm.addSprite(flameche, Layers.Fighter.FRONT);
		}
	}

	/**
	 * Creates the given amount of fire sparks on the Fighter.
	 * @param {number} max The number of fire sparks to instantiate.
	 */
	fxBurst(max) {
		for (let i = 0; i < max; ++i) {
			this._scene.dm.addSprite(
				new FireSpark(this._scene, (i / max) * 6.28, this.position.x, this.position.y),
				Layers.Scene.FIGHTERS
			);
		}
	}

	/**
	 * Creates a number of leaves on the Fighter with the given velocities.
	 * @param {number} max The number of leaves to create.
	 * @param {number} dvx The x velocity. If not given, a random velocity is chosen.
	 * @param {number} dvz The y velocity. If not given, a random velocity is chosen.
	 */
	fxLeaf(max, dvx = undefined, dvz = undefined) {
		for (let i = 0; i < max; ++i) {
			const x = this.position.x + (Math.random() * 2 - 1) * this.ray;
			const y = this.position.y + (Math.random() * 2 - 1) * this.ray * 0.5;
			const z = this.position.z - Math.random() * this._height * 2;

			const vx = dvx !== undefined ? dvx : -this.intSide * Math.random() * 3;
			const vz = dvz !== undefined ? dvz : (Math.random() * 2 - 1) * 1.5;

			const leaf = new Leaf(this._scene, x, y, z, vx, vz);
			this._scene.dm.addSprite(leaf, Layers.Scene.FIGHTERS);
		}
	}

	/**
	 * Adds bolts particles to the Fighter.
	 * @param {number} max Number of bolts particles to spawn in.
	 */
	fxLightning(max) {
		for (let i = 0; i < max; ++i) {
			const bolt = new Bolt(this._scene, (Math.random() * 2 - 1) * this._ray, -Math.random() * this._height);
			this.dm.addSprite(bolt, Layers.Fighter.FRONT);
		}
	}

	/**
	 * Adds wind particles to the Fighter.
	 * @param {number} max Number of wind particles to spawn in.
	 */
	fxWind(max) {
		for (let i = 0; i < max; ++i) {
			const wind = new Wind(
				this._scene,
				Math.random() * (this.ray + 24) * this.intSide,
				-Math.random() * this.height,
				-(2 + Math.random() * 3) * this.intSide,
				0
			);
			this.dm.addSprite(wind, Layers.Fighter.FRONT);
		}
	}

	/**
	 * Adds drip particles to the Fighter and set the drip timer.
	 * @param {number} max Number of drip particles to spawn in, divided by two.
	 */
	fxWater(max) {
		const amnt = Math.round(max * 0.5);
		for (let i = 0; i < amnt; ++i) {
			this.fxDrip();
		}
		this._dripTimer = amnt;
	}

	/**
	 * Adds a drip particle to the Fighter.
	 */
	fxDrip() {
		const drip = new Drip(
			this._scene,
			this._x + (Math.random() * 2 - 1) * this.ray,
			this._y + (Math.random() * 2 - 1) * this.ray * 0.5,
			this._z - Math.random() * this._height * 2
		);
		this._scene.dm.addSprite(drip, Layers.Scene.FIGHTERS);
	}

	/**
	 * Spawns acid particles on the Fighter.
	 * @param {number} max The amount of acid particles to spawn in.
	 */
	fxAcid(max) {
		for (let i = 0; i < max; ++i) {
			const acid = new Acid(
				this._scene,
				(Math.random() * 2 - 1) * this.ray,
				-(this.height + 5 + Math.random() * 16),
				-((Math.random() * 0.5 + 0.5) * this.height)
			);
			this.dm.addSprite(acid, Layers.Fighter.FRONT);
		}
	}

	/**
	 * Spawns healing particle on the Fighter.
	 * @param {number} max The number of particles to spawn in.
	 */
	fxHeal(max) {
		for (let i = 0; i < max; ++i) {
			this.dm.addSprite(
				new Heal(this._scene, (Math.random() * 2 - 1) * this.ray, -Math.random() * this._height),
				Layers.Fighter.FRONT
			);
		}
	}

	/**
	 * Spawns a skull particle with the given size on the Fighter.
	 * @param {number} size The size of the skull particle, 1 by default.
	 */
	fxSkull(size = 1) {
		this.dm.addSprite(new Skull(this._scene, 0, -this._height * 0.5, size), Layers.Fighter.FRONT);
	}

	/**
	 * Spawns explosion particles on the Fighter.
	 * @param {number} max The number of particles to spawn in.
	 */
	fxExplosion(max) {
		for (let i = 0; i < max; ++i) {
			this.dm.addSprite(
				new Explosion(this._scene, (Math.random() * 2 - 1) * this.ray, -Math.random() * this._height),
				Layers.Fighter.FRONT
			);
		}
	}

	/**
	 * Creates a mud wall in front of the Fighter, if no mud wall already exist.
	 */
	fxAddMudWall() {
		if (!this._mudWall) {
			this._mudWall = new MudWall(0, -this.height * 0.5, (this.intSide * (this.ray * 4 + 30)) / 100);
			this.dm.addSprite(this._mudWall, Layers.Fighter.FRONT);
		}
	}

	/**
	 * Removes the mud wall in front of the Fighter, if any has been instantiated.
	 */
	fxRemoveMudWall() {
		if (this._mudWall) {
			this._scene.tm.addTween(new Tween(this._mudWall.getRootContainer(), TFx.TBurnOut).to(1, { alpha: 0 }));
			this._scene.tm.addTween(
				new Tween(this._mudWall.getRootContainer().scale, TFx.TBurnOut).to(1, { x: 0, y: 0 }).onComplete(() => {
					this._mudWall.kill();
					this._mudWall = null;
				})
			);
		}
	}

	/**
	 * Adds or display the ice block around the Fighter.
	 */
	fxAddIceBlock() {
		if (!this._iceBlock) {
			const sx = (this.ray * 2 + 30) / 100;
			const sy = (this.height + 30) / 100;
			this._iceBlock = {
				front: new IceBlock(sx, sy, false),
				back: new IceBlock(sx, sy, true)
			};
			this.dm.addContainer(this._iceBlock.front, Layers.Fighter.FRONT);
			this.dm.addContainer(this._iceBlock.back, Layers.Fighter.BACK);
		}
		if (!Fighter.IceBlockSkin) {
			Fighter.IceBlockSkin = ConstantShaderManager.getColorOffsetFilter(95, 190, 254, 0, 0, 0);
		}
		this._iceBlock.front.visible = true;
		this._iceBlock.back.visible = true;
		this._skin.filters = [Fighter.IceBlockSkin];
		this._animator.playing = false;
	}

	/**
	 * Hides the ice block around the Fighter.
	 * @param {number} max Number of ice shard to spawn when the ice block is removed.
	 */
	fxRemoveIceBlock(max) {
		if (this._iceBlock) {
			this._iceBlock.front.visible = false;
			this._iceBlock.back.visible = false;
		}
		this._skin.filters = [];
		this._animator.playing = true;
		for (let i = 0; i < max; ++i) {
			this._scene.dm.addSprite(
				new IceShard(this._scene, this._x, this._y, this._z, this.ray, this.height),
				Layers.Scene.FIGHTERS
			);
		}
	}

	/**
	 * Play the given LifeEffect effect.
	 * @param {{fx: number, amount?: number, size?: number}} effect The LifeEffect to play.
	 */
	lifeEffect(effect) {
		switch (effect.fx) {
			case LifeEffect.Normal:
			case LifeEffect.Poison:
			case LifeEffect.Gold:
			case LifeEffect.Todo:
				break;
			case LifeEffect.Burn:
				this.fxBurn(effect.amount ?? 5);
				break;
			case LifeEffect.Explode:
				this.fxExplosion(6);
				break;
			case LifeEffect.Heal:
				this.fxHeal(32);
				break;
			case LifeEffect.Skull:
				this.fxSkull(effect.size ?? 1);
				break;
			case LifeEffect.Acid:
				this.fxAcid(12);
				break;
			case LifeEffect.Fire:
				this.fxBurn(14, 20);
				break;
			case LifeEffect.Wood:
				this.fxLeaf(10);
				break;
			case LifeEffect.Water:
				this.fxWater(20);
				break;
			case LifeEffect.Lightning:
				this.fxLightning(16);
				break;
			case LifeEffect.Air:
				this.fxWind(14);
				break;
			default:
				console.error(`LifeEffect: Unknown effect ${effect}`);
		}
	}

	/**
	 * Management of the FX related to jumping.
	 * Disable the water rings around the Fighter.
	 */
	fxJump() {
		this.setGroundFx(false);
	}

	/**
	 * Management of the animation related to landing.
	 * @param {number} max Maximum number of particles generated by the landing.
	 * @param {number} speed Speed of the particles. 3 by default.
	 * @param {number} cr Radius of the particle spawn area. 8 by default.
	 */
	fxLand(max, speed = 3, cr = 8) {
		this.playAnim('land');
		this._mode = Fighter.Mode.Anim;
		this.setGroundFx(true);
		for (let i = 0; i < max; ++i) {
			const a = ((i + Math.random()) / max) * 6.28;
			const ca = Math.cos(a);
			const sa = Math.sin(a);
			const sp = 0.5 + Math.random() * speed;
			this._scene.genGroundPart(this._x + ca * sp * cr, this._y + sa * sp * cr, ca * sp, sa * sp, null, true);
		}
	}

	/**
	 * Get an attachement animation by name.
	 * @param {string} animation The animation to get.
	 * @returns {object | null} The animation or null if it does not exists.
	 */
	getFxAnimation(animation) {
		switch (animation) {
			case 'smoke':
				return fx_smoke;
			case 'smoke_small':
				return fx_smoke_small;
			case 'vapeur':
				return fx_steam;
			case 'vapeur_small':
				return fx_steam_small;
			case 'brule':
				return fx_brule;
			case 'brule_small':
				return fx_brule_small;
			case 'slash':
				return fx_slash;
			case 'coq_patte_a':
				return fx_coq_patte_a;
			case 'coq_patte_b':
				return fx_coq_patte_b;
			case 'hole':
				return fx_hole;
			case 'grop_tache':
				return fx_grop_stain;
			case 'brulure':
				return fx_brulure;
		}
		return null;
	}

	/**
	 * Used by callbacks to spawn an FX in the Scene.
	 * @param {string} asset The asset to spawn.
	 * @param {number} x The x coordinate of the asset.
	 * @param {number} y The y coordinate of the asset.
	 * @param {{alpha?: number, offsetX?: number, offsetY?: number, scale?: number, randomPos?: boolean, randomAlpha?: boolean}} options Optional configuration.
	 */
	fxAttach(asset, x = 0, y = 0, options = {}) {
		const animation = this.getFxAnimation(asset);
		if (animation) {
			x = options.randomPos ? Math.random() * x : x;
			y = options.randomPos ? Math.random() * y : y;
			this._scene.dm.addSprite(
				new QuickAnim(
					this._scene,
					animation,
					this._x - (x + (options.offsetX ?? 0)) * this._sens * this.intSide,
					this._y + y + (options.offsetY ?? 0),
					0,
					-this._sens * this.intSide,
					(options.alpha ?? 1) * (options.randomAlpha ? Math.random() : 1),
					options.scale
				),
				Layers.Scene.FIGHTERS
			);
		} else {
			console.error(`[Fighter.fxAttach]: Unknown animation '${asset}'.`);
		}
	}

	/**
	 * Used by callbacks to attach an fx to the scene on a specific layer.
	 * @param {string} asset The asset to attach.
	 * @param {number} x The x position of the asset.
	 * @param {number} y The y position of the asset.
	 * @param {number} layer The layer where to attach the fx. Default to PARTS.
	 * @param {{alpha?: number, offsetX?: number, offsetY?: number, scale?: number}} options Optional configuration.
	 */
	fxAttachScene(asset, x = 0, y = 0, layer = Layers.Scene.PARTS, options = {}) {
		const animation = this.getFxAnimation(asset);
		if (animation) {
			this._scene.dm.addSprite(
				new QuickAnim2D(
					this._scene,
					animation,
					this._root.x - (x + (options.offsetX ?? 0)) * this._sens * this.intSide,
					this._root.y + y + (options.offsetY ?? 0),
					-this._sens * this.intSide,
					options.alpha,
					options.scale
				),
				layer
			);
		} else {
			console.error(`[Fighter.fxAttachScene]: Unknown animation '${asset}'.`);
		}
	}

	/**
	 * The Figther resurrect from the dead. Like Jesus, but without waiting 3 days.
	 * @returns {void}
	 */
	resurrect() {
		if (this._mode !== Fighter.Mode.Dead) return;
		this._mode = Fighter.Mode.Waiting;
		this.backToDefault();
	}

	/**
	 * Display the Fighter name temporarily.
	 */
	showName() {
		const name = new Title(
			this._scene,
			this._x,
			this._scene.getY(this._y) - this._height,
			this._name.toUpperCase()
		);
		this._scene.dm.addSprite(name, Layers.Scene.INTER);
	}

	/**
	 * Sets the energy level of the Fighter.
	 * @param {number} e The new energy level.
	 */
	setEnergy(e) {
		this._energy = e;
		if (this._slot) {
			this._slot.setEnergy(this._energy);
		}
	}

	/**
	 * Sets the maximum energy of the Fighter.
	 * @param {number} e The new maximum energy level.
	 */
	setMaxEnergy(e) {
		this._maxEnergy = e;
		if (this._slot) {
			this._slot.setMaxEnergy(this._maxEnergy);
		}
	}

	/**
	 * Checks if the Fighter has a specific prop.
	 * @param {number} prop The Fighter.Props to check.
	 * @returns {boolean} True if the Fighter has the given props, false otherwise.
	 */
	haveProp(prop) {
		return this._props.includes(prop);
	}

	/**
	 * Register a new callback for the Animator.
	 * The callback will be triggered if a frame has registered a callback of the same name.
	 * @param {string} name Name of the callback to register.
	 * @param {*} callback Function called when the callback is triggered. Will receive the animation triggering the callback
	 * as well as an array as parameter if any arguments are passed along.
	 */
	registerCallback(name, callback) {
		this._animator.registerCallback(name, callback);
	}

	/**
	 * Remove all callbacks registered under the given name.
	 * @param {string} name Name of the callback to clear.
	 */
	clearCallback(name) {
		this._animator.clearCallback(name);
	}

	/**
	 * Remove the status, the shadow, the force, and set the mode to Dead.
	 */
	die() {
		this.removeStatus();
		this.playAnim('dead');
		this._mode = Fighter.Mode.Dead;
		this.removeShadow();
		this._force = null;
		this._scene.settings.onDeath(this.id);
	}

	/**
	 * Removes the force of a Fighter, preventing it from pushing or being pushed.
	 */
	removeForce() {
		this._force = null;
	}

	/**
	 * True if a Fighter is not dead.
	 * @type {boolean}
	 */
	get alive() {
		return this._mode !== Fighter.Mode.Dead;
	}

	/**
	 * Generates the generic shaders related to the Fighters status.
	 * All Fighters share the same shaders for performance.
	 */
	static GenerateStatusFilters() {
		Fighter.StatusFilters = [];

		// Petrified
		const stoneMatrix = new ColorMatrixFilter();
		const r = 0.2;
		const g = 0.1;
		const b = 0.7;
		stoneMatrix.matrix = [r, g, b, 0, 0, r, g, b, 0, 0, r, g, b, 0, 0, 0, 0, 0, 1, 0];
		Fighter.StatusFilters[FighterStatus.Stoned] = stoneMatrix;

		// Static part of the blessed glow filter.
		Fighter.StatusFilters[FighterStatus.Bless] = new GlowFilter({
			color: 0xffffff,
			outerStrength: 4,
			distance: 2,
			quality: 0.3
		});

		// Stun shader
		const stunMatrix = new ColorMatrixFilter();
		const v = 0.7;
		stunMatrix.matrix = [v, v, v, 0, 0, v, v, v, 0, 0, v, v, v, 0, 0, 0, 0, 0, 1, 0];
		Fighter.StatusFilters[FighterStatus.Stun] = stunMatrix;
	}

	/**
	 * Create the hitbox of the Fighter. The hitbox is hidden unless the ShowHitbox setting is switched on.
	 */
	createHitbox() {
		const hitbox = new Container();
		hitbox.visible = this._scene.settings.showHitbox;
		this.body.addChild(hitbox);

		// origin
		hitbox.addChild(new Graphics().beginFill(0x0000ff).drawCircle(0, 0, 3).endFill());
		// area
		hitbox.addChild(new Graphics().lineStyle(2, 0x0000ff).drawCircle(0, 0, this.ray));

		// collider
		hitbox.addChild(
			new Graphics().lineStyle(2, 0xff0000).drawRect(-this._width / 2, -this._height, this._width, this._height)
		);

		this._scene.settings.onShowHitbox = (show) => {
			hitbox.visible = show;
		};
	}
}
