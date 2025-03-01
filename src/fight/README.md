# Fight

## Instantiation

```javascript
const fight = new DinoAnim.Fight({
	legacy_data: '[MT_FIGHT_DATA]'
});

document.body.appendChild(fight.getDisplay());
```

```javascript
const fight = new DinoAnim.Fight({
	bg: 's_dnv',
	top: 120,
	bottom: 20,
	right: 0,
	ground: DinoAnim.GroundType.None,
	history: [
		{
			action: DinoAnim.Action.Add,
			fighter: {
				props: [],
				dino: true,
				life: 100,
				name: 'Dragon Jr',
				side: true,
				scale: 1,
				fid: 0,
				gfx: '09T1Yt9wqq4Rx000'
			}
		}
	]
});

document.body.appendChild(fight.getDisplay());
```

| Properties | Type                      | Description                                                                                                                                  |
| ---------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| bg         | String                    | Set the background of the scene. The value is one of the name of the background in the folder /assets/gfx/background, without the extension. |
| top?       | Number                    | The top margin of the scene. The margins define where the fighters can walk. 0 by default.                                                   |
| bottom?    | Number                    | The bottom margin of the scene. 0 by default.                                                                                                |
| right?     | Number                    | The right margin of the scene. 0 by default.                                                                                                 |
| ground?    | GroundType                | The type of ground of the scene. Ground type define which particle are emitted on walk and landing. None by default.                         |
| history    | { action: Action, ... }[] | The list of the actions of the fight. See below for the description of the actions and their parameters.                                     |
| lang       | String                    | Sets the language of the settings (fr,en,es,it).                                                                                             |
| settings   | Boolean                   | If false, disable the settings and plays the fight with its default parameters. True by default.                                             |

| GroundType | Description                                                                                                               |
| ---------- | ------------------------------------------------------------------------------------------------------------------------- |
| None (0)   | Default ground type. No effect.                                                                                           |
| Dirt (1)   | Creates clouds of dust of the same color as the background when the fighters are moving.                                  |
| Water (2)  | Creates ripples around the fighters. When they are walking, creates droplets for water which burst up and then fall down. |
| Rock (3)   | Creates stone particles of the same color as the background when a fighter lands.                                         |

## Callbacks

The Fight object has multiple endpoints which can be used to gather information about the ongoing fight.

### onFightStart

Invokes the registered callback when the first action of the fight is played.

```javascript
fight.onFightStart = () => {
	console.log('Fight is starting.');
};
```

### onFightEnd

Invokes the registered callback when the last action of the fight has finished.

```javascript
fight.onFightEnd = () => {
	console.log('Fight has ended.');
};
```

### onStepStart

Invokes the registerd callback when a new step from the history starts playing.
The callback receives the index of the step and the step itself with its enum values converted as numbers.

```javascript
fight.onStepStart = (idx, step) => {
	console.log(`Step ${idx} has started: ${step}.`);
};
```

### onStepStartStr

Works the exact same way as onStepStart, but the step's enum values are converted to strings.

### onStepEnd

Invokes the registerd callback when a step from the history has finished.
The callback receives the index of the step and the step itself with its enum values converted as numbers.

```javascript
fight.onStepEnd = (idx, step) => {
	console.log(`Step ${idx} is finished: ${step}.`);
};
```

### onStepStartStr

Works the exact same way as onStepEnd, but the step's enum values are converted to strings.

### onFighterClick

If the callback is registered, every new fighter instantiated and their slot icon will be clickable.
Every time a fighter or their icon is clicked, the callback is invoked with the fighter id.

Note that the callback has to be registered BEFORE the fighters start being instantiated for the fighter to be interactible.

```javascript
fight.onFighterClick = (fid) => {
	console.log(`Fighter id ${fid} has been clicked.`);
};
```

### onStatusChange

Invokes the registered callback every time the statuses of a fighter change (gain or loss).
Gives the fighter's id and the list of the current status applied to the fighter.
The status are given as string from the FighterStatus enum.

```javascript
fight.onStatusChange = (fid, status) => {
	console.log(`Fighter id ${fid} has the following statuses: ${status}.`);
};
```

### onLifeChange

Invokes the registered callback every time the life of a fighter changes (gain or loss).
Gives the fighter's id and its current life.

```javascript
fight.onLifeChange = (fid, life) => {
	console.log(`Fighter id ${fid} has currently ${life} HP.`);
};
```

