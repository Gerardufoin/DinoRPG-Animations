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

// If the object does not have the requested key, return 0 or 1 depending on the key.
function valueOrDefault(obj, k) {
	if (obj[k] !== undefined) {
		return obj[k];
	}
	return ['a', 'd'].includes(k) ? 1 : 0;
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
			anim[idx][elem][k] = round(
				valueOrDefault(anim[start][elem], k) +
					((valueOrDefault(anim[end][elem], k) - valueOrDefault(anim[start][elem], k)) / diff) * i
			);
		}
	}
	return anim;
}

// Move the tx/ty of a piece to the start+1 position to immitate the start position
// Then force the following frames to follow the same movement, keeping the easing (in theory)
function similarMovement(anim, elem, start, end) {
	const keys = [];
	let nextTxDiff = 0;
	let nextTyDiff = 0;
	for (let i = 1; start + i < end; ++i) {
		const idx = start + i;
		const tmpTxDiff = (anim[idx + 1][elem].tx ?? 0) - (anim[idx][elem].tx ?? 0);
		const tmpTyDiff = (anim[idx + 1][elem].ty ?? 0) - (anim[idx][elem].ty ?? 0);
		anim[idx][elem].tx = round((anim[idx - 1][elem].tx ?? 0) + nextTxDiff);
		anim[idx][elem].ty = round((anim[idx - 1][elem].ty ?? 0) + nextTyDiff);
		nextTxDiff = tmpTxDiff;
		nextTyDiff = tmpTyDiff;
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
function changeLayer(animation, name, layer, start = undefined, end = undefined) {
	for (let i = 0; i < animation.length; ++i) {
		if (animation[i][name] && (start === undefined || i >= start) && (end === undefined || i <= end)) {
			const ref = animation[i][name].l;
			for (const k of Object.keys(animation[i])) {
				if (animation[i][k].l !== undefined) {
					if (ref > layer && animation[i][k].l < ref && animation[i][k].l >= layer) {
						animation[i][k].l++;
					} else if (ref < layer && animation[i][k].l > ref && animation[i][k].l <= layer) {
						animation[i][k].l--;
					}
				}
			}
			animation[i][name].l = layer;
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

import { PixiHelper } from '../../src/display/PixiHelper.js';

// Assign a key to an object, except if it is the default value
function assignKey(obj, key, value, deflt) {
	if (value !== deflt) {
		obj[key] = value;
	}
}

// Use the given object of a second animation to displace the tx/ty properties of all the objects of the first animation.
// Probably only used for the animations of this little *%#&*@ of a ffrutx
function displaceAnimation(animation, dispAnim, key) {
	for (let i = 0; i < animation.length; ++i) {
		if (dispAnim[i]?.[key]) {
			for (const k of Object.keys(animation[i])) {
				const matrix = PixiHelper.matrixFromObject(dispAnim[i][key]).append(
					PixiHelper.matrixFromObject(animation[i][k])
				);
				assignKey(animation[i][k], 'tx', round(matrix.tx ?? 0), 0);
				assignKey(animation[i][k], 'ty', round(matrix.ty ?? 0), 0);
				assignKey(animation[i][k], 'a', round(matrix.a ?? 1), 1);
				assignKey(animation[i][k], 'b', round(matrix.b ?? 0), 0);
				assignKey(animation[i][k], 'c', round(matrix.c ?? 0), 0);
				assignKey(animation[i][k], 'd', round(matrix.d ?? 1), 1);
			}
		}
	}
	return animation;
}

// Replace an element of the animation by a group of elements.
// Will merge the transform of both elements, using the former element as parent.
function replaceSymbol(animation, obj, key) {
	for (let i = 0; i < animation.length; ++i) {
		if (animation[i][key]) {
			const newFrame = {};
			for (const k of Object.keys(obj)) {
				const matrix = PixiHelper.matrixFromObject(animation[i][key]).append(
					PixiHelper.matrixFromObject(obj[k])
				);
				const newElem = JSON.parse(JSON.stringify(obj[k]));
				assignKey(newElem, 'tx', round(matrix.tx ?? 0), 0);
				assignKey(newElem, 'ty', round(matrix.ty ?? 0), 0);
				assignKey(newElem, 'a', round(matrix.a ?? 1), 1);
				assignKey(newElem, 'b', round(matrix.b ?? 0), 0);
				assignKey(newElem, 'c', round(matrix.c ?? 0), 0);
				assignKey(newElem, 'd', round(matrix.d ?? 1), 1);
				newFrame[k] = newElem;
			}
			for (const k of Object.keys(animation[i])) {
				if (k !== key) {
					newFrame[k] = animation[i][k];
				}
			}
			animation[i] = newFrame;
		}
	}
	return animation;
}

// Merge two animation together by injecting an element of the second animation into an element of the first animation.
// Only keep the position and layer value of the parent element.
function mixAnimation(animation, keyA, mixAnim, keyB) {
	let mIdx = 0;
	for (let i = 0; i < animation.length; ++i) {
		if (animation[i][keyA]) {
			const matrix = PixiHelper.matrixFromObject(animation[i][keyA]).append(
				PixiHelper.matrixFromObject(mixAnim[mIdx][keyB])
			);
			const newElem = JSON.parse(JSON.stringify(mixAnim[mIdx][keyB]));
			assignKey(newElem, 'tx', round(matrix.tx ?? 0), 0);
			assignKey(newElem, 'ty', round(matrix.ty ?? 0), 0);
			assignKey(newElem, 'a', round(matrix.a ?? 1), 1);
			assignKey(newElem, 'b', round(matrix.b ?? 0), 0);
			assignKey(newElem, 'c', round(matrix.c ?? 0), 0);
			assignKey(newElem, 'd', round(matrix.d ?? 1), 1);
			newElem.l = animation[i][keyA].l;
			animation[i][keyA] = newElem;
			mIdx = (mIdx + 1) % mixAnim.length;
		}
	}
	return animation;
}

const animation = [
	{
		l_foot: {
			tx: 17.95,
			ty: 32.95,
			a: 1.217,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 4.3,
			ty: 32.95,
			a: 0.934,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 4.65,
			ty: 1.6,
			a: 0.966,
			b: -0.259,
			c: 0.259,
			d: 0.966,
			l: 7
		},
		l_ear: {
			tx: 17.6,
			ty: 8.15,
			l: 6
		},
		head_sleep: {
			tx: 8.6,
			ty: 12.8,
			l: 5
		},
		l_arm: {
			tx: 21.75,
			ty: 25.4,
			l: 4
		},
		navel: {
			tx: 12.65,
			ty: 36.7,
			l: 3
		},
		body: {
			tx: 8.15,
			ty: 23.65,
			l: 2
		},
		tail: {
			tx: 3.8,
			ty: 32.45,
			l: 1
		},
		r_arm: {
			tx: 14.85,
			ty: 25.35,
			a: -0.847,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.1,
			ty: 32.95,
			a: 1.217,
			c: -0.005,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 4.45,
			ty: 32.95,
			a: 0.934,
			c: -0.004,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 4.8,
			ty: 1.7,
			a: 0.964,
			b: -0.269,
			c: 0.264,
			d: 0.963,
			l: 7
		},
		l_ear: {
			tx: 17.95,
			ty: 8.15,
			b: 0.009,
			c: -0.013,
			l: 6
		},
		head_sleep: {
			tx: 8.8,
			ty: 12.8,
			c: -0.004,
			l: 5
		},
		l_arm: {
			tx: 21.95,
			ty: 25.4,
			c: -0.004,
			l: 4
		},
		navel: {
			tx: 12.8,
			ty: 36.7,
			c: -0.004,
			l: 3
		},
		body: {
			tx: 8.3,
			ty: 23.65,
			c: -0.004,
			l: 2
		},
		tail: {
			tx: 3.9,
			ty: 32.45,
			c: -0.004,
			l: 1
		},
		r_arm: {
			tx: 15.05,
			ty: 25.35,
			a: -0.847,
			c: -0.004,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.2,
			ty: 32.95,
			a: 1.217,
			c: -0.011,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 4.5,
			ty: 32.95,
			a: 0.934,
			c: -0.008,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 4.9,
			ty: 1.9,
			a: 0.961,
			b: -0.281,
			c: 0.272,
			d: 0.959,
			l: 7
		},
		l_ear: {
			tx: 18.3,
			ty: 8.1,
			b: 0.018,
			c: -0.027,
			l: 6
		},
		head_sleep: {
			tx: 9.05,
			ty: 12.8,
			c: -0.009,
			l: 5
		},
		l_arm: {
			tx: 22.05,
			ty: 25.4,
			c: -0.009,
			l: 4
		},
		navel: {
			tx: 12.85,
			ty: 36.7,
			c: -0.009,
			l: 3
		},
		body: {
			tx: 8.5,
			ty: 23.65,
			c: -0.009,
			l: 2
		},
		tail: {
			tx: 4.05,
			ty: 32.45,
			c: -0.009,
			l: 1
		},
		r_arm: {
			tx: 15.15,
			ty: 25.3,
			a: -0.847,
			c: -0.008,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.3,
			ty: 32.95,
			a: 1.217,
			c: -0.016,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 4.65,
			ty: 32.95,
			a: 0.934,
			c: -0.012,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 5,
			ty: 2,
			a: 0.959,
			b: -0.294,
			c: 0.28,
			d: 0.956,
			l: 7
		},
		l_ear: {
			tx: 18.55,
			ty: 8.1,
			b: 0.027,
			c: -0.04,
			l: 6
		},
		head_sleep: {
			tx: 9.25,
			ty: 12.8,
			c: -0.013,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 22.2,
			ty: 25.4,
			c: -0.013,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 12.95,
			ty: 36.65,
			c: -0.013,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 8.65,
			ty: 23.65,
			c: -0.013,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 4.15,
			ty: 32.4,
			c: -0.013,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 15.3,
			ty: 25.3,
			a: -0.847,
			c: -0.011,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.4,
			ty: 32.95,
			a: 1.217,
			c: -0.022,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 4.7,
			ty: 32.95,
			a: 0.934,
			c: -0.017,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 5.1,
			ty: 2.1,
			a: 0.956,
			b: -0.307,
			c: 0.288,
			d: 0.953,
			l: 7
		},
		l_ear: {
			tx: 18.9,
			ty: 8.15,
			a: 0.999,
			b: 0.035,
			c: -0.053,
			d: 0.999,
			l: 6
		},
		head_sleep: {
			tx: 9.4,
			ty: 12.8,
			c: -0.018,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 22.4,
			ty: 25.35,
			c: -0.018,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13.05,
			ty: 36.65,
			c: -0.018,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 8.8,
			ty: 23.6,
			c: -0.018,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 4.25,
			ty: 32.4,
			c: -0.018,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 15.45,
			ty: 25.3,
			a: -0.847,
			c: -0.015,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.55,
			ty: 33,
			a: 1.217,
			c: -0.027,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 4.8,
			ty: 32.95,
			a: 0.934,
			c: -0.021,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 5.15,
			ty: 2.2,
			a: 0.953,
			b: -0.319,
			c: 0.295,
			d: 0.949,
			l: 7
		},
		l_ear: {
			tx: 19.2,
			ty: 8.15,
			a: 0.999,
			b: 0.044,
			c: -0.066,
			d: 0.999,
			l: 6
		},
		head_sleep: {
			tx: 9.65,
			ty: 12.75,
			c: -0.022,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 22.5,
			ty: 25.35,
			c: -0.022,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13.15,
			ty: 36.7,
			c: -0.022,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 8.95,
			ty: 23.6,
			c: -0.022,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 4.4,
			ty: 32.45,
			c: -0.022,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 15.65,
			ty: 25.3,
			a: -0.847,
			c: -0.019,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.65,
			ty: 32.95,
			a: 1.217,
			c: -0.032,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 4.95,
			ty: 32.95,
			a: 0.934,
			c: -0.025,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 5.25,
			ty: 2.3,
			a: 0.951,
			b: -0.328,
			c: 0.303,
			d: 0.946,
			l: 7
		},
		l_ear: {
			tx: 19.5,
			ty: 8.15,
			a: 0.998,
			b: 0.053,
			c: -0.079,
			d: 0.998,
			l: 6
		},
		head_sleep: {
			tx: 9.85,
			ty: 12.75,
			c: -0.026,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 22.65,
			ty: 25.35,
			c: -0.026,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13.3,
			ty: 36.7,
			c: -0.026,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 9.05,
			ty: 23.6,
			c: -0.026,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 4.5,
			ty: 32.45,
			c: -0.026,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 15.8,
			ty: 25.3,
			a: -0.847,
			c: -0.022,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.75,
			ty: 32.95,
			a: 1.217,
			c: -0.037,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5.05,
			ty: 32.95,
			a: 0.934,
			c: -0.029,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 5.4,
			ty: 2.45,
			a: 0.947,
			b: -0.341,
			c: 0.308,
			d: 0.944,
			l: 7
		},
		l_ear: {
			tx: 19.8,
			ty: 8.15,
			a: 0.998,
			b: 0.061,
			c: -0.092,
			d: 0.997,
			l: 6
		},
		head_sleep: {
			tx: 10.05,
			ty: 12.75,
			c: -0.031,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 22.75,
			ty: 25.35,
			c: -0.031,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13.3,
			ty: 36.7,
			c: -0.031,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 9.2,
			ty: 23.6,
			c: -0.031,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 4.6,
			ty: 32.5,
			c: -0.031,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 15.85,
			ty: 25.3,
			a: -0.847,
			c: -0.026,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.9,
			ty: 33,
			a: 1.217,
			c: -0.043,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5.1,
			ty: 33,
			a: 0.934,
			c: -0.033,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 5.45,
			ty: 2.5,
			a: 0.945,
			b: -0.35,
			c: 0.315,
			d: 0.94,
			l: 7
		},
		l_ear: {
			tx: 20.15,
			ty: 8.1,
			a: 0.997,
			b: 0.07,
			c: -0.105,
			d: 0.996,
			l: 6
		},
		head_sleep: {
			tx: 10.25,
			ty: 12.75,
			c: -0.035,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 22.9,
			ty: 25.35,
			c: -0.035,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13.45,
			ty: 36.75,
			c: -0.035,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 9.35,
			ty: 23.65,
			c: -0.035,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 4.7,
			ty: 32.45,
			c: -0.035,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 16.05,
			ty: 25.3,
			a: -0.847,
			c: -0.03,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.9,
			ty: 33,
			a: 1.217,
			c: -0.044,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5.2,
			ty: 33,
			a: 0.934,
			c: -0.034,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 5.55,
			ty: 2.55,
			a: 0.943,
			b: -0.359,
			c: 0.32,
			d: 0.938,
			l: 7
		},
		l_ear: {
			tx: 20.35,
			ty: 8.05,
			a: 0.997,
			b: 0.075,
			c: -0.114,
			d: 0.995,
			l: 6
		},
		head_sleep: {
			tx: 10.35,
			ty: 12.75,
			c: -0.036,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 23,
			ty: 25.4,
			c: -0.036,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13.5,
			ty: 36.75,
			c: -0.036,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 9.5,
			ty: 23.7,
			c: -0.036,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 4.8,
			ty: 32.45,
			c: -0.036,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 16.2,
			ty: 25.35,
			a: -0.847,
			c: -0.031,
			d: 0.848,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 19,
			ty: 33,
			a: 1.217,
			c: -0.049,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5.25,
			ty: 33,
			a: 0.934,
			c: -0.038,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 5.6,
			ty: 2.7,
			a: 0.939,
			b: -0.371,
			c: 0.327,
			d: 0.934,
			l: 7
		},
		l_ear: {
			tx: 20.6,
			ty: 8.1,
			a: 0.996,
			b: 0.083,
			c: -0.127,
			d: 0.994,
			l: 6
		},
		head_sleep: {
			tx: 10.55,
			ty: 12.75,
			c: -0.04,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 23.15,
			ty: 25.45,
			c: -0.04,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13.6,
			ty: 36.7,
			c: -0.04,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 9.65,
			ty: 23.7,
			c: -0.04,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 4.9,
			ty: 32.45,
			c: -0.04,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 16.3,
			ty: 25.35,
			a: -0.847,
			c: -0.034,
			d: 0.848,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 19.15,
			ty: 33,
			a: 1.217,
			c: -0.054,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5.4,
			ty: 33,
			a: 0.934,
			c: -0.042,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 5.75,
			ty: 2.8,
			a: 0.937,
			b: -0.379,
			c: 0.331,
			d: 0.932,
			l: 7
		},
		l_ear: {
			tx: 20.9,
			ty: 8.1,
			a: 0.995,
			b: 0.092,
			c: -0.136,
			d: 0.993,
			l: 6
		},
		head_sleep: {
			tx: 10.7,
			ty: 12.8,
			c: -0.044,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 23.25,
			ty: 25.45,
			c: -0.044,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13.65,
			ty: 36.7,
			c: -0.044,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 9.75,
			ty: 23.65,
			c: -0.044,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 4.95,
			ty: 32.45,
			c: -0.044,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 16.4,
			ty: 25.35,
			a: -0.847,
			c: -0.038,
			d: 0.848,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 19.25,
			ty: 33,
			a: 1.217,
			c: -0.059,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5.45,
			ty: 32.95,
			a: 0.934,
			c: -0.045,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 5.8,
			ty: 2.85,
			a: 0.934,
			b: -0.388,
			c: 0.339,
			d: 0.929,
			l: 7
		},
		l_ear: {
			tx: 21.15,
			ty: 8.1,
			a: 0.995,
			b: 0.097,
			c: -0.148,
			d: 0.991,
			l: 6
		},
		head_sleep: {
			tx: 10.9,
			ty: 12.8,
			c: -0.049,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 23.4,
			ty: 25.4,
			c: -0.049,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13.7,
			ty: 36.7,
			c: -0.049,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 9.9,
			ty: 23.65,
			c: -0.049,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 5.05,
			ty: 32.45,
			c: -0.049,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 16.55,
			ty: 25.35,
			a: -0.847,
			c: -0.041,
			d: 0.848,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 19.3,
			ty: 32.95,
			a: 1.217,
			c: -0.064,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5.5,
			ty: 32.95,
			a: 0.934,
			c: -0.049,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 5.9,
			ty: 3,
			a: 0.931,
			b: -0.396,
			c: 0.343,
			d: 0.926,
			l: 7
		},
		l_ear: {
			tx: 21.35,
			ty: 8.1,
			a: 0.994,
			b: 0.105,
			c: -0.157,
			d: 0.99,
			l: 6
		},
		head_sleep: {
			tx: 11.05,
			ty: 12.8,
			c: -0.053,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 23.5,
			ty: 25.4,
			c: -0.053,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13.85,
			ty: 36.7,
			c: -0.053,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 10.05,
			ty: 23.6,
			c: -0.053,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 5.2,
			ty: 32.45,
			c: -0.053,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 16.6,
			ty: 25.35,
			a: -0.847,
			c: -0.045,
			d: 0.848,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 19.4,
			ty: 32.95,
			a: 1.217,
			c: -0.065,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5.6,
			ty: 32.95,
			a: 0.934,
			c: -0.05,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 6,
			ty: 3.1,
			a: 0.929,
			b: -0.405,
			c: 0.347,
			d: 0.924,
			l: 7
		},
		l_ear: {
			tx: 21.6,
			ty: 8.1,
			a: 0.994,
			b: 0.11,
			c: -0.166,
			d: 0.988,
			l: 6
		},
		head_sleep: {
			tx: 11.1,
			ty: 12.8,
			c: -0.054,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 23.6,
			ty: 25.4,
			c: -0.054,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13.9,
			ty: 36.7,
			c: -0.054,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 10.1,
			ty: 23.65,
			c: -0.054,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 5.25,
			ty: 32.45,
			c: -0.054,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 16.75,
			ty: 25.35,
			a: -0.847,
			c: -0.045,
			d: 0.848,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 19.5,
			ty: 33,
			a: 1.217,
			c: -0.07,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5.65,
			ty: 32.95,
			a: 0.934,
			c: -0.054,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 6.05,
			ty: 3.15,
			a: 0.926,
			b: -0.413,
			c: 0.354,
			d: 0.921,
			l: 7
		},
		l_ear: {
			tx: 21.8,
			ty: 8.1,
			a: 0.993,
			b: 0.118,
			c: -0.175,
			d: 0.987,
			l: 6
		},
		head_sleep: {
			tx: 11.3,
			ty: 12.8,
			c: -0.058,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 23.75,
			ty: 25.4,
			c: -0.058,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13.95,
			ty: 36.7,
			c: -0.058,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 10.25,
			ty: 23.6,
			c: -0.058,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 5.35,
			ty: 32.45,
			c: -0.058,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 16.85,
			ty: 25.35,
			a: -0.847,
			c: -0.049,
			d: 0.848,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 19.55,
			ty: 33,
			a: 1.217,
			c: -0.075,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5.7,
			ty: 33,
			a: 0.934,
			c: -0.058,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 6.15,
			ty: 3.2,
			a: 0.923,
			b: -0.421,
			c: 0.358,
			d: 0.919,
			l: 7
		},
		l_ear: {
			tx: 22.05,
			ty: 8.1,
			a: 0.992,
			b: 0.123,
			c: -0.184,
			d: 0.985,
			l: 6
		},
		head_sleep: {
			tx: 11.45,
			ty: 12.8,
			c: -0.062,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 23.85,
			ty: 25.35,
			c: -0.062,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 14.05,
			ty: 36.75,
			c: -0.062,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 10.35,
			ty: 23.6,
			c: -0.062,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 5.4,
			ty: 32.45,
			c: -0.062,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 17,
			ty: 25.3,
			a: -0.847,
			c: -0.052,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 19.65,
			ty: 33,
			a: 1.217,
			c: -0.08,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5.85,
			ty: 33,
			a: 0.934,
			c: -0.061,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 6.2,
			ty: 3.25,
			a: 0.921,
			b: -0.426,
			c: 0.362,
			d: 0.916,
			l: 7
		},
		l_ear: {
			tx: 22.25,
			ty: 8.1,
			a: 0.991,
			b: 0.127,
			c: -0.192,
			d: 0.984,
			l: 6
		},
		head_sleep: {
			tx: 11.6,
			ty: 12.75,
			c: -0.066,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 23.95,
			ty: 25.4,
			c: -0.066,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 14.1,
			ty: 36.75,
			c: -0.066,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 10.45,
			ty: 23.65,
			c: -0.066,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 5.5,
			ty: 32.45,
			c: -0.066,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 17.05,
			ty: 25.3,
			a: -0.847,
			c: -0.056,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 19.7,
			ty: 33,
			a: 1.217,
			c: -0.081,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5.85,
			ty: 33,
			a: 0.934,
			c: -0.062,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 6.25,
			ty: 3.4,
			a: 0.918,
			b: -0.434,
			c: 0.366,
			d: 0.914,
			l: 7
		},
		l_ear: {
			tx: 22.5,
			ty: 8.1,
			a: 0.99,
			b: 0.135,
			c: -0.201,
			d: 0.982,
			l: 6
		},
		head_sleep: {
			tx: 11.75,
			ty: 12.75,
			c: -0.066,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 24,
			ty: 25.4,
			c: -0.066,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 14.1,
			ty: 36.7,
			c: -0.066,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 10.55,
			ty: 23.65,
			c: -0.066,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 5.55,
			ty: 32.45,
			c: -0.066,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 17.15,
			ty: 25.35,
			a: -0.847,
			c: -0.056,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 19.8,
			ty: 32.95,
			a: 1.217,
			c: -0.085,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5.95,
			ty: 32.95,
			a: 0.934,
			c: -0.066,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 6.35,
			ty: 3.45,
			a: 0.915,
			b: -0.442,
			c: 0.37,
			d: 0.912,
			l: 7
		},
		l_ear: {
			tx: 22.65,
			ty: 8.15,
			a: 0.99,
			b: 0.14,
			c: -0.209,
			d: 0.981,
			l: 6
		},
		head_sleep: {
			tx: 11.8,
			ty: 12.75,
			c: -0.07,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 24.1,
			ty: 25.4,
			c: -0.07,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 14.15,
			ty: 36.7,
			c: -0.07,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 10.65,
			ty: 23.65,
			c: -0.07,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 5.6,
			ty: 32.4,
			c: -0.07,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 17.2,
			ty: 25.35,
			a: -0.847,
			c: -0.059,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 19.8,
			ty: 33,
			a: 1.217,
			c: -0.086,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 6,
			ty: 33,
			a: 0.934,
			c: -0.066,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 6.4,
			ty: 3.5,
			a: 0.914,
			b: -0.447,
			c: 0.374,
			d: 0.91,
			l: 7
		},
		l_ear: {
			tx: 22.85,
			ty: 8.2,
			a: 0.989,
			b: 0.144,
			c: -0.217,
			d: 0.979,
			l: 6
		},
		head_sleep: {
			tx: 11.95,
			ty: 12.75,
			c: -0.071,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 24.15,
			ty: 25.4,
			c: -0.071,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 14.25,
			ty: 36.7,
			c: -0.071,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 10.65,
			ty: 23.65,
			c: -0.071,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 5.7,
			ty: 32.45,
			c: -0.071,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 17.25,
			ty: 25.35,
			a: -0.847,
			c: -0.06,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 19.9,
			ty: 32.95,
			a: 1.217,
			c: -0.091,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 6.05,
			ty: 32.9,
			a: 0.934,
			c: -0.07,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 6.45,
			ty: 3.6,
			a: 0.91,
			b: -0.455,
			c: 0.377,
			d: 0.908,
			l: 7
		},
		l_ear: {
			tx: 22.95,
			ty: 8.1,
			a: 0.988,
			b: 0.148,
			c: -0.222,
			d: 0.978,
			l: 6
		},
		head_sleep: {
			tx: 12.1,
			ty: 12.75,
			c: -0.075,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 24.25,
			ty: 25.4,
			c: -0.075,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 14.3,
			ty: 36.65,
			c: -0.075,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 10.8,
			ty: 23.6,
			c: -0.075,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 5.75,
			ty: 32.45,
			c: -0.075,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 17.4,
			ty: 25.3,
			a: -0.847,
			c: -0.063,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 19.95,
			ty: 32.95,
			a: 1.217,
			c: -0.092,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 6.05,
			ty: 32.9,
			a: 0.934,
			c: -0.07,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 6.55,
			ty: 3.65,
			a: 0.909,
			b: -0.459,
			c: 0.381,
			d: 0.906,
			l: 7
		},
		l_ear: {
			tx: 23.15,
			ty: 8.2,
			a: 0.988,
			b: 0.153,
			c: -0.23,
			d: 0.976,
			l: 6
		},
		head_sleep: {
			tx: 12.15,
			ty: 12.75,
			c: -0.075,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 24.35,
			ty: 25.4,
			c: -0.075,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 14.35,
			ty: 36.65,
			c: -0.075,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 10.8,
			ty: 23.6,
			c: -0.075,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 5.8,
			ty: 32.45,
			c: -0.075,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 17.45,
			ty: 25.3,
			a: -0.847,
			c: -0.064,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 20.05,
			ty: 32.95,
			a: 1.217,
			c: -0.096,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 6.15,
			ty: 32.95,
			a: 0.934,
			c: -0.074,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 6.55,
			ty: 3.7,
			a: 0.907,
			b: -0.464,
			c: 0.385,
			d: 0.904,
			l: 7
		},
		l_ear: {
			tx: 23.25,
			ty: 8.15,
			a: 0.987,
			b: 0.157,
			c: -0.235,
			d: 0.975,
			l: 6
		},
		head_sleep: {
			tx: 12.3,
			ty: 12.8,
			c: -0.079,
			l: 5
		},
		l_arm: {
			tx: 24.45,
			ty: 25.35,
			c: -0.079,
			l: 4
		},
		navel: {
			tx: 14.4,
			ty: 36.7,
			c: -0.079,
			l: 3
		},
		body: {
			tx: 10.95,
			ty: 23.6,
			c: -0.079,
			l: 2
		},
		tail: {
			tx: 5.9,
			ty: 32.4,
			c: -0.079,
			l: 1
		},
		r_arm: {
			tx: 17.55,
			ty: 25.3,
			a: -0.847,
			c: -0.067,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 20.05,
			ty: 32.95,
			a: 1.217,
			c: -0.097,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 6.2,
			ty: 32.95,
			a: 0.934,
			c: -0.074,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 6.65,
			ty: 3.8,
			a: 0.905,
			b: -0.468,
			c: 0.388,
			d: 0.902,
			l: 7
		},
		l_ear: {
			tx: 23.4,
			ty: 8.25,
			a: 0.986,
			b: 0.161,
			c: -0.243,
			d: 0.973,
			l: 6
		},
		head_sleep: {
			tx: 12.35,
			ty: 12.8,
			c: -0.08,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 24.5,
			ty: 25.35,
			c: -0.08,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 14.5,
			ty: 36.7,
			c: -0.08,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 10.95,
			ty: 23.6,
			c: -0.08,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 5.9,
			ty: 32.4,
			c: -0.08,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 17.6,
			ty: 25.3,
			a: -0.847,
			c: -0.067,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 20.1,
			ty: 32.95,
			a: 1.217,
			c: -0.101,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 6.25,
			ty: 32.95,
			a: 0.934,
			c: -0.078,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 6.7,
			ty: 3.8,
			a: 0.902,
			b: -0.475,
			c: 0.389,
			d: 0.901,
			l: 7
		},
		l_ear: {
			tx: 23.55,
			ty: 8.15,
			a: 0.986,
			b: 0.165,
			c: -0.248,
			d: 0.972,
			l: 6
		},
		head_sleep: {
			tx: 12.45,
			ty: 12.8,
			c: -0.083,
			l: 5
		},
		l_arm: {
			tx: 24.55,
			ty: 25.35,
			c: -0.083,
			l: 4
		},
		navel: {
			tx: 14.5,
			ty: 36.7,
			c: -0.083,
			l: 3
		},
		body: {
			tx: 11.1,
			ty: 23.65,
			c: -0.083,
			l: 2
		},
		tail: {
			tx: 6,
			ty: 32.4,
			c: -0.083,
			l: 1
		},
		r_arm: {
			tx: 17.65,
			ty: 25.3,
			a: -0.847,
			c: -0.071,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 20.15,
			ty: 32.95,
			a: 1.217,
			c: -0.102,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 6.3,
			ty: 32.95,
			a: 0.934,
			c: -0.078,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 6.75,
			ty: 3.85,
			a: 0.9,
			b: -0.48,
			c: 0.392,
			d: 0.899,
			l: 7
		},
		l_ear: {
			tx: 23.65,
			ty: 8.2,
			a: 0.986,
			b: 0.166,
			c: -0.252,
			d: 0.971,
			l: 6
		},
		head_sleep: {
			tx: 12.55,
			ty: 12.8,
			c: -0.084,
			l: 5
		},
		l_arm: {
			tx: 24.55,
			ty: 25.35,
			c: -0.084,
			l: 4
		},
		navel: {
			tx: 14.55,
			ty: 36.7,
			c: -0.084,
			l: 3
		},
		body: {
			tx: 11.1,
			ty: 23.65,
			c: -0.084,
			l: 2
		},
		tail: {
			tx: 6,
			ty: 32.4,
			c: -0.084,
			l: 1
		},
		r_arm: {
			tx: 17.75,
			ty: 25.3,
			a: -0.847,
			c: -0.071,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 20.2,
			ty: 32.95,
			a: 1.217,
			c: -0.102,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 6.3,
			ty: 32.95,
			a: 0.934,
			c: -0.079,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 6.75,
			ty: 3.85,
			a: 0.899,
			b: -0.484,
			c: 0.396,
			d: 0.897,
			l: 7
		},
		l_ear: {
			tx: 23.75,
			ty: 8.2,
			a: 0.985,
			b: 0.17,
			c: -0.256,
			d: 0.97,
			l: 6
		},
		head_sleep: {
			tx: 12.55,
			ty: 12.8,
			c: -0.084,
			l: 5
		},
		l_arm: {
			tx: 24.6,
			ty: 25.35,
			c: -0.084,
			l: 4
		},
		navel: {
			tx: 14.55,
			ty: 36.7,
			c: -0.084,
			l: 3
		},
		body: {
			tx: 11.15,
			ty: 23.65,
			c: -0.084,
			l: 2
		},
		tail: {
			tx: 6.05,
			ty: 32.4,
			c: -0.084,
			l: 1
		},
		r_arm: {
			tx: 17.75,
			ty: 25.3,
			a: -0.847,
			c: -0.071,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 20.2,
			ty: 32.95,
			a: 1.217,
			c: -0.107,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 6.35,
			ty: 32.95,
			a: 0.934,
			c: -0.082,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 6.85,
			ty: 3.9,
			a: 0.898,
			b: -0.485,
			c: 0.396,
			d: 0.897,
			l: 7
		},
		l_ear: {
			tx: 23.9,
			ty: 8.2,
			a: 0.984,
			b: 0.174,
			c: -0.261,
			d: 0.969,
			l: 6
		},
		head_sleep: {
			tx: 12.7,
			ty: 12.8,
			c: -0.088,
			l: 5
		},
		l_arm: {
			tx: 24.65,
			ty: 25.4,
			c: -0.088,
			l: 4
		},
		navel: {
			tx: 14.6,
			ty: 36.7,
			c: -0.088,
			l: 3
		},
		body: {
			tx: 11.2,
			ty: 23.65,
			c: -0.088,
			l: 2
		},
		tail: {
			tx: 6.1,
			ty: 32.45,
			c: -0.088,
			l: 1
		},
		r_arm: {
			tx: 17.8,
			ty: 25.35,
			a: -0.847,
			c: -0.074,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 20.25,
			ty: 33,
			a: 1.217,
			c: -0.107,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 6.4,
			ty: 32.95,
			a: 0.934,
			c: -0.082,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 6.8,
			ty: 4,
			a: 0.897,
			b: -0.489,
			c: 0.4,
			d: 0.895,
			l: 7
		},
		l_ear: {
			tx: 24,
			ty: 8.15,
			a: 0.984,
			b: 0.175,
			c: -0.265,
			d: 0.968,
			l: 6
		},
		head_sleep: {
			tx: 12.7,
			ty: 12.8,
			c: -0.088,
			l: 5
		},
		l_arm: {
			tx: 24.7,
			ty: 25.4,
			c: -0.088,
			l: 4
		},
		navel: {
			tx: 14.6,
			ty: 36.7,
			c: -0.088,
			l: 3
		},
		body: {
			tx: 11.25,
			ty: 23.65,
			c: -0.088,
			l: 2
		},
		tail: {
			tx: 6.1,
			ty: 32.45,
			c: -0.088,
			l: 1
		},
		r_arm: {
			tx: 17.85,
			ty: 25.35,
			a: -0.847,
			c: -0.075,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 20.3,
			ty: 33,
			a: 1.217,
			c: -0.108,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 6.4,
			ty: 32.95,
			a: 0.934,
			c: -0.083,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 6.9,
			ty: 3.95,
			a: 0.895,
			b: -0.492,
			c: 0.4,
			d: 0.895,
			l: 7
		},
		l_ear: {
			tx: 24.05,
			ty: 8.2,
			a: 0.983,
			b: 0.178,
			c: -0.269,
			d: 0.967,
			l: 6
		},
		head_sleep: {
			tx: 12.7,
			ty: 12.8,
			c: -0.088,
			l: 5
		},
		l_arm: {
			tx: 24.75,
			ty: 25.4,
			c: -0.088,
			l: 4
		},
		navel: {
			tx: 14.65,
			ty: 36.7,
			c: -0.088,
			l: 3
		},
		body: {
			tx: 11.3,
			ty: 23.65,
			c: -0.088,
			l: 2
		},
		tail: {
			tx: 6.2,
			ty: 32.45,
			c: -0.088,
			l: 1
		},
		r_arm: {
			tx: 17.9,
			ty: 25.35,
			a: -0.847,
			c: -0.075,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 20.35,
			ty: 33,
			a: 1.217,
			c: -0.112,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 6.45,
			ty: 33,
			a: 0.934,
			c: -0.086,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 6.85,
			ty: 4.05,
			a: 0.893,
			b: -0.496,
			c: 0.403,
			d: 0.893,
			l: 7
		},
		l_ear: {
			tx: 24.2,
			ty: 8.2,
			a: 0.983,
			b: 0.182,
			c: -0.273,
			d: 0.966,
			l: 6
		},
		head_sleep: {
			tx: 12.8,
			ty: 12.8,
			c: -0.092,
			l: 5
		},
		l_arm: {
			tx: 24.8,
			ty: 25.4,
			c: -0.092,
			l: 4
		},
		navel: {
			tx: 14.6,
			ty: 36.75,
			c: -0.092,
			l: 3
		},
		body: {
			tx: 11.35,
			ty: 23.65,
			c: -0.092,
			l: 2
		},
		tail: {
			tx: 6.2,
			ty: 32.45,
			c: -0.092,
			l: 1
		},
		r_arm: {
			tx: 17.95,
			ty: 25.35,
			a: -0.847,
			c: -0.078,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 20.35,
			ty: 33,
			a: 1.217,
			c: -0.112,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 6.45,
			ty: 33,
			a: 0.934,
			c: -0.086,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 6.9,
			ty: 4.1,
			a: 0.893,
			b: -0.497,
			c: 0.403,
			d: 0.893,
			l: 7
		},
		l_ear: {
			tx: 24.2,
			ty: 8.15,
			a: 0.983,
			b: 0.183,
			c: -0.273,
			d: 0.966,
			l: 6
		},
		head_sleep: {
			tx: 12.85,
			ty: 12.8,
			c: -0.092,
			l: 5
		},
		l_arm: {
			tx: 24.8,
			ty: 25.4,
			c: -0.092,
			l: 4
		},
		navel: {
			tx: 14.7,
			ty: 36.7,
			c: -0.092,
			l: 3
		},
		body: {
			tx: 11.4,
			ty: 23.65,
			c: -0.092,
			l: 2
		},
		tail: {
			tx: 6.2,
			ty: 32.45,
			c: -0.092,
			l: 1
		},
		r_arm: {
			tx: 17.95,
			ty: 25.35,
			a: -0.847,
			c: -0.078,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 20.35,
			ty: 33,
			a: 1.217,
			c: -0.113,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 6.45,
			ty: 33,
			a: 0.934,
			c: -0.086,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 6.9,
			ty: 4.15,
			a: 0.891,
			b: -0.5,
			c: 0.407,
			d: 0.891,
			l: 7
		},
		l_ear: {
			tx: 24.3,
			ty: 8.15,
			a: 0.983,
			b: 0.183,
			c: -0.277,
			d: 0.965,
			l: 6
		},
		head_sleep: {
			tx: 12.85,
			ty: 12.8,
			c: -0.092,
			l: 5
		},
		l_arm: {
			tx: 24.85,
			ty: 25.4,
			c: -0.092,
			l: 4
		},
		navel: {
			tx: 14.7,
			ty: 36.7,
			c: -0.092,
			l: 3
		},
		body: {
			tx: 11.4,
			ty: 23.65,
			c: -0.092,
			l: 2
		},
		tail: {
			tx: 6.2,
			ty: 32.45,
			c: -0.092,
			l: 1
		},
		r_arm: {
			tx: 18,
			ty: 25.35,
			a: -0.847,
			c: -0.078,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 20.35,
			ty: 33,
			a: 1.217,
			c: -0.113,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 6.45,
			ty: 33,
			a: 0.934,
			c: -0.087,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 6.9,
			ty: 4.1,
			a: 0.891,
			b: -0.501,
			c: 0.407,
			d: 0.891,
			l: 7
		},
		l_ear: {
			tx: 24.35,
			ty: 8.2,
			a: 0.982,
			b: 0.187,
			c: -0.278,
			d: 0.964,
			l: 6
		},
		head_sleep: {
			tx: 12.9,
			ty: 12.8,
			c: -0.093,
			l: 5
		},
		l_arm: {
			tx: 24.85,
			ty: 25.4,
			c: -0.093,
			l: 4
		},
		navel: {
			tx: 14.7,
			ty: 36.7,
			c: -0.093,
			l: 3
		},
		body: {
			tx: 11.4,
			ty: 23.65,
			c: -0.093,
			l: 2
		},
		tail: {
			tx: 6.25,
			ty: 32.45,
			c: -0.093,
			l: 1
		},
		r_arm: {
			tx: 18,
			ty: 25.35,
			a: -0.847,
			c: -0.078,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 20.4,
			ty: 33,
			a: 1.217,
			c: -0.113,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 6.5,
			ty: 33,
			a: 0.934,
			c: -0.087,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 6.95,
			ty: 4.1,
			a: 0.891,
			b: -0.501,
			c: 0.407,
			d: 0.89,
			l: 7
		},
		l_ear: {
			tx: 24.4,
			ty: 8.25,
			a: 0.982,
			b: 0.187,
			c: -0.281,
			d: 0.963,
			l: 6
		},
		head_sleep: {
			tx: 12.9,
			ty: 12.8,
			c: -0.093,
			l: 5
		},
		l_arm: {
			tx: 24.85,
			ty: 25.4,
			c: -0.093,
			l: 4
		},
		navel: {
			tx: 14.75,
			ty: 36.7,
			c: -0.093,
			l: 3
		},
		body: {
			tx: 11.45,
			ty: 23.65,
			c: -0.093,
			l: 2
		},
		tail: {
			tx: 6.25,
			ty: 32.45,
			c: -0.093,
			l: 1
		},
		r_arm: {
			tx: 18,
			ty: 25.35,
			a: -0.847,
			c: -0.079,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 20.4,
			ty: 33,
			a: 1.217,
			c: -0.113,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 6.5,
			ty: 33,
			a: 0.934,
			c: -0.087,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 6.95,
			ty: 4.1,
			a: 0.889,
			b: -0.504,
			c: 0.407,
			d: 0.89,
			l: 7
		},
		l_ear: {
			tx: 24.45,
			ty: 8.25,
			a: 0.982,
			b: 0.187,
			c: -0.282,
			d: 0.963,
			l: 6
		},
		head_sleep: {
			tx: 12.95,
			ty: 12.8,
			c: -0.093,
			l: 5
		},
		l_arm: {
			tx: 24.9,
			ty: 25.4,
			c: -0.093,
			l: 4
		},
		navel: {
			tx: 14.75,
			ty: 36.7,
			c: -0.093,
			l: 3
		},
		body: {
			tx: 11.45,
			ty: 23.65,
			c: -0.093,
			l: 2
		},
		tail: {
			tx: 6.3,
			ty: 32.45,
			c: -0.093,
			l: 1
		},
		r_arm: {
			tx: 18.05,
			ty: 25.35,
			a: -0.847,
			c: -0.079,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 20.4,
			ty: 33,
			a: 1.217,
			c: -0.113,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 6.5,
			ty: 33,
			a: 0.934,
			c: -0.087,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 7,
			ty: 4.1,
			a: 0.889,
			b: -0.505,
			c: 0.407,
			d: 0.89,
			l: 7
		},
		l_ear: {
			tx: 24.45,
			ty: 8.25,
			a: 0.982,
			b: 0.187,
			c: -0.282,
			d: 0.963,
			l: 6
		},
		head_sleep: {
			tx: 12.95,
			ty: 12.8,
			c: -0.093,
			l: 5
		},
		l_arm: {
			tx: 24.95,
			ty: 25.4,
			c: -0.093,
			l: 4
		},
		navel: {
			tx: 14.75,
			ty: 36.7,
			c: -0.093,
			l: 3
		},
		body: {
			tx: 11.45,
			ty: 23.65,
			c: -0.093,
			l: 2
		},
		tail: {
			tx: 6.3,
			ty: 32.45,
			c: -0.093,
			l: 1
		},
		r_arm: {
			tx: 18.05,
			ty: 25.35,
			a: -0.847,
			c: -0.079,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 20.4,
			ty: 33,
			a: 1.217,
			c: -0.113,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 6.5,
			ty: 33,
			a: 0.934,
			c: -0.087,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 7,
			ty: 4.1,
			a: 0.889,
			b: -0.505,
			c: 0.407,
			d: 0.89,
			l: 7
		},
		l_ear: {
			tx: 24.45,
			ty: 8.25,
			a: 0.982,
			b: 0.187,
			c: -0.282,
			d: 0.963,
			l: 6
		},
		head_sleep: {
			tx: 12.95,
			ty: 12.8,
			c: -0.093,
			l: 5
		},
		l_arm: {
			tx: 24.95,
			ty: 25.4,
			c: -0.093,
			l: 4
		},
		navel: {
			tx: 14.75,
			ty: 36.7,
			c: -0.093,
			l: 3
		},
		body: {
			tx: 11.5,
			ty: 23.65,
			c: -0.093,
			l: 2
		},
		tail: {
			tx: 6.3,
			ty: 32.45,
			c: -0.093,
			l: 1
		},
		r_arm: {
			tx: 18.05,
			ty: 25.35,
			a: -0.847,
			c: -0.079,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 20.45,
			ty: 32.95,
			a: 1.217,
			c: -0.117,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 6.8,
			ty: 32.95,
			a: 0.934,
			c: -0.09,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 6.3,
			ty: 3.95,
			a: 0.89,
			b: -0.506,
			c: 0.41,
			d: 0.89,
			l: 7
		},
		l_ear: {
			tx: 24.3,
			ty: 8.3,
			a: 0.982,
			b: 0.19,
			c: -0.285,
			d: 0.963,
			l: 6
		},
		head_sleep: {
			tx: 13,
			ty: 12.8,
			c: -0.096,
			l: 5
		},
		l_arm: {
			tx: 24.95,
			ty: 25.4,
			c: -0.096,
			l: 4
		},
		navel: {
			tx: 14.75,
			ty: 36.7,
			c: -0.096,
			l: 3
		},
		body: {
			tx: 11.5,
			ty: 23.65,
			c: -0.096,
			l: 2
		},
		tail: {
			tx: 6.3,
			ty: 32.45,
			c: -0.096,
			l: 1
		},
		r_arm: {
			tx: 18.05,
			ty: 25.35,
			a: -0.847,
			c: -0.082,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 20.3,
			ty: 33,
			a: 1.217,
			c: -0.108,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 6.65,
			ty: 32.95,
			a: 0.934,
			c: -0.083,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 6.1,
			ty: 3.85,
			a: 0.895,
			b: -0.493,
			c: 0.403,
			d: 0.893,
			l: 7
		},
		l_ear: {
			tx: 24,
			ty: 8.3,
			a: 0.983,
			b: 0.179,
			c: -0.269,
			d: 0.967,
			l: 6
		},
		head_sleep: {
			tx: 12.75,
			ty: 12.8,
			c: -0.089,
			l: 5
		},
		l_arm: {
			tx: 24.8,
			ty: 25.4,
			c: -0.089,
			l: 4
		},
		navel: {
			tx: 14.65,
			ty: 36.7,
			c: -0.089,
			l: 3
		},
		body: {
			tx: 11.3,
			ty: 23.65,
			c: -0.089,
			l: 2
		},
		tail: {
			tx: 6.15,
			ty: 32.45,
			c: -0.089,
			l: 1
		},
		r_arm: {
			tx: 17.9,
			ty: 25.35,
			a: -0.847,
			c: -0.075,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 20.2,
			ty: 32.95,
			a: 1.217,
			c: -0.102,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 6.55,
			ty: 32.95,
			a: 0.934,
			c: -0.079,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 6.05,
			ty: 3.7,
			a: 0.9,
			b: -0.48,
			c: 0.396,
			d: 0.897,
			l: 7
		},
		l_ear: {
			tx: 23.65,
			ty: 8.25,
			a: 0.985,
			b: 0.17,
			c: -0.256,
			d: 0.97,
			l: 6
		},
		head_sleep: {
			tx: 12.5,
			ty: 12.8,
			c: -0.084,
			l: 5
		},
		l_arm: {
			tx: 24.6,
			ty: 25.35,
			c: -0.084,
			l: 4
		},
		navel: {
			tx: 14.5,
			ty: 36.7,
			c: -0.084,
			l: 3
		},
		body: {
			tx: 11.15,
			ty: 23.65,
			c: -0.084,
			l: 2
		},
		tail: {
			tx: 6.05,
			ty: 32.4,
			c: -0.084,
			l: 1
		},
		r_arm: {
			tx: 17.75,
			ty: 25.3,
			a: -0.847,
			c: -0.071,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 20.05,
			ty: 32.95,
			a: 1.217,
			c: -0.097,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 6.5,
			ty: 32.95,
			a: 0.934,
			c: -0.074,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 5.95,
			ty: 3.55,
			a: 0.904,
			b: -0.471,
			c: 0.388,
			d: 0.902,
			l: 7
		},
		l_ear: {
			tx: 23.3,
			ty: 8.25,
			a: 0.986,
			b: 0.161,
			c: -0.243,
			d: 0.973,
			l: 6
		},
		head_sleep: {
			tx: 12.3,
			ty: 12.8,
			c: -0.08,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 24.45,
			ty: 25.35,
			c: -0.08,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 14.45,
			ty: 36.7,
			c: -0.08,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 10.95,
			ty: 23.6,
			c: -0.08,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 5.9,
			ty: 32.4,
			c: -0.08,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 17.55,
			ty: 25.3,
			a: -0.847,
			c: -0.067,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 20,
			ty: 32.95,
			a: 1.217,
			c: -0.092,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 6.35,
			ty: 32.9,
			a: 0.934,
			c: -0.07,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 5.85,
			ty: 3.45,
			a: 0.909,
			b: -0.459,
			c: 0.381,
			d: 0.906,
			l: 7
		},
		l_ear: {
			tx: 23.1,
			ty: 8.2,
			a: 0.988,
			b: 0.153,
			c: -0.23,
			d: 0.976,
			l: 6
		},
		head_sleep: {
			tx: 12.1,
			ty: 12.75,
			c: -0.075,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 24.35,
			ty: 25.4,
			c: -0.075,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 14.3,
			ty: 36.65,
			c: -0.075,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 10.8,
			ty: 23.6,
			c: -0.075,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 5.8,
			ty: 32.45,
			c: -0.075,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 17.45,
			ty: 25.3,
			a: -0.847,
			c: -0.064,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 19.9,
			ty: 33,
			a: 1.217,
			c: -0.086,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 6.3,
			ty: 33,
			a: 0.934,
			c: -0.066,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 5.7,
			ty: 3.2,
			a: 0.914,
			b: -0.447,
			c: 0.374,
			d: 0.91,
			l: 7
		},
		l_ear: {
			tx: 22.7,
			ty: 8.15,
			a: 0.989,
			b: 0.144,
			c: -0.218,
			d: 0.979,
			l: 6
		},
		head_sleep: {
			tx: 11.95,
			ty: 12.75,
			c: -0.071,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 24.15,
			ty: 25.4,
			c: -0.071,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 14.25,
			ty: 36.7,
			c: -0.071,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 10.65,
			ty: 23.65,
			c: -0.071,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 5.65,
			ty: 32.45,
			c: -0.071,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 17.35,
			ty: 25.35,
			a: -0.847,
			c: -0.06,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 19.75,
			ty: 33,
			a: 1.217,
			c: -0.081,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 6.15,
			ty: 33,
			a: 0.934,
			c: -0.062,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 5.5,
			ty: 3.15,
			a: 0.917,
			b: -0.438,
			c: 0.369,
			d: 0.913,
			l: 7
		},
		l_ear: {
			tx: 22.45,
			ty: 8.2,
			a: 0.99,
			b: 0.136,
			c: -0.205,
			d: 0.982,
			l: 6
		},
		head_sleep: {
			tx: 11.75,
			ty: 12.75,
			c: -0.067,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 24,
			ty: 25.4,
			c: -0.067,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 14.2,
			ty: 36.7,
			c: -0.067,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 10.5,
			ty: 23.65,
			c: -0.067,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 5.55,
			ty: 32.45,
			c: -0.067,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 17.15,
			ty: 25.35,
			a: -0.847,
			c: -0.056,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 19.65,
			ty: 33,
			a: 1.217,
			c: -0.076,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 6.05,
			ty: 33,
			a: 0.934,
			c: -0.058,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 5.5,
			ty: 3.1,
			a: 0.921,
			b: -0.426,
			c: 0.362,
			d: 0.916,
			l: 7
		},
		l_ear: {
			tx: 22.2,
			ty: 8.15,
			a: 0.991,
			b: 0.127,
			c: -0.192,
			d: 0.984,
			l: 6
		},
		head_sleep: {
			tx: 11.6,
			ty: 12.75,
			c: -0.062,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 23.9,
			ty: 25.4,
			c: -0.062,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 14.05,
			ty: 36.75,
			c: -0.062,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 10.35,
			ty: 23.6,
			c: -0.062,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 5.45,
			ty: 32.45,
			c: -0.062,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 17,
			ty: 25.35,
			a: -0.847,
			c: -0.053,
			d: 0.848,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 19.55,
			ty: 33,
			a: 1.217,
			c: -0.075,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 6,
			ty: 33,
			a: 0.934,
			c: -0.057,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 5.45,
			ty: 2.85,
			a: 0.924,
			b: -0.417,
			c: 0.355,
			d: 0.92,
			l: 7
		},
		l_ear: {
			tx: 21.85,
			ty: 8.15,
			a: 0.992,
			b: 0.122,
			c: -0.183,
			d: 0.986,
			l: 6
		},
		head_sleep: {
			tx: 11.4,
			ty: 12.8,
			c: -0.061,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 23.8,
			ty: 25.35,
			c: -0.061,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 14,
			ty: 36.75,
			c: -0.061,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 10.3,
			ty: 23.6,
			c: -0.061,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 5.4,
			ty: 32.45,
			c: -0.061,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 16.95,
			ty: 25.3,
			a: -0.847,
			c: -0.052,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 19.45,
			ty: 33,
			a: 1.217,
			c: -0.069,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5.95,
			ty: 32.95,
			a: 0.934,
			c: -0.053,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 5.35,
			ty: 2.8,
			a: 0.927,
			b: -0.409,
			c: 0.35,
			d: 0.923,
			l: 7
		},
		l_ear: {
			tx: 21.65,
			ty: 8.15,
			a: 0.993,
			b: 0.114,
			c: -0.17,
			d: 0.988,
			l: 6
		},
		head_sleep: {
			tx: 11.2,
			ty: 12.8,
			c: -0.057,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 23.65,
			ty: 25.35,
			c: -0.057,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13.9,
			ty: 36.7,
			c: -0.057,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 10.2,
			ty: 23.6,
			c: -0.057,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 5.25,
			ty: 32.45,
			c: -0.057,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 16.8,
			ty: 25.3,
			a: -0.847,
			c: -0.048,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 19.4,
			ty: 32.95,
			a: 1.217,
			c: -0.064,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5.8,
			ty: 32.95,
			a: 0.934,
			c: -0.049,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 5.25,
			ty: 2.7,
			a: 0.931,
			b: -0.397,
			c: 0.343,
			d: 0.926,
			l: 7
		},
		l_ear: {
			tx: 21.35,
			ty: 8.15,
			a: 0.994,
			b: 0.105,
			c: -0.161,
			d: 0.989,
			l: 6
		},
		head_sleep: {
			tx: 11.05,
			ty: 12.8,
			c: -0.053,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 23.5,
			ty: 25.4,
			c: -0.053,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13.85,
			ty: 36.7,
			c: -0.053,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 10.05,
			ty: 23.6,
			c: -0.053,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 5.15,
			ty: 32.45,
			c: -0.053,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 16.65,
			ty: 25.35,
			a: -0.847,
			c: -0.045,
			d: 0.848,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 19.25,
			ty: 32.95,
			a: 1.217,
			c: -0.059,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5.7,
			ty: 32.95,
			a: 0.934,
			c: -0.046,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 5.15,
			ty: 2.65,
			a: 0.934,
			b: -0.388,
			c: 0.339,
			d: 0.929,
			l: 7
		},
		l_ear: {
			tx: 21.1,
			ty: 8.1,
			a: 0.995,
			b: 0.1,
			c: -0.149,
			d: 0.991,
			l: 6
		},
		head_sleep: {
			tx: 10.85,
			ty: 12.8,
			c: -0.049,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 23.4,
			ty: 25.4,
			c: -0.049,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13.7,
			ty: 36.7,
			c: -0.049,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 9.9,
			ty: 23.65,
			c: -0.049,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 5.05,
			ty: 32.45,
			c: -0.049,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 16.55,
			ty: 25.35,
			a: -0.847,
			c: -0.041,
			d: 0.848,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 19.2,
			ty: 33,
			a: 1.217,
			c: -0.054,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5.65,
			ty: 33,
			a: 0.934,
			c: -0.042,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 5,
			ty: 2.6,
			a: 0.937,
			b: -0.38,
			c: 0.335,
			d: 0.931,
			l: 7
		},
		l_ear: {
			tx: 20.85,
			ty: 8.15,
			a: 0.995,
			b: 0.092,
			c: -0.14,
			d: 0.992,
			l: 6
		},
		head_sleep: {
			tx: 10.7,
			ty: 12.8,
			c: -0.045,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 23.3,
			ty: 25.45,
			c: -0.045,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13.65,
			ty: 36.7,
			c: -0.045,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 9.75,
			ty: 23.65,
			c: -0.045,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 5,
			ty: 32.45,
			c: -0.045,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 16.4,
			ty: 25.35,
			a: -0.847,
			c: -0.038,
			d: 0.848,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 19.15,
			ty: 33,
			a: 1.217,
			c: -0.053,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5.6,
			ty: 33,
			a: 0.934,
			c: -0.041,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 5,
			ty: 2.4,
			a: 0.939,
			b: -0.371,
			c: 0.327,
			d: 0.934,
			l: 7
		},
		l_ear: {
			tx: 20.65,
			ty: 8.15,
			a: 0.996,
			b: 0.084,
			c: -0.131,
			d: 0.993,
			l: 6
		},
		head_sleep: {
			tx: 10.6,
			ty: 12.8,
			c: -0.044,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 23.2,
			ty: 25.45,
			c: -0.044,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13.6,
			ty: 36.7,
			c: -0.044,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 9.65,
			ty: 23.65,
			c: -0.044,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 4.9,
			ty: 32.45,
			c: -0.044,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 16.35,
			ty: 25.35,
			a: -0.847,
			c: -0.037,
			d: 0.848,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 19,
			ty: 33,
			a: 1.217,
			c: -0.048,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5.5,
			ty: 33,
			a: 0.934,
			c: -0.037,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 4.85,
			ty: 2.4,
			a: 0.942,
			b: -0.363,
			c: 0.323,
			d: 0.936,
			l: 7
		},
		l_ear: {
			tx: 20.4,
			ty: 8.15,
			a: 0.997,
			b: 0.079,
			c: -0.119,
			d: 0.995,
			l: 6
		},
		head_sleep: {
			tx: 10.45,
			ty: 12.75,
			c: -0.04,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 23.1,
			ty: 25.45,
			c: -0.04,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13.55,
			ty: 36.7,
			c: -0.04,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 9.55,
			ty: 23.65,
			c: -0.04,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 4.85,
			ty: 32.45,
			c: -0.04,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 16.2,
			ty: 25.4,
			a: -0.847,
			c: -0.034,
			d: 0.848,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.95,
			ty: 33,
			a: 1.217,
			c: -0.043,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5.45,
			ty: 33,
			a: 0.934,
			c: -0.033,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 4.85,
			ty: 2.3,
			a: 0.944,
			b: -0.354,
			c: 0.319,
			d: 0.938,
			l: 7
		},
		l_ear: {
			tx: 20.2,
			ty: 8.25,
			a: 0.997,
			b: 0.074,
			c: -0.11,
			d: 0.995,
			l: 6
		},
		head_sleep: {
			tx: 10.3,
			ty: 12.75,
			c: -0.036,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 23,
			ty: 25.4,
			c: -0.036,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13.45,
			ty: 36.75,
			c: -0.036,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 9.45,
			ty: 23.7,
			c: -0.036,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 4.7,
			ty: 32.45,
			c: -0.036,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 16.1,
			ty: 25.35,
			a: -0.847,
			c: -0.03,
			d: 0.848,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.9,
			ty: 33,
			a: 1.217,
			c: -0.038,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5.35,
			ty: 32.95,
			a: 0.934,
			c: -0.03,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 4.75,
			ty: 2.15,
			a: 0.945,
			b: -0.349,
			c: 0.315,
			d: 0.94,
			l: 7
		},
		l_ear: {
			tx: 19.95,
			ty: 8.15,
			a: 0.998,
			b: 0.066,
			c: -0.101,
			d: 0.996,
			l: 6
		},
		head_sleep: {
			tx: 10.15,
			ty: 12.75,
			c: -0.032,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 22.9,
			ty: 25.4,
			c: -0.032,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13.4,
			ty: 36.7,
			c: -0.032,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 9.35,
			ty: 23.6,
			c: -0.032,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 4.65,
			ty: 32.45,
			c: -0.032,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 16,
			ty: 25.35,
			a: -0.847,
			c: -0.027,
			d: 0.848,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.8,
			ty: 32.95,
			a: 1.217,
			c: -0.038,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5.3,
			ty: 32.95,
			a: 0.934,
			c: -0.029,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 4.75,
			ty: 2.05,
			a: 0.947,
			b: -0.341,
			c: 0.308,
			d: 0.943,
			l: 7
		},
		l_ear: {
			tx: 19.75,
			ty: 8.2,
			a: 0.998,
			b: 0.062,
			c: -0.092,
			d: 0.997,
			l: 6
		},
		head_sleep: {
			tx: 10.05,
			ty: 12.75,
			c: -0.031,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 22.8,
			ty: 25.35,
			c: -0.031,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13.3,
			ty: 36.7,
			c: -0.031,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 9.2,
			ty: 23.6,
			c: -0.031,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 4.55,
			ty: 32.5,
			c: -0.031,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 15.9,
			ty: 25.3,
			a: -0.847,
			c: -0.026,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.75,
			ty: 32.95,
			a: 1.217,
			c: -0.033,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5.25,
			ty: 32.95,
			a: 0.934,
			c: -0.025,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 4.7,
			ty: 2,
			a: 0.95,
			b: -0.333,
			c: 0.304,
			d: 0.945,
			l: 7
		},
		l_ear: {
			tx: 19.6,
			ty: 8.15,
			a: 0.998,
			b: 0.057,
			c: -0.084,
			d: 0.998,
			l: 6
		},
		head_sleep: {
			tx: 9.9,
			ty: 12.75,
			c: -0.027,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 22.7,
			ty: 25.35,
			c: -0.027,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13.25,
			ty: 36.7,
			c: -0.027,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 9.15,
			ty: 23.6,
			c: -0.027,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 4.55,
			ty: 32.45,
			c: -0.027,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 15.8,
			ty: 25.3,
			a: -0.847,
			c: -0.023,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.65,
			ty: 32.95,
			a: 1.217,
			c: -0.032,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5.2,
			ty: 32.95,
			a: 0.934,
			c: -0.025,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 4.6,
			ty: 2,
			a: 0.951,
			b: -0.328,
			c: 0.3,
			d: 0.947,
			l: 7
		},
		l_ear: {
			tx: 19.4,
			ty: 8.2,
			a: 0.998,
			b: 0.052,
			c: -0.079,
			d: 0.998,
			l: 6
		},
		head_sleep: {
			tx: 9.75,
			ty: 12.75,
			c: -0.026,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 22.65,
			ty: 25.35,
			c: -0.026,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13.2,
			ty: 36.7,
			c: -0.026,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 9.05,
			ty: 23.6,
			c: -0.026,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 4.45,
			ty: 32.45,
			c: -0.026,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 15.8,
			ty: 25.3,
			a: -0.847,
			c: -0.022,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.6,
			ty: 33,
			a: 1.217,
			c: -0.027,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5.15,
			ty: 32.95,
			a: 0.934,
			c: -0.021,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 4.6,
			ty: 1.9,
			a: 0.953,
			b: -0.32,
			c: 0.296,
			d: 0.949,
			l: 7
		},
		l_ear: {
			tx: 19.2,
			ty: 8.25,
			a: 0.999,
			b: 0.045,
			c: -0.07,
			d: 0.998,
			l: 6
		},
		head_sleep: {
			tx: 9.7,
			ty: 12.75,
			c: -0.022,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 22.6,
			ty: 25.35,
			c: -0.022,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13.15,
			ty: 36.7,
			c: -0.022,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 9,
			ty: 23.6,
			c: -0.022,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 4.35,
			ty: 32.45,
			c: -0.022,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 15.6,
			ty: 25.3,
			a: -0.847,
			c: -0.019,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.5,
			ty: 33,
			a: 1.217,
			c: -0.023,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5.05,
			ty: 33,
			a: 0.934,
			c: -0.017,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 4.55,
			ty: 1.85,
			a: 0.954,
			b: -0.315,
			c: 0.292,
			d: 0.951,
			l: 7
		},
		l_ear: {
			tx: 19.05,
			ty: 8.25,
			a: 0.999,
			b: 0.04,
			c: -0.062,
			d: 0.999,
			l: 6
		},
		head_sleep: {
			tx: 9.55,
			ty: 12.75,
			c: -0.019,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 22.45,
			ty: 25.35,
			c: -0.019,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13.1,
			ty: 36.7,
			c: -0.019,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 8.85,
			ty: 23.6,
			c: -0.019,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 4.3,
			ty: 32.45,
			c: -0.019,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 15.55,
			ty: 25.3,
			a: -0.847,
			c: -0.016,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.45,
			ty: 32.95,
			a: 1.217,
			c: -0.022,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 5,
			ty: 32.95,
			a: 0.934,
			c: -0.017,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 4.5,
			ty: 1.75,
			a: 0.956,
			b: -0.307,
			c: 0.288,
			d: 0.952,
			l: 7
		},
		l_ear: {
			tx: 18.85,
			ty: 8.2,
			a: 0.999,
			b: 0.036,
			c: -0.057,
			d: 0.999,
			l: 6
		},
		head_sleep: {
			tx: 9.5,
			ty: 12.8,
			c: -0.018,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 22.4,
			ty: 25.35,
			c: -0.018,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13.05,
			ty: 36.7,
			c: -0.018,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 8.75,
			ty: 23.6,
			c: -0.018,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 4.25,
			ty: 32.4,
			c: -0.018,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 15.5,
			ty: 25.3,
			a: -0.847,
			c: -0.015,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.4,
			ty: 32.95,
			a: 1.217,
			c: -0.017,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 4.95,
			ty: 32.95,
			a: 0.934,
			c: -0.013,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 4.4,
			ty: 1.75,
			a: 0.957,
			b: -0.303,
			c: 0.287,
			d: 0.953,
			l: 7
		},
		l_ear: {
			tx: 18.7,
			ty: 8.15,
			a: 0.999,
			b: 0.032,
			c: -0.049,
			d: 0.999,
			l: 6
		},
		head_sleep: {
			tx: 9.35,
			ty: 12.8,
			c: -0.014,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 22.3,
			ty: 25.35,
			c: -0.014,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13,
			ty: 36.7,
			c: -0.014,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 8.7,
			ty: 23.6,
			c: -0.014,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 4.2,
			ty: 32.4,
			c: -0.014,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 15.45,
			ty: 25.3,
			a: -0.847,
			c: -0.012,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.35,
			ty: 32.95,
			a: 1.217,
			c: -0.017,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 4.9,
			ty: 32.95,
			a: 0.934,
			c: -0.013,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 4.35,
			ty: 1.65,
			a: 0.958,
			b: -0.298,
			c: 0.283,
			d: 0.955,
			l: 7
		},
		l_ear: {
			tx: 18.6,
			ty: 8.2,
			a: 0.999,
			b: 0.031,
			c: -0.044,
			l: 6
		},
		head_sleep: {
			tx: 9.25,
			ty: 12.8,
			c: -0.014,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 22.25,
			ty: 25.4,
			c: -0.014,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 13,
			ty: 36.65,
			c: -0.014,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 8.6,
			ty: 23.6,
			c: -0.014,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 4.15,
			ty: 32.4,
			c: -0.014,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 15.35,
			ty: 25.3,
			a: -0.847,
			c: -0.012,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.35,
			ty: 32.95,
			a: 1.217,
			c: -0.016,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 4.9,
			ty: 32.95,
			a: 0.934,
			c: -0.012,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 4.25,
			ty: 1.65,
			a: 0.958,
			b: -0.294,
			c: 0.28,
			d: 0.956,
			l: 7
		},
		l_ear: {
			tx: 18.45,
			ty: 8.2,
			b: 0.026,
			c: -0.04,
			l: 6
		},
		head_sleep: {
			tx: 9.15,
			ty: 12.8,
			c: -0.013,
			d: 1.001,
			l: 5
		},
		l_arm: {
			tx: 22.2,
			ty: 25.4,
			c: -0.013,
			d: 1.001,
			l: 4
		},
		navel: {
			tx: 12.9,
			ty: 36.65,
			c: -0.013,
			d: 1.001,
			l: 3
		},
		body: {
			tx: 8.55,
			ty: 23.65,
			c: -0.013,
			d: 1.001,
			l: 2
		},
		tail: {
			tx: 4.15,
			ty: 32.4,
			c: -0.013,
			d: 1.001,
			l: 1
		},
		r_arm: {
			tx: 15.25,
			ty: 25.3,
			a: -0.847,
			c: -0.011,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.25,
			ty: 32.95,
			a: 1.217,
			c: -0.012,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 4.85,
			ty: 32.95,
			a: 0.934,
			c: -0.009,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 4.25,
			ty: 1.6,
			a: 0.959,
			b: -0.289,
			c: 0.276,
			d: 0.958,
			l: 7
		},
		l_ear: {
			tx: 18.35,
			ty: 8.2,
			b: 0.022,
			c: -0.035,
			l: 6
		},
		head_sleep: {
			tx: 9.1,
			ty: 12.8,
			c: -0.009,
			l: 5
		},
		l_arm: {
			tx: 22.1,
			ty: 25.4,
			c: -0.009,
			l: 4
		},
		navel: {
			tx: 12.9,
			ty: 36.7,
			c: -0.009,
			l: 3
		},
		body: {
			tx: 8.55,
			ty: 23.65,
			c: -0.009,
			l: 2
		},
		tail: {
			tx: 4.05,
			ty: 32.4,
			c: -0.009,
			l: 1
		},
		r_arm: {
			tx: 15.2,
			ty: 25.3,
			a: -0.847,
			c: -0.008,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.2,
			ty: 32.95,
			a: 1.217,
			c: -0.011,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 4.75,
			ty: 32.95,
			a: 0.934,
			c: -0.008,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 4.25,
			ty: 1.55,
			a: 0.96,
			b: -0.285,
			c: 0.275,
			d: 0.958,
			l: 7
		},
		l_ear: {
			tx: 18.25,
			ty: 8.2,
			b: 0.018,
			c: -0.027,
			l: 6
		},
		head_sleep: {
			tx: 9,
			ty: 12.8,
			c: -0.009,
			l: 5
		},
		l_arm: {
			tx: 22.05,
			ty: 25.4,
			c: -0.009,
			l: 4
		},
		navel: {
			tx: 12.85,
			ty: 36.7,
			c: -0.009,
			l: 3
		},
		body: {
			tx: 8.45,
			ty: 23.65,
			c: -0.009,
			l: 2
		},
		tail: {
			tx: 4.05,
			ty: 32.45,
			c: -0.009,
			l: 1
		},
		r_arm: {
			tx: 15.2,
			ty: 25.3,
			a: -0.847,
			c: -0.008,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.2,
			ty: 32.95,
			a: 1.217,
			c: -0.007,
			d: 1.218,
			l: 9
		},
		r_foot: {
			tx: 4.75,
			ty: 32.95,
			a: 0.934,
			c: -0.005,
			d: 0.935,
			l: 8
		},
		r_ear: {
			tx: 4.2,
			ty: 1.55,
			a: 0.961,
			b: -0.281,
			c: 0.271,
			d: 0.96,
			l: 7
		},
		l_ear: {
			tx: 18.1,
			ty: 8.2,
			b: 0.014,
			c: -0.023,
			l: 6
		},
		head_sleep: {
			tx: 8.95,
			ty: 12.8,
			c: -0.005,
			l: 5
		},
		l_arm: {
			tx: 22.05,
			ty: 25.4,
			c: -0.005,
			l: 4
		},
		navel: {
			tx: 12.8,
			ty: 36.7,
			c: -0.005,
			l: 3
		},
		body: {
			tx: 8.4,
			ty: 23.65,
			c: -0.005,
			l: 2
		},
		tail: {
			tx: 3.95,
			ty: 32.45,
			c: -0.005,
			l: 1
		},
		r_arm: {
			tx: 15.1,
			ty: 25.35,
			a: -0.847,
			c: -0.005,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.1,
			ty: 32.95,
			a: 1.217,
			c: -0.006,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 4.7,
			ty: 32.95,
			a: 0.934,
			c: -0.005,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 4.2,
			ty: 1.5,
			a: 0.962,
			b: -0.277,
			c: 0.268,
			d: 0.961,
			l: 7
		},
		l_ear: {
			tx: 18,
			ty: 8.25,
			b: 0.013,
			c: -0.019,
			l: 6
		},
		head_sleep: {
			tx: 8.85,
			ty: 12.8,
			c: -0.005,
			l: 5
		},
		l_arm: {
			tx: 21.95,
			ty: 25.4,
			c: -0.005,
			l: 4
		},
		navel: {
			tx: 12.8,
			ty: 36.7,
			c: -0.005,
			l: 3
		},
		body: {
			tx: 8.35,
			ty: 23.65,
			c: -0.005,
			l: 2
		},
		tail: {
			tx: 3.95,
			ty: 32.45,
			c: -0.005,
			l: 1
		},
		r_arm: {
			tx: 15.05,
			ty: 25.35,
			a: -0.847,
			c: -0.004,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.1,
			ty: 32.95,
			a: 1.217,
			c: -0.006,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 4.7,
			ty: 32.95,
			a: 0.934,
			c: -0.004,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 4.2,
			ty: 1.4,
			a: 0.963,
			b: -0.273,
			c: 0.267,
			d: 0.961,
			l: 7
		},
		l_ear: {
			tx: 17.95,
			ty: 8.2,
			b: 0.01,
			c: -0.018,
			l: 6
		},
		head_sleep: {
			tx: 8.8,
			ty: 12.8,
			c: -0.005,
			l: 5
		},
		l_arm: {
			tx: 21.95,
			ty: 25.4,
			c: -0.005,
			l: 4
		},
		navel: {
			tx: 12.75,
			ty: 36.7,
			c: -0.005,
			l: 3
		},
		body: {
			tx: 8.3,
			ty: 23.65,
			c: -0.005,
			l: 2
		},
		tail: {
			tx: 3.9,
			ty: 32.45,
			c: -0.005,
			l: 1
		},
		r_arm: {
			tx: 15,
			ty: 25.35,
			a: -0.847,
			c: -0.004,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.15,
			ty: 32.95,
			a: 1.217,
			c: -0.005,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 4.75,
			ty: 32.95,
			a: 0.934,
			c: -0.004,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 4.15,
			ty: 1.25,
			a: 0.964,
			b: -0.269,
			c: 0.264,
			d: 0.963,
			l: 7
		},
		l_ear: {
			tx: 17.85,
			ty: 8.2,
			b: 0.009,
			c: -0.013,
			l: 6
		},
		head_sleep: {
			tx: 8.8,
			ty: 12.8,
			c: -0.004,
			l: 5
		},
		l_arm: {
			tx: 21.95,
			ty: 25.4,
			c: -0.004,
			l: 4
		},
		navel: {
			tx: 12.75,
			ty: 36.7,
			c: -0.004,
			l: 3
		},
		body: {
			tx: 8.25,
			ty: 23.65,
			c: -0.004,
			l: 2
		},
		tail: {
			tx: 3.9,
			ty: 32.45,
			c: -0.004,
			l: 1
		},
		r_arm: {
			tx: 15.05,
			ty: 25.35,
			a: -0.847,
			c: -0.004,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.05,
			ty: 32.95,
			a: 1.217,
			c: -0.001,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 4.65,
			ty: 32.95,
			a: 0.934,
			c: -0.001,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 4.1,
			ty: 1.25,
			a: 0.964,
			b: -0.268,
			c: 0.263,
			d: 0.963,
			l: 7
		},
		l_ear: {
			tx: 17.75,
			ty: 8.2,
			b: 0.005,
			c: -0.009,
			l: 6
		},
		head_sleep: {
			tx: 8.7,
			ty: 12.8,
			c: -0.001,
			l: 5
		},
		l_arm: {
			tx: 21.85,
			ty: 25.4,
			c: -0.001,
			l: 4
		},
		navel: {
			tx: 12.7,
			ty: 36.7,
			c: -0.001,
			l: 3
		},
		body: {
			tx: 8.25,
			ty: 23.65,
			c: -0.001,
			l: 2
		},
		tail: {
			tx: 3.85,
			ty: 32.45,
			c: -0.001,
			l: 1
		},
		r_arm: {
			tx: 14.95,
			ty: 25.35,
			a: -0.847,
			c: -0.001,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18.05,
			ty: 32.95,
			a: 1.217,
			c: -0.001,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 4.65,
			ty: 32.95,
			a: 0.934,
			c: -0.001,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 4.05,
			ty: 1.3,
			a: 0.964,
			b: -0.264,
			c: 0.263,
			d: 0.963,
			l: 7
		},
		l_ear: {
			tx: 17.7,
			ty: 8.2,
			b: 0.005,
			c: -0.009,
			l: 6
		},
		head_sleep: {
			tx: 8.65,
			ty: 12.8,
			c: -0.001,
			l: 5
		},
		l_arm: {
			tx: 21.85,
			ty: 25.4,
			c: -0.001,
			l: 4
		},
		navel: {
			tx: 12.7,
			ty: 36.7,
			c: -0.001,
			l: 3
		},
		body: {
			tx: 8.2,
			ty: 23.65,
			c: -0.001,
			l: 2
		},
		tail: {
			tx: 3.85,
			ty: 32.45,
			c: -0.001,
			l: 1
		},
		r_arm: {
			tx: 14.9,
			ty: 25.35,
			a: -0.847,
			c: -0.001,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18,
			ty: 32.95,
			a: 1.217,
			c: -0.001,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 4.6,
			ty: 32.95,
			a: 0.934,
			c: -0.001,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 4.1,
			ty: 1.3,
			a: 0.964,
			b: -0.264,
			c: 0.26,
			d: 0.964,
			l: 7
		},
		l_ear: {
			tx: 17.65,
			ty: 8.2,
			b: 0.001,
			c: -0.005,
			l: 6
		},
		head_sleep: {
			tx: 8.7,
			ty: 12.8,
			c: -0.001,
			l: 5
		},
		l_arm: {
			tx: 21.8,
			ty: 25.4,
			c: -0.001,
			l: 4
		},
		navel: {
			tx: 12.65,
			ty: 36.7,
			c: -0.001,
			l: 3
		},
		body: {
			tx: 8.15,
			ty: 23.65,
			c: -0.001,
			l: 2
		},
		tail: {
			tx: 3.8,
			ty: 32.45,
			c: -0.001,
			l: 1
		},
		r_arm: {
			tx: 14.9,
			ty: 25.35,
			a: -0.847,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 18,
			ty: 32.95,
			a: 1.217,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 4.55,
			ty: 32.95,
			a: 0.934,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 4.05,
			ty: 1.25,
			a: 0.965,
			b: -0.26,
			c: 0.259,
			d: 0.965,
			l: 7
		},
		l_ear: {
			tx: 17.65,
			ty: 8.25,
			b: 0.001,
			c: -0.004,
			l: 6
		},
		head_sleep: {
			tx: 8.65,
			ty: 12.8,
			l: 5
		},
		l_arm: {
			tx: 21.8,
			ty: 25.4,
			l: 4
		},
		navel: {
			tx: 12.65,
			ty: 36.7,
			l: 3
		},
		body: {
			tx: 8.15,
			ty: 23.65,
			l: 2
		},
		tail: {
			tx: 3.75,
			ty: 32.45,
			l: 1
		},
		r_arm: {
			tx: 14.9,
			ty: 25.35,
			a: -0.847,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 17.95,
			ty: 33,
			a: 1.217,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 4.55,
			ty: 32.95,
			a: 0.934,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 4.05,
			ty: 1.25,
			a: 0.965,
			b: -0.259,
			c: 0.259,
			d: 0.965,
			l: 7
		},
		l_ear: {
			tx: 17.55,
			ty: 8.25,
			c: -0.001,
			l: 6
		},
		head_sleep: {
			tx: 8.65,
			ty: 12.8,
			l: 5
		},
		l_arm: {
			tx: 21.8,
			ty: 25.4,
			l: 4
		},
		navel: {
			tx: 12.65,
			ty: 36.7,
			l: 3
		},
		body: {
			tx: 8.1,
			ty: 23.65,
			l: 2
		},
		tail: {
			tx: 3.75,
			ty: 32.45,
			l: 1
		},
		r_arm: {
			tx: 14.9,
			ty: 25.35,
			a: -0.847,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 17.95,
			ty: 33,
			a: 1.217,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 4.55,
			ty: 32.95,
			a: 0.934,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 4.05,
			ty: 1.25,
			a: 0.965,
			b: -0.259,
			c: 0.259,
			d: 0.965,
			l: 7
		},
		l_ear: {
			tx: 17.5,
			ty: 8.25,
			l: 6
		},
		head_sleep: {
			tx: 8.6,
			ty: 12.8,
			l: 5
		},
		l_arm: {
			tx: 21.75,
			ty: 25.4,
			l: 4
		},
		navel: {
			tx: 12.65,
			ty: 36.7,
			l: 3
		},
		body: {
			tx: 8.1,
			ty: 23.65,
			l: 2
		},
		tail: {
			tx: 3.75,
			ty: 32.45,
			l: 1
		},
		r_arm: {
			tx: 14.85,
			ty: 25.35,
			a: -0.847,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 17.95,
			ty: 33,
			a: 1.217,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 4.55,
			ty: 32.95,
			a: 0.934,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 4,
			ty: 1.3,
			a: 0.965,
			b: -0.259,
			c: 0.259,
			d: 0.965,
			l: 7
		},
		l_ear: {
			tx: 17.5,
			ty: 8.25,
			l: 6
		},
		head_sleep: {
			tx: 8.6,
			ty: 12.8,
			l: 5
		},
		l_arm: {
			tx: 21.75,
			ty: 25.4,
			l: 4
		},
		navel: {
			tx: 12.65,
			ty: 36.7,
			l: 3
		},
		body: {
			tx: 8.15,
			ty: 23.65,
			l: 2
		},
		tail: {
			tx: 3.75,
			ty: 32.45,
			l: 1
		},
		r_arm: {
			tx: 14.85,
			ty: 25.35,
			a: -0.847,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 17.95,
			ty: 33,
			a: 1.217,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 4.55,
			ty: 32.95,
			a: 0.934,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 4.05,
			ty: 1.3,
			a: 0.965,
			b: -0.259,
			c: 0.259,
			d: 0.965,
			l: 7
		},
		l_ear: {
			tx: 17.5,
			ty: 8.25,
			l: 6
		},
		head_sleep: {
			tx: 8.6,
			ty: 12.8,
			l: 5
		},
		l_arm: {
			tx: 21.75,
			ty: 25.4,
			l: 4
		},
		navel: {
			tx: 12.65,
			ty: 36.7,
			l: 3
		},
		body: {
			tx: 8.15,
			ty: 23.65,
			l: 2
		},
		tail: {
			tx: 3.8,
			ty: 32.45,
			l: 1
		},
		r_arm: {
			tx: 14.85,
			ty: 25.35,
			a: -0.847,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		l_foot: {
			tx: 17.95,
			ty: 32.95,
			a: 1.217,
			d: 1.217,
			l: 9
		},
		r_foot: {
			tx: 4.3,
			ty: 32.95,
			a: 0.934,
			d: 0.934,
			l: 8
		},
		r_ear: {
			tx: 4.65,
			ty: 1.6,
			a: 0.966,
			b: -0.259,
			c: 0.259,
			d: 0.966,
			l: 7
		},
		l_ear: {
			tx: 17.6,
			ty: 8.15,
			l: 6
		},
		head_sleep: {
			tx: 8.6,
			ty: 12.8,
			l: 5
		},
		l_arm: {
			tx: 21.75,
			ty: 25.4,
			l: 4
		},
		navel: {
			tx: 12.65,
			ty: 36.7,
			l: 3
		},
		body: {
			tx: 8.15,
			ty: 23.65,
			l: 2
		},
		tail: {
			tx: 3.8,
			ty: 32.45,
			l: 1
		},
		r_arm: {
			tx: 14.85,
			ty: 25.35,
			a: -0.847,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	}
];

//const result = mirrorTo(animation, 12, 'r_f_lower_leg');
//let result = freezeFrame(freezeFrame(animation, 43, 'sp_10', 43), 43, 'sp_4', 43);
//let result = linearMovement(linearMovement(animation, 'sp_4', 0, 9), 'sp_10', 0, 9);
//let result = changeLayer(animation, 'f_armor', 11, 0, 19);
//let result = followKey(followKey(animation, 'r_arm', 'l_arm'), 'r_wing', 'l_wing');
/*let result = animation;
for (const k of ['l_wing']) {
	result = linearMovement(result, k, 38, 79);
}*/
let result = animation;
for (const k of ['r_foot', 'l_foot', 'l_ear', 'r_ear']) {
	result = similarMovement(result, k, 38, 79);
}
/*let result = animation;
for (const k of [
	{ p: 'l_foot', s: 11, e: 18 }
	//{ p: 'l_foot', s: 18, e: 25 }
]) {
	result = linearMovement(result, k.p, k.s, k.e);
}*/

fs.writeFileSync('./results/animation_fix.txt', JSON.stringify(result, undefined, '\t'));
