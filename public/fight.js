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
					message: `You can choose if you are instantiating a dinoz or a monster with the "dino" parameter, true for a dinoz, false for a monster. Based on this, the "gfx" parameter decides what kind of dinoz or monster is spawned in.`
				},
				{
					action: DinoAnim.Action.Text,
					message: `For a dinoz, you must give its description string. For a monster, you must give its name as found on the monster page (link below).`
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
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'Once the fight is over, you can make the fighters leave by calling the "Finish" action. Both side will act depending on the given EndBehaviour.'
				},
				{
					action: DinoAnim.Action.Finish,
					left: DinoAnim.EndBehaviour.Run,
					right: DinoAnim.EndBehaviour.Escape
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
	},
	// ATTACKS
	{
		name: 'Attacks',
		fight: {
			bg: 's_caushDoor',
			top: 120,
			bottom: 20,
			ground: 1,
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
				},
				{
					action: DinoAnim.Action.Add,
					fighter: {
						props: [],
						dino: true,
						life: 100,
						maxLife: 100,
						name: 'HornFire',
						side: false,
						scale: 1,
						fid: 1,
						gfx: '19hot0hFbItLS000'
					}
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'Before a fighter can attack another fighter, it first needs to get in range using the "Goto" action.'
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'"Goto" saves the position of the fighter, allowing it to go back later. You need to specify the fighter (fid) and its target (tid).'
				},
				{
					action: DinoAnim.Action.Goto,
					fid: 0,
					tid: 1
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'A fighter can attack another fighter using the "Damages" action. You need to specify the attacker (fid), the target (fid) and the amount of damages taken.'
				},
				{
					action: DinoAnim.Action.Damages,
					fid: 0,
					tid: 1,
					damages: 10
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'Once an attack has been made, you can ask the fighter to go back to its position with the "Return" action, which only needs the id of the fighter (fid). "Damages" can be called without first using "Goto", but "Return" cannot be called in this case.'
				},
				{
					action: DinoAnim.Action.Return,
					fid: 0
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'When attacking, you can specify the type of damages inflicted by specifying a LifeEffect, in the same way than the Regen/Lost actions.'
				},
				{
					action: DinoAnim.Action.Goto,
					fid: 1,
					tid: 0
				},
				{
					action: DinoAnim.Action.Damages,
					fid: 1,
					tid: 0,
					damages: 10,
					lifeFx: { fx: DinoAnim.LifeEffect.Fire }
				},
				{
					action: DinoAnim.Action.Damages,
					fid: 1,
					tid: 0,
					damages: 10,
					lifeFx: { fx: DinoAnim.LifeEffect.Wood }
				},
				{
					action: DinoAnim.Action.Damages,
					fid: 1,
					tid: 0,
					damages: 10,
					lifeFx: { fx: DinoAnim.LifeEffect.Water }
				},
				{
					action: DinoAnim.Action.Return,
					fid: 1
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'Both "Goto" and "Damages" can use an "effect" parameter, allowing to change how the fighter approches/attacks the target. Here is one example.'
				},
				{
					action: DinoAnim.Action.Goto,
					fid: 0,
					tid: 1,
					effect: DinoAnim.GotoEffect.Over
				},
				{
					action: DinoAnim.Action.Damages,
					fid: 0,
					tid: 1,
					damages: 10,
					lifeFx: { fx: DinoAnim.LifeEffect.Lightning },
					effect: DinoAnim.DamagesEffect.Drop
				},
				{
					action: DinoAnim.Action.Return,
					fid: 0
				}
			]
		}
	},
	// SKILLS
	{
		name: 'Skills',
		fight: {
			bg: 'i_plaine',
			top: 120,
			bottom: 20,
			ground: 1,
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
				},
				{
					action: DinoAnim.Action.Add,
					fighter: {
						props: [],
						dino: true,
						life: 100,
						maxLife: 100,
						name: 'HornFire',
						side: false,
						scale: 1,
						fid: 1,
						gfx: '19hot0hFbItLS000'
					}
				},
				{
					action: DinoAnim.Action.Add,
					fighter: {
						props: [],
						dino: true,
						life: 100,
						maxLife: 100,
						name: 'DeathHands',
						side: false,
						fid: 2,
						gfx: '59QdaJ5j1dEaK000'
					}
				},
				{
					action: DinoAnim.Action.Text,
					message: 'The action "Skill" allows to invoke a skill. Skills regroup multiple effects from MT.'
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'Skills are not done yet. You can however call the action if needed. You need to specify a parameter "skill" from the SkillList enum and fill some parameters in the "details" object.'
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'You can specify an "fid" if a fighter is the source of the skill, and a "targets" parameters if the skill affects other dinoz, with the amount of life lost/recovered (depending on the skill).'
				},
				{
					action: DinoAnim.Action.Announce,
					fid: 0,
					message: 'AOE!'
				},
				{
					action: DinoAnim.Action.Skill,
					skill: DinoAnim.SkillList.Shower,
					details: {
						fid: 0,
						targets: [
							{ id: 1, life: 10 },
							{ id: 2, life: 5 }
						]
					}
				},
				{
					action: DinoAnim.Action.Announce,
					fid: 1,
					message: 'HEAL!'
				},
				{
					action: DinoAnim.Action.Skill,
					skill: DinoAnim.SkillList.Heal,
					details: {
						targets: [
							{ id: 1, life: 10 },
							{ id: 2, life: 5 }
						]
					}
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'The energy level of the fighters is defined using the "Energy" and "MaxEnergy" actions. "MaxEnergy" should be called at the beginning of the fight.'
				},
				{
					action: DinoAnim.Action.MaxEnergy,
					fighters: [
						{ fid: 0, energy: 100 },
						{ fid: 1, energy: 200 },
						{ fid: 2, energy: 150 }
					]
				},
				{
					action: DinoAnim.Action.Energy,
					fighters: [
						{ fid: 0, energy: 50 },
						{ fid: 1, energy: 75 },
						{ fid: 2, energy: 110 }
					]
				}
			]
		}
	},
	// CASTLE
	{
		name: 'Castle',
		fight: {
			bg: 's_baobob',
			top: 120,
			bottom: 20,
			ground: 1,
			history: [
				{
					action: DinoAnim.Action.AddCastle,
					castle: {
						life: 100,
						maxLife: 100,
						armor: 2,
						repair: 1
					}
				},
				{
					action: DinoAnim.Action.Display
				},
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
				},
				{
					action: DinoAnim.Action.Add,
					fighter: {
						props: [],
						dino: true,
						life: 100,
						maxLife: 100,
						name: 'HornFire',
						side: false,
						scale: 1,
						fid: 1,
						gfx: '19hot0hFbItLS000'
					}
				},
				{
					action: DinoAnim.Action.Add,
					fighter: {
						props: [],
						dino: true,
						life: 100,
						maxLife: 100,
						name: 'DeathHands',
						side: false,
						fid: 2,
						gfx: '59QdaJ5j1dEaK000'
					}
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'The "AddCastle" action allows to spawn in a castle. This will automatically reduce the playing field of the fight.'
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'The "AddCastle" action is customizable using the "castle" property. Refer to the documentation for all the possibilities.'
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'The "Display" action allows to remove the loading screen. One is automatically added at the start of a fight if none is given in the history. If there is a Castle in the scene, it is recommended to add the Display action after the "AddCastle".'
				},
				{
					action: DinoAnim.Action.AttackCastle,
					fid: 0,
					damages: 30
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'Fighters can attack the castle via the "AttackCastle" action. This requires the fighter\'s id (fid) and the damages dealt.'
				},
				{
					action: DinoAnim.Action.AttackCastle,
					fid: 0,
					damages: 30
				},
				{
					action: DinoAnim.Action.AttackCastle,
					fid: 0,
					damages: 30
				},
				{
					action: DinoAnim.Action.AttackCastle,
					fid: 0,
					damages: 30
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'A time bar can be added to the fight using the "TimeLimit" action. This action needs a "time" parameter which will determines the total duration of the bar.'
				},
				{
					action: DinoAnim.Action.TimeLimit,
					time: 10
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'The time bar does not decrease by itself. Instead, it decreases every time the "Pause" action is called. This pauses the fight for a set amount of frames and reduces the timebar by the same amount.'
				},
				{
					action: DinoAnim.Action.Pause,
					time: 5
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'If a delay has to be introduced in the fight without moving the time bar, use the action "Wait" instead. This will pause the fight for the given time in milliseconds.'
				},
				{
					action: DinoAnim.Action.Wait,
					time: 2000
				},
				{
					action: DinoAnim.Action.Text,
					message: 'Once the time bar is empty, it is removed from the scene.'
				},
				{
					action: DinoAnim.Action.Pause,
					time: 5
				}
			]
		}
	},
	// MISC
	{
		name: 'Misc.',
		fight: {
			bg: 'city2',
			top: 120,
			bottom: 20,
			ground: 0,
			history: [
				addDefaultFighter,
				{
					action: DinoAnim.Action.Talk,
					fid: 0,
					message: 'A fighter can talk using the "Talk" action. This requires its id and a message.'
				},
				{
					action: DinoAnim.Action.Text,
					message: 'A fighter can be flipped around with the "Flip" action and the fighter\'s id.'
				},
				{
					action: DinoAnim.Action.Flip,
					fid: 0
				},
				{
					action: DinoAnim.Action.Flip,
					fid: 0
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'Notifications can be shown on the fighters using the "Notify" action. Notifications are image popups mostly signaling a permanent effect.'
				},
				{
					action: DinoAnim.Action.Notify,
					fids: [0],
					notification: DinoAnim.NotificationList.Slow
				},
				{
					action: DinoAnim.Action.Wait,
					time: 1500
				},
				{
					action: DinoAnim.Action.Notify,
					fids: [0],
					notification: DinoAnim.NotificationList.Snake
				},
				{
					action: DinoAnim.Action.Wait,
					time: 1500
				},
				{
					action: DinoAnim.Action.Notify,
					fids: [0],
					notification: DinoAnim.NotificationList.Sharingan
				},
				{
					action: DinoAnim.Action.Wait,
					time: 1500
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'A fighter can be moved around using the "MoveTo" action, given the id of the fighter and the x/y coordinates. This will save the position for a potential "Return" action.'
				},
				{
					action: DinoAnim.Action.MoveTo,
					fid: 0,
					x: 300,
					y: 200
				},
				{
					action: DinoAnim.Action.Return,
					fid: 0
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'Toys can be spawned in the scene for cinematic purposes with the "SpawnToy" action. Toys are objects spawned at a specific position with a specific velocity.'
				},
				{
					action: DinoAnim.Action.Text,
					message: 'The list of toys can be found in the "/assets/gfx/toys" folder.'
				},
				{
					action: DinoAnim.Action.SpawnToy,
					toy: 'lantrn',
					x: 200,
					y: 200,
					z: 1,
					vx: 10,
					vy: 10,
					vz: 5
				},
				{
					action: DinoAnim.Action.SpawnToy,
					toy: 'corail',
					x: 100,
					y: 100,
					z: 100
				},
				{
					action: DinoAnim.Action.SpawnToy,
					toy: 'lantrn',
					x: 250,
					y: 250,
					z: 1,
					vz: -20
				},
				{
					action: DinoAnim.Action.Text,
					message:
						'A toy can be removed using the "DestroyToy" action. This will remove all instances of the given toy.'
				},
				{
					action: DinoAnim.Action.DestroyToy,
					toy: 'lantrn'
				}
			]
		}
	},
	// RANDOM FIGHT
	{
		name: 'Random MT Fight',
		fight: {
			legacy_data:
				'oy6%3A_checky28%3A%252Fuser%252Fcheck%253Fid%253DTosLiy6%3A_debugy34%3A%252Ftools%252FdebugFight%253Fsk%253D4455ay8%3A_mbottomi20y7%3A_mrightzy6%3A_equipy68%3Ahttp%253A%252F%252Fdata.dinorpg.com%252Fimg%252Ficons%252Fobj_%253A%253Aid%253A%253A.gify6%3A_sdinoy56%3Ahttp%253A%252F%252Fdata.dinorpg.com%252Fswf%252Fsdino.swf%253Fv%253D33y5%3A_dinoy55%3Ahttp%253A%252F%252Fdata.dinorpg.com%252Fswf%252Fdino.swf%253Fv%253D35y5%3A_dojoy31%3A%252Fimg%252Ffight%252Fdojo_arene.pngy5%3A_mtopi140y3%3A_bgy58%3Ahttp%253A%252F%252Fdata.dinorpg.com%252Fimg%252Ffight%252Fs_fountj.jpgy7%3A_groundny8%3A_debriefy55%3Ajavascript%253A_.toggleFlash%2528%2527debrief%2527%252C%2520-300%2529y8%3A_historylwy8%3A_Historyy5%3A_HAdd%3A2oy6%3A_propsahR10ty5%3A_lifei140y5%3A_namey5%3Abncely5%3A_sidefy5%3A_sizei140y4%3A_fidzy4%3A_gfxy16%3A39KBAH0GSNyMt000gnwR21R22%3A2oR23ahR10tR24i450R25y20%3Adon%2520key%2520kon%2520gaR27tR28i450R29i1R30y16%3AAAZkRuJf5IVZe000gnwR21R22%3A2oR23ahR10tR24i120R25y11%3Agros%2520laidR27fR28i120R29i2R30y16%3AK9UFuZz9zBLSM000gnwR21R22%3A2oR23ahR10tR24i330R25y3%3AtipR27tR28i330R29i3R30y16%3AB9ZuzENYpRyCT000gnwR21R22%3A2oR23ahR10tR24i250R25y12%3Ajoli%2520coeurR27fR28i250R29i4R30y16%3AC9xeFBfPNVmgP000gnwR21R22%3A2oR23ahR10tR24i510R25y5%3AMannyR27tR28i510R29i5R30y16%3AF9tWMF7I6cd8i110gnwR21y11%3A_HMaxEnergy%3A2azi1i2i3i4i5hai100i145i100i145i97i132hwR21y8%3A_HEnergy%3A2azi1i2i3i4i5hai100i145i100i145i97i132hwR21y5%3A_HLog%3A1y16%3AEnergy%2520enabledwR21y9%3A_HDisplay%3A1nwR21R43%3A2ai3i5i1zi2i4hai145i132i145i100i100i97hwR21y7%3A_HPause%3A1zwR21y6%3A_HGoto%3A3i3i4wy11%3A_GotoEffecty8%3A_GNormal%3A0wR21y9%3A_HDamages%3A5i3i4i18wy11%3A_LifeEffecty11%3A_LLightning%3A0nwR21y10%3A_HAnnounce%3A2i4y13%3AAura%2520PuantewR21y8%3A_HStatus%3A2i3wy7%3A_Statusy8%3A_SPoison%3A1i10wR21R51%3A5i3i4nwR52R53%3A0nwR21R54%3A2i4y17%3AForme%2520VaporeusewR21R56%3A2i4wR57y8%3A_SIntang%3A0wR21R51%3A5i3i4i1wR52R53%3A0wy7%3A_Effecty13%3A_EIntangBreak%3A0wR21y10%3A_HNoStatus%3A2i4wR57R60%3A0wR21R51%3A5i3i4i16wR52R53%3A0wR61R62%3A0wR21R43%3A2ai3hai127hwR21y8%3A_HReturn%3A1i3wR21R43%3A2ai3i5i1zi2i4hai127i132i145i100i100i97hwR21R47%3A1i2wR21R48%3A3i3i4wR49R50%3A0wR21R51%3A5i3i4i10wR52y6%3A_LWood%3A0nwR21R43%3A2ai3hai121hwR21R64%3A1i3wR21R43%3A2ai5i3i1zi2i4hai132i145i145i100i100i97hwR21R47%3A1i3wR21y6%3A_HLost%3A3i3i10wR52y8%3A_LPoison%3A0wR21R43%3A2ai5i3i1zi2i4hai132i145i145i100i100i97hwR21R47%3A1zwR21R54%3A2i5y10%3AEcrasementwR21R54%3A2zR59wR21R56%3A2zwR57R60%3A0wR21y14%3A_HDamagesGroup%3A3i5loR24zy4%3A_tidzgoR24i19R70i2goR24i20R70i4ghwy12%3A_GroupEffecty13%3A_GrJumpAttack%3A1y5%3AshakewR21R43%3A2ai5hai106hwR21R43%3A2ai3i1i5zi2i4hai145i145i122i100i100i97hwR21R47%3A1i3wR21R54%3A2i3y6%3AVigneswR21y8%3A_HNotify%3A2li2hwy13%3A_Notificationy10%3A_NInitDown%3A0wR21R69%3A3i3loR24zR70i2ghwR71y8%3A_GrVigne%3A0wR21R43%3A2ai3hai125hwR21R48%3A3i3i4wR49R50%3A0wR21R51%3A5i3i4i10wR52y6%3A_LFire%3A0nwR21R43%3A2ai3hai119hwR21R64%3A1i3wR21R43%3A2ai1i5i3zi4i2hai145i130i131i100i97i100hwR21R47%3A1i1wR21R54%3A2i1y24%3APrintemps%2520Pr%25C3%25A9cocewR21R69%3A3i1loR24i3R70i3goR24zR70i5ghwR71y7%3A_GrHeal%3A1zwR21R43%3A2ai1hai125hwR21R48%3A3i1i2wR49R50%3A0wR21R51%3A5i1i2i29wR52R65%3A0nwR21R43%3A2ai1hai119hwR21R64%3A1i1wR21R43%3A2ai5i3i1zi4i2hai130i145i130i100i97i100hwR21R47%3A1i2wR21R66%3A3i3i10wR52R67%3A0wR21R43%3A2ai5i3i1zi4i2hai130i145i136i100i97i100hwR21R47%3A1i1wR21R54%3A2i5y18%3AP%25C3%25A9trificationwR21R56%3A2i2wR57y8%3A_SStoned%3A0wR21R43%3A2ai5hai110hwR21R43%3A2ai3i1i5zi4i2hai145i145i126i100i97i100hwR21R47%3A1i3wR21R48%3A3i3i4wR49R50%3A0wR21R51%3A5i3i4i10wR52y7%3A_LWater%3A0nwR21R51%3A5i3i4nwR52R84%3A0nwR21R51%3A5i3i4nwR52R84%3A0nwR21R43%3A2ai3hai132hwR21R64%3A1i3wR21R43%3A2ai1i5i3zi4i2hai145i132i145i100i97i100hwR21R47%3A1i3wR21R66%3A3i3i10wR52R67%3A0wR21R43%3A2ai1i5i3zi4i2hai145i132i145i100i97i100hwR21R47%3A1i1wR21R54%3A2i1R74wR21R75%3A2li4hwR76R77%3A0wR21R69%3A3i1loR24zR70i4ghwR71R78%3A0wR21R43%3A2ai1hai125hwR21R54%3A2i1y39%3AB%25C3%25A9n%25C3%25A9diction%2520des%2520F%25C3%25A9eswR21R69%3A3i1lhwR71y8%3A_GrInvoc%3A1y5%3AfairywR21R75%3A2lzi2i4hwR76R77%3A0wR21R43%3A2ai1hai75hwR21R43%3A2ai5i3i1zi4i2hai132i145i78i100i97i100hwR21R47%3A1zwR21R54%3A2i5y14%3AClone%2520AqueuxwR21R22%3A2oR23ahR10tR24i1R25R40R27tR28i510R29i6R30R41gnwR21R43%3A2ai5hai97hwR21R54%3A2i5y24%3AR%25C3%25A9ceptacle%2520aqueuxwR21y4%3A_HFx%3A1wy12%3A_SuperEffecty13%3A_SFAttachAnim%3A3i2y11%3A_receptacley5%3AwaterwR21R43%3A2ai5hai47hwR21R43%3A2ai6i3i5i1zi4i2hai100i145i47i78i100i97i100hwR21R47%3A1zwR21R48%3A3i6i4wR49R50%3A0wR21R54%3A2i4R59wR21R56%3A2i4wR57R60%3A0wR21R51%3A5i6i4i1wR52R65%3A0wR61R62%3A0wR21R63%3A2i4wR57R60%3A0wR21R54%3A2i4R55wR21R56%3A2i6wR57R58%3A1i10wR21R43%3A2ai6hai94hwR21R64%3A1i6wR21R43%3A2ai3i5i6i1zi4i2hai145i63i100i94i100i97i100hwR21R47%3A1i3wR21R63%3A2zwR57R60%3A0wR21R43%3A2ai3i5i6i1zi4i2hai145i76i100i107i100i97i100hwR21R47%3A1i2wR21R48%3A3i3i4wR49R50%3A0wR21R51%3A5i3i4i10wR52y5%3A_LAir%3A0nwR21R43%3A2ai3hai139hwR21R64%3A1i3wR21R43%3A2ai5i6i1i3zi4i2hai76i100i112i145i100i97i100hwR21R47%3A1i1wR21R66%3A3i3i10wR52R67%3A0wR21R43%3A2ai5i6i1i3zi4i2hai76i100i115i145i100i97i100hwR21R47%3A1zwR21R54%3A2i5R82wR21R56%3A2zwR57R83%3A0wR21R43%3A2ai5hai56hwR21R43%3A2ai6i1i3i5i4zi2hai100i129i145i70i97i100i100hwR21R47%3A1i2wR21R66%3A3i6i10wR52R67%3A0wR21y6%3A_HDead%3A1i6wR21R43%3A2ai1i3i5i4zi2hai129i145i81i97i100i100hwR21R47%3A1i2wR21R48%3A3i1zwR49R50%3A0wR21R51%3A5i1zi10wR52R53%3A0nwR21R51%3A5i1zi10wR52R53%3A0nwR21R43%3A2ai1hai120hwR21R64%3A1i1wR21R43%3A2ai3i5i1i4zi2hai145i92i131i97i100i100hwR21R47%3A1i2wR21R66%3A3i3i10wR52R67%3A0wR21R63%3A2i3wR57R58%3A1i10wR21R43%3A2ai3i5i1i4zi2hai145i96i135i97i100i100hwR21R47%3A1zwR21R48%3A3i3i4wR49R50%3A0wR21R51%3A5i3i4i19wR52R53%3A0nwR21R54%3A2i4R55wR21R56%3A2i3wR57R58%3A1i10wR21R43%3A2ai3hai139hwR21R64%3A1i3wR21R43%3A2ai5i3i1i4zi2hai96i145i140i97i100i100hwR21R47%3A1i1wR21R54%3A2i5y16%3ABouclier%2520dinozwR21R75%3A2li3hwR76y8%3A_NShield%3A0wR21R43%3A2ai5hai76hwR21R48%3A3i5i2wR49R50%3A0wR21R51%3A5i5i2i10wR52R95%3A0nwR21R51%3A5i5i2i10wR52R95%3A0nwR21R43%3A2ai5hai67hwR21R64%3A1i5wR21R43%3A2ai3i1i5i4zi2hai145i145i72i97i100i100hwR21R47%3A1i1wR21R48%3A3i3i4wR49R50%3A0wR21R51%3A5i3i4i14wR52R65%3A0nwR21R43%3A2ai3hai139hwR21R64%3A1i3wR21R43%3A2ai1i5i3i4zi2hai145i76i145i97i100i100hwR21R47%3A1zwR21R48%3A3i1i2wR49R50%3A0wR21R51%3A5i1i2i10wR52R95%3A0nwR21R51%3A5i1i2i10wR52R95%3A0nwR21R43%3A2ai1hai136hwR21R64%3A1i1wR21R43%3A2ai5i3i1i4zi2hai76i145i145i97i100i100hwR21R47%3A1i5wR21R66%3A3i3i10wR52R67%3A0wR21R43%3A2ai5i3i1i4zi2hai76i145i145i97i100i100hwR21R47%3A1i2wR21R54%3A2i5R68wR21R69%3A3i5loR24i20R70zgoR24i20R70i2goR24i17R70i4ghwR71R72%3A1R73wR21R43%3A2ai5hai50hwR21R43%3A2ai3i1i5i4zi2hai145i145i55i97i100i100hwR21R47%3A1i1wR21R54%3A2i3R74wR21R75%3A2li2hwR76R77%3A0wR21R69%3A3i3loR24zR70i2ghwR71R78%3A0wR21R43%3A2ai3hai125hwR21R48%3A3i3i4wR49R50%3A0wR21R51%3A5i3i4i10wR52R79%3A0nwR21R43%3A2ai3hai119hwR21R64%3A1i3wR21R43%3A2ai1i5i3i4zi2hai145i67i137i97i100i100hwR21R47%3A1i2wR21R54%3A2i1y13%3AEtat%2520PrimalwR21R90%3A1wR91y7%3A_SFAura%3A3i1i11206400i1wR21R63%3A2i3wR57R58%3A1i10wR21R43%3A2ai1hai125hwR21R48%3A3i1zwR49R50%3A0wR21R51%3A5i1zi10wR52R84%3A0nwR21R51%3A5i1zi10wR52R84%3A0nwR21R51%3A5i1zi10wR52R84%3A0nwR21R51%3A5i1zi10wR52R84%3A0nwR21R51%3A5i1zi10wR52R84%3A0nwR21R51%3A5i1zi10wR52R84%3A0nwR21R43%3A2ai1hai94hwR21R64%3A1i1wR21R43%3A2ai5i3i1i4zi2hai67i145i112i97i100i100hwR21R47%3A1i3wR21R43%3A2ai5i3i1i4zi2hai67i145i129i97i100i100hwR21R47%3A1i3wR21R63%3A2i2wR57R83%3A0wR21R43%3A2ai5i3i1i4i2zhai67i145i144i97i100i100hwR21R47%3A1i3wR21R43%3A2ai5hai22hwR21R48%3A3i5i4wR49R50%3A0wR21R51%3A5i5i4i21wR52R65%3A0nwR21R54%3A2i4R55wR21R56%3A2i5wR57R58%3A1i10wR21R43%3A2ai5hai16hwR21R64%3A1i5wR21R43%3A2ai3i1i5i4i2zhai145i145i21i97i100i100hwR21R47%3A1i1wR21R48%3A3i3i4wR49R50%3A0wR21R54%3A2i4R59wR21R56%3A2i4wR57R60%3A0wR21R51%3A5i3i4i1wR52R84%3A0wR61R62%3A0wR21R63%3A2i4wR57R60%3A0wR21R54%3A2i4R55wR21R56%3A2i3wR57R58%3A1i10wR21R43%3A2ai3hai139hwR21R64%3A1i3wR21R43%3A2ai1i5i3i4i2zhai145i41i145i97i100i100hwR21R47%3A1i4wR21R48%3A3i1zwR49R50%3A0wR21R51%3A5i1zi30wR52R65%3A0nwR21R43%3A2ai1hai139hwR21R64%3A1i1wR21R43%3A2ai5i3i1i4i2zhai41i145i145i97i100i100hwR21R47%3A1i2wR21R66%3A3i5i10wR52R67%3A0wR21R43%3A2ai5i3i1i4i2zhai41i145i145i97i100i100hwR21R47%3A1i1wR21R66%3A3i3i10wR52R67%3A0wR21R43%3A2ai5i3i1i4i2zhai41i145i145i97i100i100hwR21R47%3A1zwR21R54%3A2i5R88wR21R22%3A2oR23ahR10tR24i1R25R40R27tR28i510R29i7R30R41gnwR21R43%3A2ai5hai6hwR21R48%3A3i5zwR49R50%3A0wR21R51%3A5i5zi10wR52R53%3A0nwR21R43%3A2ai5hazhwR21R96%3A1zwR21R64%3A1i5wR21R43%3A2ai7i3i5i1i4i2hai100i145zi145i97i100hwR21R47%3A1zwR21R48%3A3i7i4wR49R50%3A0wR21R51%3A5i7i4i21wR52R65%3A0nwR21R54%3A2i4R55wR21R56%3A2i7wR57R58%3A1i10wR21R43%3A2ai7hai94hwR21R64%3A1i7wR21R43%3A2ai3i5i1i7i4i2hai145i5i145i99i97i100hwR21R47%3A1i1wR21R54%3A2i3R74wR21R75%3A2li4hwR76R77%3A0wR21R69%3A3i3loR24zR70i4ghwR71R78%3A0wR21R43%3A2ai3hai125hwR21R48%3A3i3i4wR49R50%3A0wR21R51%3A5i3i4nwR52R95%3A0nwR21R43%3A2ai3hai119hwR21R64%3A1i3wR21R43%3A2ai5i1i7i3i2i4hai5i145i100i143i100i97hwR21R47%3A1i3wR21R48%3A3i5i2wR49R50%3A0wR21R51%3A5i5i2i10wR52R79%3A0nwR21R43%3A2ai5hazhwR21R64%3A1i5wR21R43%3A2ai1i7i3i5i2i4hai145i100i145i12i100i97hwR21R47%3A1i2wR21R66%3A3i5i10wR52R67%3A0wR21R43%3A2ai1i7i3i5i2i4hai145i100i145i22i100i97hwR21R47%3A1i2wR21R66%3A3i3i10wR52R67%3A0wR21R43%3A2ai1i7i3i5i2i4hai145i100i145i26i100i97hwR21R47%3A1zwR21R66%3A3i7i10wR52R67%3A0wR21R96%3A1i7wR21R43%3A2ai1i3i5i2i4hai145i145i30i100i97hwR21R47%3A1zwR21R54%3A2i1R74wR21R75%3A2li4hwR76R77%3A0wR21R69%3A3i1loR24zR70i4ghwR71R78%3A0wR21R43%3A2ai1hai125hwR21R54%3A2i1y19%3ALancer%2520de%2520rochewR21R69%3A3i1loR24i48R70i2ghwR71y13%3A_GrProjectile%3A3y6%3Arochernd0.13wR21R43%3A2ai1hai88hwR21R96%3A1i2wR21R43%3A2ai3i5i1i4hai145i37i95i97hwR21R47%3A1i1wR21R54%3A2i3y6%3AFoudrewR21R69%3A3i3loR24i26R70i4ghwR71y12%3A_GrLightning%3A0wR21R43%3A2ai3hai118hwR21R43%3A2ai3i5i1i4hai118i47i105i97hwR21R47%3A1i2wR21R48%3A3i3i4wR49R50%3A0wR21R54%3A2i4R59wR21R56%3A2i4wR57R60%3A0wR21R51%3A5i3i4i1wR52R65%3A0wR61R62%3A0wR21R63%3A2i4wR57R60%3A0wR21R51%3A5i3i4i11wR52R65%3A0wR61R62%3A0wR21R51%3A5i3i4nwR52R65%3A0wR61R62%3A0wR21R43%3A2ai3hai105hwR21R64%3A1i3wR21R43%3A2ai5i1i3i4hai47i110i113i97hwR21R47%3A1i1wR21R66%3A3i5i10wR52R67%3A0wR21R43%3A2ai5i1i3i4hai47i113i118i97hwR21R47%3A1zwR21R54%3A2i5R80wR21R69%3A3i5loR24zR70i1goR24i2R70i3ghwR71R81%3A1zwR21R43%3A2ai5hai27hwR21R54%3A2i5R82wR21R56%3A2i4wR57R83%3A0wR21R43%3A2ai5hai7hwR21R43%3A2ai1i3i5i4hai113i145i27i97hwR21R47%3A1i4wR21R66%3A3i3i10wR52R67%3A0wR21R43%3A2ai1i3i5i4hai113i145i45i97hwR21R47%3A1i3wR21R48%3A3i1i4wR49R50%3A0wR21R51%3A5i1i4i10wR52R53%3A0nwR21R54%3A2i4R55wR21R43%3A2ai1hai107hwR21R64%3A1i1wR21R43%3A2ai3i5i1i4hai145i55i117i97hwR21R47%3A1i2wR21R66%3A3i5i10wR52R67%3A0wR21R43%3A2ai3i5i1i4hai145i59i121i97hwR21R47%3A1zwR21R54%3A2i3R101wR21R69%3A3i3loR24i18R70i4ghwR71R102%3A3R103nd0.13wR21R43%3A2ai3hai108hwR21R96%3A1i4wR21y7%3A_HRegen%3A3i3i1wR52y6%3A_LHeal%3A0wR21y8%3A_HFinish%3A2wy13%3A_EndBehavioury8%3A_EBStand%3A0wR109R110%3A0hy9%3A_smonstery59%3Ahttp%253A%252F%252Fdata.dinorpg.com%252Fswf%252Fsmonster.swf%253Fv%253D26g'
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
	debug = !debug;
}