### onDeath

Invokes the registered callback every time a fighter dies.
Gives the fighter's id.

```javascript
fight.onDeath = (fid) => {
	console.log(`Fighter id ${fid} died.`);
};
```

## Actions

### Add (0)

Adds a fighter to the scene.

#### Properties

| Property | Type           | Description                    |
| -------- | -------------- | ------------------------------ |
| fighter  | FighterDetails | Details of the fighter to add. |

##### FighterDetails

| Property  | Type              | Description                                                                                                          |
| --------- | ----------------- | -------------------------------------------------------------------------------------------------------------------- |
| props     | FighterProperty[] | A list of the fighter properties. See below for the possible values.                                                 |
| dino      | Boolean           | True if the fighter a dino, false if it is a monster.                                                                |
| life      | Number            | Life of the fighter.                                                                                                 |
| maxLife?  | Number            | Maximum life of the fighter. Default to "life" if not given.                                                         |
| name      | String            | Name of the fighter which will be displayed on entry.                                                                |
| side      | Boolean           | Side of the fighter. True for left side, false for right side.                                                       |
| scale?    | Number            | Scale of the fighter. 1 by default.                                                                                  |
| fid       | Number            | ID of the fighter. Used for the subsequent actions.                                                                  |
| gfx       | String            | Visual description of the fighter. See SDino and SMonster for more information.                                      |
| entrance? | EntranceEffect    | The way the fighter enters the Scene. See table below for values. If undefined, the fighter does a simple drop down. |
| anim?     | String            | Desired animation for the "Anim" entrance effect.                                                                    |
| x?        | Number            | X position of the fighter. Randomly generated if empty.                                                              |
| y?        | Number            | Y position of the fighter. Randomly generated if empty.                                                              |

| FighterProperty | Description                                              |
| --------------- | -------------------------------------------------------- |
| Boss (0)        | No effect                                                |
| Static (1)      | The fighter does not walk or push, and cannot be pushed. |
| GroundOnly (2)  | The fighter cannot fly.                                  |
| Dark (3)        | The fighter skin is dark.                                |
| Nothing (4)     | No effect                                                |

| EntranceEffect | Description                                         |
| -------------- | --------------------------------------------------- |
| Stand (0)      | Instantiate the fighter without entrance effect.    |
| Jump (1)       | Makes the Fighter jump in from their side.          |
| Run (2)        | Make the fighter run in from their respective side. |
| Grow (3)       | Scale in the fighter from 0% to 100%.               |
| Fall (4)       | Make the fighter fall from the top of the scene.    |
| Ground (5)     | Make the fighter erupt from the ground.             |
| Anim (6)       | Play a specific animation from the fighter.         |

### Announce (1)

A fighter announces something, most likely the use of a skill.

#### Properties

| Property | Type   | Description                                |
| -------- | ------ | ------------------------------------------ |
| fid      | Number | The ID of the fighter making the announce. |
| message  | String | The announce.                              |

### Object (2)

A fighter uses an item. The icon of the item appears above the Fighter's head before fading out.
An Announce is made with the figther calling the name of the item.

#### Properties

| Property | Type   | Description                                                                              |
| -------- | ------ | ---------------------------------------------------------------------------------------- |
| fid      | Number | The ID of the fighter using the item.                                                    |
| name     | String | The item name displayed in the Announce.                                                 |
| item     | String | An asset from the /assets/gfx/items folder. Only use the filename without the extention. |

### Lost (3)

A fighter loses a set amount of life with the given life effect. Does nothing if the fighter is dead.
This can for example be used for status effect (poison, torch, etc).

#### Properties

| Property | Type                                             | Description                               |
| -------- | ------------------------------------------------ | ----------------------------------------- |
| fid      | Number                                           | The ID of the fighter losing life.        |
| amount   | Number                                           | Amount of health healed.                  |
| lifeFx   | {fx: LifeEffect, amount?: number, size?: number} | The life effect played during the damage. |

