/* eslint-disable */

document.body.appendChild(
	new DinoAnim.Fight({
		bg: 's_dnv',
		top: 70,
		bottom: 0,
		ground: 'None',
		history: [
			{
				action: 'Add',
				fighter: {
					props: ['Static'],
					dino: true,
					life: 100,
					name: 'Pigmou',
					side: true,
					scale: 1,
					fid: 0,
					gfx: '19hot0hFbItLS000',
					entrance: 'Stand',
					x: 50,
					y: 60
				}
			},
			{
				action: 'Add',
				fighter: {
					props: ['Static'],
					dino: true,
					life: 100,
					name: 'Sirain',
					side: true,
					scale: 1,
					fid: 1,
					gfx: '89e7EDLfIWKJf000',
					entrance: 'Stand',
					x: 150,
					y: 85
				}
			},
			{
				action: 'Add',
				fighter: {
					props: ['Static'],
					dino: true,
					life: 100,
					name: 'Planaile',
					side: true,
					scale: 1,
					fid: 2,
					gfx: '39N9HVcY4gLiQ000',
					entrance: 'Stand',
					x: 85,
					y: 380
				}
			},
			{
				action: 'Flip',
				fid: 1
			},
			{
				action: 'Flip',
				fid: 2
			},
			{
				action: 'Display'
			},
			{
				action: 'Text',
				message: 'Aaah, Dinoville, le joyaux de Dinoland, le point de départ de toute aventure qui se respecte.'
			},
			{
				action: 'Text',
				message:
					"Après un long périple, vous êtes enfin arrivé à votre destination, attiré par des rumeurs d'aventures palpitantes, de richesses, et de gloire."
			},
			{
				action: 'Text',
				message: "C'est ici que vous pourrez recruter votre premier compagnon et..."
			},
			{
				action: 'Shake',
				force: 20,
				frict: 0.9
			},
			{
				action: 'Wait',
				time: 500
			},
			{
				action: 'Emote',
				fids: [0, 1, 2],
				emote: 'Question',
				behaviour: 'Float'
			},
			{
				action: 'Flip',
				fid: 1
			},
			{
				action: 'Flip',
				fid: 2
			},
			{
				action: 'Wait',
				time: 1000
			},
			{
				action: 'Add',
				fighter: {
					props: ['Static'],
					dino: false,
					life: 100,
					name: '???',
					side: false,
					scale: 1,
					fid: -1,
					gfx: 'taurus',
					entrance: 'Run',
					x: 325,
					y: 260
				}
			},
			{
				action: 'Talk',
				fid: -1,
				message: 'Gufufufu...'
			},
			{
				action: 'Talk',
				fid: -1,
				message: 'La surface, enfin ! Cet air frais est incomparable aux miasmes du monde sombre.'
			},
			{
				action: 'Talk',
				fid: -1,
				message: 'Maintenant que le passage est ouvert, il est temps de conquérir ce monde !'
			},
			{
				action: 'Talk',
				fid: -1,
				message: 'Agenouillez-vous devant Taurus ! Votre nouveau maitre !'
			},
			{
				action: 'Emote',
				fids: [0, 1, 2],
				emote: 'Surprise',
				behaviour: 'Bounce'
			},
			{
				action: 'Announce',
				fid: -1,
				message: 'Corruption'
			},
			{
				action: 'Skill',
				skill: 'Corruption',
				details: {
					fid: -1,
					targets: [
						{
							id: 0,
							life: 100
						},
						{
							id: 1,
							life: 100
						},
						{
							id: 2,
							life: 100
						}
					]
				}
			},
			{
				action: 'Dead',
				fid: 0
			},
			{
				action: 'Dead',
				fid: 1
			},
			{
				action: 'Dead',
				fid: 2
			},
			{
				action: 'Talk',
				fid: -1,
				message: 'Pathétic. Conquérir la surface sera encore plus simple que prévu.'
			},
			{
				action: 'Text',
				message:
					'Un monstre terrifiant se dresse devant vous, exhudant une aura maléfique. En regardant autours de vous, tout le monde semble avoir fui le périmètre.'
			},
			{
				action: 'Text',
				message:
					"La vraie question serait de savoir pourquoi vous n'avez pas fait de même, mais il semble maintenant un peu tard pour ça. Taurus vous a remarqué et vous observe d'un regard malsain."
			},
			{
				action: 'Text',
				message:
					'Hélas, il semblerait que votre aventure aura été plus courte que prévue et touche à sa fin. Dommage...'
			},
			{
				action: 'Add',
				fighter: {
					props: ['Static'],
					dino: false,
					life: 100,
					name: '???',
					side: true,
					scale: 1,
					fid: -2,
					gfx: 'mandragore',
					entrance: 'Jump',
					x: 65,
					y: 220
				}
			},
			{
				action: 'Talk',
				fid: -2,
				message:
					"Mais qu'est-ce que c'est que tout ce boucan !? On ne peut même plus profiter de sa retraite en paix par ici ?"
			},
			{
				action: 'Emote',
				fids: [-2],
				emote: 'Surprise',
				behaviour: 'Bounce'
			},
			{
				action: 'Wait',
				time: 1000
			},
			{
				action: 'Talk',
				fid: -2,
				message: 'Un dino sombre ?\nÀ Dinoville ?\nEt pas un petit en plus.\nMais que fiche mon disciple ?'
			},
			{
				action: 'Talk',
				fid: -2,
				message:
					"Voilà ce que c'est que de refiler le bébé aux autres. On part un peu en retraite et PAF, invasion."
			},
			{
				action: 'Talk',
				fid: -1,
				message:
					'Gufufufu. Est-ce là toute la résistance que peut opposer la surface ? Des faiblards et des vieillards ?'
			},
			{
				action: 'Talk',
				fid: -1,
				message: 'Soit ! Fais de ton mieux pour distraire le grand Taurus, vieil homme.'
			},
			{
				action: 'Talk',
				fid: -2,
				message:
					'Houla, respire mon grand. Je suis trop vieux pour ces bétises. Lucette va te raccompagner à ma place.'
			},
			{
				action: 'Add',
				fighter: {
					props: ['Static'],
					dino: false,
					life: 100,
					name: 'Lucette',
					side: true,
					scale: 1,
					fid: -3,
					gfx: 'lucet',
					entrance: 'Fall',
					x: 100,
					y: 260
				}
			},
			{
				action: 'Skill',
				skill: 'Anim',
				details: {
					fid: -3,
					anim: 'stand'
				}
			},
			{
				action: 'Announce',
				fid: -3,
				message: 'Lumière divine'
			},
			{
				action: 'Skill',
				skill: 'DivineLight',
				details: {
					fid: -3,
					targets: [
						{
							id: -1,
							life: 500
						}
					]
				}
			},
			{
				action: 'Skill',
				skill: 'Anim',
				details: {
					fid: -1,
					anim: 'land'
				}
			},
			{
				action: 'Talk',
				fid: -1,
				message: 'Gaah, quelle puissance...'
			},
			{
				action: 'Talk',
				fid: -2,
				message: 'Hahaha. Allez mon grand, il est temps de rentrer.'
			},
			{
				action: 'Emote',
				fids: [-1],
				emote: 'Angry',
				behaviour: 'Grow'
			},
			{
				action: 'Wait',
				time: 1500
			},
			{
				action: 'Talk',
				fid: -1,
				message: 'Grrr, jamais !'
			},
			{
				action: 'Escape',
				fid: -1
			},
			{
				action: 'Talk',
				fid: -2,
				message: 'Eh, reviens ici ! Après lui, Lucette !'
			},
			{
				action: 'Finish',
				left: 'Run',
				right: 'Escape'
			},
			{
				action: 'Text',
				message:
					"Aussi vite qu'ils sont arrivés, les combattants s'enfuient au loin sans vous laisser le temps de réaliser ce qu'il vient de se passer. Apparemment votre aventure ne s'arrêtera pas ici, pfiou."
			},
			{
				action: 'Text',
				message:
					"Il semblerait cependant que cet endroit soit plus dangereux que prévu. Il va vous falloir recruter des compagnons costauds aussi vite que possible afin d'explorer les environs."
			},
			{
				action: 'Text',
				message:
					"Un bon point de départ pourrait être un des trois dinoz évanouis devant vous. Il vous reste une potion d'ange de votre voyage, juste assez pour réanimer l'un d'entre eux. Quelle chance !"
			},
			{
				action: 'Text',
				message:
					"Quand aux deux autres, pas d'inquiétude ! Ils seront sans aucun doute sauvés par un autre aventurier débutant armé d'une potion d'ange passant par hasard au bon endroit au bon moment."
			},
			{
				action: 'Text',
				message: '... Probablement...'
			}
		]
	}).getDisplay()
);
