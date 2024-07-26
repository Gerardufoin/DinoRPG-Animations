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

const animation = [];

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
for (const k of ['tail_end', 'r_horn']) {
	result = similarMovement(result, k, 31, 62);
}
/*let result = animation;
for (const k of [
	{ p: 'l_foot', s: 11, e: 18 }
	//{ p: 'l_foot', s: 18, e: 25 }
]) {
	result = linearMovement(result, k.p, k.s, k.e);
}*/

fs.writeFileSync('./results/animation_fix.txt', JSON.stringify(result, undefined, '\t'));