| LifeEffect     | Description                                                                           |
| -------------- | ------------------------------------------------------------------------------------- |
| Normal (0)     | No effect in particular.                                                              |
| Object (1)     | No visual.                                                                            |
| Skull (2)      | Adds skulls particles. Set size to decide the size of the skull fx. 1 by default.     |
| Acid (3)       | Adds acid particles.                                                                  |
| Poison (4)     | No visual.                                                                            |
| Heal (5)       | Adds healing particles.                                                               |
| Explode (6)    | Adds explosion particles.                                                             |
| Burn (7)       | Adds burning particles. Set amount to display the amount of fx to show. 5 by default. |
| Fire (8)       | Adds fire particles.                                                                  |
| Wood (9)       | Adds leaf particles.                                                                  |
| Water (10)     | Adds droplet particles.                                                               |
| Lightning (11) | Adds lightning particles.                                                             |
| Air (12)       | Adds wind particles.                                                                  |
| Gold (13)      | No visual.                                                                            |
| Todo (14)      | Debug.                                                                                |

### Status (4)

Adds a status to a fighter.

#### Properties

| Property | Type          | Description                               |
| -------- | ------------- | ----------------------------------------- |
| fid      | Number        | The ID of the fighter gaining the status. |
| status   | FighterStatus | Status being added.                       |

| FighterStatus | Description                                            |
| ------------- | ------------------------------------------------------ |
| Sleep (0)     | The figher fall asleep.                                |
| Flames (1)    | The fighter is covered in flames.                      |
| Intang (2)    | The fighter gains the Intangible status.               |
| Fly (3)       | The fighter starts flying.                             |
| Slow (4)      | The fighter gains the Slow status.                     |
| Quick (5)     | The fighter gains the Quick status.                    |
| Stoned (6)    | The fighter gains the Petrified status.                |
| Shield (7)    | The fighter is shielded and glow rainbowy over time.   |
| Bless (8)     | The fighter gains the Bless status.                    |
| Poison (9)    | The fighter gains the Poison status.                   |
| Heal (10)     | Light particles are constantly emmited by the fighter. |
| Burn (11)     | The fighter is covered in black flame.                 |
| MonoElt (12)  | The fighter gains the status icon with a cadenas.      |
| Dazzled (13)  | The figher gains the Dazzled status.                   |
| Stun (14)     | The fighter gain the Stun status.                      |

### NoStatus (5)

A status is removed from a fighter.

#### Properties

| Property | Type          | Description                               |
| -------- | ------------- | ----------------------------------------- |
| fid      | Number        | The ID of the fighter gaining the status. |
| status   | FighterStatus | Status being added.                       |

### Regen (6)

A fighter regenerates a set amount of life with the given life effect. If the fighter was dead, resurrect it.

#### Properties

| Property | Type                                             | Description                                                    |
| -------- | ------------------------------------------------ | -------------------------------------------------------------- |
| fid      | Number                                           | The ID of the fighter healing.                                 |
| amount   | Number                                           | Amount of health healed.                                       |
| lifeFx   | {fx: LifeEffect, amount?: number, size?: number} | The life effect played during the regen. See LifeEffect above. |

### Damages (7)

A fighter attacks another fighter and deals a certain amount of damages.

#### Properties

| Property | Type                                             | Description                                                                              |
| -------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| fid      | Number                                           | The ID of the attacking fighter.                                                         |
| tid      | Number                                           | The ID of the targeted fighter.                                                          |
| damages  | Number \| Null                                   | The amount of damages dealt. If Null, the attack is dodged. If 0, the attack is guarded. |
| lifeFx?  | {fx: LifeEffect, amount?: number, size?: number} | The life effect played on the fighter during the attack. See LifeEffect above.           |
| effect?  | DamagesEffect                                    | The type of action the fighter will take before attacking.                               |

| DamagesEffect    | Description                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------------- |
| Normal (0)       | Standard attack, the attacker runs to the target and hits it. Default behaviour if effect is undefined. |
| Back (1)         | The attacker jumps behind the target and hits it.                                                       |
| Counter (2)      | If the attacks is the result of a counter. No visual.                                                   |
| Drop (3)         | The attacker drops on the target.                                                                       |
| Eject (4)        | Not sure but sounds amazing.                                                                            |
| FlyCancel (5)    | No visual.                                                                                              |
| IntangCancel (6) | No visual.                                                                                              |
| IntangBreak (7)  | No visual.                                                                                              |
| Missed (8)       | No visual.                                                                                              |

### Skill (8)

A skill is used. It can either be used by a specific Fighter with specific targets, or be an effect like an invocation.

#### Properties

| Property | Type         | Description                                             |
| -------- | ------------ | ------------------------------------------------------- |
| skill    | SkillList    | The skill being used.                                   |
| details  | SkillDetails | The parameters of the skill, based on the chosen skill. |

