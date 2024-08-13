// @ts-check
import { ref } from '../../references.js';

// 3858
export const rhubar_attack_smear = {
	parts: {
		a1: [
			{
				ref: ref.rhubar.attack_smear_1
			}
		],
		a2: [
			{
				ref: ref.rhubar.attack_smear_2
			}
		],
		a3: [
			{
				ref: ref.rhubar.attack_smear_3
			}
		],
		a4: [
			{
				ref: ref.rhubar.attack_smear_4
			}
		],
		a5: [
			{
				ref: ref.rhubar.attack_smear_5
			}
		],
		a6: [
			{
				ref: ref.rhubar.attack_smear_6
			}
		],
		a7: [
			{
				ref: ref.rhubar.attack_smear_7
			}
		]
	},
	animation: {
		id: 'rhubar_attack_smear',
		callbacks: {
			6: [['stop']]
		},
		frames: [{ a1: {} }, { a2: {} }, { a3: {} }, { a4: {} }, { a5: {} }, { a6: {} }, { a7: {} }]
	}
};
