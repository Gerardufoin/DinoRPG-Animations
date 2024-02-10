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
| Jump (1)       | Makes the Fighter jump in from their side.          |
| Run (2)        | Make the fighter run in from their respective side. |
| Grow (3)       | Scale in the fighter from 0% to 100%.               |
| Fall (4)       | Make the fighter fall from the top of the scene.    |
| Ground (5)     | Make the fighter erupt from the ground.             |
| Anim (6)       | Play a specific animation from the fighter.         |

### Announce (1)

A fighter announces something, most likely the use of a skill.

#### Properties

1. fid - Number - The ID of the fighter making the announce.
2. message - String - The announce.

### Object (2)

A fighter uses an item. The icon of the item appears above the Fighter's head before fading out.
An Announce is made with the figther calling the name of the item.

#### Properties

1. fid - number - The ID of the fighter using the item.
2. name - string - The name displayed in the Announce.
3. item - string - An asset from the /assets/gfx/items folder. Only use the filename without the extention.

### Lost (3)

A fighter loses a set amount of life with the given life effect. Does nothing if the fighter is dead.
This can for example be used for status effect (poison, torch, etc).

#### Properties

1. fid - Number - The ID of the fighter losing life.
2. amount - Number - Amount of health healed.
3. lifeFx - {fx: LifeEffect, amount?: number, size?: number} - The life effect played during the damage.

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

1. fid - Number - The ID of the fighter gaining the status.
2. status - FighterStatus - Status being added.

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

A status if removed from a fighter.

#### Properties

1. fid - Number - The ID of the fighter gaining the status.
2. status - FighterStatus - Status being added.

### Regen (6)

A fighter regenerates a set amount of life with the given life effect. If the fighter was dead, resurrect it.

#### Properties

1. fid - Number - The ID of the fighter healing.
2. amount - Number - Amount of health healed.
3. lifeFx - {fx: LifeEffect, amount?: number, size?: number} - The life effect played during the regen. See LifeEffect above.

### Damages (7)

A fighter attacks another fighter and deals a certain amount of damages.

#### Properties

1. fid - Number - The ID of the attacking fighter.
2. tid - Number - The ID of the targeted fighter.
3. damages - Number | Null - The amount of damages dealt. If Null, the attack is dodged. If 0, the attack is guarded.
4. lifeFx? - {fx: LifeEffect, amount?: number, size?: number} - The life effect played on the fighter during the attack. See LifeEffect above.
5. effect? - DamagesEffect - The type of action the fighter will take before attacking.

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

### DamagesGroup (8)

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

### Fx (9)

### Dead (10)

A fighter dies.

#### Properties

1. fid - Number - The ID of the dying fighter.

### Goto (11)

Moves a fighter in range of another fighter with the given movement type.

#### Properties

1. fid - Number - The ID of the moving fighter.
2. tid - Number - The ID of the targeted fighter.
3. effect? - Number - The GotoEffect used to move the fighter. If none is given, default to Normal.

| GotoEffect  | Description                                                     |
| ----------- | --------------------------------------------------------------- |
| Normal (0)  | Normal run animation.                                           |
| Special (1) | Not sure yet. Create multiple shades with the given shadeColor. |
| Over (2)    | Jumps above the target.                                         |
| Todo (3)    | Debug.                                                          |

5. shadeColor? - {col1?: number, col2?: number} - The colors for the shades created when selecting GotoEffect.Special. If undefined, the shade will be pure black.

### Return (12)

Makes the selected fighter go back to its first saved position since the last time Return was called.

#### Properties

1. fid - Number - The ID of the returning fighter.

### Pause (13)

Pause the history for a given amount of frames.

#### Properties

1. time - Number - Number of frames until the next action in the history is played.

### Finish (14)

The fighters sill alive end the fight and enact their given end of fight behavior.

#### Properties

1. left - EndBehavior - The end behavior of the left sided fighters.
2. right - EndBehavior - The end behavior of the right sided fighters.

| EndBehavior | Description                                             |
| ----------- | ------------------------------------------------------- |
| Stand (0)   | The fighters stand in place and do nothing.             |
| Run (1)     | The fighters exit toward the opposite end of the scene. |
| Escape (2)  | The fighters exit from their side of the scene.         |
| Guard (3)   | The fighters are marked as dead and switch direction.   |

### AddCastle (15)

### TimeLimit (16)

### CastleAttack (17)

### Display (18)

Used by MT to wait for assets to load and then remove the loading screen.
Unused in this project for now.

### Text (19)

### Talk (20)

### Escape (21)

A fighter escapes the fight.

#### Properties

1. fid - Number - The ID of fighter escaping.

### MoveTo (22)

Move a Fighter based on the passed Fighter's id to the designed xy position.

#### Properties

1. fid - number - The Fighter's id referencing the Fighter to move.
2. x - number - The x coordinate of the destination.
3. y - number - The y coordinate of the destination.

### Flip (23)

### SpawnToy (24)

### DestroyToy (25)

### Wait (26)

### Log (27)

Sends a message to the console if the fight is started in debug mode.

#### Properties

1. msg - String - The message to print in the console.

### Notify (28)

Plays a notification above a group of fighters, which goes up a fade out over time.

#### Properties

1. fids - Number[] - The list of IDs of the affected fighters.
2. notification - Notifications - A value of the Notifications enum.

| Notifications | Description                           |
| ------------- | ------------------------------------- |
| Slow (0)      | Adds an anvil notification.           |
| Quick (1)     | Adds a thunderbolt notification.      |
| Silence (2)   | Adds a speech bubble notification.    |
| Sharingan (3) | Adds a Sharingan notification.        |
| NoUse (4)     | Adds a red cross notification.        |
| Down (5)      | Adds a Down notification.             |
| Up (6)        | Adds an Up notification.              |
| Fire (7)      | Adds a red orb notification.          |
| Wood (8)      | Adds a green orb notification.        |
| Water (9)     | Adds a blue orb notification.         |
| Thunder (10)  | Adds a yellow orb notification.       |
| Air (11)      | Adds a white orb notification.        |
| InitUp (12)   | Adds a blue firecracker notification. |
| InitDown (13) | Adds a red firecracker notification.  |
| Snake (14)    | Adds a snake notification.            |
| Strong (15)   | Adds a flexing muscle notification.   |
| Shield (16)   | Adds a shield notification.           |
| MonoElt (17)  | Adds a lock notification.             |
| Todo (18)     | No visual, debug notification.        |

### Energy (29)

Set the current energy of a group of fighters.

#### Properties

1. fighters - { fid: number, energy: number }[] - An array of fighter and their desired level of energy.

### MaxEnergy (30)

Set the maximum energy of a group of fighters.

#### Properties

1. fighters - { fid: number, energy: number }[] - An array of fighter and their desired maximum level of energy.