##### SkillDetails

| Property | Type                                    | Description                                                                                                                                                                                                                                 |
| -------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fid?     | Number                                  | The ID of the Fighter using the skill, if any.                                                                                                                                                                                              |
| targets? | { id: Number, life?: Number \| Null }[] | The targets of the skill and the life gained/losed, if any. If life is set to null, the target dodge the skill with the 'special' animation. If life is undefined, the fighter does not take damage and the damage number is not displayed. |
| fx?      | String                                  | The fx played by the skill. Used by 'Projectile', 'Tremor', 'JumpAttack', 'Attach', 'AttachAnim', 'HeadOrTail'.                                                                                                                             |
| anim?    | String                                  | The animation used by the skill. Used by 'Projectile' and 'Anim'.                                                                                                                                                                           |
| type?    | Number                                  | The type of skill to use. Used by 'Shower' (SkillType), 'Aura' (AuraType), 'Snow' (0 - 1), 'Heal' (0 - 1).                                                                                                                                  |
| speed?   | Number                                  | The speed of the skill. Used by 'Projectile' and 'Rafale'.                                                                                                                                                                                  |
| power?   | Number                                  | The power of the skill. Used by 'Rafale' and 'Generate'.                                                                                                                                                                                    |
| radius?  | Number                                  | The radius of the skill. Used by 'Generate'.                                                                                                                                                                                                |
| color?   | Number                                  | Changes the color of the skill. Used by 'Aura', 'Snow', 'Cloud', 'Focus', 'Blink'.                                                                                                                                                          |
| alpha?   | Number                                  | Change the alpha of the skill (0 - 100). Used by 'Blink'.                                                                                                                                                                                   |
| remove?  | Boolean                                 | Should the effect be added or removed. Used by 'MudWall'.                                                                                                                                                                                   |
| percent? | Number                                  | Determines the percentage of an effet (0 - 100). Used by 'Snow'.                                                                                                                                                                            |
| ok?      | Boolean                                 | Set the result of the HeadOrTail skill.                                                                                                                                                                                                     |

