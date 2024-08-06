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

// Same thing as similar movement, but start from the end with frame-1
function reverseSimilarMovement(anim, elem, start, end) {
	let nextTxDiff = 0;
	let nextTyDiff = 0;
	for (let i = 1; end - i > start; ++i) {
		const idx = end - i;
		const tmpTxDiff = (anim[idx - 1][elem].tx ?? 0) - (anim[idx][elem].tx ?? 0);
		const tmpTyDiff = (anim[idx - 1][elem].ty ?? 0) - (anim[idx][elem].ty ?? 0);
		anim[idx][elem].tx = round((anim[idx + 1][elem].tx ?? 0) + nextTxDiff);
		anim[idx][elem].ty = round((anim[idx + 1][elem].ty ?? 0) + nextTyDiff);
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

// Offset the given animation by the given transform
function offsetAnimation(animation, transform) {
	for (const anim of animation) {
		for (const k of Object.keys(anim)) {
			const matrix = PixiHelper.matrixFromObject(transform).append(PixiHelper.matrixFromObject(anim[k]));
			assignKey(anim[k], 'tx', round(matrix.tx ?? 0), 0);
			assignKey(anim[k], 'ty', round(matrix.ty ?? 0), 0);
			assignKey(anim[k], 'a', round(matrix.a ?? 1), 1);
			assignKey(anim[k], 'b', round(matrix.b ?? 0), 0);
			assignKey(anim[k], 'c', round(matrix.c ?? 0), 0);
			assignKey(anim[k], 'd', round(matrix.d ?? 1), 1);
		}
	}
	return animation;
}

const animation = [
	{
		l_hand: {
			tx: -3.7,
			ty: 22,
			l: 10
		},
		l_eye: {
			tx: -13,
			ty: -2.55,
			a: 1.175,
			d: 0.994,
			l: 9
		},
		r_eye: {
			tx: -21.65,
			ty: -4.25,
			a: -0.5,
			b: -0.126,
			d: 0.994,
			l: 8
		},
		head: {
			tx: -10.55,
			ty: -15.15,
			a: 1.153,
			b: 0.16,
			c: -0.16,
			d: 1.153,
			l: 7
		},
		l_b_arm: {
			tx: 17.9,
			ty: 16.35,
			l: 6
		},
		l_t_arm: {
			tx: 24.45,
			ty: 0.85,
			l: 5
		},
		body: {
			tx: 2.1,
			ty: 1.35,
			l: 4
		},
		legs: {
			tx: 25.6,
			ty: 24.8,
			l: 3
		},
		r_hand: {
			tx: -41.6,
			ty: 13,
			l: 2
		},
		r_b_arm: {
			tx: -32.85,
			ty: -1.85,
			l: 1
		},
		r_t_arm: {
			tx: -22.25,
			ty: -4.95,
			l: 0
		}
	},
	{
		l_hand: {
			tx: -2.25,
			ty: 20.35,
			a: 0.993,
			b: 0.114,
			c: -0.114,
			d: 0.993,
			l: 10
		},
		l_eye: {
			tx: -15,
			ty: -3.05,
			a: 1.175,
			d: 0.994,
			l: 9
		},
		r_eye: {
			tx: -23.4,
			ty: -5.1,
			a: -0.5,
			b: -0.125,
			d: 0.994,
			l: 8
		},
		head: {
			tx: -11.8,
			ty: -15.85,
			a: 1.152,
			b: 0.157,
			c: -0.157,
			d: 1.152,
			l: 7
		},
		l_b_arm: {
			tx: 18.35,
			ty: 15.9,
			l: 6
		},
		l_t_arm: {
			tx: 22.5,
			ty: 2.3,
			a: 0.999,
			b: -0.04,
			c: 0.04,
			d: 0.999,
			l: 5
		},
		body: {
			tx: -0.9,
			ty: 1.5,
			a: 0.995,
			b: 0.096,
			c: -0.096,
			d: 0.995,
			l: 4
		},
		legs: {
			tx: 21.4,
			ty: 25.6,
			l: 3
		},
		r_hand: {
			tx: -43.2,
			ty: 7.7,
			l: 2
		},
		r_b_arm: {
			tx: -34.35,
			ty: -6.35,
			l: 1
		},
		r_t_arm: {
			tx: -24.1,
			ty: -8.05,
			l: 0
		}
	},
	{
		l_hand: {
			tx: -1.1,
			ty: 19.05,
			a: 0.977,
			b: 0.208,
			c: -0.208,
			d: 0.977,
			l: 10
		},
		l_eye: {
			tx: -16.65,
			ty: -3.5,
			a: 1.175,
			d: 0.994,
			l: 9
		},
		r_eye: {
			tx: -24.85,
			ty: -5.75,
			a: -0.5,
			b: -0.125,
			d: 0.994,
			l: 8
		},
		head: {
			tx: -12.75,
			ty: -16.4,
			a: 1.152,
			b: 0.157,
			c: -0.157,
			d: 1.152,
			l: 7
		},
		l_b_arm: {
			tx: 18.7,
			ty: 15.55,
			l: 6
		},
		l_t_arm: {
			tx: 20.95,
			ty: 3.5,
			a: 0.996,
			b: -0.071,
			c: 0.071,
			d: 0.996,
			l: 5
		},
		body: {
			tx: -3.35,
			ty: 1.6,
			a: 0.983,
			b: 0.174,
			c: -0.174,
			d: 0.983,
			l: 4
		},
		legs: {
			tx: 17.95,
			ty: 26.3,
			l: 3
		},
		r_hand: {
			tx: -44.5,
			ty: 3.4,
			l: 2
		},
		r_b_arm: {
			tx: -35.55,
			ty: -10,
			l: 1
		},
		r_t_arm: {
			tx: -25.6,
			ty: -10.55,
			l: 0
		}
	},
	{
		l_hand: {
			tx: -0.2,
			ty: 18,
			a: 0.959,
			b: 0.28,
			c: -0.28,
			d: 0.959,
			l: 10
		},
		l_eye: {
			tx: -17.9,
			ty: -3.8,
			a: 1.175,
			d: 0.994,
			l: 9
		},
		r_eye: {
			tx: -26,
			ty: -5.95,
			a: -0.5,
			b: -0.125,
			d: 0.994,
			l: 8
		},
		head: {
			tx: -14.75,
			ty: -16.4,
			a: 1.152,
			b: 0.157,
			c: -0.157,
			d: 1.152,
			l: 7
		},
		l_b_arm: {
			tx: 19,
			ty: 15.25,
			l: 6
		},
		l_t_arm: {
			tx: 19.7,
			ty: 4.4,
			a: 0.994,
			b: -0.099,
			c: 0.099,
			d: 0.994,
			l: 5
		},
		body: {
			tx: -5.25,
			ty: 1.7,
			a: 0.97,
			b: 0.238,
			c: -0.238,
			d: 0.97,
			l: 4
		},
		legs: {
			tx: 15.3,
			ty: 26.8,
			l: 3
		},
		r_hand: {
			tx: -45.5,
			ty: 0.05,
			l: 2
		},
		r_b_arm: {
			tx: -36.5,
			ty: -12.85,
			l: 1
		},
		r_t_arm: {
			tx: -26.75,
			ty: -12.5,
			l: 0
		}
	},
	{
		l_hand: {
			tx: -0.65,
			ty: 17.35,
			a: 0.969,
			b: 0.242,
			c: -0.242,
			d: 0.969,
			l: 10
		},
		l_eye: {
			tx: -17.9,
			ty: -4.15,
			a: 1.175,
			c: 0.008,
			d: 0.935,
			l: 9
		},
		r_eye: {
			tx: -26.05,
			ty: -6.15,
			a: -0.499,
			b: -0.125,
			d: 0.934,
			l: 8
		},
		head: {
			tx: -14.9,
			ty: -16.6,
			a: 1.152,
			b: 0.157,
			c: -0.157,
			d: 1.152,
			l: 7
		},
		l_b_arm: {
			tx: 18.6,
			ty: 14.4,
			b: -0.005,
			c: 0.005,
			l: 6
		},
		l_t_arm: {
			tx: 20,
			ty: 3.95,
			a: 0.983,
			b: -0.173,
			c: 0.174,
			d: 0.983,
			l: 5
		},
		body: {
			tx: -5.5,
			ty: 1.55,
			a: 0.965,
			b: 0.255,
			c: -0.255,
			d: 0.965,
			l: 4
		},
		legs: {
			tx: 14.8,
			ty: 26.8,
			l: 3
		},
		r_hand: {
			tx: -44.6,
			ty: -2.15,
			l: 2
		},
		r_b_arm: {
			tx: -35.5,
			ty: -14.15,
			a: 0.998,
			b: 0.062,
			c: -0.062,
			d: 0.998,
			l: 1
		},
		r_t_arm: {
			tx: -25.3,
			ty: -14.35,
			a: 0.986,
			b: 0.161,
			c: -0.161,
			d: 0.986,
			l: 0
		}
	},
	{
		l_hand: {
			tx: -1.15,
			ty: 16.8,
			a: 0.978,
			b: 0.204,
			c: -0.204,
			d: 0.978,
			l: 10
		},
		l_eye: {
			tx: -17.9,
			ty: -4.5,
			a: 1.175,
			c: 0.016,
			d: 0.876,
			l: 9
		},
		r_eye: {
			tx: -26.15,
			ty: -6.4,
			a: -0.499,
			b: -0.125,
			d: 0.876,
			l: 8
		},
		head: {
			tx: -15.1,
			ty: -16.8,
			a: 1.152,
			b: 0.157,
			c: -0.157,
			d: 1.152,
			l: 7
		},
		l_b_arm: {
			tx: 18.2,
			ty: 13.55,
			b: -0.014,
			c: 0.014,
			l: 6
		},
		l_t_arm: {
			tx: 20.35,
			ty: 3.55,
			a: 0.967,
			b: -0.246,
			c: 0.25,
			d: 0.966,
			l: 5
		},
		body: {
			tx: -5.8,
			ty: 1.45,
			a: 0.959,
			b: 0.276,
			c: -0.276,
			d: 0.959,
			l: 4
		},
		legs: {
			tx: 14.25,
			ty: 26.8,
			l: 3
		},
		r_hand: {
			tx: -43.7,
			ty: -4.35,
			l: 2
		},
		r_b_arm: {
			tx: -34.6,
			ty: -15.55,
			a: 0.992,
			b: 0.126,
			c: -0.126,
			d: 0.992,
			l: 1
		},
		r_t_arm: {
			tx: -23.85,
			ty: -16.15,
			a: 0.947,
			b: 0.318,
			c: -0.318,
			d: 0.947,
			l: 0
		}
	},
	{
		l_hand: {
			tx: -1.6,
			ty: 16.15,
			a: 0.985,
			b: 0.166,
			c: -0.166,
			d: 0.985,
			l: 10
		},
		l_eye: {
			tx: -17.95,
			ty: -4.9,
			a: 1.175,
			c: 0.022,
			d: 0.818,
			l: 9
		},
		r_eye: {
			tx: -26.15,
			ty: -6.65,
			a: -0.5,
			b: -0.125,
			d: 0.818,
			l: 8
		},
		head: {
			tx: -15.25,
			ty: -17,
			a: 1.152,
			b: 0.157,
			c: -0.157,
			d: 1.152,
			l: 7
		},
		l_b_arm: {
			tx: 17.85,
			ty: 12.7,
			b: -0.022,
			c: 0.022,
			l: 6
		},
		l_t_arm: {
			tx: 20.55,
			ty: 3.2,
			a: 0.948,
			b: -0.314,
			c: 0.322,
			d: 0.945,
			l: 5
		},
		body: {
			tx: -6.05,
			ty: 1.35,
			a: 0.954,
			b: 0.293,
			c: -0.293,
			d: 0.954,
			l: 4
		},
		legs: {
			tx: 13.75,
			ty: 26.8,
			l: 3
		},
		r_hand: {
			tx: -42.85,
			ty: -6.45,
			l: 2
		},
		r_b_arm: {
			tx: -33.55,
			ty: -16.9,
			a: 0.982,
			b: 0.187,
			c: -0.187,
			d: 0.982,
			l: 1
		},
		r_t_arm: {
			tx: -22.5,
			ty: -17.95,
			a: 0.885,
			b: 0.462,
			c: -0.462,
			d: 0.885,
			l: 0
		}
	},
	{
		l_hand: {
			tx: -2.1,
			ty: 15.55,
			a: 0.991,
			b: 0.127,
			c: -0.127,
			d: 0.991,
			l: 10
		},
		l_eye: {
			tx: -18,
			ty: -5.2,
			a: 1.175,
			c: 0.03,
			d: 0.761,
			l: 9
		},
		r_eye: {
			tx: -26.2,
			ty: -6.8,
			a: -0.5,
			b: -0.125,
			d: 0.761,
			l: 8
		},
		head: {
			tx: -15.4,
			ty: -17.15,
			a: 1.152,
			b: 0.157,
			c: -0.157,
			d: 1.152,
			l: 7
		},
		l_b_arm: {
			tx: 17.45,
			ty: 11.9,
			a: 0.999,
			b: -0.031,
			c: 0.031,
			d: 0.999,
			l: 6
		},
		l_t_arm: {
			tx: 20.85,
			ty: 2.8,
			a: 0.922,
			b: -0.383,
			c: 0.391,
			d: 0.918,
			l: 5
		},
		body: {
			tx: -6.35,
			ty: 1.1,
			a: 0.948,
			b: 0.313,
			c: -0.313,
			d: 0.948,
			l: 4
		},
		legs: {
			tx: 13.25,
			ty: 26.8,
			l: 3
		},
		r_hand: {
			tx: -42,
			ty: -8.55,
			l: 2
		},
		r_b_arm: {
			tx: -32.65,
			ty: -18.2,
			a: 0.968,
			b: 0.246,
			c: -0.246,
			d: 0.968,
			l: 1
		},
		r_t_arm: {
			tx: -21.05,
			ty: -19.7,
			a: 0.802,
			b: 0.595,
			c: -0.595,
			d: 0.802,
			l: 0
		}
	},
	{
		l_hand: {
			tx: -2.5,
			ty: 14.9,
			a: 0.995,
			b: 0.088,
			c: -0.088,
			d: 0.995,
			l: 10
		},
		l_eye: {
			tx: -18,
			ty: -5.55,
			a: 1.175,
			c: 0.034,
			d: 0.705,
			l: 9
		},
		r_eye: {
			tx: -26.2,
			ty: -7,
			a: -0.5,
			b: -0.125,
			d: 0.705,
			l: 8
		},
		head: {
			tx: -15.6,
			ty: -17.35,
			a: 1.152,
			b: 0.157,
			c: -0.157,
			d: 1.152,
			l: 7
		},
		l_b_arm: {
			tx: 17.1,
			ty: 11.1,
			a: 0.999,
			b: -0.039,
			c: 0.039,
			d: 0.999,
			l: 6
		},
		l_t_arm: {
			tx: 21.1,
			ty: 2.4,
			a: 0.893,
			b: -0.446,
			c: 0.458,
			d: 0.887,
			l: 5
		},
		body: {
			tx: -6.55,
			ty: 1.05,
			a: 0.942,
			b: 0.33,
			c: -0.33,
			d: 0.942,
			l: 4
		},
		legs: {
			tx: 12.75,
			ty: 26.8,
			l: 3
		},
		r_hand: {
			tx: -41.15,
			ty: -10.65,
			l: 2
		},
		r_b_arm: {
			tx: -31.7,
			ty: -19.5,
			a: 0.951,
			b: 0.305,
			c: -0.305,
			d: 0.951,
			l: 1
		},
		r_t_arm: {
			tx: -19.7,
			ty: -21.4,
			a: 0.701,
			b: 0.711,
			c: -0.711,
			d: 0.701,
			l: 0
		}
	},
	{
		l_hand: {
			tx: -3,
			ty: 14.25,
			a: 0.998,
			b: 0.049,
			c: -0.049,
			d: 0.998,
			l: 10
		},
		l_eye: {
			tx: -18.05,
			ty: -5.85,
			a: 1.175,
			c: 0.037,
			d: 0.65,
			l: 9
		},
		r_eye: {
			tx: -26.25,
			ty: -7.2,
			a: -0.5,
			b: -0.125,
			d: 0.65,
			l: 8
		},
		head: {
			tx: -15.75,
			ty: -17.55,
			a: 1.152,
			b: 0.157,
			c: -0.157,
			d: 1.152,
			l: 7
		},
		l_b_arm: {
			tx: 16.75,
			ty: 10.3,
			a: 0.999,
			b: -0.044,
			c: 0.044,
			d: 0.999,
			l: 6
		},
		l_t_arm: {
			tx: 21.4,
			ty: 1.95,
			a: 0.859,
			b: -0.508,
			c: 0.522,
			d: 0.851,
			l: 5
		},
		body: {
			tx: -6.85,
			ty: 0.85,
			a: 0.936,
			b: 0.347,
			c: -0.347,
			d: 0.936,
			l: 4
		},
		legs: {
			tx: 12.3,
			ty: 26.8,
			l: 3
		},
		r_hand: {
			tx: -40.3,
			ty: -12.65,
			l: 2
		},
		r_b_arm: {
			tx: -30.75,
			ty: -20.75,
			a: 0.932,
			b: 0.359,
			c: -0.359,
			d: 0.932,
			l: 1
		},
		r_t_arm: {
			tx: -18.4,
			ty: -23.15,
			a: 0.585,
			b: 0.809,
			c: -0.809,
			d: 0.585,
			l: 0
		}
	},
	{
		l_hand: {
			tx: -3.5,
			ty: 13.7,
			b: 0.013,
			c: -0.013,
			l: 10
		},
		l_eye: {
			tx: -18.1,
			ty: -6.15,
			a: 1.175,
			c: 0.039,
			d: 0.596,
			l: 9
		},
		r_eye: {
			tx: -26.25,
			ty: -7.4,
			a: -0.5,
			b: -0.125,
			d: 0.596,
			l: 8
		},
		head: {
			tx: -15.9,
			ty: -17.7,
			a: 1.152,
			b: 0.157,
			c: -0.157,
			d: 1.152,
			l: 7
		},
		l_b_arm: {
			tx: 16.35,
			ty: 9.55,
			a: 0.998,
			b: -0.053,
			c: 0.053,
			d: 0.998,
			l: 6
		},
		l_t_arm: {
			tx: 21.7,
			ty: 1.65,
			a: 0.822,
			b: -0.566,
			c: 0.581,
			d: 0.812,
			l: 5
		},
		body: {
			tx: -7.05,
			ty: 0.75,
			a: 0.93,
			b: 0.363,
			c: -0.363,
			d: 0.93,
			l: 4
		},
		legs: {
			tx: 11.8,
			ty: 26.8,
			l: 3
		},
		r_hand: {
			tx: -39.5,
			ty: -14.7,
			l: 2
		},
		r_b_arm: {
			tx: -29.9,
			ty: -22,
			a: 0.91,
			b: 0.412,
			c: -0.412,
			d: 0.91,
			l: 1
		},
		r_t_arm: {
			tx: -17.05,
			ty: -24.8,
			a: 0.459,
			b: 0.887,
			c: -0.887,
			d: 0.459,
			l: 0
		}
	},
	{
		l_hand: {
			tx: -4,
			ty: 13.05,
			a: 0.999,
			b: -0.023,
			c: 0.023,
			d: 0.999,
			l: 10
		},
		l_eye: {
			tx: -18.1,
			ty: -6.45,
			a: 1.175,
			c: 0.041,
			d: 0.543,
			l: 9
		},
		r_eye: {
			tx: -26.3,
			ty: -7.6,
			a: -0.5,
			b: -0.125,
			d: 0.543,
			l: 8
		},
		head: {
			tx: -16.05,
			ty: -17.9,
			a: 1.152,
			b: 0.157,
			c: -0.157,
			d: 1.152,
			l: 7
		},
		l_b_arm: {
			tx: 16,
			ty: 8.75,
			a: 0.998,
			b: -0.061,
			c: 0.061,
			d: 0.998,
			l: 6
		},
		l_t_arm: {
			tx: 21.9,
			ty: 1.25,
			a: 0.783,
			b: -0.62,
			c: 0.636,
			d: 0.769,
			l: 5
		},
		body: {
			tx: -7.3,
			ty: 0.65,
			a: 0.922,
			b: 0.383,
			c: -0.383,
			d: 0.922,
			l: 4
		},
		legs: {
			tx: 11.35,
			ty: 26.8,
			l: 3
		},
		r_hand: {
			tx: -38.7,
			ty: -16.65,
			l: 2
		},
		r_b_arm: {
			tx: -29,
			ty: -23.2,
			a: 0.885,
			b: 0.463,
			c: -0.463,
			d: 0.885,
			l: 1
		},
		r_t_arm: {
			tx: -15.7,
			ty: -26.45,
			a: 0.326,
			b: 0.944,
			c: -0.944,
			d: 0.326,
			l: 0
		}
	},
	{
		l_hand: {
			tx: -4.4,
			ty: 12.45,
			a: 0.998,
			b: -0.062,
			c: 0.062,
			d: 0.998,
			l: 10
		},
		l_eye: {
			tx: -18.1,
			ty: -6.75,
			a: 1.175,
			c: 0.041,
			d: 0.491,
			l: 9
		},
		r_eye: {
			tx: -26.35,
			ty: -7.85,
			a: -0.5,
			b: -0.125,
			d: 0.491,
			l: 8
		},
		head: {
			tx: -16.2,
			ty: -18.05,
			a: 1.152,
			b: 0.157,
			c: -0.157,
			d: 1.152,
			l: 7
		},
		l_b_arm: {
			tx: 15.65,
			ty: 8,
			a: 0.998,
			b: -0.066,
			c: 0.066,
			d: 0.998,
			l: 6
		},
		l_t_arm: {
			tx: 22.15,
			ty: 0.9,
			a: 0.74,
			b: -0.67,
			c: 0.688,
			d: 0.723,
			l: 5
		},
		body: {
			tx: -7.6,
			ty: 0.5,
			a: 0.915,
			b: 0.399,
			c: -0.399,
			d: 0.915,
			l: 4
		},
		legs: {
			tx: 10.9,
			ty: 26.8,
			l: 3
		},
		r_hand: {
			tx: -37.9,
			ty: -18.6,
			l: 2
		},
		r_b_arm: {
			tx: -28.15,
			ty: -24.4,
			a: 0.857,
			b: 0.512,
			c: -0.512,
			d: 0.857,
			l: 1
		},
		r_t_arm: {
			tx: -14.4,
			ty: -28.1,
			a: 0.187,
			b: 0.982,
			c: -0.982,
			d: 0.187,
			l: 0
		}
	},
	{
		l_hand: {
			tx: -4.9,
			ty: 11.8,
			a: 0.994,
			b: -0.101,
			c: 0.101,
			d: 0.994,
			l: 10
		},
		l_eye: {
			tx: -18.15,
			ty: -7.05,
			a: 1.175,
			c: 0.041,
			d: 0.439,
			l: 9
		},
		r_eye: {
			tx: -26.35,
			ty: -8,
			a: -0.5,
			b: -0.125,
			d: 0.439,
			l: 8
		},
		head: {
			tx: -16.35,
			ty: -18.25,
			a: 1.152,
			b: 0.157,
			c: -0.157,
			d: 1.152,
			l: 7
		},
		l_b_arm: {
			tx: 15.35,
			ty: 7.3,
			a: 0.997,
			b: -0.074,
			c: 0.074,
			d: 0.997,
			l: 6
		},
		l_t_arm: {
			tx: 22.4,
			ty: 0.5,
			a: 0.695,
			b: -0.717,
			c: 0.735,
			d: 0.676,
			l: 5
		},
		body: {
			tx: -7.85,
			ty: 0.4,
			a: 0.908,
			b: 0.415,
			c: -0.415,
			d: 0.908,
			l: 4
		},
		legs: {
			tx: 10.45,
			ty: 26.8,
			l: 3
		},
		r_hand: {
			tx: -37.1,
			ty: -20.5,
			l: 2
		},
		r_b_arm: {
			tx: -27.3,
			ty: -25.6,
			a: 0.827,
			b: 0.56,
			c: -0.56,
			d: 0.827,
			l: 1
		},
		r_t_arm: {
			tx: -13.2,
			ty: -29.7,
			a: 0.045,
			b: 0.999,
			c: -0.999,
			d: 0.045,
			l: 0
		}
	},
	{
		l_hand: {
			tx: -5.4,
			ty: 11.15,
			a: 0.99,
			b: -0.14,
			c: 0.14,
			d: 0.99,
			l: 10
		},
		l_eye: {
			tx: -18.25,
			ty: -7.35,
			a: 1.175,
			c: 0.04,
			d: 0.389,
			l: 9
		},
		r_eye: {
			tx: -26.4,
			ty: -8.65,
			a: -0.5,
			b: -0.125,
			d: 0.389,
			l: 8
		},
		head: {
			tx: -15,
			ty: -19.2,
			a: 1.153,
			b: 0.158,
			c: -0.158,
			d: 1.153,
			l: 7
		},
		l_b_arm: {
			tx: 15,
			ty: 6.55,
			a: 0.997,
			b: -0.082,
			c: 0.082,
			d: 0.997,
			l: 6
		},
		l_t_arm: {
			tx: 22.65,
			ty: 0.2,
			a: 0.648,
			b: -0.762,
			c: 0.779,
			d: 0.627,
			l: 5
		},
		body: {
			tx: -8.1,
			ty: 0.3,
			a: 0.902,
			b: 0.43,
			c: -0.43,
			d: 0.902,
			l: 4
		},
		legs: {
			tx: 10,
			ty: 26.8,
			l: 3
		},
		r_hand: {
			tx: -36.35,
			ty: -22.35,
			l: 2
		},
		r_b_arm: {
			tx: -26.45,
			ty: -26.8,
			a: 0.796,
			b: 0.605,
			c: -0.605,
			d: 0.796,
			l: 1
		},
		r_t_arm: {
			tx: -12,
			ty: -31.2,
			a: -0.09,
			b: 0.996,
			c: -0.996,
			d: -0.09,
			l: 0
		}
	},
	{
		l_hand: {
			tx: -2.75,
			ty: 7.85,
			a: 0.999,
			b: -0.044,
			c: 0.044,
			d: 0.999,
			l: 10
		},
		l_eye: {
			tx: -15.05,
			ty: -9.05,
			a: 1.175,
			c: 0.051,
			d: 0.782,
			l: 9
		},
		r_eye: {
			tx: -23.5,
			ty: -10.8,
			a: -0.5,
			b: -0.125,
			d: 0.708,
			l: 8
		},
		head: {
			tx: -11.85,
			ty: -21.15,
			a: 1.152,
			b: 0.157,
			c: -0.157,
			d: 1.152,
			l: 7
		},
		l_b_arm: {
			tx: 17.3,
			ty: 4.6,
			b: 0.009,
			c: -0.009,
			l: 6
		},
		l_t_arm: {
			tx: 21.85,
			ty: 0.6,
			a: 0.493,
			b: -0.869,
			c: 0.882,
			d: 0.47,
			l: 5
		},
		body: {
			tx: -6.3,
			ty: -1.2,
			a: 0.824,
			b: 0.562,
			c: -0.562,
			d: 0.824,
			l: 4
		},
		legs: {
			tx: 2.85,
			ty: 26.65,
			a: 0.943,
			b: 0.271,
			c: -0.276,
			d: 0.96,
			l: 3
		},
		r_hand: {
			tx: -34.25,
			ty: -28.25,
			a: 0.959,
			b: 0.276,
			c: -0.276,
			d: 0.959,
			l: 2
		},
		r_b_arm: {
			tx: -22.65,
			ty: -31.65,
			a: 0.766,
			b: 0.64,
			c: -0.64,
			d: 0.766,
			l: 1
		},
		r_t_arm: {
			tx: -11.55,
			ty: -29.75,
			a: 0.427,
			b: 0.903,
			c: -0.903,
			d: 0.427,
			l: 0
		}
	},
	{
		l_hand: {
			tx: -0.65,
			ty: 5.3,
			b: 0.026,
			c: -0.026,
			l: 10
		},
		l_eye: {
			tx: -12.6,
			ty: -10.4,
			a: 1.175,
			c: 0.039,
			d: 1.089,
			l: 9
		},
		r_eye: {
			tx: -21.2,
			ty: -12.45,
			a: -0.5,
			b: -0.125,
			d: 0.956,
			l: 8
		},
		head: {
			tx: -9.4,
			ty: -22.65,
			a: 1.152,
			b: 0.157,
			c: -0.157,
			d: 1.152,
			l: 7
		},
		l_b_arm: {
			tx: 19.05,
			ty: 3.15,
			a: 0.996,
			b: 0.083,
			c: -0.083,
			d: 0.996,
			l: 6
		},
		l_t_arm: {
			tx: 21.4,
			ty: 0.85,
			a: 0.359,
			b: -0.932,
			c: 0.942,
			d: 0.335,
			l: 5
		},
		body: {
			tx: -4.8,
			ty: -2.4,
			a: 0.751,
			b: 0.655,
			c: -0.655,
			d: 0.751,
			l: 4
		},
		legs: {
			tx: -2.7,
			ty: 26.55,
			a: 0.847,
			b: 0.466,
			c: -0.481,
			d: 0.875,
			l: 3
		},
		r_hand: {
			tx: -32.6,
			ty: -32.85,
			a: 0.876,
			b: 0.477,
			c: -0.477,
			d: 0.876,
			l: 2
		},
		r_b_arm: {
			tx: -19.75,
			ty: -35.45,
			a: 0.74,
			b: 0.669,
			c: -0.669,
			d: 0.74,
			l: 1
		},
		r_t_arm: {
			tx: -11.15,
			ty: -28.55,
			a: 0.752,
			b: 0.656,
			c: -0.656,
			d: 0.752,
			l: 0
		}
	},
	{
		l_hand: {
			tx: 0.8,
			ty: 3.5,
			a: 0.997,
			b: 0.079,
			c: -0.079,
			d: 0.997,
			l: 10
		},
		l_eye: {
			tx: -10.85,
			ty: -11.35,
			a: 1.175,
			c: 0.018,
			d: 1.308,
			l: 9
		},
		r_eye: {
			tx: -19.55,
			ty: -13.65,
			a: -0.5,
			b: -0.125,
			d: 1.133,
			l: 8
		},
		head: {
			tx: -7.6,
			ty: -23.75,
			a: 1.152,
			b: 0.157,
			c: -0.157,
			d: 1.152,
			l: 7
		},
		l_b_arm: {
			tx: 20.35,
			ty: 2,
			a: 0.99,
			b: 0.135,
			c: -0.135,
			d: 0.99,
			l: 6
		},
		l_t_arm: {
			tx: 21,
			ty: 1.05,
			a: 0.26,
			b: -0.965,
			c: 0.972,
			d: 0.234,
			l: 5
		},
		body: {
			tx: -3.8,
			ty: -3.3,
			a: 0.694,
			b: 0.716,
			c: -0.716,
			d: 0.694,
			l: 4
		},
		legs: {
			tx: -6.65,
			ty: 26.45,
			a: 0.755,
			b: 0.586,
			c: -0.612,
			d: 0.789,
			l: 3
		},
		r_hand: {
			tx: -31.4,
			ty: -36.2,
			a: 0.789,
			b: 0.608,
			c: -0.608,
			d: 0.789,
			l: 2
		},
		r_b_arm: {
			tx: -17.65,
			ty: -38.2,
			a: 0.721,
			b: 0.688,
			c: -0.688,
			d: 0.721,
			l: 1
		},
		r_t_arm: {
			tx: -10.95,
			ty: -27.75,
			a: 0.912,
			b: 0.407,
			c: -0.407,
			d: 0.912,
			l: 0
		}
	},
	{
		l_hand: {
			tx: 1.75,
			ty: 2.35,
			a: 0.994,
			b: 0.109,
			c: -0.109,
			d: 0.994,
			l: 10
		},
		l_eye: {
			tx: -9.8,
			ty: -11.9,
			a: 1.175,
			c: 0.001,
			d: 1.439,
			l: 9
		},
		r_eye: {
			tx: -18.6,
			ty: -14.4,
			a: -0.5,
			b: -0.125,
			d: 1.239,
			l: 8
		},
		head: {
			tx: -6.55,
			ty: -24.4,
			a: 1.152,
			b: 0.157,
			c: -0.157,
			d: 1.152,
			l: 7
		},
		l_b_arm: {
			tx: 21.1,
			ty: 1.4,
			a: 0.986,
			b: 0.166,
			c: -0.166,
			d: 0.986,
			l: 6
		},
		l_t_arm: {
			tx: 20.8,
			ty: 1.1,
			a: 0.2,
			b: -0.979,
			c: 0.985,
			d: 0.174,
			l: 5
		},
		body: {
			tx: -3.2,
			ty: -3.75,
			a: 0.655,
			b: 0.751,
			c: -0.751,
			d: 0.655,
			l: 4
		},
		legs: {
			tx: -9.05,
			ty: 26.4,
			a: 0.693,
			b: 0.649,
			c: -0.683,
			d: 0.729,
			l: 3
		},
		r_hand: {
			tx: -30.7,
			ty: -38.15,
			a: 0.727,
			b: 0.681,
			c: -0.681,
			d: 0.727,
			l: 2
		},
		r_b_arm: {
			tx: -16.35,
			ty: -39.8,
			a: 0.709,
			b: 0.7,
			c: -0.7,
			d: 0.709,
			l: 1
		},
		r_t_arm: {
			tx: -10.75,
			ty: -27.3,
			a: 0.97,
			b: 0.238,
			c: -0.238,
			d: 0.97,
			l: 0
		}
	},
	{
		l_hand: {
			tx: 2,
			ty: 2,
			a: 0.993,
			b: 0.121,
			c: -0.121,
			d: 0.993,
			l: 10
		},
		l_eye: {
			tx: -9.5,
			ty: -12.1,
			a: 1.175,
			d: 1.483,
			l: 9
		},
		r_eye: {
			tx: -18.2,
			ty: -13.7,
			a: -0.5,
			b: -0.125,
			d: 1.274,
			l: 8
		},
		head: {
			tx: -6.4,
			ty: -24.1,
			a: 1.153,
			b: 0.158,
			c: -0.158,
			d: 1.153,
			l: 7
		},
		l_b_arm: {
			tx: 21.35,
			ty: 1.1,
			a: 0.984,
			b: 0.178,
			c: -0.178,
			d: 0.984,
			l: 6
		},
		l_t_arm: {
			tx: 20.75,
			ty: 1.15,
			a: 0.18,
			b: -0.984,
			c: 0.988,
			d: 0.154,
			l: 5
		},
		body: {
			tx: -3.05,
			ty: -3.85,
			a: 0.644,
			b: 0.762,
			c: -0.762,
			d: 0.644,
			l: 4
		},
		legs: {
			tx: -9.85,
			ty: 26.4,
			a: 0.671,
			b: 0.671,
			c: -0.707,
			d: 0.707,
			l: 3
		},
		r_hand: {
			tx: -30.45,
			ty: -38.9,
			a: 0.707,
			b: 0.704,
			c: -0.704,
			d: 0.707,
			l: 2
		},
		r_b_arm: {
			tx: -15.95,
			ty: -40.35,
			a: 0.707,
			b: 0.704,
			c: -0.704,
			d: 0.707,
			l: 1
		},
		r_t_arm: {
			tx: -11.45,
			ty: -28.15,
			a: 0.983,
			b: 0.183,
			c: -0.183,
			d: 0.983,
			l: 0
		}
	},
	{
		atk_smear: {
			tx: 10,
			ty: -2,
			l: 7
		},
		l_eye: {
			tx: -18.1,
			ty: -5.5,
			a: 1.175,
			d: 1.286,
			l: 6
		},
		r_eye: {
			tx: -26.4,
			ty: -6.9,
			a: -0.5,
			b: -0.125,
			d: 1.161,
			l: 5
		},
		head: {
			tx: -15.25,
			ty: -18,
			a: 1.152,
			b: 0.157,
			c: -0.157,
			d: 1.152,
			l: 4
		},
		l_t_arm: {
			tx: 11.55,
			ty: 6.95,
			a: 0.825,
			b: -0.563,
			c: 0.577,
			d: 0.815,
			l: 3
		},
		body: {
			tx: -19.05,
			ty: 5.1,
			a: 0.945,
			b: 0.32,
			c: -0.03,
			d: 1.043,
			l: 2
		},
		legs: {
			tx: -3.1,
			ty: 26.8,
			a: 0.864,
			b: 0.437,
			c: -0.45,
			d: 0.891,
			l: 1
		},
		r_t_arm: {
			tx: -30.6,
			ty: -13.05,
			a: 0.997,
			b: -0.039,
			c: 0.039,
			d: 0.997,
			l: 0
		}
	},
	{
		atk_smear: {
			tx: 10,
			ty: -2,
			l: 7
		},
		l_eye: {
			tx: -24.5,
			ty: -0.6,
			a: 1.175,
			d: 1.138,
			l: 6
		},
		r_eye: {
			tx: -32.45,
			ty: -1.85,
			a: -0.5,
			b: -0.125,
			d: 1.077,
			l: 5
		},
		head: {
			tx: -21.85,
			ty: -13.4,
			a: 1.152,
			b: 0.157,
			c: -0.157,
			d: 1.152,
			l: 4
		},
		l_t_arm: {
			tx: 3.1,
			ty: 12.3,
			a: 0.992,
			b: 0.123,
			c: -0.118,
			d: 0.993,
			l: 3
		},
		body: {
			tx: -18.2,
			ty: 4.95,
			a: 0.945,
			b: 0.318,
			c: -0.104,
			d: 1.027,
			l: 2
		},
		legs: {
			tx: 1.8,
			ty: 27.05,
			a: 0.958,
			b: 0.226,
			c: -0.229,
			d: 0.973,
			l: 1
		},
		r_t_arm: {
			tx: -42.95,
			ty: -3.25,
			a: 0.979,
			b: -0.182,
			c: 0.182,
			d: 0.979,
			l: 0
		}
	},
	{
		atk_smear: {
			tx: 10,
			ty: -2,
			l: 7
		},
		l_eye: {
			tx: -28.7,
			ty: 2.65,
			a: 1.175,
			d: 1.041,
			l: 6
		},
		r_eye: {
			tx: -36.45,
			ty: 1.55,
			a: -0.5,
			b: -0.125,
			d: 1.021,
			l: 5
		},
		head: {
			tx: -26.25,
			ty: -10.4,
			a: 1.152,
			b: 0.157,
			c: -0.157,
			d: 1.152,
			l: 4
		},
		l_t_arm: {
			tx: -4.55,
			ty: 17,
			a: 0.707,
			b: 0.707,
			c: -0.707,
			d: 0.707,
			l: 3
		},
		body: {
			tx: -17.4,
			ty: 4.75,
			a: 0.945,
			b: 0.318,
			c: -0.165,
			d: 1.009,
			l: 2
		},
		legs: {
			tx: 5.15,
			ty: 27.3,
			a: 0.992,
			b: 0.074,
			c: -0.075,
			d: 0.997,
			l: 1
		},
		r_t_arm: {
			tx: -47.5,
			ty: 1.65,
			a: 0.965,
			b: -0.247,
			c: 0.247,
			d: 0.965,
			l: 0
		}
	},
	{
		l_hand: {
			tx: -54.8,
			ty: 30.05,
			a: 0.866,
			b: 0.5,
			c: -0.5,
			d: 0.866,
			l: 10
		},
		l_eye: {
			tx: -30.75,
			ty: 4.2,
			a: 1.175,
			d: 0.994,
			l: 9
		},
		r_eye: {
			tx: -38.35,
			ty: 2.5,
			a: -0.5,
			b: -0.125,
			d: 0.994,
			l: 8
		},
		head: {
			tx: -28.4,
			ty: -8.45,
			a: 1.153,
			b: 0.158,
			c: -0.158,
			d: 1.153,
			l: 7
		},
		l_b_arm: {
			tx: -30.25,
			ty: 30.55,
			l: 6
		},
		l_t_arm: {
			tx: -3.15,
			ty: 16.75,
			a: 0.705,
			b: 0.707,
			c: -0.707,
			d: 0.707,
			l: 5
		},
		body: {
			tx: -16.75,
			ty: 4.6,
			a: 0.945,
			b: 0.318,
			c: -0.22,
			d: 0.99,
			l: 4
		},
		legs: {
			tx: 6.7,
			ty: 27.4,
			l: 3
		},
		r_hand: {
			tx: -74.8,
			ty: 20.7,
			a: 0.707,
			b: 0.704,
			c: -0.704,
			d: 0.707,
			l: 2
		},
		r_b_arm: {
			tx: -61.9,
			ty: 10.45,
			a: 0.957,
			b: 0.279,
			c: -0.279,
			d: 0.957,
			l: 1
		},
		r_t_arm: {
			tx: -44.8,
			ty: -0.7,
			a: 0.965,
			b: -0.246,
			c: 0.246,
			d: 0.965,
			l: 0
		}
	},
	{
		l_hand: {
			tx: -47.65,
			ty: 29.8,
			a: 0.866,
			b: 0.497,
			c: -0.497,
			d: 0.866,
			l: 10
		},
		l_eye: {
			tx: -27.85,
			ty: 2,
			a: 1.175,
			d: 0.994,
			l: 9
		},
		r_eye: {
			tx: -35.4,
			ty: 0.3,
			a: -0.5,
			b: -0.125,
			d: 0.994,
			l: 8
		},
		head: {
			tx: -25.5,
			ty: -10.35,
			a: 1.152,
			b: 0.157,
			c: -0.157,
			d: 1.152,
			l: 7
		},
		l_b_arm: {
			tx: -24.6,
			ty: 29,
			l: 6
		},
		l_t_arm: {
			tx: -2.05,
			ty: 16.55,
			a: 0.705,
			b: 0.707,
			c: -0.707,
			d: 0.707,
			l: 5
		},
		body: {
			tx: -16.25,
			ty: 4.45,
			a: 0.945,
			b: 0.318,
			c: -0.261,
			d: 0.972,
			l: 4
		},
		legs: {
			tx: 8.5,
			ty: 27.15,
			l: 3
		},
		r_hand: {
			tx: -68.15,
			ty: 15.3,
			a: 0.706,
			b: 0.703,
			c: -0.703,
			d: 0.706,
			l: 2
		},
		r_b_arm: {
			tx: -57.3,
			ty: 6.65,
			a: 0.956,
			b: 0.279,
			c: -0.279,
			d: 0.956,
			l: 1
		},
		r_t_arm: {
			tx: -42.6,
			ty: -2.55,
			a: 0.965,
			b: -0.246,
			c: 0.246,
			d: 0.965,
			l: 0
		}
	},
	{
		l_hand: {
			tx: -42.5,
			ty: 29.6,
			a: 0.866,
			b: 0.497,
			c: -0.497,
			d: 0.866,
			l: 10
		},
		l_eye: {
			tx: -25.7,
			ty: 0.45,
			a: 1.175,
			d: 0.994,
			l: 9
		},
		r_eye: {
			tx: -33.25,
			ty: -1.25,
			a: -0.5,
			b: -0.125,
			d: 0.994,
			l: 8
		},
		head: {
			tx: -23.35,
			ty: -11.7,
			a: 1.152,
			b: 0.157,
			c: -0.157,
			d: 1.152,
			l: 7
		},
		l_b_arm: {
			tx: -20.5,
			ty: 27.9,
			l: 6
		},
		l_t_arm: {
			tx: -1.2,
			ty: 16.45,
			a: 0.705,
			b: 0.707,
			c: -0.707,
			d: 0.707,
			l: 5
		},
		body: {
			tx: -15.75,
			ty: 4.4,
			a: 0.945,
			b: 0.318,
			c: -0.294,
			d: 0.957,
			l: 4
		},
		legs: {
			tx: 9.8,
			ty: 26.95,
			l: 3
		},
		r_hand: {
			tx: -63.3,
			ty: 11.4,
			a: 0.706,
			b: 0.703,
			c: -0.703,
			d: 0.706,
			l: 2
		},
		r_b_arm: {
			tx: -53.9,
			ty: 3.9,
			a: 0.956,
			b: 0.279,
			c: -0.279,
			d: 0.956,
			l: 1
		},
		r_t_arm: {
			tx: -40.95,
			ty: -3.95,
			a: 0.965,
			b: -0.246,
			c: 0.246,
			d: 0.965,
			l: 0
		}
	},
	{
		l_hand: {
			tx: -39.3,
			ty: 29.45,
			a: 0.866,
			b: 0.5,
			c: -0.5,
			d: 0.866,
			l: 10
		},
		l_eye: {
			tx: -24.4,
			ty: -0.55,
			a: 1.175,
			d: 0.994,
			l: 9
		},
		r_eye: {
			tx: -32,
			ty: -2.25,
			a: -0.5,
			b: -0.125,
			d: 0.994,
			l: 8
		},
		head: {
			tx: -22.05,
			ty: -13.2,
			a: 1.153,
			b: 0.158,
			c: -0.158,
			d: 1.153,
			l: 7
		},
		l_b_arm: {
			tx: -17.95,
			ty: 27.2,
			l: 6
		},
		l_t_arm: {
			tx: -0.65,
			ty: 16.4,
			a: 0.707,
			b: 0.707,
			c: -0.707,
			d: 0.707,
			l: 5
		},
		body: {
			tx: -15.55,
			ty: 4.35,
			a: 0.945,
			b: 0.32,
			c: -0.32,
			d: 0.945,
			l: 4
		},
		legs: {
			tx: 10.6,
			ty: 26.8,
			l: 3
		},
		r_hand: {
			tx: -60.35,
			ty: 9.05,
			a: 0.707,
			b: 0.704,
			c: -0.704,
			d: 0.707,
			l: 2
		},
		r_b_arm: {
			tx: -51.75,
			ty: 2.25,
			a: 0.957,
			b: 0.279,
			c: -0.279,
			d: 0.957,
			l: 1
		},
		r_t_arm: {
			tx: -39.85,
			ty: -4.9,
			a: 0.965,
			b: -0.247,
			c: 0.247,
			d: 0.965,
			l: 0
		}
	},
	{
		l_hand: {
			tx: -27.45,
			ty: 27,
			a: 0.938,
			b: 0.342,
			c: -0.342,
			d: 0.938,
			l: 10
		},
		l_eye: {
			tx: -22.25,
			ty: -0.9,
			a: 1.175,
			d: 0.994,
			l: 9
		},
		r_eye: {
			tx: -30.9,
			ty: -2.45,
			a: -0.5,
			b: -0.125,
			d: 0.994,
			l: 8
		},
		head: {
			tx: -19.9,
			ty: -13.1,
			a: 1.152,
			b: 0.157,
			c: -0.157,
			d: 1.152,
			l: 7
		},
		l_b_arm: {
			tx: -6.1,
			ty: 23.6,
			l: 6
		},
		l_t_arm: {
			tx: 7.7,
			ty: 11.25,
			a: 0.864,
			b: 0.5,
			c: -0.5,
			d: 0.864,
			l: 5
		},
		body: {
			tx: -9.7,
			ty: 3.3,
			a: 0.974,
			b: 0.216,
			c: -0.216,
			d: 0.974,
			l: 4
		},
		legs: {
			tx: 15.55,
			ty: 26.15,
			l: 3
		},
		r_hand: {
			tx: -54.15,
			ty: 10.3,
			a: 0.863,
			b: 0.499,
			c: -0.499,
			d: 0.863,
			l: 2
		},
		r_b_arm: {
			tx: -45.45,
			ty: 1,
			a: 0.979,
			b: 0.187,
			c: -0.187,
			d: 0.979,
			l: 1
		},
		r_t_arm: {
			tx: -34,
			ty: -5,
			a: 0.983,
			b: -0.165,
			c: 0.165,
			d: 0.983,
			l: 0
		}
	},
	{
		l_hand: {
			tx: -18,
			ty: 25,
			a: 0.977,
			b: 0.208,
			c: -0.208,
			d: 0.977,
			l: 10
		},
		l_eye: {
			tx: -21.35,
			ty: -1.05,
			a: 1.175,
			d: 0.994,
			l: 9
		},
		r_eye: {
			tx: -30.5,
			ty: -2.1,
			a: -0.5,
			b: -0.125,
			d: 0.994,
			l: 8
		},
		head: {
			tx: -18.6,
			ty: -12.95,
			a: 1.153,
			b: 0.158,
			c: -0.158,
			d: 1.153,
			l: 7
		},
		l_b_arm: {
			tx: 3.45,
			ty: 20.75,
			l: 6
		},
		l_t_arm: {
			tx: 14.35,
			ty: 7.1,
			a: 0.95,
			b: 0.31,
			c: -0.31,
			d: 0.95,
			l: 5
		},
		body: {
			tx: -5,
			ty: 2.55,
			a: 0.99,
			b: 0.131,
			c: -0.131,
			d: 0.99,
			l: 4
		},
		legs: {
			tx: 19.55,
			ty: 25.6,
			l: 3
		},
		r_hand: {
			tx: -49.2,
			ty: 11.4,
			a: 0.949,
			b: 0.309,
			c: -0.309,
			d: 0.949,
			l: 2
		},
		r_b_arm: {
			tx: -40.5,
			ty: -0.1,
			a: 0.992,
			b: 0.113,
			c: -0.113,
			d: 0.992,
			l: 1
		},
		r_t_arm: {
			tx: -29.35,
			ty: -5,
			a: 0.993,
			b: -0.1,
			c: 0.1,
			d: 0.993,
			l: 0
		}
	},
	{
		l_hand: {
			tx: -10.95,
			ty: 23.5,
			a: 0.994,
			b: 0.105,
			c: -0.105,
			d: 0.994,
			l: 10
		},
		l_eye: {
			tx: -17.15,
			ty: -1.8,
			a: 1.175,
			d: 0.994,
			l: 9
		},
		r_eye: {
			tx: -25.6,
			ty: -3.5,
			a: -0.5,
			b: -0.125,
			d: 0.994,
			l: 8
		},
		head: {
			tx: -14.45,
			ty: -14.05,
			a: 1.152,
			b: 0.157,
			c: -0.157,
			d: 1.152,
			l: 7
		},
		l_b_arm: {
			tx: 10.6,
			ty: 18.55,
			l: 6
		},
		l_t_arm: {
			tx: 19.4,
			ty: 3.95,
			a: 0.987,
			b: 0.157,
			c: -0.157,
			d: 0.987,
			l: 5
		},
		body: {
			tx: -1.45,
			ty: 1.95,
			a: 0.997,
			b: 0.066,
			c: -0.066,
			d: 0.997,
			l: 4
		},
		legs: {
			tx: 22.55,
			ty: 25.2,
			l: 3
		},
		r_hand: {
			tx: -45.4,
			ty: 12.15,
			a: 0.987,
			b: 0.157,
			c: -0.157,
			d: 0.987,
			l: 2
		},
		r_b_arm: {
			tx: -36.7,
			ty: -0.95,
			a: 0.997,
			b: 0.057,
			c: -0.057,
			d: 0.997,
			l: 1
		},
		r_t_arm: {
			tx: -25.8,
			ty: -5,
			a: 0.998,
			b: -0.049,
			c: 0.049,
			d: 0.998,
			l: 0
		}
	},
	{
		l_hand: {
			tx: -6.1,
			ty: 22.5,
			a: 0.999,
			b: 0.035,
			c: -0.035,
			d: 0.999,
			l: 10
		},
		l_eye: {
			tx: -14.3,
			ty: -2.3,
			a: 1.175,
			d: 0.994,
			l: 9
		},
		r_eye: {
			tx: -22.25,
			ty: -4.4,
			a: -0.5,
			b: -0.125,
			d: 0.994,
			l: 8
		},
		head: {
			tx: -11.65,
			ty: -14.75,
			a: 1.153,
			b: 0.158,
			c: -0.158,
			d: 1.153,
			l: 7
		},
		l_b_arm: {
			tx: 15.45,
			ty: 17.1,
			l: 6
		},
		l_t_arm: {
			tx: 22.75,
			ty: 1.9,
			a: 0.998,
			b: 0.053,
			c: -0.053,
			d: 0.998,
			l: 5
		},
		body: {
			tx: 0.9,
			ty: 1.55,
			b: 0.022,
			c: -0.022,
			l: 4
		},
		legs: {
			tx: 24.55,
			ty: 24.95,
			l: 3
		},
		r_hand: {
			tx: -42.9,
			ty: 12.7,
			a: 0.998,
			b: 0.053,
			c: -0.053,
			d: 0.998,
			l: 2
		},
		r_b_arm: {
			tx: -34.1,
			ty: -1.45,
			b: 0.018,
			c: -0.018,
			l: 1
		},
		r_t_arm: {
			tx: -23.45,
			ty: -5.1,
			b: -0.014,
			c: 0.014,
			l: 0
		}
	},
	{
		l_hand: {
			tx: -3.7,
			ty: 22,
			l: 10
		},
		l_eye: {
			tx: -12.85,
			ty: -2.55,
			a: 1.175,
			d: 0.994,
			l: 9
		},
		r_eye: {
			tx: -20.5,
			ty: -4.25,
			a: -0.5,
			b: -0.126,
			d: 0.994,
			l: 8
		},
		head: {
			tx: -10.55,
			ty: -15.15,
			a: 1.153,
			b: 0.16,
			c: -0.16,
			d: 1.153,
			l: 7
		},
		l_b_arm: {
			tx: 17.9,
			ty: 16.35,
			l: 6
		},
		l_t_arm: {
			tx: 24.45,
			ty: 0.85,
			l: 5
		},
		body: {
			tx: 2.1,
			ty: 1.35,
			l: 4
		},
		legs: {
			tx: 25.6,
			ty: 24.8,
			l: 3
		},
		r_hand: {
			tx: -41.6,
			ty: 13,
			l: 2
		},
		r_b_arm: {
			tx: -32.85,
			ty: -1.85,
			l: 1
		},
		r_t_arm: {
			tx: -22.25,
			ty: -4.95,
			l: 0
		}
	}
];

//const result = mirrorTo(animation, 12, 'r_f_lower_leg');
//let result = freezeFrame(freezeFrame(animation, 43, 'sp_10', 43), 43, 'sp_4', 43);
//let result = linearMovement(linearMovement(animation, 'sp_4', 0, 9), 'sp_10', 0, 9);
let result = changeLayer(animation, 'r_b_arm', 0, 23);
//let result = followKey(followKey(animation, 'r_arm', 'l_arm'), 'r_wing', 'l_wing');
/*let result = animation;
for (const k of ['l_wing']) {
	result = linearMovement(result, k, 38, 79);
}*/
/*let result = animation;
for (const k of ['head', 'l_hair', 'u_hair', 'beard']) {
	result = reverseSimilarMovement(result, k, 8, 19);
}*/
/*let result = animation;
for (const k of [
	{ p: 'head_dead', s: 90, e: 111 },
	{ p: 'head_dead', s: 111, e: 133 }
]) {
	result = linearMovement(result, k.p, k.s, k.e);
}*/
/*let result = offsetAnimation(animation, {
	tx: -4.25,
	ty: 0.7
});*/

fs.writeFileSync('./results/animation_fix.txt', JSON.stringify(result, undefined, '\t'));
