import fs from 'fs';

function round(v) {
	return Math.round(v * 1000) / 1000;
}

// Shift an animation to the rigth, duplicationg the given key.
function offsetRight(anim, idx) {
	for (let i = anim.length - 1; i > idx; --i) {
		anim[i] = JSON.parse(JSON.stringify(anim[i - 1]));
	}
	return anim;
}

// Replace the beginning of an animation by the inverse of the end of the animation.
function mirrorFrom(anim, idx, offset = 0) {
	const l = anim.length;
	if (l - (idx + offset) !== idx) {
		throw new Error(`Cannot mirror animation if both sides are not equal (${idx} - ${l - (idx + offset)})`);
	}
	for (let i = idx - 1; i >= 0; --i) {
		anim[i] = JSON.parse(JSON.stringify(anim[idx + offset + (idx - 1 - i)]));
	}
	return anim;
}

function freezeFrame(anim, idx, elem, from = undefined, to = undefined) {
	for (let i = from ?? 0; i <= (to ?? anim.length - 1); ++i) {
		anim[i][elem] = JSON.parse(JSON.stringify(anim[idx][elem]));
	}
	return anim;
}

// Replace the end of an animation by the inverse of the beginning of the animation.
// If there are not enough frames, fill the missing frame with the limit
// If elem is given, only replace the given element.
function mirrorTo(anim, idx, elem) {
	let diff = Math.ceil((anim.length - (idx + 1) - (idx + 1)) / 2);
	for (let i = 0; idx + 1 + i < anim.length; ++i) {
		let tidx = idx + diff - i;
		if (i < diff) {
			tidx = idx;
		}
		if (tidx < 0) {
			tidx = 0;
		}
		if (elem) {
			anim[idx + 1 + i][elem] = JSON.parse(JSON.stringify(anim[tidx][elem]));
		} else {
			anim[idx + 1 + i] = JSON.parse(JSON.stringify(anim[tidx]));
		}
	}
	return anim;
}

// Remove a key from the animation
function removeKey(anim, key) {
	for (const a of anim) {
		a[key] = undefined;
	}
	return anim;
}

function followProperty(t, t_prev, obj_cur, obj_prev, prop) {
	if (obj_cur[prop] == undefined && obj_prev[prop] == undefined) return;
	t[prop] = Math.round(((t_prev[prop] ?? 0) + (obj_cur[prop] ?? 0) - (obj_prev[prop] ?? 0)) * 1000) / 1000;
}

// Make an animation part follow the movement of another part.
function followKey(anim, target, key, start = 0, end = undefined) {
	for (let i = start; i <= (end ?? anim.length - 1); ++i) {
		followProperty(anim[i][target], anim[i - 1][target], anim[i][key], anim[i - 1][key], 'tx');
		followProperty(anim[i][target], anim[i - 1][target], anim[i][key], anim[i - 1][key], 'ty');
		followProperty(anim[i][target], anim[i - 1][target], anim[i][key], anim[i - 1][key], 'a');
		followProperty(anim[i][target], anim[i - 1][target], anim[i][key], anim[i - 1][key], 'b');
		followProperty(anim[i][target], anim[i - 1][target], anim[i][key], anim[i - 1][key], 'c');
		followProperty(anim[i][target], anim[i - 1][target], anim[i][key], anim[i - 1][key], 'd');
	}
	return anim;
}

// Creates a linear movement between two indexes.
function linearMovement(anim, elem, start, end) {
	const keys = [];
	for (const k in anim[start][elem]) {
		if (k != 'l' && typeof anim[start][elem][k] == 'number') {
			keys.push(k);
		}
	}
	for (const k of Object.keys(anim[end][elem])) {
		if (k != 'l' && !keys.includes(k) && typeof anim[end][elem][k] == 'number') {
			keys.push(k);
		}
	}
	const diff = end - start;
	for (let i = 1; start + i < end; ++i) {
		const idx = start + i;
		if (anim[idx][elem].l !== anim[start][elem].l) {
			console.error(`${elem}: Layers of index ${idx} is different from start. Stopping.`);
			return undefined;
		}
		for (const k of keys) {
			anim[idx][elem][k] = round(anim[start][elem][k] + ((anim[end][elem][k] - anim[start][elem][k]) / diff) * i);
		}
	}
	return anim;
}

function reduceBlur(animation) {
	for (const a of animation) {
		for (const k in a) {
			if (a[k].blx !== undefined) {
				a[k].blx = round(a[k].blx / 4);
			}
			if (a[k].bly !== undefined) {
				a[k].bly = round(a[k].bly / 4);
			}
		}
	}
	return animation;
}