| Skill                  | Description                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Todo (0)               | Placeholder skill in case a new skill is developped.                                                                                                                                                                                                                                                                                                                |
| Fireball (1)           | The fighter (fid) launches a fireball for each targets and damages them for the given life amount.                                                                                                                                                                                                                                                                  |
| Blow (2)               | The fighter (fid) runs towards the targets and launches a fire breath, damaging them.                                                                                                                                                                                                                                                                               |
| Lava (3)               | The fighter (fid) releases a flow of lava on each targets, damaging them.                                                                                                                                                                                                                                                                                           |
| Meteor (4)             | The fighter (fid) summons a meteor shower upon the targets, damaging them.                                                                                                                                                                                                                                                                                          |
| Vigne (5)              | The fighter (fid) summons vines which crawls toward the targets.                                                                                                                                                                                                                                                                                                    |
| WaterCanon (6)         | The fighter (fid) runs toward the targets and blast them with a water canon, damaging them.                                                                                                                                                                                                                                                                         |
| Shower (7)             | The fighter (fid) damages the targets with a rain of the given SkillType (type). Only Fire and Water have a visual.                                                                                                                                                                                                                                                 |
| LevitRay (8)           | The fighter (fid) starts levitating and release a ray of water toward each targets, damaging them.                                                                                                                                                                                                                                                                  |
| Lightning (9)          | The fighter (fid) summons a lightning strike on each targets, damaging them.                                                                                                                                                                                                                                                                                        |
| Crepuscule (10)        | The fighter (fid) invokes dawn on the scene, and then release electrified fireball, which damage the targets.                                                                                                                                                                                                                                                       |
| Mistral (11)           | The fighter (fid) runs in the middle of the scene and channels winds which damage the targets.                                                                                                                                                                                                                                                                      |
| Tornade (12)           | The fighter (fid) summons a tornado, which makes the targets fly around and take damages on landing.                                                                                                                                                                                                                                                                |
| Disc (13)              | The fighter (fid) summons a disc of wind per target and flung them toward them.                                                                                                                                                                                                                                                                                     |
| Hole (14)              | The fighter (fid) summons a black hole for each targets, removing them from the fight.                                                                                                                                                                                                                                                                              |
| Ice (15)               | The fighter (fid) freezes the targets and damages them.                                                                                                                                                                                                                                                                                                             |
| Projectile (16)        | The fighter (fid) starts an animation (anim) and fires a projectile (fx) with a given speed (speed) to the targets. The possible fx are 'sand', 'gland', 'aiguillon', 'lame', et 'rocher'. The speed determines how fast the projectile reaches the targets, between 0 (never) and 1 (instant), 0.1 by default. The animation of the fighter is 'shoot' by default. |
| Tremor (17)            | Same as JumpAttack with default fx.                                                                                                                                                                                                                                                                                                                                 |
| JumpAttack (18)        | The fighter (fid) jumps and damages the targets for the given amount of life. An fx is played at landing, defined by the "fx" parameter. 'shake' by default (other possible types unknown as of yet).                                                                                                                                                               |
| ChainLightning (19)    | The fighter(fid) cast a bolt of lightning which bounces between targets and damages them.                                                                                                                                                                                                                                                                           |
| Heal (20)              | The fighter (fid) heals the targets for the given amount of life. An optional 'type' parameter can be set to 1 to remove the leaves from the healing (never used to my knowledge).                                                                                                                                                                                  |
| Charge (21)            | The fighter (fid) charges at each target and damages them.                                                                                                                                                                                                                                                                                                          |
| Anim (22)              | The fighter (fid) plays the given animation (anim).                                                                                                                                                                                                                                                                                                                 |
| Invoc (23)             | The fighter (fid) summons a god (anim) upon the scene. If targets are defined, they take the given amount of damages. The possible values for the "anim" property are: vulcan, ifrit, bluewh, raijin, louga, golem, djinn, fujin, ondine, boudda, fairy, yggdra, hades, salama, totem, leviat, goku, quetza, reiruc, herco, bigma.                                  |
| Sylfide (24)           | The fighter (fid) summons fairies which remove the targets from the fight.                                                                                                                                                                                                                                                                                          |
| Rafale (25)            | The fighter (fid) runs in the middle of the screen and fire a rafale of wind which damages the targets. The amount of particles and their speed can be changes with the "power" (10 by default) and "speed" (2.5 by default) parameters.                                                                                                                            |
| Deluge (26)            | The fighter (fid) summons waves of water which damage the targets.                                                                                                                                                                                                                                                                                                  |
| Env (27)               | An environment of the given SkillType (type) is summoned upon the scene. To remove an existing environment, call Env with the (remove) parameter set to true.                                                                                                                                                                                                       |
| Aura (28)              | The fighter (fid) emits an aura (type) with the given color (color). The type of aura is a value from the AuraType enum (see below).                                                                                                                                                                                                                                |
| Snow (29)              | The fighter (fid) spawns petals on itself. The (type) of petal can be chosen to either 0 or 1. It is possible to make the petal glow with the (color) property, and change it to a random rainbo color using the (percent) property. Never used by MT from what I saw.                                                                                              |
| Swamp (30)             | The fighter (fid) summons a swamp on the opposite side of the field.                                                                                                                                                                                                                                                                                                |
| Cloud (31)             | The fighter (fid) summons clouds toward the opposite side of the scene. The color of the cloud can be changed using the 'color' parameter.                                                                                                                                                                                                                          |
| Focus (32)             | The fighter (fid) focus while generating a bursting colored aura around it. The color of the aura can be changed using the 'color' parameter.                                                                                                                                                                                                                       |
| Default (33)           | The fighter (fid) does nothing... Here for legacy reason, do not use.                                                                                                                                                                                                                                                                                               |
| Attach (34)            | Attaches the given animation (fx) to the given fighter (fid). Possible animations are fxBubble, fxSurvivor, and fxOndeFocus.                                                                                                                                                                                                                                        |
| AttachAnim (35)        | Attaches the given animation (fx) to the given fighter (fid), and pauses the action until the animation finishes playing. Possible animations are fxEnduranceOn, fxEnduranceOff, fxQigong, fxReceptacleFire, fxReceptacleWood, fxReceptacleWater, fxReceptacleThunder, fxReceptacleAir.                                                                             |
| Hypnose (36)           | The fighter (fid) hypnotises the targets and make them change side.                                                                                                                                                                                                                                                                                                 |
| Ray (37)               | The fighter (fid) is under the spotlight. Waouh.                                                                                                                                                                                                                                                                                                                    |
| Speed (38)             | The fighter (fid) speeds up the targets.                                                                                                                                                                                                                                                                                                                            |
| HeadOrTail (39)        | The fighter (fid) creates a rotating card which either stops on a success or a failure. The type of card can be set with the (fx) parameter, with either value 'face' or 'joker'. The (ok) parameter sets if the throw is a success (true) or a failure (false).                                                                                                    |
| Resurrect (40)         | The fighter (fid) dies and comes back to life.                                                                                                                                                                                                                                                                                                                      |
| MudWall (41)           | The figther (fid) creates or removes a mud wall in front of it. Use the parameter 'remove' to choose if the wall is added ('remove' = false or undefined) or removed ('remove' = true).                                                                                                                                                                             |
| Blink (42)             | The fighter (fid) blinks multiple times with the given (color) and (alpha).                                                                                                                                                                                                                                                                                         |
| Generate (43)          | The fighter (fid) generates an aura around it with the given (color). The size of the aura can be changed using (power) (1 by default), the size of the rays can be changed using (radius) (1 by default).                                                                                                                                                          |
| Corruption (44 - New)  | The scene becomes dark, then the targets take the given amount of damages.                                                                                                                                                                                                                                                                                          |
| DivineLight (45 - New) | Beams of light fall upon the targets, damaging them by the given amount of damages.                                                                                                                                                                                                                                                                                 |

