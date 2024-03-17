// @ts-check

/**
 * The different actions available in the fight history.
 */
export const Action = {
	Add: 0,
	Announce: 1,
	Object: 2,
	Lost: 3,
	Status: 4,
	NoStatus: 5,
	Regen: 6,
	Damages: 7,
	Skill: 8,
	Dead: 9,
	Goto: 10,
	Return: 11,
	Pause: 12,
	Finish: 13,
	AddCastle: 14,
	TimeLimit: 15,
	AttackCastle: 16,
	Display: 17,
	Text: 18,
	Talk: 19,
	Escape: 20,
	MoveTo: 21,
	Flip: 22,
	SpawnToy: 23,
	DestroyToy: 24,
	Wait: 25,
	Log: 26,
	Notify: 27,
	Energy: 28,
	MaxEnergy: 29,
	Emote: 30,
	Shake: 31
};

/**
 * Type of ground in the Scene.
 */
export const GroundType = {
	None: 0,
	Dirt: 1,
	Water: 2,
	Rock: 3
};

/**
 * The possible properties of a Fighter.
 */
export const FighterProperty = {
	Boss: 0,
	Static: 1,
	GroundOnly: 2,
	Dark: 3,
	Nothing: 4
};

/**
 * Possible effects happening when a Fighter gains or loses health.
 */
export const LifeEffect = {
	Normal: 0,
	Object: 1, // No visual
	Skull: 2,
	Acid: 3,
	Poison: 4, // No visual
	Heal: 5,
	Explode: 6,
	Burn: 7,
	Fire: 8,
	Wood: 9,
	Water: 10,
	Lightning: 11,
	Air: 12,
	Gold: 13, // No visual
	Todo: 14 // Debug
};

/**
 * Possible statuses for a Fighter.
 */
export const FighterStatus = {
	Sleep: 0,
	Flames: 1,
	Intang: 2,
	Fly: 3,
	Slow: 4,
	Quick: 5,
	Stoned: 6,
	Shield: 7,
	Bless: 8,
	Poison: 9,
	Heal: 10,
	Burn: 11,
	MonoElt: 12,
	Dazzled: 13,
	Stun: 14
};

/**
 * Enum stating an entrance effect of a Fighter:
 * - Stand/Jump is a normal entrance.
 * - Run makes the Fighter run in from its side.
 * - Grow makes the Fighter grows from 0% to 100%.
 * - Fall makes the Fighter fall from the top of the scene.
 * - Ground makes the Fighter emerge from the ground.
 * - Anim makes the Fighter do a custom animation.
 */
export const EntranceEffect = {
	Stand: 0,
	Jump: 1,
	Run: 2,
	Grow: 3,
	Fall: 4,
	Ground: 5,
	Anim: 6
};

/**
 * Type of action a Figther will take while attacking another Fighter.
 */
export const DamagesEffect = {
	Normal: 0,
	Back: 1,
	Counter: 2,
	Drop: 3,
	Eject: 4,
	FlyCancel: 5,
	IntangCancel: 6,
	IntangBreak: 7,
	Missed: 8
};

/**
 * List of the existing skills.
 */
export const SkillList = {
	Todo: 0,
	// _DamagesGroup
	Fireball: 1,
	Blow: 2,
	Lava: 3,
	Meteor: 4,
	Vigne: 5,
	WaterCanon: 6,
	Shower: 7,
	LevitRay: 8,
	Lightning: 9,
	Crepuscule: 10,
	Mistral: 11,
	Tornade: 12,
	Disc: 13,
	Hole: 14,
	Ice: 15,
	Projectile: 16,
	Tremor: 17,
	JumpAttack: 18,
	ChainLightning: 19,
	Heal: 20,
	Charge: 21,
	Anim: 22,
	Invoc: 23,
	Sylfide: 24,
	Rafale: 25,
	Deluge: 26,
	// _HFx
	Env7: 27,
	Aura: 28,
	Snow: 29,
	Swamp: 30,
	Cloud: 31,
	Focus: 32,
	Default: 33,
	Attach: 34,
	AttachAnim: 35,
	Hypnose: 36,
	Ray: 37,
	Speed: 38,
	HeadOrTail: 39,
	Leaf: 40,
	MudWall: 41,
	Blink: 42,
	Generate: 43,
	// New
	Corruption: 44,
	DivineLight: 45
};

/**
 * Types of skills.
 */
export const SkillType = {
	Fire: 0,
	Wood: 1,
	Water: 2,
	Lightning: 3,
	Air: 4
};

/**
 * Enum stating how the Fighter moves toward its target:
 * - Normal is a normal run.
 * - Over makes the Fighter jump above the target. Removes the flying status.
 * - Special is not clear yet.
 */
export const GotoEffect = {
	Normal: 0,
	Special: 1,
	Over: 2,
	Todo: 3
};

/**
 * Behavior of the Fighters at the end of the fight:
 * - Run: Run across the scene and exit on the other side.
 * - Escape: Run away on the Fighter's side.
 * - Stand: Stand in place and do nothing.
 * - Guard: Guard something.
 */
export const EndBehaviour = {
	Stand: 0,
	Run: 1,
	Escape: 2,
	Guard: 3
};

/**
 * The possibles notifications for the Notification action.
 */
export const NotificationList = {
	Slow: 0,
	Quick: 1,
	Silence: 2,
	Sharingan: 3,
	NoUse: 4,
	Down: 5,
	Up: 6,
	Fire: 7,
	Wood: 8,
	Water: 9,
	Thunder: 10,
	Air: 11,
	InitUp: 12,
	InitDown: 13,
	Snake: 14,
	Strong: 15,
	Shield: 16,
	MonoElt: 17,
	Todo: 18
};

/**
 * Types of emote available.
 */
export const EmoteList = {
	Surprise: 0,
	Question: 1,
	Angry: 2
};

/**
 * Types of behaviour for the emotes.
 */
export const EmoteBehaviour = {
	Float: 0,
	Bounce: 1,
	Grow: 2
};