const animation = [
	{
		e1: {
			tx: 196.7,
			ty: 69.35,
			blx: 5,
			bly: 5,
			blq: 1,
			l: 0
		}
	},
	{
		e1: {
			tx: 195.65,
			ty: 68.85,
			a: 1.262,
			d: 1.129,
			blx: 6.8,
			bly: 6.8,
			blq: 1,
			l: 0
		}
	},
	{
		e1: {
			tx: 194.65,
			ty: 68.3,
			a: 1.524,
			d: 1.258,
			blx: 8.6,
			bly: 8.6,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 193.55,
			ty: 67.8,
			a: 1.786,
			d: 1.387,
			blx: 10.4,
			bly: 10.4,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 178.45,
			ty: 73.5,
			blx: 5,
			bly: 5,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 192.55,
			ty: 67.3,
			a: 2.048,
			d: 1.516,
			blx: 12.2,
			bly: 12.2,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 177,
			ty: 72.75,
			a: 1.374,
			d: 1.184,
			blx: 7.571,
			bly: 7.571,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 191.5,
			ty: 66.8,
			a: 2.31,
			d: 1.646,
			blx: 14,
			bly: 14,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 175.5,
			ty: 72.05,
			a: 1.749,
			d: 1.369,
			blx: 10.143,
			bly: 10.143,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 190.5,
			ty: 66.3,
			a: 2.572,
			d: 1.775,
			blx: 15.8,
			bly: 15.8,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 174,
			ty: 71.35,
			a: 2.123,
			d: 1.553,
			blx: 12.714,
			bly: 12.714,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 189.5,
			ty: 65.8,
			a: 2.834,
			d: 1.904,
			blx: 17.6,
			bly: 17.6,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 172.55,
			ty: 70.6,
			a: 2.497,
			d: 1.738,
			blx: 15.286,
			bly: 15.286,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 188.4,
			ty: 65.3,
			a: 3.096,
			d: 2.033,
			blx: 19.4,
			bly: 19.4,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 171.05,
			ty: 69.85,
			a: 2.872,
			d: 1.922,
			blx: 17.857,
			bly: 17.857,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 187.4,
			ty: 64.75,
			a: 3.358,
			d: 2.162,
			blx: 21.2,
			bly: 21.2,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 169.6,
			ty: 69.15,
			a: 3.246,
			d: 2.107,
			blx: 20.429,
			bly: 20.429,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 186.35,
			ty: 64.25,
			a: 3.62,
			d: 2.291,
			blx: 23,
			bly: 23,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 168.1,
			ty: 68.4,
			a: 3.62,
			d: 2.291,
			blx: 23,
			bly: 23,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 187.2,
			ty: 64.8,
			a: 3.389,
			d: 2.145,
			blx: 21.714,
			bly: 21.714,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 168.65,
			ty: 68.8,
			a: 3.466,
			d: 2.194,
			blx: 22.143,
			bly: 22.143,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 188.1,
			ty: 65.4,
			a: 3.157,
			d: 1.998,
			blx: 20.429,
			bly: 20.429,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 169.25,
			ty: 69.15,
			a: 3.312,
			d: 2.096,
			blx: 21.286,
			bly: 21.286,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 189,
			ty: 66,
			a: 2.926,
			d: 1.852,
			blx: 19.143,
			bly: 19.143,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 169.85,
			ty: 69.55,
			a: 3.157,
			d: 1.998,
			blx: 20.429,
			bly: 20.429,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 189.95,
			ty: 66.55,
			a: 2.694,
			d: 1.705,
			blx: 17.857,
			bly: 17.857,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 170.5,
			ty: 69.95,
			a: 3.003,
			d: 1.901,
			blx: 19.571,
			bly: 19.571,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 190.9,
			ty: 67.1,
			a: 2.463,
			d: 1.559,
			blx: 16.571,
			bly: 16.571,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 171.15,
			ty: 70.3,
			a: 2.849,
			d: 1.803,
			blx: 18.714,
			bly: 18.714,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 191.75,
			ty: 67.7,
			a: 2.231,
			d: 1.412,
			blx: 15.286,
			bly: 15.286,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 171.7,
			ty: 70.7,
			a: 2.694,
			d: 1.705,
			blx: 17.857,
			bly: 17.857,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 192.7,
			ty: 68.3,
			a: 2,
			d: 1.266,
			blx: 14,
			bly: 14,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 172.35,
			ty: 71.1,
			a: 2.54,
			d: 1.608,
			blx: 17,
			bly: 17,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 193.65,
			ty: 68.9,
			a: 1.769,
			d: 1.119,
			blx: 12.714,
			bly: 12.714,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 172.95,
			ty: 71.5,
			a: 2.386,
			d: 1.51,
			blx: 16.143,
			bly: 16.143,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 194.5,
			ty: 69.45,
			a: 1.537,
			d: 0.973,
			blx: 11.429,
			bly: 11.429,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 173.55,
			ty: 71.85,
			a: 2.231,
			d: 1.412,
			blx: 15.286,
			bly: 15.286,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 195.45,
			ty: 70,
			a: 1.306,
			d: 0.826,
			blx: 10.143,
			bly: 10.143,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 174.15,
			ty: 72.25,
			a: 2.077,
			d: 1.315,
			blx: 14.428,
			bly: 14.428,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 196.4,
			ty: 70.6,
			a: 1.074,
			d: 0.68,
			blx: 8.857,
			bly: 8.857,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 174.8,
			ty: 72.65,
			a: 1.923,
			d: 1.217,
			blx: 13.572,
			bly: 13.572,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 197.3,
			ty: 71.2,
			a: 0.843,
			d: 0.533,
			blx: 7.571,
			bly: 7.571,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 175.35,
			ty: 73,
			a: 1.769,
			d: 1.119,
			blx: 12.714,
			bly: 12.714,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 198.2,
			ty: 71.75,
			a: 0.611,
			d: 0.387,
			blx: 6.286,
			bly: 6.286,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 176,
			ty: 73.4,
			a: 1.614,
			d: 1.022,
			blx: 11.857,
			bly: 11.857,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 199.15,
			ty: 72.35,
			a: 0.38,
			d: 0.24,
			blx: 5,
			bly: 5,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 176.6,
			ty: 73.8,
			a: 1.46,
			d: 0.924,
			blx: 11,
			bly: 11,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 199.15,
			ty: 72.35,
			a: 0.38,
			d: 0.24,
			blx: 5,
			bly: 5,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 177.25,
			ty: 74.15,
			a: 1.306,
			d: 0.826,
			blx: 10.143,
			bly: 10.143,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 199.15,
			ty: 72.35,
			a: 0.38,
			d: 0.24,
			blx: 5,
			bly: 5,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 177.8,
			ty: 74.55,
			a: 1.151,
			d: 0.729,
			blx: 9.286,
			bly: 9.286,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 199.15,
			ty: 72.35,
			a: 0.38,
			d: 0.24,
			blx: 5,
			bly: 5,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 178.45,
			ty: 74.95,
			a: 0.997,
			d: 0.631,
			blx: 8.429,
			bly: 8.429,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 199.15,
			ty: 72.35,
			a: 0.38,
			d: 0.24,
			blx: 5,
			bly: 5,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 179.1,
			ty: 75.3,
			a: 0.843,
			d: 0.533,
			blx: 7.571,
			bly: 7.571,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 199.15,
			ty: 72.35,
			a: 0.38,
			d: 0.24,
			blx: 5,
			bly: 5,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 179.65,
			ty: 75.7,
			a: 0.688,
			d: 0.436,
			blx: 6.714,
			bly: 6.714,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 199.15,
			ty: 72.35,
			a: 0.38,
			d: 0.24,
			blx: 5,
			bly: 5,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 180.3,
			ty: 76.15,
			a: 0.534,
			d: 0.338,
			blx: 5.857,
			bly: 5.857,
			blq: 1,
			l: 0
		}
	},
	{
		e2: {
			tx: 199.15,
			ty: 72.35,
			a: 0.38,
			d: 0.24,
			blx: 5,
			bly: 5,
			blq: 1,
			l: 1
		},
		e1: {
			tx: 180.9,
			ty: 76.5,
			a: 0.38,
			d: 0.24,
			blx: 5,
			bly: 5,
			blq: 1,
			l: 0
		}
	}
];

//const result = mirrorTo(animation, 12, 'r_f_lower_leg');
//let result = freezeFrame(freezeFrame(animation, 43, 'sp_10', 43), 43, 'sp_4', 43);
//let result = linearMovement(linearMovement(animation, 'sp_4', 0, 9), 'sp_10', 0, 9);
let result = reduceBlur(animation);

fs.writeFileSync('./results/animation_fix.txt', JSON.stringify(result, undefined, '\t'));