| SkillType     | Description      |
| ------------- | ---------------- |
| Fire (0)      | Fire skill.      |
| Wood (1)      | Wood skill.      |
| Water (2)     | Water skill.     |
| Lightning (3) | Lightning skill. |
| Air (4)       | Air skill.       |

| AuraType     | Description                                                                                 |
| ------------ | ------------------------------------------------------------------------------------------- |
| Spiral (0)   | An aura which curves into multiple spirals. I.E.: Used for the Wrath skill.                 |
| Line (1)     | An aura which is composed of multiple straight lines. I.E.: Used for the Primal Aura skill. |
| Burst (2)    | Sparks burst from the fighter and colored light are emitted.                                |
| Detonate (3) | The fighter detonates.                                                                      |
| Light (4)    | Colored lights are emitted from the fighter.                                                |

### Dead (9)

A fighter dies.

#### Properties

| Property | Type   | Description                  |
| -------- | ------ | ---------------------------- |
| fid      | Number | The ID of the dying fighter. |

### Goto (10)

Moves a fighter in range of another fighter with the given movement type.

#### Properties

| Property    | Type                           | Description                                                                                                      |
| ----------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| fid         | Number                         | The ID of the moving fighter.                                                                                    |
| tid         | Number                         | The ID of the targeted fighter.                                                                                  |
| effect?     | GotoEffect                     | The GotoEffect used to move the fighter. If none is given, default to Normal.                                    |
| shadeColor? | {col1?: number, col2?: number} | The colors for the shades created when selecting GotoEffect.Special. If undefined, the shade will be pure black. |

| GotoEffect  | Description                                                                                                                             |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Normal (0)  | Normal run animation.                                                                                                                   |
| Special (1) | Creates shades as the fighter is moving. The shades will start with shadeColor.col1 and transition to shadeColor.col2 before vanishing. |
| Over (2)    | Jumps above the target.                                                                                                                 |
| Todo (3)    | Debug.                                                                                                                                  |

### Return (11)

Makes the selected fighter go back to its first saved position since the last time Return was called.

#### Properties

| Property | Type   | Description                      |
| -------- | ------ | -------------------------------- |
| fid      | Number | The ID of the returning fighter. |

### Pause (12)

Pause the history for a given amount of frames.
If a time bar has been created, this will reduce it by the same amount of frames.

#### Properties

| Property | Type   | Description                                                      |
| -------- | ------ | ---------------------------------------------------------------- |
| time     | Number | Number of frames until the next action in the history is played. |

### Finish (13)

The fighters sill alive end the fight and enact their given end of fight behavior.

#### Properties

| Property | Type         | Description                                    |
| -------- | ------------ | ---------------------------------------------- |
| left     | EndBehaviour | The end behaviour of the left sided fighters.  |
| right    | EndBehaviour | The end behaviour of the right sided fighters. |

| EndBehaviour | Description                                                   |
| ------------ | ------------------------------------------------------------- |
| Stand (0)    | The fighters stand in place and do nothing.                   |
| Run (1)      | The fighters exit toward the opposite end of the scene.       |
| Escape (2)   | The fighters exit from their side of the scene.               |
| Guard (3)    | The fighters are immobilized and face the opposite direction. |

