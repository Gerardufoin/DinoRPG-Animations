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
| life      | Number - Life of the fighter                                                                  |
| name      | String - Name of the fighter which will be displayed on entry.                                |
| side      | Boolean - Side of the fighter. True for left side, false for right side.                      |
| size      | Number - Size of the fighter multiplied by 100. 200 double the size of the fighter.           |
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

### DamagesGroup (4)

### CastleAttack (5)

### Return (6)

### Dead (7)

### Lost (8)

### Escape (9)

### Finish (10)

### Energy (11)

### MaxEnergy (12)

### Pause (13)

### Announce (14)

### Goto (15)

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
