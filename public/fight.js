/* eslint-disable */

let debug = false;
const addDefaultFighter = {
	action: DinoAnim.Action.Add,
	fighter: {
		props: [],
		dino: true,
		life: 100,
		name: 'Dragon Jr',
		side: true,
		scale: 1,
		fid: 0,
		gfx: '09T1Yt9wqq4Rx000',
		x: 200,
		y: 200,
		entrance: DinoAnim.EntranceEffect.Stand
	}
};
const buttons = [
	// TUTORIAL
	{
		name: 'Intro',
		fight: {
			bg: 's_cinema',
			top: 120,
			bottom: 20,
			ground: 0,
			history: [
				{
					action: DinoAnim.Action.Text,
					message:
						'Welcome to this quick visual tutorial on the possible actions which can be given to the Fight display.'
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'The different buttons you can see below the fight area will take you to a different section of the tutorial, depending on what you are looking for.'
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'For a more in depth description of the actions, you can follow the link to the documentation.'
				},
				{
					action: DinoAnim.Action.Text,
					message: 'Click on the desired button to continue.'
				}
			]
		}
	},
	// ADD FIGHTER
	{
		name: 'Add',
		fight: {
			bg: 'cavern2',
			top: 120,
			bottom: 20,
			ground: 2,
			history: [
				{
					action: DinoAnim.Action.Text,
					message: 'The "Add" action allows you to add a fighter to the scene.'
				},
				addDefaultFighter,
				{
					action: DinoAnim.Action.Text,
					message:
						'The details of a fighter are defined via the "fighter" property of the action. This allows to to set the life, maximum life, name, etc...'
				},
				{
					action: DinoAnim.Action.Add,
					fighter: {
						props: [],
						dino: true,
						life: 100,
						maxLife: 200,
						name: 'HornFire',
						side: false,
						scale: 3,
						fid: 1,
						gfx: '19hot0hFbItLS000'
					}
				},
				{
					action: DinoAnim.Action.Text,
					message: `You can choose an entrance animation using the "entrance" property. This allows you to decide how the fighter enters the fight.`
				},
				{
					action: DinoAnim.Action.Add,
					fighter: {
						props: [],
						dino: true,
						life: 20,
						maxLife: 100,
						name: 'DeathHands',
						side: true,
						fid: 2,
						gfx: '59QdaJ5j1dEaK000',
						entrance: DinoAnim.EntranceEffect.Fall
					}
				},
				{
					action: DinoAnim.Action.Text,
					message: `You can choose if you are instantiating a dinoz or a monster with the "dino" parameter, true for a dinoz, false for a monster.
Based on this, the "gfx" parameter decides what kind of dinoz or monster is spawned in.
For a dinoz, you must give its description string. For a monster, you must give its name as found on the monster page (TODO).`
				},
				{
					action: DinoAnim.Action.Add,
					fighter: {
						props: [],
						dino: false,
						life: 100,
						name: 'Gardien Abricole',
						side: false,
						scale: 1,
						fid: 3,
						gfx: 'grdien',
						entrance: DinoAnim.EntranceEffect.Ground
					}
				}
			]
		}
	},
	// ANNOUNCES
	{
		name: 'Announces',
		fight: {
			bg: 's_corail',
			top: 120,
			bottom: 20,
			ground: 0,
			history: [
				addDefaultFighter,
				{
					action: DinoAnim.Action.Text,
					message:
						"A fighter can announce something using the Announce action. The fighter's id (fid) and the message have to be specified as parameters."
				},
				{
					action: DinoAnim.Action.Announce,
					fid: 0,
					message: 'Powerful Attack!!!'
				},
				{
					action: DinoAnim.Action.Text,
					message:
						"A fighter can also announce the use of an item with the Object action. The fighter's id (fid) has to be specified, alongside the name of the item and its visual reference."
				},
				{
					action: DinoAnim.Action.Object,
					fid: 0,
					name: 'An item!',
					item: 'piran'
				},
				{
					action: DinoAnim.Action.Text,
					message: 'The item type is an element from the "/asset/gfx/items" folder.'
				},
				{
					action: DinoAnim.Action.Object,
					fid: 0,
					name: 'MOAR ITEMS!',
					item: 'regen'
				}
			]
		}
	},
	// LIFE GAIN/LOSS
	{
		name: 'Life changes',
		fight: {
			bg: 's_fountj',
			top: 120,
			bottom: 20,
			ground: 0,
			history: [
				addDefaultFighter,
				{
					action: DinoAnim.Action.Text,
					message:
						'You can make a fighter gain or lose health naturally using the "Regen" and "Lost" actions.'
				},
				{
					action: DinoAnim.Action.Lost,
					fid: 0,
					amount: 50,
					lifeFx: { fx: DinoAnim.LifeEffect.Fire }
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'Both action take a fighter id (fid), an amount of health and a LifeEffect as parameters. The LifeEffect decides which particles are going to be added to the fighter.'
				},
				{
					action: DinoAnim.Action.Regen,
					fid: 0,
					amount: 20,
					lifeFx: { fx: DinoAnim.LifeEffect.Heal }
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'There are multiple LifeEffect to choose from. Some take some special parameters, see the doc for more information.'
				},
				{
					action: DinoAnim.Action.Lost,
					fid: 0,
					amount: 1,
					lifeFx: { fx: DinoAnim.LifeEffect.Wood }
				},
				{
					action: DinoAnim.Action.Lost,
					fid: 0,
					amount: 1,
					lifeFx: { fx: DinoAnim.LifeEffect.Acid }
				},
				{
					action: DinoAnim.Action.Lost,
					fid: 0,
					amount: 1,
					lifeFx: { fx: DinoAnim.LifeEffect.Explode }
				},
				{
					action: DinoAnim.Action.Lost,
					fid: 0,
					amount: 1,
					lifeFx: { fx: DinoAnim.LifeEffect.Water }
				},
				{
					action: DinoAnim.Action.Lost,
					fid: 0,
					amount: 1,
					lifeFx: { fx: DinoAnim.LifeEffect.Lightning }
				},
				{
					action: DinoAnim.Action.Lost,
					fid: 0,
					amount: 1,
					lifeFx: { fx: DinoAnim.LifeEffect.Air }
				},
				{
					action: DinoAnim.Action.Lost,
					fid: 0,
					amount: 200,
					lifeFx: { fx: DinoAnim.LifeEffect.Skull, size: 2 }
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'Once a fighter has taken a beating, it can be killed with the "Dead" action. This action only need the fighter\'s id. Quite sad.'
				},
				{
					action: DinoAnim.Action.Dead,
					fid: 0
				}
			]
		}
	},
	// STATUS
	{
		name: 'Status',
		fight: {
			bg: 's_fleuve',
			top: 120,
			bottom: 20,
			ground: 0,
			history: [
				addDefaultFighter,
				{
					action: DinoAnim.Action.Text,
					message:
						'Status are given to a fighter using the "Status" action. You only need to specify the fighter\'s id and a status from the list FighterStatus.'
				},
				{
					action: DinoAnim.Action.Status,
					fid: 0,
					status: DinoAnim.FighterStatus.Sleep
				},
				{
					action: DinoAnim.Action.Text,
					message: 'Multiple status can be applied at once.'
				},
				{
					action: DinoAnim.Action.Status,
					fid: 0,
					status: DinoAnim.FighterStatus.Poison
				},
				{
					action: DinoAnim.Action.Status,
					fid: 0,
					status: DinoAnim.FighterStatus.Quick
				},
				{
					action: DinoAnim.Action.Status,
					fid: 0,
					status: DinoAnim.FighterStatus.Shield
				},
				{
					action: DinoAnim.Action.Status,
					fid: 0,
					status: DinoAnim.FighterStatus.Dazzled
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'Status can be removed by using the action "NoStatus" with the same parameters as "Status".'
				},
				{
					action: DinoAnim.Action.NoStatus,
					fid: 0,
					status: DinoAnim.FighterStatus.Sleep
				},
				{
					action: DinoAnim.Action.NoStatus,
					fid: 0,
					status: DinoAnim.FighterStatus.Poison
				},
				{
					action: DinoAnim.Action.NoStatus,
					fid: 0,
					status: DinoAnim.FighterStatus.Quick
				},
				{
					action: DinoAnim.Action.NoStatus,
					fid: 0,
					status: DinoAnim.FighterStatus.Shield
				},
				{
					action: DinoAnim.Action.NoStatus,
					fid: 0,
					status: DinoAnim.FighterStatus.Dazzled
				}
			]
		}
	}
];

let fightRef = new DinoAnim.Fight(buttons[0].fight);
for (const a of buttons) {
	const button = document.createElement('button');
	button.innerHTML = a.name;
	button.addEventListener('click', () => {
		if (fightRef) {
			fightRef.destroy();
		}
		fightRef = new DinoAnim.Fight({ ...a.fight, debug: debug });
		const elem = document.getElementById('fight-container');
		elem.innerHTML = '';
		elem.appendChild(fightRef.getDisplay());
	});
	document.getElementById('controls').appendChild(button);
}

document.getElementById('fight-container').appendChild(fightRef.getDisplay());

function toggleDebug() {
	console.log('tst');
	debug = !debug;
}