### AddCastle (14)

Adds a castle to the scene, with the given customization.

#### Properties

| Property | Type          | Description                               |
| -------- | ------------- | ----------------------------------------- |
| castle   | CastleDetails | The customization for the castle display. |

##### CastleDetails

| Property  | Type    | Description                                                               |
| --------- | ------- | ------------------------------------------------------------------------- |
| life      | Number  | Current life of the castle.                                               |
| maxLife   | Number  | Maximum life of the castle.                                               |
| enclos    | Boolean | If true, adds a pen inside the castle.                                    |
| ground    | Number  | Adds pounds in frond of the castle. 1-3 changes the color.                |
| repair    | Number  | Adds a repairman inside the castle. 1-3 changes the helmet and the speed. |
| armor     | Number  | The armor of the castle (1-3). Third one is not implemented by MT.        |
| color     | Number  | Changes the color of the castle (1-2).                                    |
| invisible | Boolean | If true, the castle is half transparent.                                  |

### TimeLimit (15)

Adds a time bar to the scene.
The time decreases every time Pause is called.

#### Properties

| Property | Type    | Description                                                        |
| -------- | ------- | ------------------------------------------------------------------ |
| time     | Number  | The total duration of the timebar, in frames.                      |
| center?  | Boolean | If true, the time bar is centered on the screen. False by default. |

### AttackCastle (16)

A fighter attacks the castle, dealing the given amount of damages.

#### Properties

| Property | Type   | Description                                 |
| -------- | ------ | ------------------------------------------- |
| fid      | Number | The ID of the fighter attacking the castle. |
| damages  | Number | The amount of damages dealt to the castle.  |

### Display (17)

Removes the loading screen.
If no Display action is given, a Display action is automatically added at the very beginning of the fight history.

Choosing when to remove the loading screen can allow you to setup the scene before displaying it for the player, for example if you want all/some of the fighters to already be there or if you want to instantiate a castle

### Text (18)

A text is displayed at the top of the scene. Once the message is completly displayed, the player has to click to continue.
Clicking on the scene doubles the text speed.

#### Properties

| Property | Type   | Description                             |
| -------- | ------ | --------------------------------------- |
| message  | String | The message to display in the text box. |

### Talk (19)

A fighter speak, creating a text bubble with the given message. Once the message is completly displayed, the player has to click to continue.
Clicking on the scene doubles the text speed.

#### Properties

| Property | Type   | Description                           |
| -------- | ------ | ------------------------------------- |
| fid      | Number | The ID of the fighter speaking.       |
| message  | String | The message to display in the bubble. |

### Escape (20)

A fighter escapes the fight, leaving from its side of the scene.

#### Properties

| Property | Type   | Description                     |
| -------- | ------ | ------------------------------- |
| fid      | Number | The ID of the fighter escaping. |

### MoveTo (21)

Move a fighter based on the given fighter's id to the designed xy coordinates.

#### Properties

| Property | Type   | Description                          |
| -------- | ------ | ------------------------------------ |
| fid      | Number | The ID of the fighter moving.        |
| x        | Number | The x coordinate of the destination. |
| y        | Number | The y coordinate of the destination. |

### Flip (22)

Flips a fighter, making it face the other direction.
To use in cutscenes and movies.

#### Properties

| Property | Type   | Description                    |
| -------- | ------ | ------------------------------ |
| fid      | Number | The ID of the fighter to flip. |

### SpawnToy (23)

Spawns a toy in the scene at the given position with the given velocity.

#### Properties

| Property | Type   | Description                                                                                               |
| -------- | ------ | --------------------------------------------------------------------------------------------------------- |
| toy      | String | The toy's reference, which has to be an asset from the folder assets/gfx/toys without the file extension. |
| x?       | Number | The initial x coordinate. 0 by default.                                                                   |
| y?       | Number | The initial y coordinate. 0 by default.                                                                   |
| z?       | Number | The initial z coordinate. 0 by default.                                                                   |
| vx?      | Number | The initial x velocity. 0 by default.                                                                     |
| vy?      | Number | The initial y velocity. 0 by default.                                                                     |
| vz?      | Number | The initial z velocity. 0 by default.                                                                     |

### DestroyToy (24)

Destroy all instances of the given toy from the scene.

