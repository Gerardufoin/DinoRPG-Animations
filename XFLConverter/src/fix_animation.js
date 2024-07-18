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
function followKey(anim, target, key, start = 1, end = undefined) {
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

function changeLayers(animation, layers) {
	for (let i = 0; i < animation.length; ++i) {
		for (const k in animation[i]) {
			if (layers[k]) {
				animation[i][k].l = layers[k];
			}
		}
		animation[i] = Object.keys(animation[i])
			.sort((a, b) => animation[i][b].l - animation[i][a].l)
			.reduce((newAnim, key) => {
				newAnim[key] = animation[i][key];
				return newAnim;
			}, {});
	}
	return animation;
}

// Change a part layer to the chosen one. All the other part are moved up accordingly
function changeLayer(animation, name, layer) {
	for (const a of animation) {
		if (a[name]) {
			const ref = a[name].l;
			for (const k of Object.keys(a)) {
				if (a[k].l !== undefined) {
					if (ref > layer && a[k].l < ref && a[k].l >= layer) {
						a[k].l++;
					} else if (ref < layer && a[k].l > ref && a[k].l <= layer) {
						a[k].l--;
					}
				}
			}
			a[name].l = layer;
		}
	}
	return animation;
}

function addPart(animation, name, part) {
	for (const a of animation) {
		let l = -1;
		for (const k of Object.keys(a)) {
			l = Math.max(l, a[k].l ?? 0);
		}
		const p = JSON.parse(JSON.stringify(part));
		p.l = l + 1;
		a[name] = p;
	}
	return animation;
}

const animation = [
	{
		l_b_arm: {
			tx: 4.1,
			ty: -28.75,
			a: -0.057,
			b: 0.994,
			c: -0.994,
			d: -0.057,
			l: 16
		},
		l_t_arm: {
			tx: 0.2,
			ty: -40.95,
			a: 0.934,
			b: -0.327,
			c: 0.307,
			d: 0.704,
			l: 15
		},
		l_hand: {
			tx: 3.5,
			ty: -13.15,
			a: 0.948,
			b: -0.309,
			c: 0.309,
			d: 0.948,
			l: 14
		},
		l_b_leg: {
			tx: -1.7,
			ty: -11.5,
			l: 13
		},
		l_foot: {
			tx: 1.15,
			ty: 5.2,
			l: 12
		},
		l_t_leg: {
			tx: -0.35,
			ty: -27.9,
			l: 11
		},
		head: {
			tx: -1.3,
			ty: -56.65,
			a: 0.958,
			b: 0.28,
			c: -0.283,
			d: 0.955,
			l: 10
		},
		body: {
			tx: -2.25,
			ty: -37,
			l: 9
		},
		butt: {
			tx: -2.85,
			ty: -34.65,
			l: 8
		},
		r_b_leg: {
			tx: -4.85,
			ty: -14.6,
			a: 0.992,
			b: -0.118,
			c: 0.118,
			d: 0.992,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 7
		},
		r_foot: {
			tx: -0.25,
			ty: 1.85,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 6
		},
		r_t_arm: {
			tx: -1.05,
			ty: -30.2,
			a: 0.987,
			b: 0.152,
			c: -0.152,
			d: 0.987,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 5
		},
		neck: {
			tx: -0.2,
			ty: -41.75,
			d: 1.103,
			l: 4
		},
		leaves: {
			tx: 3.6,
			ty: -55.55,
			l: 3
		},
		r_b_arm: {
			tx: -3.65,
			ty: -30.35,
			a: -0.362,
			b: 0.93,
			c: -0.93,
			d: -0.362,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 2
		},
		r_hand: {
			tx: -9.1,
			ty: -15.1,
			a: 0.974,
			b: -0.221,
			c: 0.221,
			d: 0.974,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 1
		},
		r_t_leg: {
			tx: -1.45,
			ty: -42.2,
			a: 0.995,
			b: 0.048,
			c: -0.07,
			d: 0.755,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 0
		}
	},
	{
		l_b_arm: {
			tx: 4.1,
			ty: -28.7,
			a: -0.074,
			b: 0.993,
			c: -0.993,
			d: -0.074,
			l: 16
		},
		l_t_arm: {
			tx: 0.15,
			ty: -40.95,
			a: 0.933,
			b: -0.326,
			c: 0.306,
			d: 0.703,
			l: 15
		},
		l_hand: {
			tx: 3.25,
			ty: -13,
			a: 0.942,
			b: -0.325,
			c: 0.325,
			d: 0.942,
			l: 14
		},
		l_b_leg: {
			tx: -1.25,
			ty: -11.5,
			l: 13
		},
		l_foot: {
			tx: 1.6,
			ty: 5.2,
			l: 12
		},
		l_t_leg: {
			tx: -0.25,
			ty: -27.9,
			b: -0.027,
			c: 0.027,
			l: 11
		},
		head: {
			tx: -1.5,
			ty: -56.5,
			a: 0.957,
			b: 0.279,
			c: -0.283,
			d: 0.954,
			l: 10
		},
		body: {
			tx: -2.25,
			ty: -36.9,
			l: 9
		},
		butt: {
			tx: -2.85,
			ty: -34.55,
			l: 8
		},
		r_b_leg: {
			tx: -5,
			ty: -14.65,
			a: 0.993,
			b: -0.105,
			c: 0.105,
			d: 0.993,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 7
		},
		r_foot: {
			tx: -0.65,
			ty: 1.85,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 6
		},
		r_t_arm: {
			tx: -1,
			ty: -30.2,
			a: 0.985,
			b: 0.165,
			c: -0.165,
			d: 0.985,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 5
		},
		neck: {
			tx: -0.2,
			ty: -41.7,
			b: -0.022,
			c: 0.025,
			d: 1.102,
			l: 4
		},
		leaves: {
			tx: 3.35,
			ty: -55.4,
			b: 0.005,
			c: -0.005,
			l: 3
		},
		r_b_arm: {
			tx: -3.7,
			ty: -30.3,
			a: -0.386,
			b: 0.918,
			c: -0.918,
			d: -0.386,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 2
		},
		r_hand: {
			tx: -9.4,
			ty: -15.1,
			a: 0.962,
			b: -0.263,
			c: 0.263,
			d: 0.962,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 1
		},
		r_t_leg: {
			tx: -1.5,
			ty: -42.15,
			a: 0.995,
			b: 0.048,
			c: -0.07,
			d: 0.755,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 0
		}
	},
	{
		l_b_arm: {
			tx: 4.1,
			ty: -28.55,
			a: -0.092,
			b: 0.991,
			c: -0.991,
			d: -0.092,
			l: 16
		},
		l_t_arm: {
			tx: 0.15,
			ty: -40.9,
			a: 0.933,
			b: -0.326,
			c: 0.306,
			d: 0.703,
			l: 15
		},
		l_hand: {
			tx: 3.1,
			ty: -12.95,
			a: 0.936,
			b: -0.342,
			c: 0.342,
			d: 0.936,
			l: 14
		},
		l_b_leg: {
			tx: -0.8,
			ty: -11.5,
			l: 13
		},
		l_foot: {
			tx: 2.05,
			ty: 5.2,
			l: 12
		},
		l_t_leg: {
			tx: -0.15,
			ty: -27.85,
			a: 0.998,
			b: -0.057,
			c: 0.057,
			d: 0.998,
			l: 11
		},
		head: {
			tx: -1.65,
			ty: -56.3,
			a: 0.957,
			b: 0.279,
			c: -0.283,
			d: 0.954,
			l: 10
		},
		body: {
			tx: -2.25,
			ty: -36.85,
			l: 9
		},
		butt: {
			tx: -2.85,
			ty: -34.5,
			l: 8
		},
		r_b_leg: {
			tx: -5.3,
			ty: -14.65,
			a: 0.994,
			b: -0.092,
			c: 0.092,
			d: 0.994,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 7
		},
		r_foot: {
			tx: -1.05,
			ty: 1.85,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 6
		},
		r_t_arm: {
			tx: -0.95,
			ty: -30.3,
			a: 0.982,
			b: 0.178,
			c: -0.178,
			d: 0.982,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 5
		},
		neck: {
			tx: -0.15,
			ty: -41.6,
			a: 0.999,
			b: -0.044,
			c: 0.049,
			d: 1.102,
			l: 4
		},
		leaves: {
			tx: 3.15,
			ty: -55.25,
			b: 0.01,
			c: -0.01,
			l: 3
		},
		r_b_arm: {
			tx: -3.75,
			ty: -30.2,
			a: -0.41,
			b: 0.908,
			c: -0.908,
			d: -0.41,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 2
		},
		r_hand: {
			tx: -9.65,
			ty: -15.05,
			a: 0.95,
			b: -0.304,
			c: 0.304,
			d: 0.95,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 1
		},
		r_t_leg: {
			tx: -1.65,
			ty: -42.05,
			a: 0.995,
			b: 0.048,
			c: -0.07,
			d: 0.755,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 0
		}
	},
	{
		l_b_arm: {
			tx: 4.05,
			ty: -28.5,
			a: -0.109,
			b: 0.989,
			c: -0.989,
			d: -0.109,
			l: 16
		},
		l_t_arm: {
			tx: 0.15,
			ty: -40.85,
			a: 0.933,
			b: -0.326,
			c: 0.306,
			d: 0.703,
			l: 15
		},
		l_hand: {
			tx: 2.85,
			ty: -12.8,
			a: 0.929,
			b: -0.358,
			c: 0.358,
			d: 0.929,
			l: 14
		},
		l_b_leg: {
			tx: -0.35,
			ty: -11.5,
			l: 13
		},
		l_foot: {
			tx: 2.5,
			ty: 5.2,
			l: 12
		},
		l_t_leg: {
			tx: -0.05,
			ty: -27.85,
			a: 0.996,
			b: -0.084,
			c: 0.084,
			d: 0.996,
			l: 11
		},
		head: {
			tx: -1.85,
			ty: -56.15,
			a: 0.957,
			b: 0.279,
			c: -0.283,
			d: 0.954,
			l: 10
		},
		body: {
			tx: -2.25,
			ty: -36.75,
			l: 9
		},
		butt: {
			tx: -2.85,
			ty: -34.4,
			l: 8
		},
		r_b_leg: {
			tx: -5.5,
			ty: -14.65,
			a: 0.995,
			b: -0.083,
			c: 0.083,
			d: 0.995,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 7
		},
		r_foot: {
			tx: -1.45,
			ty: 1.85,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 6
		},
		r_t_arm: {
			tx: -0.9,
			ty: -30.3,
			a: 0.98,
			b: 0.191,
			c: -0.191,
			d: 0.98,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 5
		},
		neck: {
			tx: -0.15,
			ty: -41.55,
			a: 0.997,
			b: -0.07,
			c: 0.077,
			d: 1.1,
			l: 4
		},
		leaves: {
			tx: 2.9,
			ty: -55.1,
			b: 0.018,
			c: -0.018,
			l: 3
		},
		r_b_arm: {
			tx: -3.75,
			ty: -30.1,
			a: -0.434,
			b: 0.896,
			c: -0.896,
			d: -0.434,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 2
		},
		r_hand: {
			tx: -9.95,
			ty: -15.05,
			a: 0.935,
			b: -0.346,
			c: 0.346,
			d: 0.935,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 1
		},
		r_t_leg: {
			tx: -1.75,
			ty: -41.9,
			a: 0.995,
			b: 0.048,
			c: -0.07,
			d: 0.755,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 0
		}
	},
	{
		l_b_arm: {
			tx: 4.05,
			ty: -28.4,
			a: -0.13,
			b: 0.987,
			c: -0.987,
			d: -0.13,
			l: 16
		},
		l_t_arm: {
			tx: 0.15,
			ty: -40.8,
			a: 0.933,
			b: -0.326,
			c: 0.306,
			d: 0.703,
			l: 15
		},
		l_hand: {
			tx: 2.55,
			ty: -12.7,
			a: 0.921,
			b: -0.378,
			c: 0.378,
			d: 0.921,
			l: 14
		},
		l_b_leg: {
			tx: 0.1,
			ty: -11.5,
			l: 13
		},
		l_foot: {
			tx: 2.95,
			ty: 5.2,
			l: 12
		},
		l_t_leg: {
			tx: 0.05,
			ty: -27.8,
			a: 0.993,
			b: -0.114,
			c: 0.114,
			d: 0.993,
			l: 11
		},
		head: {
			tx: -2.05,
			ty: -55.95,
			a: 0.957,
			b: 0.279,
			c: -0.283,
			d: 0.954,
			l: 10
		},
		body: {
			tx: -2.25,
			ty: -36.7,
			l: 9
		},
		butt: {
			tx: -2.85,
			ty: -34.35,
			l: 8
		},
		r_b_leg: {
			tx: -5.7,
			ty: -14.7,
			a: 0.996,
			b: -0.071,
			c: 0.071,
			d: 0.996,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 7
		},
		r_foot: {
			tx: -1.85,
			ty: 1.85,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 6
		},
		r_t_arm: {
			tx: -0.8,
			ty: -30.4,
			a: 0.977,
			b: 0.204,
			c: -0.204,
			d: 0.977,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 5
		},
		neck: {
			tx: -0.15,
			ty: -41.45,
			a: 0.995,
			b: -0.092,
			c: 0.102,
			d: 1.098,
			l: 4
		},
		leaves: {
			tx: 2.65,
			ty: -54.95,
			b: 0.023,
			c: -0.023,
			l: 3
		},
		r_b_arm: {
			tx: -3.7,
			ty: -30,
			a: -0.457,
			b: 0.884,
			c: -0.884,
			d: -0.457,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 2
		},
		r_hand: {
			tx: -10.3,
			ty: -15.05,
			a: 0.919,
			b: -0.386,
			c: 0.386,
			d: 0.919,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 1
		},
		r_t_leg: {
			tx: -1.9,
			ty: -41.8,
			a: 0.995,
			b: 0.048,
			c: -0.069,
			d: 0.755,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 0
		}
	},
	{
		l_b_arm: {
			tx: 4.1,
			ty: -28.3,
			a: -0.148,
			b: 0.984,
			c: -0.984,
			d: -0.148,
			l: 16
		},
		l_t_arm: {
			tx: 0.15,
			ty: -40.75,
			a: 0.933,
			b: -0.326,
			c: 0.306,
			d: 0.703,
			l: 15
		},
		l_hand: {
			tx: 2.35,
			ty: -12.55,
			a: 0.914,
			b: -0.394,
			c: 0.394,
			d: 0.914,
			l: 14
		},
		l_b_leg: {
			tx: 0.5,
			ty: -11.5,
			l: 13
		},
		l_foot: {
			tx: 3.35,
			ty: 5.2,
			l: 12
		},
		l_t_leg: {
			tx: 0.15,
			ty: -27.8,
			a: 0.989,
			b: -0.144,
			c: 0.144,
			d: 0.989,
			l: 11
		},
		head: {
			tx: -2.2,
			ty: -55.85,
			a: 0.956,
			b: 0.279,
			c: -0.283,
			d: 0.954,
			l: 10
		},
		body: {
			tx: -2.25,
			ty: -36.6,
			l: 9
		},
		butt: {
			tx: -2.85,
			ty: -34.25,
			l: 8
		},
		r_b_leg: {
			tx: -5.95,
			ty: -14.7,
			a: 0.997,
			b: -0.061,
			c: 0.061,
			d: 0.997,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 7
		},
		r_foot: {
			tx: -2.25,
			ty: 1.85,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 6
		},
		r_t_arm: {
			tx: -0.8,
			ty: -30.4,
			a: 0.974,
			b: 0.217,
			c: -0.217,
			d: 0.974,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 5
		},
		neck: {
			tx: -0.1,
			ty: -41.4,
			a: 0.993,
			b: -0.114,
			c: 0.126,
			d: 1.095,
			l: 4
		},
		leaves: {
			tx: 2.45,
			ty: -54.8,
			a: 0.999,
			b: 0.031,
			c: -0.031,
			d: 0.999,
			l: 3
		},
		r_b_arm: {
			tx: -3.75,
			ty: -29.85,
			a: -0.483,
			b: 0.87,
			c: -0.87,
			d: -0.483,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 2
		},
		r_hand: {
			tx: -10.6,
			ty: -15.05,
			a: 0.901,
			b: -0.426,
			c: 0.426,
			d: 0.901,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 1
		},
		r_t_leg: {
			tx: -2.05,
			ty: -41.7,
			a: 0.995,
			b: 0.048,
			c: -0.069,
			d: 0.755,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 0
		}
	},
	{
		l_b_arm: {
			tx: 4.05,
			ty: -28.25,
			a: -0.165,
			b: 0.981,
			c: -0.981,
			d: -0.165,
			l: 16
		},
		l_t_arm: {
			tx: 0.15,
			ty: -40.7,
			a: 0.933,
			b: -0.326,
			c: 0.306,
			d: 0.703,
			l: 15
		},
		l_hand: {
			tx: 2.1,
			ty: -12.45,
			a: 0.907,
			b: -0.41,
			c: 0.41,
			d: 0.907,
			l: 14
		},
		l_b_leg: {
			tx: 0.95,
			ty: -11.5,
			l: 13
		},
		l_foot: {
			tx: 3.8,
			ty: 5.2,
			l: 12
		},
		l_t_leg: {
			tx: 0.25,
			ty: -27.75,
			a: 0.985,
			b: -0.17,
			c: 0.17,
			d: 0.985,
			l: 11
		},
		head: {
			tx: -2.4,
			ty: -55.65,
			a: 0.956,
			b: 0.279,
			c: -0.283,
			d: 0.954,
			l: 10
		},
		body: {
			tx: -2.25,
			ty: -36.5,
			l: 9
		},
		butt: {
			tx: -2.85,
			ty: -34.15,
			l: 8
		},
		r_b_leg: {
			tx: -6.15,
			ty: -14.7,
			a: 0.997,
			b: -0.049,
			c: 0.049,
			d: 0.997,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 7
		},
		r_foot: {
			tx: -2.65,
			ty: 1.85,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 6
		},
		r_t_arm: {
			tx: -0.8,
			ty: -30.45,
			a: 0.971,
			b: 0.229,
			c: -0.229,
			d: 0.971,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 5
		},
		neck: {
			tx: -0.05,
			ty: -41.3,
			a: 0.989,
			b: -0.139,
			c: 0.154,
			d: 1.091,
			l: 4
		},
		leaves: {
			tx: 2.2,
			ty: -54.65,
			a: 0.999,
			b: 0.036,
			c: -0.036,
			d: 0.999,
			l: 3
		},
		r_b_arm: {
			tx: -3.7,
			ty: -29.55,
			a: -0.506,
			b: 0.858,
			c: -0.858,
			d: -0.506,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 2
		},
		r_hand: {
			tx: -11.35,
			ty: -15.65,
			a: 0.883,
			b: -0.465,
			c: 0.465,
			d: 0.883,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 1
		},
		r_t_leg: {
			tx: -1.4,
			ty: -41.45,
			a: 0.995,
			b: 0.048,
			c: -0.07,
			d: 0.755,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 0
		}
	},
	{
		l_b_arm: {
			tx: 4.05,
			ty: -28.2,
			a: -0.186,
			b: 0.977,
			c: -0.977,
			d: -0.186,
			l: 16
		},
		l_t_arm: {
			tx: 0.2,
			ty: -40.6,
			a: 0.933,
			b: -0.326,
			c: 0.306,
			d: 0.703,
			l: 15
		},
		l_hand: {
			tx: 1.9,
			ty: -12.3,
			a: 0.898,
			b: -0.429,
			c: 0.429,
			d: 0.898,
			l: 14
		},
		l_b_leg: {
			tx: 1.4,
			ty: -11.5,
			l: 13
		},
		l_foot: {
			tx: 4.25,
			ty: 5.2,
			l: 12
		},
		l_t_leg: {
			tx: 0.35,
			ty: -27.75,
			a: 0.979,
			b: -0.2,
			c: 0.2,
			d: 0.979,
			l: 11
		},
		head: {
			tx: -2.55,
			ty: -55.5,
			a: 0.956,
			b: 0.279,
			c: -0.283,
			d: 0.954,
			l: 10
		},
		body: {
			tx: -2.25,
			ty: -36.45,
			l: 9
		},
		butt: {
			tx: -2.85,
			ty: -34.1,
			l: 8
		},
		r_b_leg: {
			tx: -6.4,
			ty: -14.75,
			a: 0.998,
			b: -0.039,
			c: 0.039,
			d: 0.998,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 7
		},
		r_foot: {
			tx: -3.05,
			ty: 1.85,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 6
		},
		r_t_arm: {
			tx: -0.75,
			ty: -30.55,
			a: 0.968,
			b: 0.242,
			c: -0.242,
			d: 0.968,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 5
		},
		neck: {
			tx: -0.05,
			ty: -41.2,
			a: 0.986,
			b: -0.161,
			c: 0.178,
			d: 1.087,
			l: 4
		},
		leaves: {
			tx: 1.95,
			ty: -54.5,
			a: 0.999,
			b: 0.044,
			c: -0.044,
			d: 0.999,
			l: 3
		},
		r_b_arm: {
			tx: -3.65,
			ty: -29.6,
			a: -0.495,
			b: 0.863,
			c: -0.863,
			d: -0.495,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 2
		},
		r_hand: {
			tx: -11.25,
			ty: -15.7,
			a: 0.891,
			b: -0.446,
			c: 0.446,
			d: 0.891,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 1
		},
		r_t_leg: {
			tx: -1.3,
			ty: -41.55,
			a: 0.995,
			b: 0.048,
			c: -0.069,
			d: 0.755,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 0
		}
	},
	{
		l_b_arm: {
			tx: 4,
			ty: -28.15,
			a: -0.203,
			b: 0.974,
			c: -0.974,
			d: -0.203,
			l: 16
		},
		l_t_arm: {
			tx: 0.15,
			ty: -40.5,
			a: 0.933,
			b: -0.326,
			c: 0.306,
			d: 0.703,
			l: 15
		},
		l_hand: {
			tx: 1.6,
			ty: -12.15,
			a: 0.89,
			b: -0.445,
			c: 0.445,
			d: 0.89,
			l: 14
		},
		l_b_leg: {
			tx: 1.85,
			ty: -11.5,
			l: 13
		},
		l_foot: {
			tx: 4.7,
			ty: 5.2,
			l: 12
		},
		l_t_leg: {
			tx: 0.45,
			ty: -27.7,
			a: 0.973,
			b: -0.23,
			c: 0.23,
			d: 0.973,
			l: 11
		},
		head: {
			tx: -2.75,
			ty: -55.35,
			a: 0.956,
			b: 0.279,
			c: -0.283,
			d: 0.954,
			l: 10
		},
		body: {
			tx: -2.25,
			ty: -36.35,
			l: 9
		},
		butt: {
			tx: -2.85,
			ty: -34,
			l: 8
		},
		r_b_leg: {
			tx: -6.6,
			ty: -14.8,
			a: 0.998,
			b: -0.027,
			c: 0.027,
			d: 0.998,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 7
		},
		r_foot: {
			tx: -3.45,
			ty: 1.85,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 6
		},
		r_t_arm: {
			tx: -0.75,
			ty: -30.55,
			a: 0.964,
			b: 0.255,
			c: -0.255,
			d: 0.964,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 5
		},
		neck: {
			tx: -0.05,
			ty: -41.1,
			a: 0.981,
			b: -0.187,
			c: 0.206,
			d: 1.082,
			l: 4
		},
		leaves: {
			tx: 1.75,
			ty: -54.3,
			a: 0.998,
			b: 0.049,
			c: -0.049,
			d: 0.998,
			l: 3
		},
		r_b_arm: {
			tx: -3.7,
			ty: -29.65,
			a: -0.484,
			b: 0.869,
			c: -0.869,
			d: -0.484,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 2
		},
		r_hand: {
			tx: -11.1,
			ty: -15.7,
			a: 0.899,
			b: -0.43,
			c: 0.43,
			d: 0.899,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 1
		},
		r_t_leg: {
			tx: -1.25,
			ty: -41.6,
			a: 0.995,
			b: 0.048,
			c: -0.069,
			d: 0.755,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 0
		}
	},
	{
		l_b_arm: {
			tx: 4,
			ty: -28.05,
			a: -0.22,
			b: 0.97,
			c: -0.97,
			d: -0.22,
			l: 16
		},
		l_t_arm: {
			tx: 0.15,
			ty: -40.45,
			a: 0.933,
			b: -0.326,
			c: 0.306,
			d: 0.703,
			l: 15
		},
		l_hand: {
			tx: 1.4,
			ty: -12.1,
			a: 0.882,
			b: -0.461,
			c: 0.461,
			d: 0.882,
			l: 14
		},
		l_b_leg: {
			tx: 2.3,
			ty: -11.5,
			l: 13
		},
		l_foot: {
			tx: 5.15,
			ty: 5.2,
			l: 12
		},
		l_t_leg: {
			tx: -0.3,
			ty: -27.9,
			a: 0.966,
			b: -0.259,
			c: 0.259,
			d: 0.966,
			l: 11
		},
		head: {
			tx: -2.95,
			ty: -55.2,
			a: 0.956,
			b: 0.279,
			c: -0.283,
			d: 0.954,
			l: 10
		},
		body: {
			tx: -2.25,
			ty: -36.3,
			l: 9
		},
		butt: {
			tx: -2.85,
			ty: -33.95,
			l: 8
		},
		r_b_leg: {
			tx: -6.8,
			ty: -14.75,
			a: 0.998,
			b: -0.014,
			c: 0.014,
			d: 0.998,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 7
		},
		r_foot: {
			tx: -3.85,
			ty: 1.85,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 6
		},
		r_t_arm: {
			tx: -0.65,
			ty: -30.6,
			a: 0.961,
			b: 0.268,
			c: -0.268,
			d: 0.961,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 5
		},
		neck: {
			tx: -0.05,
			ty: -41.15,
			a: 0.977,
			b: -0.208,
			c: 0.23,
			d: 1.077,
			l: 4
		},
		leaves: {
			tx: 1.5,
			ty: -54.2,
			a: 0.998,
			b: 0.053,
			c: -0.053,
			d: 0.998,
			l: 3
		},
		r_b_arm: {
			tx: -3.65,
			ty: -29.65,
			a: -0.476,
			b: 0.874,
			c: -0.874,
			d: -0.476,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 2
		},
		r_hand: {
			tx: -10.85,
			ty: -15.7,
			a: 0.907,
			b: -0.414,
			c: 0.414,
			d: 0.907,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 1
		},
		r_t_leg: {
			tx: -1.2,
			ty: -41.65,
			a: 0.995,
			b: 0.048,
			c: -0.069,
			d: 0.755,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 0
		}
	},
	{
		l_b_arm: {
			tx: 4,
			ty: -27.95,
			a: -0.238,
			b: 0.966,
			c: -0.966,
			d: -0.238,
			l: 16
		},
		l_t_arm: {
			tx: 0.15,
			ty: -40.4,
			a: 0.933,
			b: -0.326,
			c: 0.306,
			d: 0.703,
			l: 15
		},
		l_hand: {
			tx: 1.2,
			ty: -11.95,
			a: 0.874,
			b: -0.476,
			c: 0.476,
			d: 0.874,
			l: 14
		},
		l_b_leg: {
			tx: 1.95,
			ty: -11.5,
			l: 13
		},
		l_foot: {
			tx: 4.8,
			ty: 5.2,
			l: 12
		},
		l_t_leg: {
			tx: -0.45,
			ty: -27.9,
			a: 0.971,
			b: -0.234,
			c: 0.234,
			d: 0.971,
			l: 11
		},
		head: {
			tx: -3.1,
			ty: -55,
			a: 0.956,
			b: 0.279,
			c: -0.283,
			d: 0.953,
			l: 10
		},
		body: {
			tx: -2.25,
			ty: -36.2,
			l: 9
		},
		butt: {
			tx: -2.85,
			ty: -33.85,
			l: 8
		},
		r_b_leg: {
			tx: -7.05,
			ty: -14.8,
			a: 0.998,
			b: -0.005,
			c: 0.005,
			d: 0.998,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 7
		},
		r_foot: {
			tx: -4.25,
			ty: 1.85,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 6
		},
		r_t_arm: {
			tx: -0.65,
			ty: -30.65,
			a: 0.957,
			b: 0.28,
			c: -0.28,
			d: 0.957,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 5
		},
		neck: {
			tx: 0,
			ty: -41,
			a: 0.972,
			b: -0.23,
			c: 0.254,
			d: 1.072,
			l: 4
		},
		leaves: {
			tx: 1.25,
			ty: -54,
			a: 0.998,
			b: 0.061,
			c: -0.061,
			d: 0.998,
			l: 3
		},
		r_b_arm: {
			tx: -3.6,
			ty: -29.7,
			a: -0.465,
			b: 0.88,
			c: -0.88,
			d: -0.465,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 2
		},
		r_hand: {
			tx: -10.75,
			ty: -15.75,
			a: 0.915,
			b: -0.395,
			c: 0.395,
			d: 0.915,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 1
		},
		r_t_leg: {
			tx: -1.15,
			ty: -41.65,
			a: 0.995,
			b: 0.048,
			c: -0.069,
			d: 0.755,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 0
		}
	},
	{
		l_b_arm: {
			tx: 4,
			ty: -27.8,
			a: -0.258,
			b: 0.961,
			c: -0.961,
			d: -0.258,
			l: 16
		},
		l_t_arm: {
			tx: 0.15,
			ty: -40.35,
			a: 0.933,
			b: -0.326,
			c: 0.306,
			d: 0.703,
			l: 15
		},
		l_hand: {
			tx: 0.9,
			ty: -11.85,
			a: 0.863,
			b: -0.495,
			c: 0.495,
			d: 0.863,
			l: 14
		},
		l_b_leg: {
			tx: 1.55,
			ty: -11.5,
			l: 13
		},
		l_foot: {
			tx: 4.4,
			ty: 5.2,
			l: 12
		},
		l_t_leg: {
			tx: -0.45,
			ty: -28,
			a: 0.976,
			b: -0.212,
			c: 0.212,
			d: 0.976,
			l: 11
		},
		head: {
			tx: -3.3,
			ty: -54.85,
			a: 0.957,
			b: 0.279,
			c: -0.283,
			d: 0.954,
			l: 10
		},
		body: {
			tx: -2.25,
			ty: -36.3,
			l: 9
		},
		butt: {
			tx: -2.85,
			ty: -33.95,
			l: 8
		},
		r_b_leg: {
			tx: -7.25,
			ty: -14.8,
			a: 0.998,
			b: 0.005,
			c: -0.005,
			d: 0.998,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 7
		},
		r_foot: {
			tx: -4.65,
			ty: 1.85,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 6
		},
		r_t_arm: {
			tx: -1.1,
			ty: -30.15,
			a: 0.953,
			b: 0.295,
			c: -0.295,
			d: 0.953,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 5
		},
		neck: {
			tx: 0,
			ty: -40.95,
			a: 0.966,
			b: -0.256,
			c: 0.282,
			d: 1.065,
			l: 4
		},
		leaves: {
			tx: 1.05,
			ty: -53.9,
			a: 0.997,
			b: 0.066,
			c: -0.066,
			d: 0.997,
			l: 3
		},
		r_b_arm: {
			tx: -3.6,
			ty: -29.8,
			a: -0.453,
			b: 0.886,
			c: -0.886,
			d: -0.453,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 2
		},
		r_hand: {
			tx: -10.6,
			ty: -15.7,
			a: 0.922,
			b: -0.379,
			c: 0.379,
			d: 0.922,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 1
		},
		r_t_leg: {
			tx: -1.1,
			ty: -41.7,
			a: 0.995,
			b: 0.048,
			c: -0.069,
			d: 0.755,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 0
		}
	},
	{
		l_b_arm: {
			tx: 3.95,
			ty: -27.8,
			a: -0.275,
			b: 0.956,
			c: -0.956,
			d: -0.275,
			l: 16
		},
		l_t_arm: {
			tx: 0.15,
			ty: -40.3,
			a: 0.933,
			b: -0.326,
			c: 0.306,
			d: 0.703,
			l: 15
		},
		l_hand: {
			tx: 0.75,
			ty: -11.75,
			a: 0.854,
			b: -0.51,
			c: 0.51,
			d: 0.854,
			l: 14
		},
		l_b_leg: {
			tx: 1.2,
			ty: -11.5,
			l: 13
		},
		l_foot: {
			tx: 4.05,
			ty: 5.2,
			l: 12
		},
		l_t_leg: {
			tx: -0.55,
			ty: -28,
			a: 0.982,
			b: -0.187,
			c: 0.187,
			d: 0.982,
			l: 11
		},
		head: {
			tx: -3.1,
			ty: -55.1,
			a: 0.956,
			b: 0.279,
			c: -0.283,
			d: 0.953,
			l: 10
		},
		body: {
			tx: -2.25,
			ty: -36.35,
			l: 9
		},
		butt: {
			tx: -2.85,
			ty: -34,
			l: 8
		},
		r_b_leg: {
			tx: -6.95,
			ty: -14.8,
			a: 0.998,
			b: -0.005,
			c: 0.005,
			d: 0.998,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 7
		},
		r_foot: {
			tx: -4.15,
			ty: 1.85,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 6
		},
		r_t_arm: {
			tx: -1.1,
			ty: -30.05,
			a: 0.957,
			b: 0.279,
			c: -0.279,
			d: 0.957,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 5
		},
		neck: {
			tx: 0,
			ty: -41.1,
			a: 0.973,
			b: -0.226,
			c: 0.249,
			d: 1.073,
			l: 4
		},
		leaves: {
			tx: 0.8,
			ty: -53.75,
			a: 0.997,
			b: 0.075,
			c: -0.075,
			d: 0.997,
			l: 3
		},
		r_b_arm: {
			tx: -3.6,
			ty: -29.85,
			a: -0.445,
			b: 0.89,
			c: -0.89,
			d: -0.445,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 2
		},
		r_hand: {
			tx: -10.45,
			ty: -15.8,
			a: 0.929,
			b: -0.362,
			c: 0.362,
			d: 0.929,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 1
		},
		r_t_leg: {
			tx: -1.05,
			ty: -41.75,
			a: 0.995,
			b: 0.048,
			c: -0.07,
			d: 0.755,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 0
		}
	},
	{
		l_b_arm: {
			tx: 3.95,
			ty: -27.7,
			a: -0.292,
			b: 0.951,
			c: -0.951,
			d: -0.292,
			l: 16
		},
		l_t_arm: {
			tx: 0.15,
			ty: -40.25,
			a: 0.933,
			b: -0.326,
			c: 0.306,
			d: 0.702,
			l: 15
		},
		l_hand: {
			tx: 0.5,
			ty: -11.7,
			a: 0.845,
			b: -0.525,
			c: 0.525,
			d: 0.845,
			l: 14
		},
		l_b_leg: {
			tx: 0.85,
			ty: -11.5,
			l: 13
		},
		l_foot: {
			tx: 3.7,
			ty: 5.2,
			l: 12
		},
		l_t_leg: {
			tx: -0.7,
			ty: -28.05,
			a: 0.986,
			b: -0.165,
			c: 0.165,
			d: 0.986,
			l: 11
		},
		head: {
			tx: -2.85,
			ty: -55.3,
			a: 0.956,
			b: 0.279,
			c: -0.283,
			d: 0.954,
			l: 10
		},
		body: {
			tx: -2.25,
			ty: -36.45,
			l: 9
		},
		butt: {
			tx: -2.85,
			ty: -34.1,
			l: 8
		},
		r_b_leg: {
			tx: -6.7,
			ty: -14.75,
			a: 0.998,
			b: -0.022,
			c: 0.022,
			d: 0.998,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 7
		},
		r_foot: {
			tx: -3.65,
			ty: 1.85,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 6
		},
		r_t_arm: {
			tx: -1.1,
			ty: -29.95,
			a: 0.962,
			b: 0.263,
			c: -0.263,
			d: 0.962,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 5
		},
		neck: {
			tx: -0.1,
			ty: -41.15,
			a: 0.979,
			b: -0.199,
			c: 0.22,
			d: 1.079,
			l: 4
		},
		leaves: {
			tx: 1.2,
			ty: -54,
			a: 0.997,
			b: 0.066,
			c: -0.066,
			d: 0.997,
			l: 3
		},
		r_b_arm: {
			tx: -3.65,
			ty: -29.85,
			a: -0.434,
			b: 0.896,
			c: -0.896,
			d: -0.434,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 2
		},
		r_hand: {
			tx: -10.3,
			ty: -15.75,
			a: 0.935,
			b: -0.346,
			c: 0.346,
			d: 0.935,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 1
		},
		r_t_leg: {
			tx: -0.95,
			ty: -41.8,
			a: 0.995,
			b: 0.048,
			c: -0.07,
			d: 0.755,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 0
		}
	},
	{
		l_b_arm: {
			tx: 4.1,
			ty: -27.95,
			a: -0.312,
			b: 0.945,
			c: -0.945,
			d: -0.312,
			l: 16
		},
		l_t_arm: {
			tx: 0.15,
			ty: -40.2,
			a: 0.934,
			b: -0.326,
			c: 0.306,
			d: 0.703,
			l: 15
		},
		l_hand: {
			tx: -0.6,
			ty: -12.45,
			a: 0.835,
			b: -0.543,
			c: 0.543,
			d: 0.835,
			l: 14
		},
		l_b_leg: {
			tx: 0.5,
			ty: -11.5,
			l: 13
		},
		l_foot: {
			tx: 3.35,
			ty: 5.2,
			l: 12
		},
		l_t_leg: {
			tx: -0.7,
			ty: -28.1,
			a: 0.99,
			b: -0.14,
			c: 0.14,
			d: 0.99,
			l: 11
		},
		head: {
			tx: -2.65,
			ty: -55.5,
			a: 0.956,
			b: 0.279,
			c: -0.283,
			d: 0.954,
			l: 10
		},
		body: {
			tx: -2.25,
			ty: -36.5,
			l: 9
		},
		butt: {
			tx: -2.85,
			ty: -34.15,
			l: 8
		},
		r_b_leg: {
			tx: -6.45,
			ty: -14.75,
			a: 0.998,
			b: -0.035,
			c: 0.035,
			d: 0.998,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 7
		},
		r_foot: {
			tx: -3.2,
			ty: 1.85,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 6
		},
		r_t_arm: {
			tx: -1.2,
			ty: -29.9,
			a: 0.967,
			b: 0.246,
			c: -0.246,
			d: 0.967,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 5
		},
		neck: {
			tx: -0.05,
			ty: -41.2,
			a: 0.984,
			b: -0.17,
			c: 0.187,
			d: 1.086,
			l: 4
		},
		leaves: {
			tx: 1.55,
			ty: -54.25,
			a: 0.998,
			b: 0.053,
			c: -0.053,
			d: 0.998,
			l: 3
		},
		r_b_arm: {
			tx: -3.65,
			ty: -29.85,
			a: -0.425,
			b: 0.9,
			c: -0.9,
			d: -0.425,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 2
		},
		r_hand: {
			tx: -10.2,
			ty: -15.7,
			a: 0.943,
			b: -0.326,
			c: 0.326,
			d: 0.943,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 1
		},
		r_t_leg: {
			tx: -0.9,
			ty: -41.8,
			a: 0.995,
			b: 0.048,
			c: -0.07,
			d: 0.755,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 0
		}
	},
	{
		l_b_arm: {
			tx: 4.2,
			ty: -28.15,
			a: -0.27,
			b: 0.957,
			c: -0.957,
			d: -0.27,
			l: 16
		},
		l_t_arm: {
			tx: 0.15,
			ty: -40.3,
			a: 0.933,
			b: -0.326,
			c: 0.306,
			d: 0.703,
			l: 15
		},
		l_hand: {
			tx: -0.05,
			ty: -12.8,
			a: 0.857,
			b: -0.506,
			c: 0.506,
			d: 0.857,
			l: 14
		},
		l_b_leg: {
			tx: 0.1,
			ty: -11.5,
			l: 13
		},
		l_foot: {
			tx: 2.95,
			ty: 5.2,
			l: 12
		},
		l_t_leg: {
			tx: -0.8,
			ty: -28.15,
			a: 0.993,
			b: -0.118,
			c: 0.118,
			d: 0.993,
			l: 11
		},
		head: {
			tx: -2.4,
			ty: -55.65,
			a: 0.956,
			b: 0.279,
			c: -0.283,
			d: 0.954,
			l: 10
		},
		body: {
			tx: -2.25,
			ty: -36.6,
			l: 9
		},
		butt: {
			tx: -2.85,
			ty: -34.25,
			l: 8
		},
		r_b_leg: {
			tx: -6.2,
			ty: -14.7,
			a: 0.997,
			b: -0.048,
			c: 0.048,
			d: 0.997,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 7
		},
		r_foot: {
			tx: -2.7,
			ty: 1.85,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 6
		},
		r_t_arm: {
			tx: -1.2,
			ty: -29.8,
			a: 0.971,
			b: 0.23,
			c: -0.23,
			d: 0.971,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 5
		},
		neck: {
			tx: -0.15,
			ty: -41.3,
			a: 0.989,
			b: -0.14,
			c: 0.155,
			d: 1.091,
			l: 4
		},
		leaves: {
			tx: 1.85,
			ty: -54.35,
			a: 0.999,
			b: 0.044,
			c: -0.044,
			d: 0.999,
			l: 3
		},
		r_b_arm: {
			tx: -3.7,
			ty: -29.95,
			a: -0.414,
			b: 0.906,
			c: -0.906,
			d: -0.414,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 2
		},
		r_hand: {
			tx: -10.05,
			ty: -15.75,
			a: 0.948,
			b: -0.309,
			c: 0.309,
			d: 0.948,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 1
		},
		r_t_leg: {
			tx: -0.85,
			ty: -41.85,
			a: 0.995,
			b: 0.048,
			c: -0.07,
			d: 0.755,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 0
		}
	},
	{
		l_b_arm: {
			tx: 4.15,
			ty: -28.3,
			a: -0.228,
			b: 0.968,
			c: -0.968,
			d: -0.228,
			l: 16
		},
		l_t_arm: {
			tx: 0.2,
			ty: -40.4,
			a: 0.933,
			b: -0.326,
			c: 0.306,
			d: 0.703,
			l: 15
		},
		l_hand: {
			tx: 0.55,
			ty: -13.1,
			a: 0.878,
			b: -0.468,
			c: 0.468,
			d: 0.878,
			l: 14
		},
		l_b_leg: {
			tx: -0.25,
			ty: -11.5,
			l: 13
		},
		l_foot: {
			tx: 2.6,
			ty: 5.2,
			l: 12
		},
		l_t_leg: {
			tx: -0.85,
			ty: -28.2,
			a: 0.995,
			b: -0.092,
			c: 0.092,
			d: 0.995,
			l: 11
		},
		head: {
			tx: -2.2,
			ty: -55.9,
			a: 0.957,
			b: 0.279,
			c: -0.283,
			d: 0.954,
			l: 10
		},
		body: {
			tx: -2.25,
			ty: -36.7,
			l: 9
		},
		butt: {
			tx: -2.85,
			ty: -34.35,
			l: 8
		},
		r_b_leg: {
			tx: -5.9,
			ty: -14.7,
			a: 0.997,
			b: -0.062,
			c: 0.062,
			d: 0.997,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 7
		},
		r_foot: {
			tx: -2.2,
			ty: 1.85,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 6
		},
		r_t_arm: {
			tx: -1.3,
			ty: -29.75,
			a: 0.974,
			b: 0.216,
			c: -0.216,
			d: 0.974,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 5
		},
		neck: {
			tx: -0.15,
			ty: -41.4,
			a: 0.993,
			b: -0.114,
			c: 0.125,
			d: 1.095,
			l: 4
		},
		leaves: {
			tx: 2.2,
			ty: -54.7,
			a: 0.999,
			b: 0.036,
			c: -0.036,
			d: 0.999,
			l: 3
		},
		r_b_arm: {
			tx: -3.6,
			ty: -30,
			a: -0.402,
			b: 0.911,
			c: -0.911,
			d: -0.402,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 2
		},
		r_hand: {
			tx: -9.95,
			ty: -15.75,
			a: 0.954,
			b: -0.292,
			c: 0.292,
			d: 0.954,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 1
		},
		r_t_leg: {
			tx: -0.8,
			ty: -41.9,
			a: 0.995,
			b: 0.048,
			c: -0.07,
			d: 0.755,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 0
		}
	},
	{
		l_b_arm: {
			tx: 4.2,
			ty: -28.45,
			a: -0.186,
			b: 0.977,
			c: -0.977,
			d: -0.186,
			l: 16
		},
		l_t_arm: {
			tx: 0.2,
			ty: -40.5,
			a: 0.933,
			b: -0.326,
			c: 0.306,
			d: 0.703,
			l: 15
		},
		l_hand: {
			tx: 1.1,
			ty: -13.4,
			a: 0.898,
			b: -0.429,
			c: 0.429,
			d: 0.898,
			l: 14
		},
		l_b_leg: {
			tx: -0.6,
			ty: -11.5,
			l: 13
		},
		l_foot: {
			tx: 2.25,
			ty: 5.2,
			l: 12
		},
		l_t_leg: {
			tx: -1,
			ty: -28.2,
			a: 0.997,
			b: -0.07,
			c: 0.07,
			d: 0.997,
			l: 11
		},
		head: {
			tx: -1.95,
			ty: -56.1,
			a: 0.957,
			b: 0.279,
			c: -0.283,
			d: 0.954,
			l: 10
		},
		body: {
			tx: -2.25,
			ty: -36.75,
			l: 9
		},
		butt: {
			tx: -2.85,
			ty: -34.4,
			l: 8
		},
		r_b_leg: {
			tx: -5.65,
			ty: -14.65,
			a: 0.996,
			b: -0.075,
			c: 0.075,
			d: 0.996,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 7
		},
		r_foot: {
			tx: -1.7,
			ty: 1.85,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 6
		},
		r_t_arm: {
			tx: -1.35,
			ty: -29.7,
			a: 0.978,
			b: 0.199,
			c: -0.199,
			d: 0.978,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 5
		},
		neck: {
			tx: -0.15,
			ty: -41.5,
			a: 0.996,
			b: -0.084,
			c: 0.092,
			d: 1.098,
			l: 4
		},
		leaves: {
			tx: 2.55,
			ty: -54.85,
			a: 0.999,
			b: 0.027,
			c: -0.027,
			d: 0.999,
			l: 3
		},
		r_b_arm: {
			tx: -3.55,
			ty: -30,
			a: -0.394,
			b: 0.915,
			c: -0.915,
			d: -0.394,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 2
		},
		r_hand: {
			tx: -9.75,
			ty: -15.8,
			a: 0.96,
			b: -0.272,
			c: 0.272,
			d: 0.96,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 1
		},
		r_t_leg: {
			tx: -0.75,
			ty: -41.95,
			a: 0.995,
			b: 0.048,
			c: -0.07,
			d: 0.755,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 0
		}
	},
	{
		l_b_arm: {
			tx: 4.25,
			ty: -28.65,
			a: -0.143,
			b: 0.985,
			c: -0.985,
			d: -0.143,
			l: 16
		},
		l_t_arm: {
			tx: 0.2,
			ty: -40.65,
			a: 0.933,
			b: -0.326,
			c: 0.306,
			d: 0.703,
			l: 15
		},
		l_hand: {
			tx: 1.7,
			ty: -13.7,
			a: 0.916,
			b: -0.39,
			c: 0.39,
			d: 0.916,
			l: 14
		},
		l_b_leg: {
			tx: -0.95,
			ty: -11.5,
			l: 13
		},
		l_foot: {
			tx: 1.9,
			ty: 5.2,
			l: 12
		},
		l_t_leg: {
			tx: -1.05,
			ty: -28.25,
			a: 0.999,
			b: -0.045,
			c: 0.045,
			d: 0.999,
			l: 11
		},
		head: {
			tx: -1.75,
			ty: -56.3,
			a: 0.957,
			b: 0.279,
			c: -0.283,
			d: 0.954,
			l: 10
		},
		body: {
			tx: -2.25,
			ty: -36.85,
			l: 9
		},
		butt: {
			tx: -2.85,
			ty: -34.5,
			l: 8
		},
		r_b_leg: {
			tx: -5.4,
			ty: -14.65,
			a: 0.995,
			b: -0.088,
			c: 0.088,
			d: 0.995,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 7
		},
		r_foot: {
			tx: -1.25,
			ty: 1.85,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 6
		},
		r_t_arm: {
			tx: -1.35,
			ty: -29.6,
			a: 0.981,
			b: 0.183,
			c: -0.183,
			d: 0.981,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 5
		},
		neck: {
			tx: -0.2,
			ty: -41.55,
			a: 0.998,
			b: -0.057,
			c: 0.063,
			d: 1.101,
			l: 4
		},
		leaves: {
			tx: 2.9,
			ty: -55.1,
			b: 0.018,
			c: -0.018,
			l: 3
		},
		r_b_arm: {
			tx: -3.55,
			ty: -30.05,
			a: -0.382,
			b: 0.92,
			c: -0.92,
			d: -0.382,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 2
		},
		r_hand: {
			tx: -9.6,
			ty: -15.8,
			a: 0.965,
			b: -0.255,
			c: 0.255,
			d: 0.965,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 1
		},
		r_t_leg: {
			tx: -0.7,
			ty: -42,
			a: 0.995,
			b: 0.048,
			c: -0.07,
			d: 0.755,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 0
		}
	},
	{
		l_b_arm: {
			tx: 4.25,
			ty: -28.85,
			a: -0.1,
			b: 0.99,
			c: -0.99,
			d: -0.1,
			l: 16
		},
		l_t_arm: {
			tx: 0.2,
			ty: -40.75,
			a: 0.933,
			b: -0.326,
			c: 0.306,
			d: 0.703,
			l: 15
		},
		l_hand: {
			tx: 2.3,
			ty: -14.05,
			a: 0.933,
			b: -0.349,
			c: 0.349,
			d: 0.933,
			l: 14
		},
		l_b_leg: {
			tx: -1.35,
			ty: -11.5,
			l: 13
		},
		l_foot: {
			tx: 1.5,
			ty: 5.2,
			l: 12
		},
		l_t_leg: {
			tx: -1.1,
			ty: -28.3,
			b: -0.022,
			c: 0.022,
			l: 11
		},
		head: {
			tx: -1.5,
			ty: -56.5,
			a: 0.957,
			b: 0.279,
			c: -0.283,
			d: 0.954,
			l: 10
		},
		body: {
			tx: -2.25,
			ty: -36.9,
			l: 9
		},
		butt: {
			tx: -2.85,
			ty: -34.55,
			l: 8
		},
		r_b_leg: {
			tx: -5.05,
			ty: -14.65,
			a: 0.994,
			b: -0.101,
			c: 0.101,
			d: 0.994,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 7
		},
		r_foot: {
			tx: -0.75,
			ty: 1.85,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 6
		},
		r_t_arm: {
			tx: -1.4,
			ty: -29.55,
			a: 0.984,
			b: 0.166,
			c: -0.166,
			d: 0.984,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 5
		},
		neck: {
			tx: -0.25,
			ty: -41.65,
			a: 0.999,
			b: -0.027,
			c: 0.03,
			d: 1.102,
			l: 4
		},
		leaves: {
			tx: 3.25,
			ty: -55.3,
			b: 0.009,
			c: -0.009,
			l: 3
		},
		r_b_arm: {
			tx: -3.6,
			ty: -30.1,
			a: -0.37,
			b: 0.925,
			c: -0.925,
			d: -0.37,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 2
		},
		r_hand: {
			tx: -9.45,
			ty: -15.85,
			a: 0.969,
			b: -0.238,
			c: 0.238,
			d: 0.969,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 1
		},
		r_t_leg: {
			tx: -0.65,
			ty: -42.05,
			a: 0.995,
			b: 0.048,
			c: -0.07,
			d: 0.755,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 0
		}
	},
	{
		l_b_arm: {
			tx: 4.1,
			ty: -28.75,
			a: -0.057,
			b: 0.994,
			c: -0.994,
			d: -0.057,
			l: 16
		},
		l_t_arm: {
			tx: 0.2,
			ty: -40.95,
			a: 0.934,
			b: -0.327,
			c: 0.307,
			d: 0.704,
			l: 15
		},
		l_hand: {
			tx: 3.5,
			ty: -13.15,
			a: 0.948,
			b: -0.309,
			c: 0.309,
			d: 0.948,
			l: 14
		},
		l_b_leg: {
			tx: -1.7,
			ty: -11.5,
			l: 13
		},
		l_foot: {
			tx: 1.15,
			ty: 5.2,
			l: 12
		},
		l_t_leg: {
			tx: -0.35,
			ty: -27.9,
			l: 11
		},
		head: {
			tx: -1.3,
			ty: -56.65,
			a: 0.958,
			b: 0.28,
			c: -0.283,
			d: 0.955,
			l: 10
		},
		body: {
			tx: -2.25,
			ty: -37,
			l: 9
		},
		butt: {
			tx: -2.85,
			ty: -34.65,
			l: 8
		},
		r_b_leg: {
			tx: -4.85,
			ty: -14.6,
			a: 0.992,
			b: -0.118,
			c: 0.118,
			d: 0.992,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 7
		},
		r_foot: {
			tx: -0.25,
			ty: 1.85,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 6
		},
		r_t_arm: {
			tx: -1.05,
			ty: -30.2,
			a: 0.987,
			b: 0.152,
			c: -0.152,
			d: 0.987,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 5
		},
		neck: {
			tx: -0.2,
			ty: -41.75,
			d: 1.103,
			l: 4
		},
		leaves: {
			tx: 3.6,
			ty: -55.55,
			l: 3
		},
		r_b_arm: {
			tx: -3.65,
			ty: -30.35,
			a: -0.362,
			b: 0.93,
			c: -0.93,
			d: -0.362,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 2
		},
		r_hand: {
			tx: -9.1,
			ty: -15.1,
			a: 0.974,
			b: -0.221,
			c: 0.221,
			d: 0.974,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 1
		},
		r_t_leg: {
			tx: -1.45,
			ty: -42.2,
			a: 0.995,
			b: 0.048,
			c: -0.07,
			d: 0.755,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 0
		}
	}
];

//const result = mirrorTo(animation, 12, 'r_f_lower_leg');
//let result = freezeFrame(freezeFrame(animation, 43, 'sp_10', 43), 43, 'sp_4', 43);
//let result = linearMovement(linearMovement(animation, 'sp_4', 0, 9), 'sp_10', 0, 9);
//let result = changeLayer(animation, 'legs', 3);
//let result = linearMovement(followKey(animation, 'ww_head', 'ww_l_eye'), 'ww_u_body', 7, 11);
let result = linearMovement(
	linearMovement(linearMovement(linearMovement(animation, 'r_t_leg', 0, 6), 'r_hand', 0, 6), 'r_hand', 6, 20),
	'r_t_leg',
	6,
	20
);

fs.writeFileSync('./results/animation_fix.txt', JSON.stringify(result, undefined, '\t'));
