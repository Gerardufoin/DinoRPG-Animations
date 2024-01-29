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
	history: [
		{
			action: DinoAnim.Fight.Action.Add,
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

## Actions

### Add (0)

Add a fighter to the scene.

#### Properties

1. fighter - Object - Details of the fighter to add.

| Variable  | Description                                                                                  |
| --------- | -------------------------------------------------------------------------------------------- |
| props     | Array - ???                                                                                  |
| dino      | Boolean - True if the fighter a dino, false if it is a monster.                              |
| life      | Number - Life of the fighter.                                                                |
| maxLife?  | Number - Maximum life of the fighter. Default to "life" if not given.                        |
| name      | String - Name of the fighter which will be displayed on entry.                               |
| side      | Boolean - Side of the fighter. True for left side, false for right side.                     |
| scale?    | Number - Scale of the fighter. 1 by default.                                                 |
| fid       | Number - ID of the fighter. Used for the subsequent actions.                                 |
| gfx       | String - Visual description of the fighter. See SDino and SMonster for more information.     |
| entrance? | Number - EntranceEffect, see table below. If undefined, the fighter does a simple drop down. |
| anim?     | String - Desired animation for the "Anim" entrance effect.                                   |
| x?        | Number - X position of the fighter. Randomly generated if empty.                             |
| y?        | Number - Y position of the fighter. Randomly generated if empty.                             |

| EntranceEffect | Description                                         |
| -------------- | --------------------------------------------------- |
| Stand (0)      | Instantiate the fighter without entrance effect.    |
| Grow (1)       | Scale in the fighter from 0% to 100%.               |
| Fall (2)       | Make the fighter fall from the top of the scene.    |
| Run (3)        | Make the fighter run in from their respective side. |
| Ground (4)     | Make the fighter erupt from the ground.             |
| Anim (5)       | Play a specific animation from the fighter.         |

### AddCastle (1)

### MoveTo (2)

Move a Fighter based on the passed Fighter's id to the designed xy position.

#### Properties

1. fid - number - The Fighter's id referencing the Fighter to move.
2. x - number - The x coordinate of the destination.
3. y - number - The y coordinate of the destination.

### Damages (3)

A fighter attacks another fighter and deals a certain amount of damages.

#### Properties

1. fid - Number - The ID of the attacking fighter.
2. tid - Number - The ID of the targeted fighter.
3. damages - Number | Null - The amount of damages dealt. If Null, the attack is dodged. If 0, the attack is guarded.
4. lifeFx? - {fx: LifeEffect, amount?: number, size?: number} - The life effect played on the fighter during the attack.

| LifeEffect    | Description                                                             |
| ------------- | ----------------------------------------------------------------------- |
| Normal (0)    | No effect in particular.                                                |
| Fire (1)      | Adds fire particles.                                                    |
| Wood (2)      | Adds leaf particles.                                                    |
| Water (3)     | Adds droplet particles.                                                 |
| Lightning (4) | Adds lightning particles.                                               |
| Air (5)       | Adds wind particles.                                                    |
| Burn (6)      | Adds burning particles. Set amount to display the amount of fx to show. |
| Explode (7)   | Adds explosion particles.                                               |
| Heal (8)      | Adds healing particles.                                                 |
| Skull (9)     | Adds skulls particles. Set size to decide the size of the skull fx.     |
| Acid (10)     | Adds acid particles.                                                    |

5. effect? - DamagesEffect - The type of action the fighter will take before attacking.

| DamagesEffect | Description                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| Normal (0)    | Standard attack, the attacker runs to the target and hits it. Default behaviour if effect is undefined. |
| Drop (1)      | The attacker drops on the target.                                                                       |
| Back (2)      | The attacker jumps behind the target and hits it.                                                       |
| Eject (3)     | Not sure but sounds amazing.                                                                            |
| Counter (4)   | If the attacks is the result of a counter. Does not seems to do anything visually.                      |

### DamagesGroup (4)

A fighter attacks using a skill.

#### Properties

1. fid - Number - The ID of the attacking fighter.
2. targets - {id: Number, damages: Number}[] - Array of objects comprised of the ID of each target with the damage received.
3. skill - Number - The Skill enum used by the fighter.

| Skill               | Description                                                                                                                                                            |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Todo (0)            | Placeholder skill in case a new skill is developped.                                                                                                                   |
| Fireball (1)        |                                                                                                                                                                        |
| Blow (2)            |                                                                                                                                                                        |
| Lava (3)            |                                                                                                                                                                        |
| Meteor (4)          |                                                                                                                                                                        |
| Vigne (5)           |                                                                                                                                                                        |
| WaterCanon (6)      |                                                                                                                                                                        |
| Shower (7)          | May define the "type" property. Not sure why yet.                                                                                                                      |
| LevitRay (8)        |                                                                                                                                                                        |
| Lightning (9)       |                                                                                                                                                                        |
| Crepuscule (10)     |                                                                                                                                                                        |
| Mistral (11)        |                                                                                                                                                                        |
| Tornade (12)        |                                                                                                                                                                        |
| Disc (13)           |                                                                                                                                                                        |
| Hole (14)           |                                                                                                                                                                        |
| Ice (15)            |                                                                                                                                                                        |
| Projectile (16)     | Needs to define "fx" for the appearance of the projectile, "anim" for the animation of the fighter firing the projectile, and "speed" for the speed of the projectile. |
| Tremor (17)         |                                                                                                                                                                        |
| JumpAttack (18)     | Needs to define "fx" for the fx to play at landing.                                                                                                                    |
| ChainLightning (19) |                                                                                                                                                                        |
| Heal (20)           | Needs to define "type". Type 0 spawns leaves fx, type 1 does not.                                                                                                      |
| Charge (21)         |                                                                                                                                                                        |
| Anim (22)           | Needs to define "anim" for the animation to play.                                                                                                                      |
| Invoc (23)          | Needs to define "anim" for the invocation to play.                                                                                                                     |
| Sylfide (24)        |                                                                                                                                                                        |
| Rafale (25)         |                                                                                                                                                                        |
| Deluge (26)         | Needs to define "fx" for the droplets, "power" for the strength, and "speed" for the speed.                                                                            |

4. type? - Number - Chose a version of the skill for Shower2 or Heal.
5. fx? - String - Chose an fx to play for Projectile, JumpAttack or Deluge.
6. anim? - String - Play a specific animation for Anim, Projectile, or Invoc.
7. speed? - Number - Set the speed of the skill for Projectile or Deluge.
8. power? - Number - Set the strength of the skill for Deluge.

### CastleAttack (5)

### Return (6)

Makes the selected fighter go back to its first saved position since the last time Return was called.

#### Properties

1. fid - Number - The ID of the returning fighter.

### Dead (7)

A fighter dies.

#### Properties

1. fid - Number - The ID of the dying fighter.

### Lost (8)

### Escape (9)

A fighter escapes the fight.

#### Properties

1. fid - Number - The ID of fighter escaping.

### Finish (10)

The fighters sill alive end the fight and enact their given end of fight behavior.

#### Properties

1. left - EndBehavior - The end behavior of the left sided fighters.
2. right - EndBehavior - The end behavior of the right sided fighters.

| EndBehavior | Description                                             |
| ----------- | ------------------------------------------------------- |
| Run (0)     | The fighters exit toward the opposite end of the scene. |
| Escape (1)  | The fighters exit from their side of the scene.         |
| Stand (2)   | The fighters stand in place and do nothing.             |
| Guard (3)   | The fighters are marked as dead and switch direction.   |

### Energy (11)

Set the current energy of a group of fighters.

#### Properties

1. fighters - { fid: number, energy: number }[] - An array of fighter and their desired level of energy.

### MaxEnergy (12)

Set the maximum energy of a group of fighters.

#### Properties

1. fighters - { fid: number, energy: number }[] - An array of fighter and their desired maximum level of energy.

### Pause (13)

Pause the history for a given amount of frames.

#### Properties

1. time - Number - Number of frames until the next action in the history is played.

### Announce (14)

A fighter announces something, most likely the use of a skill.

#### Properties

1. fid - Number - The ID of the fighter making the announce.
2. message - String - The announce.

### Goto (15)

Moves a fighter in range of another fighter with the given movement type.

#### Properties

1. fid - Number - The ID of the moving fighter.
2. tid - Number - The ID of the targeted fighter.
3. effect? - Number - The GotoEffect used to move the fighter. If none is given, default to Normal.

| GotoEffect  | Description                                                     |
| ----------- | --------------------------------------------------------------- |
| Normal (0)  | Normal run animation.                                           |
| Over (1)    | Jumps above the target.                                         |
| Special (2) | Not sure yet. Create multiple shades with the given shadeColor. |

5. shadeColor? - {col1?: number, col2?: number} - The colors for the shades created when selecting GotoEffect.Special. If undefined, the shade will be pure black.

### Regen (16)

A fighter regenerates a set amount of life with the given life effect. If the fighter was dead, resurrect it.

#### Properties

1. fid - Number - The ID of the fighter healing.
2. amount - Number - Amount of health healed.
3. lifeFx - {fx: LifeEffect, amount?: number, size?: number} - The life effect played during the regen. See LifeEffect above.

### Object (17)

### Fx (18)

### Status (19)

A status if added to a fighter. An optional power property can be passed depending on the chosen status.

#### Properties

1. fid - Number - The ID of the fighter gaining the status.
2. status - FighterStatus - Status being added.
3. power? - number - Power of the status when applicable.

| FighterStatus | Description                                                            |
| ------------- | ---------------------------------------------------------------------- |
| Sleep (0)     | The figher fall asleep.                                                |
| Flames (1)    | The fighter is covered in flames.                                      |
| Burn (2)      | The fighter is covered in black flame.                                 |
| Intang (3)    | The fighter gains the Intangible status.                               |
| Fly (4)       | The fighter starts flying.                                             |
| Slow (5)      | The fighter gains the Slow status.                                     |
| Quick (6)     | The fighter gains the Quick status.                                    |
| Stoned (7)    | The fighter gains the Petrified status.                                |
| Bless (8)     | The fighter gains the Bless status.                                    |
| Poison (9)    | The gains the Poison status. Power changes the strength of the poison. |
| Shield (10)   | The fighter is shielded (?).                                           |
| Heal (11)     | Light particles are constantly emmited by the fighter.                 |
| MonoElt (12)  | The fighter gains the status icon with a cadenas (?).                  |
| Dazzled (13)  | The figher gains the Dazzled status.                                   |
| Stun (14)     | The fighter gain the Stun status.                                      |

### NoStatus (20)

A status if removed from a fighter.

#### Properties

1. fid - Number - The ID of the fighter gaining the status.
2. status - FighterStatus - Status being added.

### Display (21)

Used by MT to wait for assets to load and then remove the loading screen.
Unused in this project for now.

### TimeLimit (22)

### Talk (23)

### Text (24)

### Flip (25)

### SpawnToy (26)

### DestroyToy (27)

### Wait (28)

### Log (29)

Sends a message to the console if the fight is started in debug mode.

#### Properties

1. msg - String - The message to print in the console.

### Notify (30)
