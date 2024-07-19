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
		stem: {
			tx: 2,
			ty: -10.1,
			l: 9
		},
		l_leaf: {
			tx: 6.35,
			ty: 9.7,
			l: 8
		},
		l_eye: {
			tx: 1.4,
			ty: -1.15,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -7.9,
			ty: -2.55,
			c: -0.198,
			l: 6
		},
		mask: {
			tx: -4.3,
			ty: 6.05,
			a: 0.719,
			b: 0.154,
			d: 0.251,
			l: 5
		},
		teeth: {
			tx: -1.65,
			ty: 3.8,
			l: 4
		},
		mouth: {
			tx: -2.6,
			ty: 3.75,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 3
		},
		lips: {
			tx: -4,
			ty: 5.9,
			a: 0.909,
			b: 0.188,
			c: -0.02,
			d: 0.556,
			l: 2
		},
		body: {
			tx: 0,
			ty: 0,
			l: 1
		},
		r_leaf: {
			tx: -9.25,
			ty: 5,
			l: 0
		}
	},
	{
		stem: {
			tx: 2,
			ty: -10.2,
			l: 9
		},
		l_leaf: {
			tx: 6.4,
			ty: 9.65,
			a: 0.997,
			b: 0.001,
			l: 8
		},
		l_eye: {
			tx: 1.45,
			ty: -1.3,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -8.05,
			ty: -2.7,
			c: -0.203,
			d: 0.993,
			l: 6
		},
		mask: {
			tx: -4.3,
			ty: 5.95,
			a: 0.725,
			b: 0.155,
			d: 0.265,
			l: 5
		},
		teeth: {
			tx: -1.65,
			ty: 3.65,
			l: 4
		},
		mouth: {
			tx: -2.55,
			ty: 3.7,
			a: 1.009,
			d: 1.009,
			mr: 0.813,
			mg: 0.813,
			mb: 0.813,
			l: 3
		},
		lips: {
			tx: -4.05,
			ty: 5.85,
			a: 0.912,
			b: 0.186,
			c: -0.02,
			d: 0.574,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.05,
			a: 1.006,
			d: 1.006,
			l: 1
		},
		r_leaf: {
			tx: -9.25,
			ty: 4.95,
			a: 0.997,
			b: -0.004,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.05,
			ty: -10.3,
			l: 9
		},
		l_leaf: {
			tx: 6.45,
			ty: 9.6,
			a: 0.994,
			b: 0.005,
			l: 8
		},
		l_eye: {
			tx: 1.45,
			ty: -1.45,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -8.05,
			ty: -2.8,
			c: -0.211,
			d: 0.986,
			l: 6
		},
		mask: {
			tx: -4.3,
			ty: 5.9,
			a: 0.732,
			b: 0.156,
			d: 0.28,
			l: 5
		},
		teeth: {
			tx: -1.7,
			ty: 3.5,
			l: 4
		},
		mouth: {
			tx: -2.55,
			ty: 3.65,
			a: 1.018,
			d: 1.018,
			mr: 0.828,
			mg: 0.828,
			mb: 0.828,
			l: 3
		},
		lips: {
			tx: -4.05,
			ty: 5.7,
			a: 0.915,
			b: 0.187,
			c: -0.021,
			d: 0.593,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.1,
			a: 1.011,
			d: 1.011,
			l: 1
		},
		r_leaf: {
			tx: -9.25,
			ty: 5,
			a: 0.995,
			b: -0.009,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.05,
			ty: -10.4,
			l: 9
		},
		l_leaf: {
			tx: 6.45,
			ty: 9.55,
			a: 0.991,
			b: 0.009,
			l: 8
		},
		l_eye: {
			tx: 1.5,
			ty: -1.6,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -8.15,
			ty: -2.95,
			c: -0.218,
			d: 0.979,
			l: 6
		},
		mask: {
			tx: -4.3,
			ty: 5.8,
			a: 0.739,
			b: 0.157,
			d: 0.294,
			l: 5
		},
		teeth: {
			tx: -1.7,
			ty: 3.3,
			l: 4
		},
		mouth: {
			tx: -2.5,
			ty: 3.65,
			a: 1.027,
			d: 1.027,
			mr: 0.84,
			mg: 0.84,
			mb: 0.84,
			l: 3
		},
		lips: {
			tx: -4.05,
			ty: 5.7,
			a: 0.918,
			b: 0.188,
			c: -0.021,
			d: 0.611,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.2,
			a: 1.017,
			d: 1.017,
			l: 1
		},
		r_leaf: {
			tx: -9.25,
			ty: 4.95,
			a: 0.992,
			b: -0.013,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.1,
			ty: -10.55,
			l: 9
		},
		l_leaf: {
			tx: 6.5,
			ty: 9.5,
			a: 0.988,
			b: 0.014,
			l: 8
		},
		l_eye: {
			tx: 1.5,
			ty: -1.7,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -8.3,
			ty: -3.05,
			c: -0.225,
			d: 0.972,
			l: 6
		},
		mask: {
			tx: -4.25,
			ty: 5.7,
			a: 0.745,
			b: 0.159,
			d: 0.309,
			l: 5
		},
		teeth: {
			tx: -1.75,
			ty: 3.15,
			l: 4
		},
		mouth: {
			tx: -2.5,
			ty: 3.6,
			a: 1.036,
			d: 1.036,
			mr: 0.855,
			mg: 0.855,
			mb: 0.855,
			l: 3
		},
		lips: {
			tx: -4.05,
			ty: 5.55,
			a: 0.921,
			b: 0.188,
			c: -0.022,
			d: 0.629,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.25,
			a: 1.023,
			d: 1.023,
			l: 1
		},
		r_leaf: {
			tx: -9.3,
			ty: 4.95,
			a: 0.989,
			b: -0.017,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.1,
			ty: -10.65,
			l: 9
		},
		l_leaf: {
			tx: 6.55,
			ty: 9.45,
			a: 0.985,
			b: 0.018,
			l: 8
		},
		l_eye: {
			tx: 1.55,
			ty: -1.85,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -8.3,
			ty: -3.15,
			c: -0.232,
			d: 0.965,
			l: 6
		},
		mask: {
			tx: -4.25,
			ty: 5.65,
			a: 0.752,
			b: 0.16,
			d: 0.324,
			l: 5
		},
		teeth: {
			tx: -1.75,
			ty: 3,
			l: 4
		},
		mouth: {
			tx: -2.45,
			ty: 3.55,
			a: 1.045,
			d: 1.045,
			mr: 0.867,
			mg: 0.867,
			mb: 0.867,
			l: 3
		},
		lips: {
			tx: -4.1,
			ty: 5.5,
			a: 0.924,
			b: 0.189,
			c: -0.023,
			d: 0.648,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.3,
			a: 1.029,
			d: 1.029,
			l: 1
		},
		r_leaf: {
			tx: -9.25,
			ty: 4.95,
			a: 0.986,
			b: -0.022,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.15,
			ty: -10.75,
			l: 9
		},
		l_leaf: {
			tx: 6.6,
			ty: 9.4,
			a: 0.982,
			b: 0.022,
			l: 8
		},
		l_eye: {
			tx: 1.6,
			ty: -2,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -8.4,
			ty: -3.4,
			c: -0.24,
			d: 0.957,
			l: 6
		},
		mask: {
			tx: -4.25,
			ty: 5.6,
			a: 0.759,
			b: 0.162,
			d: 0.338,
			l: 5
		},
		teeth: {
			tx: -1.8,
			ty: 2.85,
			l: 4
		},
		mouth: {
			tx: -2.45,
			ty: 3.5,
			a: 1.054,
			d: 1.054,
			mr: 0.879,
			mg: 0.879,
			mb: 0.879,
			l: 3
		},
		lips: {
			tx: -4.05,
			ty: 5.45,
			a: 0.927,
			b: 0.189,
			c: -0.023,
			d: 0.666,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.35,
			a: 1.034,
			d: 1.034,
			l: 1
		},
		r_leaf: {
			tx: -9.25,
			ty: 4.95,
			a: 0.983,
			b: -0.026,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.15,
			ty: -10.85,
			l: 9
		},
		l_leaf: {
			tx: 6.65,
			ty: 9.35,
			a: 0.978,
			b: 0.026,
			l: 8
		},
		l_eye: {
			tx: 1.6,
			ty: -2.15,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -8.55,
			ty: -3.45,
			c: -0.247,
			d: 0.95,
			l: 6
		},
		mask: {
			tx: -4.25,
			ty: 5.4,
			a: 0.765,
			b: 0.163,
			d: 0.353,
			l: 5
		},
		teeth: {
			tx: -1.8,
			ty: 2.7,
			l: 4
		},
		mouth: {
			tx: -2.4,
			ty: 3.45,
			a: 1.063,
			d: 1.063,
			mr: 0.895,
			mg: 0.895,
			mb: 0.895,
			l: 3
		},
		lips: {
			tx: -4.05,
			ty: 5.4,
			a: 0.93,
			b: 0.19,
			c: -0.024,
			d: 0.685,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.4,
			a: 1.04,
			d: 1.04,
			l: 1
		},
		r_leaf: {
			tx: -9.3,
			ty: 4.9,
			a: 0.981,
			b: -0.03,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.2,
			ty: -10.95,
			l: 9
		},
		l_leaf: {
			tx: 6.65,
			ty: 9.35,
			a: 0.975,
			b: 0.03,
			l: 8
		},
		l_eye: {
			tx: 1.65,
			ty: -2.3,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -8.55,
			ty: -3.6,
			c: -0.254,
			d: 0.943,
			l: 6
		},
		mask: {
			tx: -4.2,
			ty: 5.35,
			a: 0.772,
			b: 0.164,
			d: 0.367,
			l: 5
		},
		teeth: {
			tx: -1.85,
			ty: 2.5,
			l: 4
		},
		mouth: {
			tx: -2.4,
			ty: 3.45,
			a: 1.072,
			d: 1.072,
			mr: 0.906,
			mg: 0.906,
			mb: 0.906,
			l: 3
		},
		lips: {
			tx: -4.1,
			ty: 5.3,
			a: 0.933,
			b: 0.19,
			c: -0.025,
			d: 0.703,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.5,
			a: 1.046,
			d: 1.046,
			l: 1
		},
		r_leaf: {
			tx: -9.3,
			ty: 4.95,
			a: 0.978,
			b: -0.034,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.2,
			ty: -11.05,
			l: 9
		},
		l_leaf: {
			tx: 6.65,
			ty: 9.3,
			a: 0.972,
			b: 0.034,
			l: 8
		},
		l_eye: {
			tx: 1.65,
			ty: -2.45,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -8.7,
			ty: -3.7,
			c: -0.26,
			d: 0.936,
			l: 6
		},
		mask: {
			tx: -4.25,
			ty: 5.3,
			a: 0.779,
			b: 0.166,
			d: 0.382,
			l: 5
		},
		teeth: {
			tx: -1.85,
			ty: 2.35,
			l: 4
		},
		mouth: {
			tx: -2.35,
			ty: 3.4,
			a: 1.082,
			d: 1.082,
			mr: 0.922,
			mg: 0.922,
			mb: 0.922,
			l: 3
		},
		lips: {
			tx: -4.15,
			ty: 5.25,
			a: 0.936,
			b: 0.191,
			c: -0.025,
			d: 0.722,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.55,
			a: 1.051,
			d: 1.051,
			l: 1
		},
		r_leaf: {
			tx: -9.3,
			ty: 4.9,
			a: 0.975,
			b: -0.038,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.25,
			ty: -11.15,
			l: 9
		},
		l_leaf: {
			tx: 6.75,
			ty: 9.25,
			a: 0.969,
			b: 0.035,
			l: 8
		},
		l_eye: {
			tx: 1.7,
			ty: -2.6,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -8.75,
			ty: -3.85,
			c: -0.267,
			d: 0.928,
			l: 6
		},
		mask: {
			tx: -4.25,
			ty: 5.2,
			a: 0.785,
			b: 0.167,
			d: 0.397,
			l: 5
		},
		teeth: {
			tx: -1.9,
			ty: 2.2,
			l: 4
		},
		mouth: {
			tx: -2.35,
			ty: 3.35,
			a: 1.091,
			d: 1.091,
			mr: 0.934,
			mg: 0.934,
			mb: 0.934,
			l: 3
		},
		lips: {
			tx: -4.1,
			ty: 5.15,
			a: 0.939,
			b: 0.192,
			c: -0.026,
			d: 0.74,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.6,
			a: 1.057,
			d: 1.057,
			l: 1
		},
		r_leaf: {
			tx: -9.3,
			ty: 4.9,
			a: 0.972,
			b: -0.043,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.25,
			ty: -11.25,
			l: 9
		},
		l_leaf: {
			tx: 6.8,
			ty: 9.2,
			a: 0.966,
			b: 0.039,
			l: 8
		},
		l_eye: {
			tx: 1.75,
			ty: -2.75,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -8.8,
			ty: -4,
			c: -0.274,
			d: 0.921,
			l: 6
		},
		mask: {
			tx: -4.25,
			ty: 5.15,
			a: 0.792,
			b: 0.169,
			d: 0.411,
			l: 5
		},
		teeth: {
			tx: -1.9,
			ty: 2.05,
			l: 4
		},
		mouth: {
			tx: -2.3,
			ty: 3.3,
			a: 1.1,
			d: 1.1,
			mr: 0.945,
			mg: 0.945,
			mb: 0.945,
			l: 3
		},
		lips: {
			tx: -4.1,
			ty: 5.15,
			a: 0.942,
			b: 0.192,
			c: -0.027,
			d: 0.759,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.65,
			a: 1.063,
			d: 1.063,
			l: 1
		},
		r_leaf: {
			tx: -9.3,
			ty: 4.9,
			a: 0.969,
			b: -0.047,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.3,
			ty: -11.4,
			l: 9
		},
		l_leaf: {
			tx: 6.85,
			ty: 9.15,
			a: 0.963,
			b: 0.043,
			l: 8
		},
		l_eye: {
			tx: 1.75,
			ty: -2.85,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -8.95,
			ty: -4.1,
			c: -0.28,
			d: 0.913,
			l: 6
		},
		mask: {
			tx: -4.2,
			ty: 5.1,
			a: 0.799,
			b: 0.17,
			d: 0.426,
			l: 5
		},
		teeth: {
			tx: -1.95,
			ty: 1.9,
			l: 4
		},
		mouth: {
			tx: -2.3,
			ty: 3.25,
			a: 1.109,
			d: 1.109,
			mr: 0.961,
			mg: 0.961,
			mb: 0.961,
			l: 3
		},
		lips: {
			tx: -4.05,
			ty: 5.05,
			a: 0.945,
			b: 0.193,
			c: -0.027,
			d: 0.777,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.7,
			a: 1.068,
			d: 1.068,
			l: 1
		},
		r_leaf: {
			tx: -9.25,
			ty: 4.9,
			a: 0.966,
			b: -0.051,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.3,
			ty: -11.5,
			l: 9
		},
		l_leaf: {
			tx: 6.85,
			ty: 9.1,
			a: 0.96,
			b: 0.047,
			l: 8
		},
		l_eye: {
			tx: 1.8,
			ty: -3,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -9,
			ty: -4.25,
			c: -0.286,
			d: 0.906,
			l: 6
		},
		mask: {
			tx: -4.15,
			ty: 5,
			a: 0.806,
			b: 0.172,
			d: 0.441,
			l: 5
		},
		teeth: {
			tx: -1.95,
			ty: 1.7,
			l: 4
		},
		mouth: {
			tx: -2.25,
			ty: 3.25,
			a: 1.118,
			d: 1.118,
			mr: 0.973,
			mg: 0.973,
			mb: 0.973,
			l: 3
		},
		lips: {
			tx: -4.15,
			ty: 5,
			a: 0.948,
			b: 0.193,
			c: -0.028,
			d: 0.796,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.8,
			a: 1.074,
			d: 1.074,
			l: 1
		},
		r_leaf: {
			tx: -9.3,
			ty: 4.85,
			a: 0.963,
			b: -0.055,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.35,
			ty: -11.6,
			l: 9
		},
		l_leaf: {
			tx: 6.85,
			ty: 9.05,
			a: 0.956,
			b: 0.051,
			l: 8
		},
		l_eye: {
			tx: 1.8,
			ty: -3.15,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -9.05,
			ty: -4.35,
			c: -0.293,
			d: 0.898,
			l: 6
		},
		mask: {
			tx: -4.15,
			ty: 4.9,
			a: 0.812,
			b: 0.173,
			d: 0.455,
			l: 5
		},
		teeth: {
			tx: -2,
			ty: 1.55,
			l: 4
		},
		mouth: {
			tx: -2.25,
			ty: 3.2,
			a: 1.127,
			d: 1.127,
			mr: 0.988,
			mg: 0.988,
			mb: 0.988,
			l: 3
		},
		lips: {
			tx: -4.1,
			ty: 4.9,
			a: 0.951,
			b: 0.194,
			c: -0.028,
			d: 0.814,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.85,
			a: 1.08,
			d: 1.08,
			l: 1
		},
		r_leaf: {
			tx: -9.35,
			ty: 4.85,
			a: 0.96,
			b: -0.059,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.35,
			ty: -11.7,
			l: 9
		},
		l_leaf: {
			tx: 6.95,
			ty: 9,
			a: 0.953,
			b: 0.056,
			l: 8
		},
		l_eye: {
			tx: 1.85,
			ty: -3.3,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -8.35,
			ty: -4.5,
			c: -0.3,
			d: 0.891,
			l: 6
		},
		mask: {
			tx: -4.15,
			ty: 4.8,
			a: 0.819,
			b: 0.175,
			d: 0.47,
			l: 5
		},
		teeth: {
			tx: -2,
			ty: 1.4,
			l: 4
		},
		mouth: {
			tx: -2.2,
			ty: 3.15,
			a: 1.136,
			d: 1.136,
			l: 3
		},
		lips: {
			tx: -4.05,
			ty: 4.85,
			a: 0.955,
			b: 0.195,
			c: -0.029,
			d: 0.833,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.9,
			a: 1.086,
			d: 1.086,
			l: 1
		},
		r_leaf: {
			tx: -9.3,
			ty: 4.85,
			a: 0.958,
			b: -0.064,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.35,
			ty: -11.6,
			l: 9
		},
		l_leaf: {
			tx: 6.85,
			ty: 9.05,
			a: 0.956,
			b: 0.051,
			l: 8
		},
		l_eye: {
			tx: 1.75,
			ty: -3.15,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -8.25,
			ty: -4.4,
			c: -0.293,
			d: 0.898,
			l: 6
		},
		mask: {
			tx: -4.15,
			ty: 4.9,
			a: 0.812,
			b: 0.173,
			d: 0.455,
			l: 5
		},
		teeth: {
			tx: -2,
			ty: 1.55,
			l: 4
		},
		mouth: {
			tx: -2.25,
			ty: 3.2,
			a: 1.127,
			d: 1.127,
			mr: 0.988,
			mg: 0.988,
			mb: 0.988,
			l: 3
		},
		lips: {
			tx: -4.1,
			ty: 4.9,
			a: 0.951,
			b: 0.194,
			c: -0.029,
			d: 0.814,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.85,
			a: 1.08,
			d: 1.08,
			l: 1
		},
		r_leaf: {
			tx: -9.3,
			ty: 4.85,
			a: 0.96,
			b: -0.059,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.3,
			ty: -11.5,
			l: 9
		},
		l_leaf: {
			tx: 6.85,
			ty: 9.1,
			a: 0.96,
			b: 0.047,
			l: 8
		},
		l_eye: {
			tx: 1.75,
			ty: -3,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -8.15,
			ty: -4.25,
			c: -0.286,
			d: 0.906,
			l: 6
		},
		mask: {
			tx: -4.15,
			ty: 4.95,
			a: 0.806,
			b: 0.172,
			d: 0.441,
			l: 5
		},
		teeth: {
			tx: -1.95,
			ty: 1.7,
			l: 4
		},
		mouth: {
			tx: -2.2,
			ty: 3.3,
			a: 1.118,
			d: 1.118,
			mr: 0.973,
			mg: 0.973,
			mb: 0.973,
			l: 3
		},
		lips: {
			tx: -4.1,
			ty: 4.95,
			a: 0.948,
			b: 0.193,
			c: -0.028,
			d: 0.796,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.8,
			a: 1.074,
			d: 1.074,
			l: 1
		},
		r_leaf: {
			tx: -9.25,
			ty: 4.8,
			a: 0.963,
			b: -0.055,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.3,
			ty: -11.4,
			l: 9
		},
		l_leaf: {
			tx: 6.8,
			ty: 9.15,
			a: 0.963,
			b: 0.043,
			l: 8
		},
		l_eye: {
			tx: 1.7,
			ty: -2.85,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -8.1,
			ty: -4.05,
			c: -0.28,
			d: 0.913,
			l: 6
		},
		mask: {
			tx: -4.15,
			ty: 5.05,
			a: 0.799,
			b: 0.17,
			d: 0.426,
			l: 5
		},
		teeth: {
			tx: -1.95,
			ty: 1.9,
			l: 4
		},
		mouth: {
			tx: -2.3,
			ty: 3.25,
			a: 1.109,
			d: 1.109,
			mr: 0.961,
			mg: 0.961,
			mb: 0.961,
			l: 3
		},
		lips: {
			tx: -4.1,
			ty: 5,
			a: 0.945,
			b: 0.193,
			c: -0.027,
			d: 0.777,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.7,
			a: 1.068,
			d: 1.068,
			l: 1
		},
		r_leaf: {
			tx: -9.3,
			ty: 4.9,
			a: 0.966,
			b: -0.051,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.25,
			ty: -11.25,
			l: 9
		},
		l_leaf: {
			tx: 6.8,
			ty: 9.2,
			a: 0.966,
			b: 0.039,
			l: 8
		},
		l_eye: {
			tx: 1.7,
			ty: -2.75,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -8,
			ty: -4,
			c: -0.274,
			d: 0.921,
			l: 6
		},
		mask: {
			tx: -4.2,
			ty: 5.1,
			a: 0.792,
			b: 0.169,
			d: 0.411,
			l: 5
		},
		teeth: {
			tx: -1.9,
			ty: 2.05,
			l: 4
		},
		mouth: {
			tx: -2.3,
			ty: 3.35,
			a: 1.1,
			d: 1.1,
			mr: 0.945,
			mg: 0.945,
			mb: 0.945,
			l: 3
		},
		lips: {
			tx: -4.1,
			ty: 5.1,
			a: 0.942,
			b: 0.192,
			c: -0.027,
			d: 0.759,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.65,
			a: 1.063,
			d: 1.063,
			l: 1
		},
		r_leaf: {
			tx: -9.3,
			ty: 4.9,
			a: 0.969,
			b: -0.047,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.25,
			ty: -11.15,
			l: 9
		},
		l_leaf: {
			tx: 6.7,
			ty: 9.25,
			a: 0.969,
			b: 0.035,
			l: 8
		},
		l_eye: {
			tx: 1.65,
			ty: -2.6,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -7.9,
			ty: -3.85,
			c: -0.267,
			d: 0.928,
			l: 6
		},
		mask: {
			tx: -4.2,
			ty: 5.2,
			a: 0.785,
			b: 0.167,
			d: 0.397,
			l: 5
		},
		teeth: {
			tx: -1.9,
			ty: 2.2,
			l: 4
		},
		mouth: {
			tx: -2.3,
			ty: 3.35,
			a: 1.091,
			d: 1.091,
			mr: 0.934,
			mg: 0.934,
			mb: 0.934,
			l: 3
		},
		lips: {
			tx: -4.1,
			ty: 5.1,
			a: 0.939,
			b: 0.192,
			c: -0.026,
			d: 0.74,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.6,
			a: 1.057,
			d: 1.057,
			l: 1
		},
		r_leaf: {
			tx: -9.25,
			ty: 4.85,
			a: 0.972,
			b: -0.043,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.2,
			ty: -11.05,
			l: 9
		},
		l_leaf: {
			tx: 6.7,
			ty: 9.3,
			a: 0.972,
			b: 0.034,
			l: 8
		},
		l_eye: {
			tx: 1.6,
			ty: -2.45,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -7.85,
			ty: -3.7,
			c: -0.26,
			d: 0.936,
			l: 6
		},
		mask: {
			tx: -4.2,
			ty: 5.3,
			a: 0.779,
			b: 0.166,
			d: 0.382,
			l: 5
		},
		teeth: {
			tx: -1.85,
			ty: 2.35,
			l: 4
		},
		mouth: {
			tx: -2.35,
			ty: 3.45,
			a: 1.082,
			d: 1.082,
			mr: 0.922,
			mg: 0.922,
			mb: 0.922,
			l: 3
		},
		lips: {
			tx: -4.15,
			ty: 5.2,
			a: 0.936,
			b: 0.191,
			c: -0.025,
			d: 0.722,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.5,
			a: 1.051,
			d: 1.051,
			l: 1
		},
		r_leaf: {
			tx: -9.25,
			ty: 4.9,
			a: 0.975,
			b: -0.038,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.2,
			ty: -10.95,
			l: 9
		},
		l_leaf: {
			tx: 6.65,
			ty: 9.35,
			a: 0.975,
			b: 0.03,
			l: 8
		},
		l_eye: {
			tx: 1.6,
			ty: -2.3,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -7.75,
			ty: -3.6,
			c: -0.254,
			d: 0.943,
			l: 6
		},
		mask: {
			tx: -4.2,
			ty: 5.4,
			a: 0.772,
			b: 0.164,
			d: 0.367,
			l: 5
		},
		teeth: {
			tx: -1.85,
			ty: 2.5,
			l: 4
		},
		mouth: {
			tx: -2.4,
			ty: 3.45,
			a: 1.072,
			d: 1.072,
			mr: 0.906,
			mg: 0.906,
			mb: 0.906,
			l: 3
		},
		lips: {
			tx: -4.15,
			ty: 5.3,
			a: 0.933,
			b: 0.19,
			c: -0.025,
			d: 0.703,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.45,
			a: 1.046,
			d: 1.046,
			l: 1
		},
		r_leaf: {
			tx: -9.3,
			ty: 4.95,
			a: 0.978,
			b: -0.034,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.15,
			ty: -10.85,
			l: 9
		},
		l_leaf: {
			tx: 6.65,
			ty: 9.35,
			a: 0.978,
			b: 0.026,
			l: 8
		},
		l_eye: {
			tx: 1.55,
			ty: -2.15,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -7.65,
			ty: -3.45,
			c: -0.247,
			d: 0.95,
			l: 6
		},
		mask: {
			tx: -4.25,
			ty: 5.45,
			a: 0.765,
			b: 0.163,
			d: 0.353,
			l: 5
		},
		teeth: {
			tx: -1.8,
			ty: 2.7,
			l: 4
		},
		mouth: {
			tx: -2.35,
			ty: 3.5,
			a: 1.063,
			d: 1.063,
			mr: 0.895,
			mg: 0.895,
			mb: 0.895,
			l: 3
		},
		lips: {
			tx: -4.05,
			ty: 5.4,
			a: 0.93,
			b: 0.19,
			c: -0.024,
			d: 0.685,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.35,
			a: 1.04,
			d: 1.04,
			l: 1
		},
		r_leaf: {
			tx: -9.3,
			ty: 4.85,
			a: 0.981,
			b: -0.03,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.15,
			ty: -10.75,
			l: 9
		},
		l_leaf: {
			tx: 6.6,
			ty: 9.4,
			a: 0.982,
			b: 0.022,
			l: 8
		},
		l_eye: {
			tx: 1.55,
			ty: -2,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -7.6,
			ty: -3.35,
			c: -0.24,
			d: 0.957,
			l: 6
		},
		mask: {
			tx: -4.2,
			ty: 5.55,
			a: 0.759,
			b: 0.162,
			d: 0.338,
			l: 5
		},
		teeth: {
			tx: -1.8,
			ty: 2.85,
			l: 4
		},
		mouth: {
			tx: -2.45,
			ty: 3.5,
			a: 1.054,
			d: 1.054,
			mr: 0.879,
			mg: 0.879,
			mb: 0.879,
			l: 3
		},
		lips: {
			tx: -4.05,
			ty: 5.45,
			a: 0.927,
			b: 0.189,
			c: -0.023,
			d: 0.666,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.3,
			a: 1.034,
			d: 1.034,
			l: 1
		},
		r_leaf: {
			tx: -9.2,
			ty: 4.95,
			a: 0.983,
			b: -0.026,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.1,
			ty: -10.65,
			l: 9
		},
		l_leaf: {
			tx: 6.55,
			ty: 9.4,
			a: 0.985,
			b: 0.018,
			l: 8
		},
		l_eye: {
			tx: 1.5,
			ty: -1.85,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -7.5,
			ty: -3.2,
			c: -0.233,
			d: 0.965,
			l: 6
		},
		mask: {
			tx: -4.2,
			ty: 5.65,
			a: 0.752,
			b: 0.16,
			d: 0.324,
			l: 5
		},
		teeth: {
			tx: -1.75,
			ty: 3,
			l: 4
		},
		mouth: {
			tx: -2.4,
			ty: 3.6,
			a: 1.045,
			d: 1.045,
			mr: 0.867,
			mg: 0.867,
			mb: 0.867,
			l: 3
		},
		lips: {
			tx: -4.05,
			ty: 5.55,
			a: 0.924,
			b: 0.189,
			c: -0.023,
			d: 0.648,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.3,
			a: 1.029,
			d: 1.029,
			l: 1
		},
		r_leaf: {
			tx: -9.2,
			ty: 4.9,
			a: 0.986,
			b: -0.022,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.1,
			ty: -10.55,
			l: 9
		},
		l_leaf: {
			tx: 6.5,
			ty: 9.5,
			a: 0.988,
			b: 0.014,
			l: 8
		},
		l_eye: {
			tx: 1.45,
			ty: -1.7,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -7.45,
			ty: -3.05,
			c: -0.225,
			d: 0.972,
			l: 6
		},
		mask: {
			tx: -4.2,
			ty: 5.7,
			a: 0.745,
			b: 0.159,
			d: 0.309,
			l: 5
		},
		teeth: {
			tx: -1.75,
			ty: 3.15,
			l: 4
		},
		mouth: {
			tx: -2.5,
			ty: 3.6,
			a: 1.036,
			d: 1.036,
			mr: 0.855,
			mg: 0.855,
			mb: 0.855,
			l: 3
		},
		lips: {
			tx: -4.05,
			ty: 5.55,
			a: 0.921,
			b: 0.188,
			c: -0.022,
			d: 0.629,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.25,
			a: 1.023,
			d: 1.023,
			l: 1
		},
		r_leaf: {
			tx: -9.3,
			ty: 4.95,
			a: 0.989,
			b: -0.017,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.05,
			ty: -10.4,
			l: 9
		},
		l_leaf: {
			tx: 6.4,
			ty: 9.55,
			a: 0.991,
			b: 0.009,
			l: 8
		},
		l_eye: {
			tx: 1.45,
			ty: -1.6,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -7.3,
			ty: -3,
			c: -0.218,
			d: 0.979,
			l: 6
		},
		mask: {
			tx: -4.25,
			ty: 5.75,
			a: 0.739,
			b: 0.157,
			d: 0.294,
			l: 5
		},
		teeth: {
			tx: -1.7,
			ty: 3.3,
			l: 4
		},
		mouth: {
			tx: -2.5,
			ty: 3.7,
			a: 1.027,
			d: 1.027,
			mr: 0.84,
			mg: 0.84,
			mb: 0.84,
			l: 3
		},
		lips: {
			tx: -4.05,
			ty: 5.65,
			a: 0.918,
			b: 0.188,
			c: -0.021,
			d: 0.611,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.2,
			a: 1.017,
			d: 1.017,
			l: 1
		},
		r_leaf: {
			tx: -9.25,
			ty: 4.95,
			a: 0.992,
			b: -0.013,
			l: 0
		}
	},
	{
		stem: {
			tx: 2.05,
			ty: -10.3,
			l: 9
		},
		l_leaf: {
			tx: 6.45,
			ty: 9.6,
			a: 0.994,
			b: 0.005,
			l: 8
		},
		l_eye: {
			tx: 1.4,
			ty: -1.45,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -7.2,
			ty: -2.8,
			c: -0.211,
			d: 0.986,
			l: 6
		},
		mask: {
			tx: -4.25,
			ty: 5.9,
			a: 0.732,
			b: 0.156,
			d: 0.28,
			l: 5
		},
		teeth: {
			tx: -1.7,
			ty: 3.5,
			l: 4
		},
		mouth: {
			tx: -2.5,
			ty: 3.65,
			a: 1.018,
			d: 1.018,
			mr: 0.828,
			mg: 0.828,
			mb: 0.828,
			l: 3
		},
		lips: {
			tx: -4,
			ty: 5.7,
			a: 0.915,
			b: 0.187,
			c: -0.021,
			d: 0.593,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.1,
			a: 1.011,
			d: 1.011,
			l: 1
		},
		r_leaf: {
			tx: -9.2,
			ty: 4.95,
			a: 0.995,
			b: -0.009,
			l: 0
		}
	},
	{
		stem: {
			tx: 2,
			ty: -10.2,
			l: 9
		},
		l_leaf: {
			tx: 6.35,
			ty: 9.65,
			a: 0.997,
			b: 0.001,
			l: 8
		},
		l_eye: {
			tx: 1.4,
			ty: -1.3,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -7.2,
			ty: -2.7,
			c: -0.203,
			d: 0.993,
			l: 6
		},
		mask: {
			tx: -4.25,
			ty: 5.95,
			a: 0.725,
			b: 0.155,
			d: 0.265,
			l: 5
		},
		teeth: {
			tx: -1.65,
			ty: 3.65,
			l: 4
		},
		mouth: {
			tx: -2.55,
			ty: 3.75,
			a: 1.009,
			d: 1.009,
			mr: 0.813,
			mg: 0.813,
			mb: 0.813,
			l: 3
		},
		lips: {
			tx: -4.05,
			ty: 5.85,
			a: 0.912,
			b: 0.186,
			c: -0.02,
			d: 0.574,
			l: 2
		},
		body: {
			tx: 0,
			ty: -0.05,
			a: 1.006,
			d: 1.006,
			l: 1
		},
		r_leaf: {
			tx: -9.2,
			ty: 4.95,
			a: 0.997,
			b: -0.004,
			l: 0
		}
	},
	{
		stem: {
			tx: 2,
			ty: -10.1,
			l: 9
		},
		l_leaf: {
			tx: 6.35,
			ty: 9.7,
			l: 8
		},
		l_eye: {
			tx: 1.4,
			ty: -1.15,
			a: -1.212,
			d: 1.063,
			l: 7
		},
		r_eye: {
			tx: -7.9,
			ty: -2.55,
			c: -0.198,
			l: 6
		},
		mask: {
			tx: -4.3,
			ty: 6.05,
			a: 0.719,
			b: 0.154,
			d: 0.251,
			l: 5
		},
		teeth: {
			tx: -1.65,
			ty: 3.8,
			l: 4
		},
		mouth: {
			tx: -2.6,
			ty: 3.75,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			l: 3
		},
		lips: {
			tx: -4,
			ty: 5.9,
			a: 0.909,
			b: 0.188,
			c: -0.02,
			d: 0.556,
			l: 2
		},
		body: {
			tx: 0,
			ty: 0,
			l: 1
		},
		r_leaf: {
			tx: -9.25,
			ty: 5,
			l: 0
		}
	}
];

//const result = mirrorTo(animation, 12, 'r_f_lower_leg');
//let result = freezeFrame(freezeFrame(animation, 43, 'sp_10', 43), 43, 'sp_4', 43);
//let result = linearMovement(linearMovement(animation, 'sp_4', 0, 9), 'sp_10', 0, 9);
//let result = changeLayer(animation, 'legs', 3);
//let result = linearMovement(followKey(animation, 'ww_head', 'ww_l_eye'), 'ww_u_body', 7, 11);
let result = linearMovement(animation, 'r_eye', 14, 30);

fs.writeFileSync('./results/animation_fix.txt', JSON.stringify(result, undefined, '\t'));
