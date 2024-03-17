/* eslint-disable */

document.body.appendChild(
	new DinoAnim.Fight({
		bg: 's_dnv',
		top: 0,
		bottom: 0,
		ground: 0,
		history: [
			{
				action: DinoAnim.Action.Add,
				fighter: {
					props: [DinoAnim.FighterProperty.Static],
					dino: true,
					life: 100,
					name: 'Pigmou',
					side: true,
					scale: 1,
					fid: 0,
					gfx: '19hot0hFbItLS000',
					entrance: DinoAnim.EntranceEffect.Stand,
					x: 50,
					y: 200
				}
			},
			{
				action: DinoAnim.Action.Add,
				fighter: {
					props: [DinoAnim.FighterProperty.Static],
					dino: true,
					life: 100,
					name: 'Sirain',
					side: true,
					scale: 1,
					fid: 1,
					gfx: '89e7EDLfIWKJf000',
					entrance: DinoAnim.EntranceEffect.Stand,
					x: 150,
					y: 225
				}
			},
			{
				action: DinoAnim.Action.Add,
				fighter: {
					props: [DinoAnim.FighterProperty.Static],
					dino: true,
					life: 100,
					name: 'Planaile',
					side: true,
					scale: 1,
					fid: 2,
					gfx: '39N9HVcY4gLiQ000',
					entrance: DinoAnim.EntranceEffect.Stand,
					x: 85,
					y: 520
				}
			},
			{
				action: DinoAnim.Action.Flip,
				fid: 1
			},
			{
				action: DinoAnim.Action.Flip,
				fid: 2
			},
			{
				action: DinoAnim.Action.Display
			},
			/*{
				action: DinoAnim.Action.Text,
				message: 'Aah, Dinoville, le joyaux de Dinoland, le point de départ de toute aventure qui se respecte.'
			},
			{
				action: DinoAnim.Action.Text,
				message:
					"Après un long périple, vous êtes enfin arrivé à votre destination, attiré par des rumeurs d'aventures palpitantes, de richesses, et de gloire."
			},
			{
				action: DinoAnim.Action.Text,
				message: "C'est ici que vous pourrez recruter votre premier compagnion et..."
			},
			{
				action: DinoAnim.Action.Wait,
				time: 1000
			},
			{
				action: DinoAnim.Action.Flip,
				fid: 1
			},
			{
				action: DinoAnim.Action.Flip,
				fid: 2
			},*/
			{
				action: DinoAnim.Action.Emote,
				fids: [0, 1, 2],
				emote: DinoAnim.EmoteList.Question,
				behaviour: DinoAnim.EmoteBehaviour.Float
			},
			// TODO Add shaking and ! bubble
			{
				action: DinoAnim.Action.Add,
				fighter: {
					props: [DinoAnim.FighterProperty.Static],
					dino: false,
					life: 100,
					name: '???',
					side: false,
					scale: 1,
					fid: -1,
					gfx: 'taurus',
					entrance: DinoAnim.EntranceEffect.Run,
					x: 325,
					y: 400
				}
			},
			{
				action: DinoAnim.Action.Wait,
				time: 1000
			},
			{
				action: DinoAnim.Action.Emote,
				fids: [0, 1, 2],
				emote: DinoAnim.EmoteList.Surprise,
				behaviour: DinoAnim.EmoteBehaviour.Bounce
			},
			/*{
				action: DinoAnim.Action.Talk,
				fid: -1,
				message: 'Gufufufu...'
			},
			{
				action: DinoAnim.Action.Talk,
				fid: -1,
				message: 'La surface, enfin ! Cet air frais est incomparable aux miasmes du monde sombre.'
			},
			{
				action: DinoAnim.Action.Talk,
				fid: -1,
				message: 'Maintenant que le passage est ouvert, le temps des conquètes est enfin là !'
			},
			{
				action: DinoAnim.Action.Talk,
				fid: -1,
				message: 'Agenouillez-vous devant Taurus ! Votre nouveau maitre !'
			},
			{
				action: DinoAnim.Action.Announce,
				fid: -1,
				message: 'Corruption'
			},
			// TODO Add corruption skill
			{
				action: DinoAnim.Action.Skill,
				skill: DinoAnim.SkillList.Tremor,
				details: {
					fid: -1,
					targets: [
						{ id: 0, life: 100 },
						{ id: 1, life: 100 },
						{ id: 2, life: 100 }
					]
				}
			},*/
			{
				action: DinoAnim.Action.Dead,
				fid: 0
			},
			{
				action: DinoAnim.Action.Dead,
				fid: 1
			},
			{
				action: DinoAnim.Action.Dead,
				fid: 2
			},
			/*{
				action: DinoAnim.Action.Talk,
				fid: -1,
				message: 'Pathétic. Conquérir ce monde sera encore plus simple que prévu.'
			},
			{
				action: DinoAnim.Action.Text,
				message:
					'Un monstre terrifiant se dresse devant vous, exhudant une aura maléfique. En regardant autours de vous, tout le monde semble avoir fui le périmètre.'
			},
			{
				action: DinoAnim.Action.Text,
				message:
					"La vraie question serait de savoir pourquoi vous n'avez pas fait de même, mais il semble maintenant un peu tard pour ça. Taurus vous a remarqué et vous observe d'un regard malsain."
			},
			{
				action: DinoAnim.Action.Text,
				message:
					'Hmm... Il semblerait que votre aventure aura été plus courte que prévue et touche à sa fin. Dommage.'
			},*/
			{
				action: DinoAnim.Action.Add,
				fighter: {
					props: [DinoAnim.FighterProperty.Static],
					dino: false,
					life: 100,
					name: '???',
					side: true,
					scale: 1,
					fid: -2,
					gfx: 'mandragore',
					entrance: DinoAnim.EntranceEffect.Jump,
					x: 65,
					y: 360
				}
			},
			/*{
				action: DinoAnim.Action.Talk,
				fid: -2,
				message:
					"Mais qu'est-ce que c'est que tout ce boucan !? On ne peut même plus profiter de sa retraite en paix par ici ?"
			},
			{
				action: DinoAnim.Action.Talk,
				fid: -2,
				message: `Un dino sombre ?
À Dinoville ?
Et pas un petit en plus.
Mais que fiche mon disciple ?`
			},
			{
				action: DinoAnim.Action.Talk,
				fid: -2,
				message:
					"Voilà ce que c'est que de refiler le bébé aux autres. On part un peu en retraite et PAF, invasion."
			},
			{
				action: DinoAnim.Action.Talk,
				fid: -1,
				message:
					'Gufufufu. Est-ce là toute la résistance que peut opposer la surface ? Des faiblards et des vieillards ?'
			},
			{
				action: DinoAnim.Action.Talk,
				fid: -1,
				message: 'Soit ! Fais de ton mieux pour me distraire, vieil homme.'
			},
			{
				action: DinoAnim.Action.Talk,
				fid: -2,
				message:
					'Houla, respire mon grand. Je suis trop vieux pour ces bétises. Lucette va te racompagner à ma place.'
			},*/
			{
				action: DinoAnim.Action.Add,
				fighter: {
					props: [DinoAnim.FighterProperty.Static],
					dino: false,
					life: 100,
					name: 'Lucette',
					side: true,
					scale: 1,
					fid: -3,
					gfx: 'lucet',
					entrance: DinoAnim.EntranceEffect.Fall,
					x: 100,
					y: 400
				}
			},
			{
				action: DinoAnim.Action.Skill,
				skill: DinoAnim.SkillList.Anim,
				details: {
					fid: -3,
					anim: 'stand'
				}
			},
			{
				action: DinoAnim.Action.Announce,
				fid: -3,
				message: 'Lumière divine'
			},
			// TODO add skill Divine Light
			{
				action: DinoAnim.Action.Skill,
				skill: DinoAnim.SkillList.Tremor,
				details: {
					fid: -3,
					targets: [{ id: -1, life: 500 }]
				}
			},
			{
				action: DinoAnim.Action.Skill,
				skill: DinoAnim.SkillList.Anim,
				details: {
					fid: -1,
					anim: 'land'
				}
			},
			{
				action: DinoAnim.Action.Talk,
				fid: -1,
				message: 'Argh, quelle puissance...'
			},
			{
				action: DinoAnim.Action.Talk,
				fid: -2,
				message: 'Hahaha. Allez mon grand, il est temps de rentrer.'
			},
			{
				action: DinoAnim.Action.Emote,
				fids: [-1],
				emote: DinoAnim.EmoteList.Angry,
				behaviour: DinoAnim.EmoteBehaviour.Grow
			},
			{
				action: DinoAnim.Action.Wait,
				time: 1500
			},
			{
				action: DinoAnim.Action.Talk,
				fid: -1,
				message: 'Grrr, jamais !'
			},
			{
				action: DinoAnim.Action.Escape,
				fid: -1
			},
			{
				action: DinoAnim.Action.Talk,
				fid: -2,
				message: 'Eh, reviens ici ! Après lui, Lucette !'
			},
			{
				action: DinoAnim.Action.Finish,
				left: DinoAnim.EndBehaviour.Run,
				right: DinoAnim.EndBehaviour.Escape
			},
			{
				action: DinoAnim.Action.Text,
				message:
					"Aussi vite qu'ils sont arrivés, les combattants s'enfuient au loin sans vous laisser le temps de réaliser ce qu'il vient de se passer. Apparemment votre aventure ne s'arrêtera pas ici, pfiou."
			},
			{
				action: DinoAnim.Action.Text,
				message:
					"Il semblerait cependant que cet endroit soit plus dangereux que prévu. Il va vous falloir recruter des compagnons costauds aussi vite que possible afin d'explorer les environs."
			},
			{
				action: DinoAnim.Action.Text,
				message:
					"Un bon point de départ pourrait être un des trois dinoz évanouis devant vous. Il vous reste une potion d'ange de votre voyage, juste assez pour réanimer l'un d'entre eux. Quelle chance !"
			},
			{
				action: DinoAnim.Action.Text,
				message:
					"Quand aux deux autres, pas d'inquiétude ! Ils seront sans aucun doute sauvés par un autre aventurier débutant armé d'une potion d'ange passant par hasard au bon endroit au bon moment."
			},
			{
				action: DinoAnim.Action.Text,
				message: '... Probablement...'
			}
		]
	}).getDisplay()
);
