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
	data: {
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
					size: 100,
					fid: 0,
					gfx: '09T1Yt9wqq4Rx000'
				}
			}
		]
	}
});

document.body.appendChild(fight.getDisplay());
```

## Actions

### Add (0)

Add a fighter to the scene.

#### Properties

1. fighter - Object - Details of the fighter to add.

| Variable  | Description                                                                                   |
| --------- | --------------------------------------------------------------------------------------------- |
| props     | Array - ???                                                                                   |
| dino      | Boolean - True if the fighter a dino, false if it is a monster.                               |
| life      | Number - Life of the fighter.                                                                 |
| maxLife?  | Number - Maximum life of the fighter. Default to "life" if not given.                         |
| name      | String - Name of the fighter which will be displayed on entry.                                |
| side      | Boolean - Side of the fighter. True for left side, false for right side.                      |
| scale?    | Number - Scale of the fighter. 1 by default.                                                  |
| fid       | Number - ID of the fighter. Used for the subsequent actions.                                  |
| gfx       | String - Visual description of the fighter. See SDino and SMonster for more information.      |
| entrance? | Number - Entrance effect, see table below. If undefined, the fighter does a simple drop down. |
| anim?     | String - Desired animation for the "Anim" entrance effect.                                    |
| x?        | Number - X position of the fighter. Randomly generated if empty.                              |
| y?        | Number - Y position of the fighter. Randomly generated if empty.                              |

| Entrance effect | Description                                         |
| --------------- | --------------------------------------------------- |
| Stand (0)       | Instantiate the fighter without entrance effect.    |
| Grow (1)        | Scale in the fighter from 0% to 100%.               |
| Fall (2)        | Make the fighter fall from the top of the scene.    |
| Run (3)         | Make the fighter run in from their respective side. |
| Ground (4)      | Make the fighter erupt from the ground.             |
| Anim (5)        | Play a specific animation from the fighter.         |

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
4. lifeFx? - LifeEffect - The life effect played on the fighter during the attack.

| LifeEffect    | Description               |
| ------------- | ------------------------- |
| Normal (0)    | No effect in particular.  |
| Fire (1)      | Adds fire particles.      |
| Wood (2)      | Adds leaf particles.      |
| Water (3)     | Adds droplet particles.   |
| Lightning (4) | Adds lightning particles. |
| Air (5)       | Adds wind particles.      |
| Burn (6)      | Adds burning particles.   |
| Heal (7)      | Adds healing particles.   |
| Skull (8)     | Adds skulls particles.    |
| Acid (9)      | Adds acid particles.      |

5. effect? - DamagesEffect - The type of action the fighter will take before attacking.

| DamagesEffect | Description                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| Normal (0)    | Standard attack, the attacker runs to the target and hits it. Default behaviour if effect is undefined. |
| Drop (1)      | The attacker drops on the target.                                                                       |
| Back (2)      | The attacker jumps behind the target and hits it.                                                       |
| Eject (3)     | Not sure but sounds amazing.                                                                            |
| Counter (4)   | If the attacks is the result of a counter. Does not seems to do anything visually.                      |

### DamagesGroup (4)

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

### Finish (10)

### Energy (11)

### MaxEnergy (12)

### Pause (13)

### Announce (14)

### Goto (15)

Moves a fighter at range of another fighter with the given movement type.

#### Properties

1. fid - Number - The ID of the moveing fighter.
2. tid - Number - The ID of the targeted fighter.
3. effect? - Number - The GotoEffect used to move the fighter. If none is given, default to Normal.

| GotoEffect  | Description                                                     |
| ----------- | --------------------------------------------------------------- |
| Normal (0)  | Normal run animation.                                           |
| Over (1)    | Jumps above the target.                                         |
| Special (2) | Not sure yet. Create multiple shades with the given shadeColor. |

5. shadeColor? - {col1?: number, col2: number} - The colors for the shades created when selecting GotoEffect.Special. If undefined, the shade will be pure black.

### Regen (16)

### Object (17)

### Fx (18)

### Status (19)

### NoStatus (20)

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