#### Properties

| Property | Type   | Description                                                                                                                                          |
| -------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| toy      | String | The toy's reference, which has to be an asset from the folder assets/gfx/toys without the file extension. All instances of this toy will be removed. |

### Wait (25)

Pause the actions for the given amount of milliseconds.
Contrary to Pause, this does not change the time bar.

#### Properties

| Property | Type   | Description                                      |
| -------- | ------ | ------------------------------------------------ |
| time     | Number | The amount of time to wait for, in milliseconds. |

### Log (26)

Sends a message to the console if the fight is started in debug mode.

#### Properties

| Property | Type   | Description                          |
| -------- | ------ | ------------------------------------ |
| msg      | String | The message to print in the console. |

### Notify (27)

Plays a notification above a group of fighters, which goes up and fades out over time.

#### Properties

| Property     | Type             | Description                               |
| ------------ | ---------------- | ----------------------------------------- |
| fids         | Number[]         | The list of IDs of the impacted fighters. |
| notification | NotificationList | The icon to display.                      |

| NotificationList | Description                           |
| ---------------- | ------------------------------------- |
| Slow (0)         | Adds an anvil notification.           |
| Quick (1)        | Adds a thunderbolt notification.      |
| Silence (2)      | Adds a speech bubble notification.    |
| Sharingan (3)    | Adds a Sharingan notification.        |
| NoUse (4)        | Adds a red cross notification.        |
| Down (5)         | Adds a Down notification.             |
| Up (6)           | Adds an Up notification.              |
| Fire (7)         | Adds a red orb notification.          |
| Wood (8)         | Adds a green orb notification.        |
| Water (9)        | Adds a blue orb notification.         |
| Thunder (10)     | Adds a yellow orb notification.       |
| Air (11)         | Adds a white orb notification.        |
| InitUp (12)      | Adds a blue firecracker notification. |
| InitDown (13)    | Adds a red firecracker notification.  |
| Snake (14)       | Adds a snake notification.            |
| Strong (15)      | Adds a flexing muscle notification.   |
| Shield (16)      | Adds a shield notification.           |
| MonoElt (17)     | Adds a lock notification.             |
| Todo (18)        | No visual, debug notification.        |

### Energy (28)

Set the current energy of a group of fighters.

#### Properties

| Property | Type                              | Description                                            |
| -------- | --------------------------------- | ------------------------------------------------------ |
| fighters | { fid: Number, energy: Number }[] | An array of fighter and their desired level of energy. |

### MaxEnergy (29)

Set the maximum energy of a group of fighters.

#### Properties

| Property | Type                              | Description                                                    |
| -------- | --------------------------------- | -------------------------------------------------------------- |
| fighters | { fid: Number, energy: Number }[] | An array of fighter and their desired maximum level of energy. |

## New Actions

The following are actions created for this project only.
They are not compatible with the fight.swf version from Motion-Twin.

### Emote (30)

The given figthers show the given emote above them.
The emote appears and behaves based on the given behaviour.

#### Properties

| Property  | Type           | Description                                       |
| --------- | -------------- | ------------------------------------------------- |
| fids      | number[]       | An array of fighters which will display an emote. |
| emote     | EmoteList      | The kind of emote to display.                     |
| behaviour | EmoteBehaviour | The expected behaviour of the emote.              |

| EmoteList    | Description                               |
| ------------ | ----------------------------------------- |
| Surprise (0) | A speech bubble with an exclamation mark. |
| Question (1) | A speech bubble with a question mark.     |
| Angry (2)    | An angry speech bubble.                   |
| Love (3)     | A speech bubble with a heart.             |

| EmoteBehaviour | Description                                      |
| -------------- | ------------------------------------------------ |
| Float (0)      | The emote floats up, slowing over time.          |
| Bounce (1)     | The emote spawns and bounce up and down.         |
| Grow (2)       | The emote grows and shrink over time, wobbeling. |

### Shake (31)

The scene starts shaking temporarily.

#### Properties

| Property | Type   | Description                                                                                                                                         |
| -------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| force?   | number | The strength of the shaking. Default to 8.                                                                                                          |
| frict?   | number | The friction between 0 and 1. Slows the shaking over time. Lower values reduce the shaking faster. Defaults to 0.75. 1 makes the shaking permanent. |
| speed?   | number | The speed of the shaking. Defaults to 1.                                                                                                            |
