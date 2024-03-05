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

| GroundType | Description                                                                                                               |
| ---------- | ------------------------------------------------------------------------------------------------------------------------- |
| None (0)   | Default ground type. No effect.                                                                                           |
| Dirt (1)   | Creates clouds of dust of the same color as the background when the fighters are moving.                                  |
| Water (2)  | Creates ripples around the fighters. When they are walking, creates droplets for water which burst up and then fall down. |
| Rock (3)   | Creates stone particles of the same color as the background when a fighter lands.                                         |

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

| LifeEffect     | Description                                                             |
| -------------- | ----------------------------------------------------------------------- |
| Normal (0)     | No effect in particular.                                                |
| Object (1)     | No visual.                                                              |
| Skull (2)      | Adds skulls particles. Set size to decide the size of the skull fx.     |
| Acid (3)       | Adds acid particles.                                                    |
| Poison (4)     | No visual.                                                              |
| Heal (5)       | Adds healing particles.                                                 |
| Explode (6)    | Adds explosion particles.                                               |
| Burn (7)       | Adds burning particles. Set amount to display the amount of fx to show. |
| Fire (8)       | Adds fire particles.                                                    |
| Wood (9)       | Adds leaf particles.                                                    |
| Water (10)     | Adds droplet particles.                                                 |
| Lightning (11) | Adds lightning particles.                                               |
| Air (12)       | Adds wind particles.                                                    |
| Gold (13)      | No visual.                                                              |
| Todo (14)      | Debug.                                                                  |

### Status (4)

A status if added to a fighter. An optional power property can be passed depending on the chosen status.

#### Properties

| Property | Type          | Description                               |
| -------- | ------------- | ----------------------------------------- |
| fid      | Number        | The ID of the fighter gaining the status. |
| status   | FighterStatus | Status being added.                       |

| FighterStatus | Description                                            |
| ------------- | ------------------------------------------------------ |
| Sleep (0)     | The figher fall asleep.                                |
| Flames (1)    | The fighter is covered in flames.                      |
| Burn (2)      | The fighter is covered in black flame.                 |
| Intang (3)    | The fighter gains the Intangible status.               |
| Fly (4)       | The fighter starts flying.                             |
| Slow (5)      | The fighter gains the Slow status.                     |
| Quick (6)     | The fighter gains the Quick status.                    |
| Stoned (7)    | The fighter gains the Petrified status.                |
| Bless (8)     | The fighter gains the Bless status.                    |
| Poison (9)    | The fighter gains the Poison status.                   |
| Shield (10)   | The fighter is shielded and glow rainbowy over time.   |
| Heal (11)     | Light particles are constantly emmited by the fighter. |
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
| damages  | Number (Null)                                    | The amount of damages dealt. If Null, the attack is dodged. If 0, the attack is guarded. |
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

TODO

#### Properties

| Property | Type         | Description                                             |
| -------- | ------------ | ------------------------------------------------------- |
| skill    | SkillList    | The skill being used.                                   |
| details  | SkillDetails | The parameters of the skill, based on the chosen skill. |

##### SkillDetails

| Property | Type                          | Description                                                |
| -------- | ----------------------------- | ---------------------------------------------------------- |
| fid?     | number                        | The ID of the Fighter using the skill, if any.             |
| targets? | { id: number, life?: number } | The targets of the skill and the life gained/losed, if any |
| TODO     |                               |                                                            |

| Skill               | Description                                          |
| ------------------- | ---------------------------------------------------- |
| Todo (0)            | Placeholder skill in case a new skill is developped. |
| Fireball (1)        |                                                      |
| Blow (2)            |                                                      |
| Lava (3)            |                                                      |
| Meteor (4)          |                                                      |
| Vigne (5)           |                                                      |
| WaterCanon (6)      |                                                      |
| Shower (7)          |                                                      |
| LevitRay (8)        |                                                      |
| Lightning (9)       |                                                      |
| Crepuscule (10)     |                                                      |
| Mistral (11)        |                                                      |
| Tornade (12)        |                                                      |
| Disc (13)           |                                                      |
| Hole (14)           |                                                      |
| Ice (15)            |                                                      |
| Projectile (16)     |                                                      |
| Tremor (17)         |                                                      |
| JumpAttack (18)     |                                                      |
| ChainLightning (19) |                                                      |
| Heal (20)           |                                                      |
| Charge (21)         |                                                      |
| Anim (22)           |                                                      |
| Invoc (23)          |                                                      |
| Sylfide (24)        |                                                      |
| Rafale (25)         |                                                      |
| Deluge (26)         |                                                      |
| Env7 (27)           |                                                      |
| Aura (28)           |                                                      |
| Snow (29)           |                                                      |
| Swamp (30)          |                                                      |
| Cloud (31)          |                                                      |
| Focus (32)          |                                                      |
| Default (33)        |                                                      |
| Attach (34)         |                                                      |
| AttachAnim (35)     |                                                      |
| Hypnose (36)        |                                                      |
| Ray (37)            |                                                      |
| Speed (38)          |                                                      |
| HeadOrTail (39)     |                                                      |
| Leaf (40)           |                                                      |
| MudWall (41)        |                                                      |
| Blink (42)          |                                                      |
| Generate (43)       |                                                      |

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

| GotoEffect  | Description                                                     |
| ----------- | --------------------------------------------------------------- |
| Normal (0)  | Normal run animation.                                           |
| Special (1) | Not sure yet. Create multiple shades with the given shadeColor. |
| Over (2)    | Jumps above the target.                                         |
| Todo (3)    | Debug.                                                          |

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
| maxLife   | Number  | Maximum life of the castle.                                               |
| color     | Number  | Changes the color of the castle (1-2).                                    |
| invisible | Boolean | If true, the castle is half transparent.                                  |

### TimeLimit (15)

Adds a time bar to the scene.
The time decreases every time Pause is called.

#### Properties

| Property | Type   | Description                                   |
| -------- | ------ | --------------------------------------------- |
| time     | Number | The total duration of the timebar, in frames. |

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
