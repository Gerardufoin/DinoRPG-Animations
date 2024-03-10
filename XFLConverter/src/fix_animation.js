import fs from 'fs';

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

// Replace the end of an animation by the inverse of the beginning of the animation.
// If there are not enough frames, fill the missing frame with the limit
function mirrorTo(anim, idx) {
	let diff = Math.ceil((anim.length - (idx + 1) - (idx + 1)) / 2);
	for (let i = 0; idx + 1 + i < anim.length; ++i) {
		let tidx = idx + diff - i;
		if (i < diff) {
			tidx = idx;
		}
		if (tidx < 0) {
			tidx = 0;
		}
		anim[idx + 1 + i] = JSON.parse(JSON.stringify(anim[tidx]));
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
function followKey(anim, target, key) {
	for (let i = 1; i < anim.length; ++i) {
		followProperty(anim[i][target], anim[i - 1][target], anim[i][key], anim[i - 1][key], 'tx');
		followProperty(anim[i][target], anim[i - 1][target], anim[i][key], anim[i - 1][key], 'ty');
		followProperty(anim[i][target], anim[i - 1][target], anim[i][key], anim[i - 1][key], 'a');
		followProperty(anim[i][target], anim[i - 1][target], anim[i][key], anim[i - 1][key], 'b');
		followProperty(anim[i][target], anim[i - 1][target], anim[i][key], anim[i - 1][key], 'c');
		followProperty(anim[i][target], anim[i - 1][target], anim[i][key], anim[i - 1][key], 'd');
	}
	return anim;
}

const animation = [
	{
		r_ear: {
			tx: 62.25,
			ty: 2.45,
			l: 14
		},
		head_sleep: {
			tx: 85.05,
			ty: 13.35,
			l: 13
		},
		l_ear: {
			tx: 93.2,
			ty: 2.45,
			l: 12
		},
		r_claws: {
			tx: 65.7,
			ty: 123.5,
			l: 11
		},
		r_arm: {
			tx: 63.8,
			ty: 35.05,
			l: 10
		},
		r_forearm: {
			tx: 64.55,
			ty: 37.4,
			l: 9
		},
		body: {
			tx: 53.4,
			ty: 21.55,
			l: 8
		},
		lower_body: {
			tx: 54.85,
			ty: 83.9,
			l: 7
		},
		tail: {
			tx: 34.6,
			ty: 99.2,
			c: -0.008,
			l: 6
		},
		tail_end: {
			tx: 115.25,
			ty: 109.55,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 2.75,
			ty: 18.85,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 56,
			ty: 0.75,
			a: 0.605,
			b: 0.247,
			c: -0.292,
			d: 0.715,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 94.65,
			ty: 32.2,
			a: 0.911,
			d: 0.911,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 94.65,
			ty: 36.1,
			a: 0.911,
			d: 0.911,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.25,
			ty: 116.9,
			a: 0.83,
			d: 0.83,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 62.6,
			ty: 2.25,
			c: -0.001,
			d: 1.001,
			l: 14
		},
		head_sleep: {
			tx: 85.3,
			ty: 13.15,
			c: -0.001,
			d: 1.001,
			l: 13
		},
		l_ear: {
			tx: 93.55,
			ty: 2.25,
			c: -0.001,
			d: 1.001,
			l: 12
		},
		r_claws: {
			tx: 65.75,
			ty: 123.4,
			c: -0.001,
			d: 1.001,
			l: 11
		},
		r_arm: {
			tx: 64.05,
			ty: 34.9,
			c: -0.001,
			d: 1.001,
			l: 10
		},
		r_forearm: {
			tx: 64.75,
			ty: 37.25,
			c: -0.001,
			d: 1.001,
			l: 9
		},
		body: {
			tx: 53.65,
			ty: 21.35,
			c: -0.001,
			d: 1.001,
			l: 8
		},
		lower_body: {
			tx: 54.95,
			ty: 83.8,
			c: -0.001,
			d: 1.001,
			l: 7
		},
		tail: {
			tx: 34.75,
			ty: 99.1,
			c: -0.009,
			d: 1.001,
			l: 6
		},
		tail_end: {
			tx: 115.35,
			ty: 109.45,
			c: -0.001,
			d: 1.001,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 3.05,
			ty: 18.65,
			c: -0.001,
			d: 1.001,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 56.45,
			ty: 0.6,
			a: 0.604,
			b: 0.245,
			c: -0.293,
			d: 0.715,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 94.9,
			ty: 32,
			a: 0.911,
			d: 0.912,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 94.85,
			ty: 35.95,
			a: 0.911,
			d: 0.912,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.35,
			ty: 116.8,
			a: 0.83,
			d: 0.831,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 62.95,
			ty: 2,
			c: -0.001,
			d: 1.003,
			l: 14
		},
		head_sleep: {
			tx: 85.6,
			ty: 12.95,
			c: -0.001,
			d: 1.003,
			l: 13
		},
		l_ear: {
			tx: 93.95,
			ty: 2,
			c: -0.001,
			d: 1.003,
			l: 12
		},
		r_claws: {
			tx: 65.8,
			ty: 123.4,
			c: -0.001,
			d: 1.003,
			l: 11
		},
		r_arm: {
			tx: 64.2,
			ty: 34.75,
			c: -0.001,
			d: 1.003,
			l: 10
		},
		r_forearm: {
			tx: 64.95,
			ty: 37.05,
			c: -0.001,
			d: 1.003,
			l: 9
		},
		body: {
			tx: 53.85,
			ty: 21.1,
			c: -0.001,
			d: 1.003,
			l: 8
		},
		lower_body: {
			tx: 55.05,
			ty: 83.7,
			c: -0.001,
			d: 1.003,
			l: 7
		},
		tail: {
			tx: 34.9,
			ty: 99,
			c: -0.01,
			d: 1.003,
			l: 6
		},
		tail_end: {
			tx: 115.45,
			ty: 109.4,
			c: -0.001,
			d: 1.003,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 3.35,
			ty: 18.45,
			c: -0.001,
			d: 1.003,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 56.95,
			ty: 0.3,
			a: 0.603,
			b: 0.247,
			c: -0.294,
			d: 0.716,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 95.05,
			ty: 31.85,
			a: 0.911,
			c: -0.001,
			d: 0.913,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 95.05,
			ty: 35.75,
			a: 0.911,
			c: -0.001,
			d: 0.913,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.45,
			ty: 116.75,
			a: 0.83,
			c: -0.001,
			d: 0.833,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 63.4,
			ty: 1.8,
			c: -0.005,
			d: 1.004,
			l: 14
		},
		head_sleep: {
			tx: 85.95,
			ty: 12.75,
			c: -0.005,
			d: 1.004,
			l: 13
		},
		l_ear: {
			tx: 94.35,
			ty: 1.8,
			c: -0.005,
			d: 1.004,
			l: 12
		},
		r_claws: {
			tx: 65.9,
			ty: 123.35,
			c: -0.005,
			d: 1.004,
			l: 11
		},
		r_arm: {
			tx: 64.55,
			ty: 34.6,
			c: -0.005,
			d: 1.004,
			l: 10
		},
		r_forearm: {
			tx: 65.25,
			ty: 36.85,
			c: -0.005,
			d: 1.004,
			l: 9
		},
		body: {
			tx: 54.2,
			ty: 20.95,
			c: -0.005,
			d: 1.004,
			l: 8
		},
		lower_body: {
			tx: 55.15,
			ty: 83.6,
			c: -0.005,
			d: 1.004,
			l: 7
		},
		tail: {
			tx: 35.1,
			ty: 98.9,
			c: -0.013,
			d: 1.004,
			l: 6
		},
		tail_end: {
			tx: 115.55,
			ty: 109.35,
			c: -0.005,
			d: 1.004,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 3.6,
			ty: 18.3,
			c: -0.005,
			d: 1.004,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 57.45,
			ty: 0.1,
			a: 0.603,
			b: 0.247,
			c: -0.295,
			d: 0.718,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 95.35,
			ty: 31.7,
			a: 0.911,
			c: -0.004,
			d: 0.914,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 95.4,
			ty: 35.6,
			a: 0.911,
			c: -0.004,
			d: 0.914,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.5,
			ty: 116.75,
			a: 0.83,
			c: -0.004,
			d: 0.834,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 63.75,
			ty: 1.6,
			c: -0.005,
			d: 1.005,
			l: 14
		},
		head_sleep: {
			tx: 86.2,
			ty: 12.55,
			c: -0.005,
			d: 1.005,
			l: 13
		},
		l_ear: {
			tx: 94.65,
			ty: 1.6,
			c: -0.005,
			d: 1.005,
			l: 12
		},
		r_claws: {
			tx: 65.95,
			ty: 123.25,
			c: -0.005,
			d: 1.005,
			l: 11
		},
		r_arm: {
			tx: 64.75,
			ty: 34.45,
			c: -0.005,
			d: 1.005,
			l: 10
		},
		r_forearm: {
			tx: 65.45,
			ty: 36.7,
			c: -0.005,
			d: 1.005,
			l: 9
		},
		body: {
			tx: 54.45,
			ty: 20.75,
			c: -0.005,
			d: 1.005,
			l: 8
		},
		lower_body: {
			tx: 55.25,
			ty: 83.5,
			c: -0.005,
			d: 1.005,
			l: 7
		},
		tail: {
			tx: 35.2,
			ty: 98.8,
			c: -0.014,
			d: 1.005,
			l: 6
		},
		tail_end: {
			tx: 115.6,
			ty: 109.25,
			c: -0.005,
			d: 1.005,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 3.85,
			ty: 18.1,
			c: -0.005,
			d: 1.005,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 57.95,
			ty: -0.1,
			a: 0.603,
			b: 0.247,
			c: -0.295,
			d: 0.719,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 95.6,
			ty: 31.45,
			a: 0.911,
			c: -0.005,
			d: 0.916,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 95.55,
			ty: 35.45,
			a: 0.911,
			c: -0.005,
			d: 0.916,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.6,
			ty: 116.65,
			a: 0.83,
			c: -0.004,
			d: 0.835,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 64.15,
			ty: 1.4,
			c: -0.009,
			d: 1.007,
			l: 14
		},
		head_sleep: {
			tx: 86.55,
			ty: 12.4,
			c: -0.009,
			d: 1.007,
			l: 13
		},
		l_ear: {
			tx: 95.05,
			ty: 1.4,
			c: -0.009,
			d: 1.007,
			l: 12
		},
		r_claws: {
			tx: 66.1,
			ty: 123.2,
			c: -0.009,
			d: 1.007,
			l: 11
		},
		r_arm: {
			tx: 65,
			ty: 34.35,
			c: -0.009,
			d: 1.007,
			l: 10
		},
		r_forearm: {
			tx: 65.75,
			ty: 36.55,
			c: -0.009,
			d: 1.007,
			l: 9
		},
		body: {
			tx: 54.8,
			ty: 20.55,
			c: -0.009,
			d: 1.007,
			l: 8
		},
		lower_body: {
			tx: 55.35,
			ty: 83.4,
			c: -0.009,
			d: 1.007,
			l: 7
		},
		tail: {
			tx: 35.5,
			ty: 98.75,
			c: -0.018,
			d: 1.007,
			l: 6
		},
		tail_end: {
			tx: 115.75,
			ty: 109.2,
			c: -0.009,
			d: 1.007,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 4.2,
			ty: 17.95,
			c: -0.009,
			d: 1.007,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 58.35,
			ty: -0.2,
			a: 0.602,
			b: 0.247,
			c: -0.298,
			d: 0.719,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 95.85,
			ty: 31.3,
			a: 0.911,
			c: -0.008,
			d: 0.917,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 95.85,
			ty: 35.3,
			a: 0.911,
			c: -0.008,
			d: 0.917,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.7,
			ty: 116.6,
			a: 0.83,
			c: -0.008,
			d: 0.836,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 64.45,
			ty: 1.2,
			c: -0.01,
			d: 1.008,
			l: 14
		},
		head_sleep: {
			tx: 86.75,
			ty: 12.2,
			c: -0.01,
			d: 1.008,
			l: 13
		},
		l_ear: {
			tx: 95.4,
			ty: 1.2,
			c: -0.01,
			d: 1.008,
			l: 12
		},
		r_claws: {
			tx: 66.2,
			ty: 123.2,
			c: -0.01,
			d: 1.008,
			l: 11
		},
		r_arm: {
			tx: 65.2,
			ty: 34.2,
			c: -0.01,
			d: 1.008,
			l: 10
		},
		r_forearm: {
			tx: 65.95,
			ty: 36.45,
			c: -0.01,
			d: 1.008,
			l: 9
		},
		body: {
			tx: 54.95,
			ty: 20.35,
			c: -0.01,
			d: 1.008,
			l: 8
		},
		lower_body: {
			tx: 55.45,
			ty: 83.3,
			c: -0.01,
			d: 1.008,
			l: 7
		},
		tail: {
			tx: 35.6,
			ty: 98.7,
			c: -0.018,
			d: 1.008,
			l: 6
		},
		tail_end: {
			tx: 115.85,
			ty: 109.1,
			c: -0.01,
			d: 1.008,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 4.4,
			ty: 17.75,
			c: -0.01,
			d: 1.008,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 58.8,
			ty: -0.45,
			a: 0.602,
			b: 0.247,
			c: -0.299,
			d: 0.72,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 96.05,
			ty: 31.2,
			a: 0.911,
			c: -0.009,
			d: 0.918,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 96.05,
			ty: 35.15,
			a: 0.911,
			c: -0.009,
			d: 0.918,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.8,
			ty: 116.5,
			a: 0.83,
			c: -0.008,
			d: 0.837,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 64.75,
			ty: 1,
			c: -0.013,
			d: 1.009,
			l: 14
		},
		head_sleep: {
			tx: 87.05,
			ty: 12,
			c: -0.013,
			d: 1.009,
			l: 13
		},
		l_ear: {
			tx: 95.75,
			ty: 1,
			c: -0.013,
			d: 1.009,
			l: 12
		},
		r_claws: {
			tx: 66.25,
			ty: 123.1,
			c: -0.013,
			d: 1.009,
			l: 11
		},
		r_arm: {
			tx: 65.45,
			ty: 34.05,
			c: -0.013,
			d: 1.009,
			l: 10
		},
		r_forearm: {
			tx: 66.25,
			ty: 36.3,
			c: -0.013,
			d: 1.009,
			l: 9
		},
		body: {
			tx: 55.3,
			ty: 20.2,
			c: -0.013,
			d: 1.009,
			l: 8
		},
		lower_body: {
			tx: 55.6,
			ty: 83.15,
			c: -0.013,
			d: 1.009,
			l: 7
		},
		tail: {
			tx: 35.75,
			ty: 98.6,
			c: -0.019,
			d: 1.009,
			l: 6
		},
		tail_end: {
			tx: 115.95,
			ty: 109.05,
			c: -0.013,
			d: 1.009,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 4.7,
			ty: 17.55,
			c: -0.013,
			d: 1.009,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 59.2,
			ty: -0.55,
			a: 0.602,
			b: 0.247,
			c: -0.3,
			d: 0.721,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 96.3,
			ty: 31,
			a: 0.911,
			c: -0.012,
			d: 0.919,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 96.35,
			ty: 34.95,
			a: 0.911,
			c: -0.012,
			d: 0.919,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.85,
			ty: 116.45,
			a: 0.83,
			c: -0.011,
			d: 0.838,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 65.05,
			ty: 0.85,
			c: -0.014,
			d: 1.01,
			l: 14
		},
		head_sleep: {
			tx: 87.3,
			ty: 11.9,
			c: -0.014,
			d: 1.01,
			l: 13
		},
		l_ear: {
			tx: 96.05,
			ty: 0.8,
			c: -0.014,
			d: 1.01,
			l: 12
		},
		r_claws: {
			tx: 66.25,
			ty: 123.05,
			c: -0.014,
			d: 1.01,
			l: 11
		},
		r_arm: {
			tx: 65.6,
			ty: 33.9,
			c: -0.014,
			d: 1.01,
			l: 10
		},
		r_forearm: {
			tx: 66.4,
			ty: 36.15,
			c: -0.014,
			d: 1.01,
			l: 9
		},
		body: {
			tx: 55.5,
			ty: 20,
			c: -0.014,
			d: 1.01,
			l: 8
		},
		lower_body: {
			tx: 55.65,
			ty: 83.15,
			c: -0.014,
			d: 1.01,
			l: 7
		},
		tail: {
			tx: 35.9,
			ty: 98.5,
			c: -0.022,
			d: 1.01,
			l: 6
		},
		tail_end: {
			tx: 116.05,
			ty: 109,
			c: -0.014,
			d: 1.01,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 4.95,
			ty: 17.45,
			c: -0.014,
			d: 1.01,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 59.6,
			ty: -0.8,
			a: 0.6,
			b: 0.249,
			c: -0.3,
			d: 0.722,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 96.5,
			ty: 30.9,
			a: 0.911,
			c: -0.012,
			d: 0.92,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 96.5,
			ty: 34.85,
			a: 0.911,
			c: -0.012,
			d: 0.92,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.95,
			ty: 116.45,
			a: 0.83,
			c: -0.011,
			d: 0.839,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 65.4,
			ty: 0.7,
			c: -0.014,
			d: 1.011,
			l: 14
		},
		head_sleep: {
			tx: 87.5,
			ty: 11.7,
			c: -0.014,
			d: 1.011,
			l: 13
		},
		l_ear: {
			tx: 96.35,
			ty: 0.7,
			c: -0.014,
			d: 1.011,
			l: 12
		},
		r_claws: {
			tx: 66.3,
			ty: 123.05,
			c: -0.014,
			d: 1.011,
			l: 11
		},
		r_arm: {
			tx: 65.85,
			ty: 33.8,
			c: -0.014,
			d: 1.011,
			l: 10
		},
		r_forearm: {
			tx: 66.5,
			ty: 35.95,
			c: -0.014,
			d: 1.011,
			l: 9
		},
		body: {
			tx: 55.65,
			ty: 19.85,
			c: -0.014,
			d: 1.011,
			l: 8
		},
		lower_body: {
			tx: 55.75,
			ty: 83.05,
			c: -0.014,
			d: 1.011,
			l: 7
		},
		tail: {
			tx: 36.05,
			ty: 98.4,
			c: -0.023,
			d: 1.011,
			l: 6
		},
		tail_end: {
			tx: 116.1,
			ty: 108.95,
			c: -0.014,
			d: 1.011,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 5.2,
			ty: 17.25,
			c: -0.014,
			d: 1.011,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 60.1,
			ty: -0.95,
			a: 0.6,
			b: 0.249,
			c: -0.303,
			d: 0.722,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 96.65,
			ty: 30.75,
			a: 0.911,
			c: -0.013,
			d: 0.921,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 96.65,
			ty: 34.7,
			a: 0.911,
			c: -0.013,
			d: 0.921,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99,
			ty: 116.35,
			a: 0.83,
			c: -0.012,
			d: 0.84,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 65.7,
			ty: 0.55,
			c: -0.018,
			d: 1.012,
			l: 14
		},
		head_sleep: {
			tx: 87.8,
			ty: 11.55,
			c: -0.018,
			d: 1.012,
			l: 13
		},
		l_ear: {
			tx: 96.65,
			ty: 0.55,
			c: -0.018,
			d: 1.012,
			l: 12
		},
		r_claws: {
			tx: 66.4,
			ty: 123,
			c: -0.018,
			d: 1.012,
			l: 11
		},
		r_arm: {
			tx: 66.05,
			ty: 33.65,
			c: -0.018,
			d: 1.012,
			l: 10
		},
		r_forearm: {
			tx: 66.85,
			ty: 35.85,
			c: -0.018,
			d: 1.012,
			l: 9
		},
		body: {
			tx: 56,
			ty: 19.7,
			c: -0.018,
			d: 1.012,
			l: 8
		},
		lower_body: {
			tx: 55.8,
			ty: 82.95,
			c: -0.018,
			d: 1.012,
			l: 7
		},
		tail: {
			tx: 36.15,
			ty: 98.35,
			c: -0.023,
			d: 1.012,
			l: 6
		},
		tail_end: {
			tx: 116.2,
			ty: 108.9,
			c: -0.018,
			d: 1.012,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 5.4,
			ty: 17.1,
			c: -0.018,
			d: 1.012,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 60.45,
			ty: -1.15,
			a: 0.6,
			b: 0.249,
			c: -0.304,
			d: 0.723,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 96.95,
			ty: 30.6,
			a: 0.911,
			c: -0.016,
			d: 0.922,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 96.95,
			ty: 34.6,
			a: 0.911,
			c: -0.016,
			d: 0.922,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.05,
			ty: 116.35,
			a: 0.83,
			c: -0.015,
			d: 0.84,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 66,
			ty: 0.4,
			c: -0.018,
			d: 1.013,
			l: 14
		},
		head_sleep: {
			tx: 88,
			ty: 11.4,
			c: -0.018,
			d: 1.013,
			l: 13
		},
		l_ear: {
			tx: 96.95,
			ty: 0.35,
			c: -0.018,
			d: 1.013,
			l: 12
		},
		r_claws: {
			tx: 66.45,
			ty: 123.05,
			c: -0.018,
			d: 1.013,
			l: 11
		},
		r_arm: {
			tx: 66.25,
			ty: 33.5,
			c: -0.018,
			d: 1.013,
			l: 10
		},
		r_forearm: {
			tx: 66.95,
			ty: 35.75,
			c: -0.018,
			d: 1.013,
			l: 9
		},
		body: {
			tx: 56.2,
			ty: 19.55,
			c: -0.018,
			d: 1.013,
			l: 8
		},
		lower_body: {
			tx: 55.9,
			ty: 82.85,
			c: -0.018,
			d: 1.013,
			l: 7
		},
		tail: {
			tx: 36.3,
			ty: 98.2,
			c: -0.027,
			d: 1.013,
			l: 6
		},
		tail_end: {
			tx: 116.3,
			ty: 108.85,
			c: -0.018,
			d: 1.013,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 5.6,
			ty: 17,
			c: -0.018,
			d: 1.013,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 60.8,
			ty: -1.3,
			a: 0.6,
			b: 0.249,
			c: -0.305,
			d: 0.724,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 97.1,
			ty: 30.45,
			a: 0.911,
			c: -0.017,
			d: 0.923,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 97.1,
			ty: 34.5,
			a: 0.911,
			c: -0.017,
			d: 0.923,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.15,
			ty: 116.3,
			a: 0.83,
			c: -0.015,
			d: 0.841,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 66.25,
			ty: 0.2,
			c: -0.019,
			d: 1.014,
			l: 14
		},
		head_sleep: {
			tx: 88.25,
			ty: 11.25,
			c: -0.019,
			d: 1.014,
			l: 13
		},
		l_ear: {
			tx: 97.2,
			ty: 0.2,
			c: -0.019,
			d: 1.014,
			l: 12
		},
		r_claws: {
			tx: 66.5,
			ty: 122.95,
			c: -0.019,
			d: 1.014,
			l: 11
		},
		r_arm: {
			tx: 66.4,
			ty: 33.45,
			c: -0.019,
			d: 1.014,
			l: 10
		},
		r_forearm: {
			tx: 67.1,
			ty: 35.6,
			c: -0.019,
			d: 1.014,
			l: 9
		},
		body: {
			tx: 56.35,
			ty: 19.35,
			c: -0.019,
			d: 1.014,
			l: 8
		},
		lower_body: {
			tx: 56,
			ty: 82.75,
			c: -0.019,
			d: 1.014,
			l: 7
		},
		tail: {
			tx: 36.45,
			ty: 98.15,
			c: -0.027,
			d: 1.014,
			l: 6
		},
		tail_end: {
			tx: 116.35,
			ty: 108.8,
			c: -0.019,
			d: 1.014,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 5.85,
			ty: 16.8,
			c: -0.019,
			d: 1.014,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 61.1,
			ty: -1.5,
			a: 0.599,
			b: 0.249,
			c: -0.305,
			d: 0.725,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 97.25,
			ty: 30.3,
			a: 0.911,
			c: -0.017,
			d: 0.924,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 97.25,
			ty: 34.3,
			a: 0.911,
			c: -0.017,
			d: 0.924,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.2,
			ty: 116.3,
			a: 0.83,
			c: -0.015,
			d: 0.842,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 66.55,
			ty: 0.05,
			c: -0.022,
			d: 1.015,
			l: 14
		},
		head_sleep: {
			tx: 88.45,
			ty: 11.1,
			c: -0.022,
			d: 1.015,
			l: 13
		},
		l_ear: {
			tx: 97.5,
			ty: 0.05,
			c: -0.022,
			d: 1.015,
			l: 12
		},
		r_claws: {
			tx: 66.6,
			ty: 122.95,
			c: -0.022,
			d: 1.015,
			l: 11
		},
		r_arm: {
			tx: 66.6,
			ty: 33.35,
			c: -0.022,
			d: 1.015,
			l: 10
		},
		r_forearm: {
			tx: 67.4,
			ty: 35.55,
			c: -0.022,
			d: 1.015,
			l: 9
		},
		body: {
			tx: 56.65,
			ty: 19.25,
			c: -0.022,
			d: 1.015,
			l: 8
		},
		lower_body: {
			tx: 56.05,
			ty: 82.8,
			c: -0.022,
			d: 1.015,
			l: 7
		},
		tail: {
			tx: 36.55,
			ty: 98.1,
			c: -0.028,
			d: 1.015,
			l: 6
		},
		tail_end: {
			tx: 116.45,
			ty: 108.75,
			c: -0.022,
			d: 1.015,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 6.1,
			ty: 16.7,
			c: -0.022,
			d: 1.015,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 61.45,
			ty: -1.65,
			a: 0.599,
			b: 0.249,
			c: -0.306,
			d: 0.726,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 97.5,
			ty: 30.2,
			a: 0.911,
			c: -0.02,
			d: 0.924,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 97.5,
			ty: 34.3,
			a: 0.911,
			c: -0.02,
			d: 0.924,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.3,
			ty: 116.25,
			a: 0.83,
			c: -0.019,
			d: 0.843,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 66.8,
			ty: -0.1,
			c: -0.023,
			d: 1.016,
			l: 14
		},
		head_sleep: {
			tx: 88.65,
			ty: 10.95,
			c: -0.023,
			d: 1.016,
			l: 13
		},
		l_ear: {
			tx: 97.75,
			ty: -0.15,
			c: -0.023,
			d: 1.016,
			l: 12
		},
		r_claws: {
			tx: 66.65,
			ty: 122.9,
			c: -0.023,
			d: 1.016,
			l: 11
		},
		r_arm: {
			tx: 66.75,
			ty: 33.2,
			c: -0.023,
			d: 1.016,
			l: 10
		},
		r_forearm: {
			tx: 67.5,
			ty: 35.4,
			c: -0.023,
			d: 1.016,
			l: 9
		},
		body: {
			tx: 56.75,
			ty: 19.1,
			c: -0.023,
			d: 1.016,
			l: 8
		},
		lower_body: {
			tx: 56.15,
			ty: 82.65,
			c: -0.023,
			d: 1.016,
			l: 7
		},
		tail: {
			tx: 36.7,
			ty: 98.05,
			c: -0.031,
			d: 1.016,
			l: 6
		},
		tail_end: {
			tx: 116.5,
			ty: 108.65,
			c: -0.023,
			d: 1.016,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 6.2,
			ty: 16.55,
			c: -0.023,
			d: 1.016,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 61.85,
			ty: -1.7,
			a: 0.599,
			b: 0.249,
			c: -0.309,
			d: 0.726,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 97.6,
			ty: 30.05,
			a: 0.911,
			c: -0.021,
			d: 0.925,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 97.65,
			ty: 34.15,
			a: 0.911,
			c: -0.021,
			d: 0.925,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.35,
			ty: 116.15,
			a: 0.83,
			c: -0.019,
			d: 0.844,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 67,
			ty: -0.25,
			c: -0.023,
			d: 1.017,
			l: 14
		},
		head_sleep: {
			tx: 88.85,
			ty: 10.85,
			c: -0.023,
			d: 1.017,
			l: 13
		},
		l_ear: {
			tx: 98,
			ty: -0.25,
			c: -0.023,
			d: 1.017,
			l: 12
		},
		r_claws: {
			tx: 66.65,
			ty: 122.85,
			c: -0.023,
			d: 1.017,
			l: 11
		},
		r_arm: {
			tx: 66.95,
			ty: 33.1,
			c: -0.023,
			d: 1.017,
			l: 10
		},
		r_forearm: {
			tx: 67.7,
			ty: 35.35,
			c: -0.023,
			d: 1.017,
			l: 9
		},
		body: {
			tx: 56.95,
			ty: 18.95,
			c: -0.023,
			d: 1.017,
			l: 8
		},
		lower_body: {
			tx: 56.2,
			ty: 82.65,
			c: -0.023,
			d: 1.017,
			l: 7
		},
		tail: {
			tx: 36.85,
			ty: 98,
			c: -0.032,
			d: 1.017,
			l: 6
		},
		tail_end: {
			tx: 116.55,
			ty: 108.65,
			c: -0.023,
			d: 1.017,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 6.4,
			ty: 16.4,
			c: -0.023,
			d: 1.017,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 62.1,
			ty: -1.9,
			a: 0.599,
			b: 0.249,
			c: -0.309,
			d: 0.727,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 97.75,
			ty: 30,
			a: 0.911,
			c: -0.021,
			d: 0.926,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 97.8,
			ty: 34.05,
			a: 0.911,
			c: -0.021,
			d: 0.926,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.4,
			ty: 116.15,
			a: 0.83,
			c: -0.019,
			d: 0.844,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 67.35,
			ty: -0.4,
			c: -0.027,
			d: 1.018,
			l: 14
		},
		head_sleep: {
			tx: 89.05,
			ty: 10.75,
			c: -0.027,
			d: 1.018,
			l: 13
		},
		l_ear: {
			tx: 98.25,
			ty: -0.4,
			c: -0.027,
			d: 1.018,
			l: 12
		},
		r_claws: {
			tx: 66.75,
			ty: 122.8,
			c: -0.027,
			d: 1.018,
			l: 11
		},
		r_arm: {
			tx: 67.1,
			ty: 33,
			c: -0.027,
			d: 1.018,
			l: 10
		},
		r_forearm: {
			tx: 67.95,
			ty: 35.15,
			c: -0.027,
			d: 1.018,
			l: 9
		},
		body: {
			tx: 57.2,
			ty: 18.9,
			c: -0.027,
			d: 1.018,
			l: 8
		},
		lower_body: {
			tx: 56.25,
			ty: 82.55,
			c: -0.027,
			d: 1.018,
			l: 7
		},
		tail: {
			tx: 36.9,
			ty: 97.95,
			c: -0.032,
			d: 1.018,
			l: 6
		},
		tail_end: {
			tx: 116.7,
			ty: 108.6,
			c: -0.027,
			d: 1.018,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 6.65,
			ty: 16.35,
			c: -0.027,
			d: 1.018,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 62.45,
			ty: -2.05,
			a: 0.598,
			b: 0.251,
			c: -0.31,
			d: 0.727,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 97.95,
			ty: 29.9,
			a: 0.911,
			c: -0.024,
			d: 0.927,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 98.1,
			ty: 33.95,
			a: 0.911,
			c: -0.024,
			d: 0.927,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.45,
			ty: 116.1,
			a: 0.83,
			c: -0.022,
			d: 0.845,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 67.55,
			ty: -0.5,
			c: -0.027,
			d: 1.019,
			l: 14
		},
		head_sleep: {
			tx: 89.3,
			ty: 10.6,
			c: -0.027,
			d: 1.019,
			l: 13
		},
		l_ear: {
			tx: 98.5,
			ty: -0.5,
			c: -0.027,
			d: 1.019,
			l: 12
		},
		r_claws: {
			tx: 66.8,
			ty: 122.8,
			c: -0.027,
			d: 1.019,
			l: 11
		},
		r_arm: {
			tx: 67.3,
			ty: 32.95,
			c: -0.027,
			d: 1.019,
			l: 10
		},
		r_forearm: {
			tx: 68.05,
			ty: 35.1,
			c: -0.027,
			d: 1.019,
			l: 9
		},
		body: {
			tx: 57.35,
			ty: 18.75,
			c: -0.027,
			d: 1.019,
			l: 8
		},
		lower_body: {
			tx: 56.35,
			ty: 82.45,
			c: -0.027,
			d: 1.019,
			l: 7
		},
		tail: {
			tx: 37.1,
			ty: 97.85,
			c: -0.036,
			d: 1.019,
			l: 6
		},
		tail_end: {
			tx: 116.7,
			ty: 108.55,
			c: -0.027,
			d: 1.019,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 6.8,
			ty: 16.2,
			c: -0.027,
			d: 1.019,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 62.75,
			ty: -2.15,
			a: 0.597,
			b: 0.251,
			c: -0.31,
			d: 0.728,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 98.15,
			ty: 29.8,
			a: 0.911,
			c: -0.025,
			d: 0.928,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 98.15,
			ty: 33.8,
			a: 0.911,
			c: -0.025,
			d: 0.928,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.5,
			ty: 116.05,
			a: 0.83,
			c: -0.022,
			d: 0.846,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 67.75,
			ty: -0.6,
			c: -0.027,
			d: 1.019,
			l: 14
		},
		head_sleep: {
			tx: 89.45,
			ty: 10.5,
			c: -0.027,
			d: 1.019,
			l: 13
		},
		l_ear: {
			tx: 98.75,
			ty: -0.65,
			c: -0.027,
			d: 1.019,
			l: 12
		},
		r_claws: {
			tx: 66.8,
			ty: 122.75,
			c: -0.027,
			d: 1.019,
			l: 11
		},
		r_arm: {
			tx: 67.4,
			ty: 32.9,
			c: -0.027,
			d: 1.019,
			l: 10
		},
		r_forearm: {
			tx: 68.2,
			ty: 35.05,
			c: -0.027,
			d: 1.019,
			l: 9
		},
		body: {
			tx: 57.45,
			ty: 18.6,
			c: -0.027,
			d: 1.019,
			l: 8
		},
		lower_body: {
			tx: 56.4,
			ty: 82.4,
			c: -0.027,
			d: 1.019,
			l: 7
		},
		tail: {
			tx: 37.15,
			ty: 97.75,
			c: -0.036,
			d: 1.019,
			l: 6
		},
		tail_end: {
			tx: 116.75,
			ty: 108.5,
			c: -0.027,
			d: 1.019,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 6.95,
			ty: 16.1,
			c: -0.027,
			d: 1.019,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 63,
			ty: -2.3,
			a: 0.597,
			b: 0.251,
			c: -0.311,
			d: 0.729,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 98.2,
			ty: 29.7,
			a: 0.911,
			c: -0.025,
			d: 0.928,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 98.3,
			ty: 33.75,
			a: 0.911,
			c: -0.025,
			d: 0.928,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.55,
			ty: 116,
			a: 0.83,
			c: -0.023,
			d: 0.846,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 67.95,
			ty: -0.75,
			c: -0.028,
			d: 1.02,
			l: 14
		},
		head_sleep: {
			tx: 89.55,
			ty: 10.35,
			c: -0.028,
			d: 1.02,
			l: 13
		},
		l_ear: {
			tx: 98.95,
			ty: -0.8,
			c: -0.028,
			d: 1.02,
			l: 12
		},
		r_claws: {
			tx: 66.85,
			ty: 122.75,
			c: -0.028,
			d: 1.02,
			l: 11
		},
		r_arm: {
			tx: 67.5,
			ty: 32.75,
			c: -0.028,
			d: 1.02,
			l: 10
		},
		r_forearm: {
			tx: 68.2,
			ty: 34.9,
			c: -0.028,
			d: 1.02,
			l: 9
		},
		body: {
			tx: 57.6,
			ty: 18.55,
			c: -0.028,
			d: 1.02,
			l: 8
		},
		lower_body: {
			tx: 56.5,
			ty: 82.35,
			c: -0.028,
			d: 1.02,
			l: 7
		},
		tail: {
			tx: 37.25,
			ty: 97.75,
			c: -0.036,
			d: 1.02,
			l: 6
		},
		tail_end: {
			tx: 116.8,
			ty: 108.45,
			c: -0.028,
			d: 1.02,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 7.1,
			ty: 16,
			c: -0.028,
			d: 1.02,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 63.3,
			ty: -2.4,
			a: 0.597,
			b: 0.251,
			c: -0.313,
			d: 0.729,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 98.35,
			ty: 29.6,
			a: 0.911,
			c: -0.025,
			d: 0.929,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 98.35,
			ty: 33.65,
			a: 0.911,
			c: -0.025,
			d: 0.929,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.6,
			ty: 115.95,
			a: 0.83,
			c: -0.023,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 68.15,
			ty: -0.85,
			c: -0.031,
			d: 1.021,
			l: 14
		},
		head_sleep: {
			tx: 89.8,
			ty: 10.3,
			c: -0.031,
			d: 1.021,
			l: 13
		},
		l_ear: {
			tx: 99.1,
			ty: -0.9,
			c: -0.031,
			d: 1.021,
			l: 12
		},
		r_claws: {
			tx: 66.95,
			ty: 122.75,
			c: -0.031,
			d: 1.021,
			l: 11
		},
		r_arm: {
			tx: 67.7,
			ty: 32.75,
			c: -0.031,
			d: 1.021,
			l: 10
		},
		r_forearm: {
			tx: 68.5,
			ty: 34.8,
			c: -0.031,
			d: 1.021,
			l: 9
		},
		body: {
			tx: 57.85,
			ty: 18.4,
			c: -0.031,
			d: 1.021,
			l: 8
		},
		lower_body: {
			tx: 56.5,
			ty: 82.3,
			c: -0.031,
			d: 1.021,
			l: 7
		},
		tail: {
			tx: 37.35,
			ty: 97.65,
			c: -0.037,
			d: 1.021,
			l: 6
		},
		tail_end: {
			tx: 116.9,
			ty: 108.4,
			c: -0.031,
			d: 1.021,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 7.3,
			ty: 15.9,
			c: -0.031,
			d: 1.021,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 63.6,
			ty: -2.55,
			a: 0.597,
			b: 0.251,
			c: -0.314,
			d: 0.729,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 98.6,
			ty: 29.5,
			a: 0.911,
			c: -0.029,
			d: 0.93,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 98.6,
			ty: 33.55,
			a: 0.911,
			c: -0.029,
			d: 0.93,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.7,
			ty: 115.95,
			a: 0.83,
			c: -0.026,
			d: 0.848,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 68.3,
			ty: -0.95,
			c: -0.032,
			d: 1.021,
			l: 14
		},
		head_sleep: {
			tx: 89.95,
			ty: 10.15,
			c: -0.032,
			d: 1.021,
			l: 13
		},
		l_ear: {
			tx: 99.3,
			ty: -1,
			c: -0.032,
			d: 1.021,
			l: 12
		},
		r_claws: {
			tx: 66.95,
			ty: 122.7,
			c: -0.032,
			d: 1.021,
			l: 11
		},
		r_arm: {
			tx: 67.8,
			ty: 32.65,
			c: -0.032,
			d: 1.021,
			l: 10
		},
		r_forearm: {
			tx: 68.6,
			ty: 34.7,
			c: -0.032,
			d: 1.021,
			l: 9
		},
		body: {
			tx: 58,
			ty: 18.35,
			c: -0.032,
			d: 1.021,
			l: 8
		},
		lower_body: {
			tx: 56.6,
			ty: 82.25,
			c: -0.032,
			d: 1.021,
			l: 7
		},
		tail: {
			tx: 37.5,
			ty: 97.65,
			c: -0.04,
			d: 1.021,
			l: 6
		},
		tail_end: {
			tx: 117,
			ty: 108.35,
			c: -0.032,
			d: 1.021,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 7.45,
			ty: 15.75,
			c: -0.032,
			d: 1.021,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 63.8,
			ty: -2.65,
			a: 0.597,
			b: 0.251,
			c: -0.314,
			d: 0.73,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 98.7,
			ty: 29.45,
			a: 0.911,
			c: -0.029,
			d: 0.93,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 98.7,
			ty: 33.45,
			a: 0.911,
			c: -0.029,
			d: 0.93,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.75,
			ty: 115.85,
			a: 0.83,
			c: -0.026,
			d: 0.848,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 68.5,
			ty: -1.05,
			c: -0.032,
			d: 1.022,
			l: 14
		},
		head_sleep: {
			tx: 90,
			ty: 10.1,
			c: -0.032,
			d: 1.022,
			l: 13
		},
		l_ear: {
			tx: 99.45,
			ty: -1.1,
			c: -0.032,
			d: 1.022,
			l: 12
		},
		r_claws: {
			tx: 67,
			ty: 122.65,
			c: -0.032,
			d: 1.022,
			l: 11
		},
		r_arm: {
			tx: 67.95,
			ty: 32.55,
			c: -0.032,
			d: 1.022,
			l: 10
		},
		r_forearm: {
			tx: 68.65,
			ty: 34.65,
			c: -0.032,
			d: 1.022,
			l: 9
		},
		body: {
			tx: 58.05,
			ty: 18.25,
			c: -0.032,
			d: 1.022,
			l: 8
		},
		lower_body: {
			tx: 56.65,
			ty: 82.2,
			c: -0.032,
			d: 1.022,
			l: 7
		},
		tail: {
			tx: 37.55,
			ty: 97.6,
			c: -0.041,
			d: 1.022,
			l: 6
		},
		tail_end: {
			tx: 116.95,
			ty: 108.4,
			c: -0.032,
			d: 1.022,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 7.55,
			ty: 15.65,
			c: -0.032,
			d: 1.022,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 63.95,
			ty: -2.7,
			a: 0.596,
			b: 0.251,
			c: -0.315,
			d: 0.73,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 98.7,
			ty: 29.35,
			a: 0.911,
			c: -0.029,
			d: 0.931,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 98.8,
			ty: 33.4,
			a: 0.911,
			c: -0.029,
			d: 0.931,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.75,
			ty: 115.95,
			a: 0.83,
			c: -0.026,
			d: 0.849,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 68.65,
			ty: -1.15,
			c: -0.032,
			d: 1.023,
			l: 14
		},
		head_sleep: {
			tx: 90.1,
			ty: 9.95,
			c: -0.032,
			d: 1.023,
			l: 13
		},
		l_ear: {
			tx: 99.6,
			ty: -1.15,
			c: -0.032,
			d: 1.023,
			l: 12
		},
		r_claws: {
			tx: 67,
			ty: 122.65,
			c: -0.032,
			d: 1.023,
			l: 11
		},
		r_arm: {
			tx: 68,
			ty: 32.5,
			c: -0.032,
			d: 1.023,
			l: 10
		},
		r_forearm: {
			tx: 68.75,
			ty: 34.55,
			c: -0.032,
			d: 1.023,
			l: 9
		},
		body: {
			tx: 58.15,
			ty: 18.15,
			c: -0.032,
			d: 1.023,
			l: 8
		},
		lower_body: {
			tx: 56.65,
			ty: 82.15,
			c: -0.032,
			d: 1.023,
			l: 7
		},
		tail: {
			tx: 37.65,
			ty: 97.55,
			c: -0.041,
			d: 1.023,
			l: 6
		},
		tail_end: {
			tx: 117.05,
			ty: 108.35,
			c: -0.032,
			d: 1.023,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 7.7,
			ty: 15.65,
			c: -0.032,
			d: 1.023,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 64.2,
			ty: -2.8,
			a: 0.596,
			b: 0.251,
			c: -0.315,
			d: 0.731,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 98.85,
			ty: 29.3,
			a: 0.911,
			c: -0.029,
			d: 0.931,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 98.9,
			ty: 33.3,
			a: 0.911,
			c: -0.029,
			d: 0.931,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.8,
			ty: 115.85,
			a: 0.83,
			c: -0.027,
			d: 0.849,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 68.8,
			ty: -1.25,
			c: -0.032,
			d: 1.023,
			l: 14
		},
		head_sleep: {
			tx: 90.2,
			ty: 9.9,
			c: -0.032,
			d: 1.023,
			l: 13
		},
		l_ear: {
			tx: 99.75,
			ty: -1.3,
			c: -0.032,
			d: 1.023,
			l: 12
		},
		r_claws: {
			tx: 67.05,
			ty: 122.6,
			c: -0.032,
			d: 1.023,
			l: 11
		},
		r_arm: {
			tx: 68.05,
			ty: 32.4,
			c: -0.032,
			d: 1.023,
			l: 10
		},
		r_forearm: {
			tx: 68.85,
			ty: 34.5,
			c: -0.032,
			d: 1.023,
			l: 9
		},
		body: {
			tx: 58.3,
			ty: 18.05,
			c: -0.032,
			d: 1.023,
			l: 8
		},
		lower_body: {
			tx: 56.75,
			ty: 82.1,
			c: -0.032,
			d: 1.023,
			l: 7
		},
		tail: {
			tx: 37.65,
			ty: 97.55,
			c: -0.041,
			d: 1.023,
			l: 6
		},
		tail_end: {
			tx: 117.1,
			ty: 108.35,
			c: -0.032,
			d: 1.023,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 7.8,
			ty: 15.55,
			c: -0.032,
			d: 1.023,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 64.35,
			ty: -2.9,
			a: 0.596,
			b: 0.251,
			c: -0.315,
			d: 0.731,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 98.95,
			ty: 29.2,
			a: 0.911,
			c: -0.029,
			d: 0.932,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 99,
			ty: 33.25,
			a: 0.911,
			c: -0.029,
			d: 0.932,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.8,
			ty: 115.85,
			a: 0.83,
			c: -0.027,
			d: 0.85,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 69,
			ty: -1.35,
			c: -0.036,
			d: 1.024,
			l: 14
		},
		head_sleep: {
			tx: 90.4,
			ty: 9.85,
			c: -0.036,
			d: 1.024,
			l: 13
		},
		l_ear: {
			tx: 99.95,
			ty: -1.4,
			c: -0.036,
			d: 1.024,
			l: 12
		},
		r_claws: {
			tx: 67.1,
			ty: 122.55,
			c: -0.036,
			d: 1.024,
			l: 11
		},
		r_arm: {
			tx: 68.3,
			ty: 32.4,
			c: -0.036,
			d: 1.024,
			l: 10
		},
		r_forearm: {
			tx: 69.05,
			ty: 34.45,
			c: -0.036,
			d: 1.024,
			l: 9
		},
		body: {
			tx: 58.5,
			ty: 18,
			c: -0.036,
			d: 1.024,
			l: 8
		},
		lower_body: {
			tx: 56.75,
			ty: 82.05,
			c: -0.036,
			d: 1.024,
			l: 7
		},
		tail: {
			tx: 37.75,
			ty: 97.5,
			c: -0.041,
			d: 1.024,
			l: 6
		},
		tail_end: {
			tx: 117.15,
			ty: 108.3,
			c: -0.036,
			d: 1.024,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 7.9,
			ty: 15.45,
			c: -0.036,
			d: 1.024,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 64.5,
			ty: -3,
			a: 0.596,
			b: 0.251,
			c: -0.316,
			d: 0.732,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 99.1,
			ty: 29.1,
			a: 0.911,
			c: -0.033,
			d: 0.932,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 99.15,
			ty: 33.15,
			a: 0.911,
			c: -0.033,
			d: 0.932,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.85,
			ty: 115.85,
			a: 0.83,
			c: -0.03,
			d: 0.85,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 69.15,
			ty: -1.4,
			c: -0.036,
			d: 1.024,
			l: 14
		},
		head_sleep: {
			tx: 90.5,
			ty: 9.8,
			c: -0.036,
			d: 1.024,
			l: 13
		},
		l_ear: {
			tx: 100.1,
			ty: -1.45,
			c: -0.036,
			d: 1.024,
			l: 12
		},
		r_claws: {
			tx: 67.1,
			ty: 122.6,
			c: -0.036,
			d: 1.024,
			l: 11
		},
		r_arm: {
			tx: 68.35,
			ty: 32.3,
			c: -0.036,
			d: 1.024,
			l: 10
		},
		r_forearm: {
			tx: 69.15,
			ty: 34.35,
			c: -0.036,
			d: 1.024,
			l: 9
		},
		body: {
			tx: 58.6,
			ty: 17.9,
			c: -0.036,
			d: 1.024,
			l: 8
		},
		lower_body: {
			tx: 56.75,
			ty: 82,
			c: -0.036,
			d: 1.024,
			l: 7
		},
		tail: {
			tx: 37.9,
			ty: 97.45,
			c: -0.045,
			d: 1.024,
			l: 6
		},
		tail_end: {
			tx: 117.2,
			ty: 108.25,
			c: -0.036,
			d: 1.024,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 8,
			ty: 15.4,
			c: -0.036,
			d: 1.024,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 64.75,
			ty: -3.05,
			a: 0.596,
			b: 0.251,
			c: -0.316,
			d: 0.732,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 99.2,
			ty: 29.05,
			a: 0.911,
			c: -0.033,
			d: 0.933,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 99.3,
			ty: 33.1,
			a: 0.911,
			c: -0.033,
			d: 0.933,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.95,
			ty: 115.75,
			a: 0.83,
			c: -0.03,
			d: 0.85,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 69.25,
			ty: -1.5,
			c: -0.036,
			d: 1.025,
			l: 14
		},
		head_sleep: {
			tx: 90.6,
			ty: 9.75,
			c: -0.036,
			d: 1.025,
			l: 13
		},
		l_ear: {
			tx: 100.2,
			ty: -1.5,
			c: -0.036,
			d: 1.025,
			l: 12
		},
		r_claws: {
			tx: 67.15,
			ty: 122.55,
			c: -0.036,
			d: 1.025,
			l: 11
		},
		r_arm: {
			tx: 68.4,
			ty: 32.25,
			c: -0.036,
			d: 1.025,
			l: 10
		},
		r_forearm: {
			tx: 69.2,
			ty: 34.3,
			c: -0.036,
			d: 1.025,
			l: 9
		},
		body: {
			tx: 58.65,
			ty: 17.85,
			c: -0.036,
			d: 1.025,
			l: 8
		},
		lower_body: {
			tx: 56.85,
			ty: 81.95,
			c: -0.036,
			d: 1.025,
			l: 7
		},
		tail: {
			tx: 37.9,
			ty: 97.45,
			c: -0.045,
			d: 1.024,
			l: 6
		},
		tail_end: {
			tx: 117.2,
			ty: 108.25,
			c: -0.036,
			d: 1.025,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 8.15,
			ty: 15.3,
			c: -0.036,
			d: 1.025,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 64.9,
			ty: -3.15,
			a: 0.596,
			b: 0.251,
			c: -0.319,
			d: 0.732,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 99.25,
			ty: 29,
			a: 0.911,
			c: -0.033,
			d: 0.933,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 99.35,
			ty: 33.1,
			a: 0.911,
			c: -0.033,
			d: 0.933,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.9,
			ty: 115.75,
			a: 0.83,
			c: -0.03,
			d: 0.851,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 69.4,
			ty: -1.55,
			c: -0.036,
			d: 1.025,
			l: 14
		},
		head_sleep: {
			tx: 90.7,
			ty: 9.65,
			c: -0.036,
			d: 1.025,
			l: 13
		},
		l_ear: {
			tx: 100.3,
			ty: -1.6,
			c: -0.036,
			d: 1.025,
			l: 12
		},
		r_claws: {
			tx: 67.15,
			ty: 122.55,
			c: -0.036,
			d: 1.025,
			l: 11
		},
		r_arm: {
			tx: 68.45,
			ty: 32.25,
			c: -0.036,
			d: 1.025,
			l: 10
		},
		r_forearm: {
			tx: 69.3,
			ty: 34.3,
			c: -0.036,
			d: 1.025,
			l: 9
		},
		body: {
			tx: 58.7,
			ty: 17.8,
			c: -0.036,
			d: 1.025,
			l: 8
		},
		lower_body: {
			tx: 56.9,
			ty: 81.9,
			c: -0.036,
			d: 1.025,
			l: 7
		},
		tail: {
			tx: 37.95,
			ty: 97.4,
			c: -0.045,
			d: 1.025,
			l: 6
		},
		tail_end: {
			tx: 117.25,
			ty: 108.25,
			c: -0.036,
			d: 1.025,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 8.2,
			ty: 15.25,
			c: -0.036,
			d: 1.025,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 65.05,
			ty: -3.25,
			a: 0.595,
			b: 0.253,
			c: -0.319,
			d: 0.732,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 99.35,
			ty: 28.95,
			a: 0.911,
			c: -0.033,
			d: 0.933,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 99.4,
			ty: 33,
			a: 0.911,
			c: -0.033,
			d: 0.933,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 100,
			ty: 115.75,
			a: 0.83,
			c: -0.03,
			d: 0.851,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 69.5,
			ty: -1.6,
			c: -0.037,
			d: 1.025,
			l: 14
		},
		head_sleep: {
			tx: 90.8,
			ty: 9.6,
			c: -0.037,
			d: 1.025,
			l: 13
		},
		l_ear: {
			tx: 100.4,
			ty: -1.65,
			c: -0.037,
			d: 1.025,
			l: 12
		},
		r_claws: {
			tx: 67.15,
			ty: 122.55,
			c: -0.037,
			d: 1.025,
			l: 11
		},
		r_arm: {
			tx: 68.5,
			ty: 32.2,
			c: -0.037,
			d: 1.025,
			l: 10
		},
		r_forearm: {
			tx: 69.35,
			ty: 34.2,
			c: -0.037,
			d: 1.025,
			l: 9
		},
		body: {
			tx: 58.8,
			ty: 17.7,
			c: -0.037,
			d: 1.025,
			l: 8
		},
		lower_body: {
			tx: 56.9,
			ty: 81.95,
			c: -0.037,
			d: 1.025,
			l: 7
		},
		tail: {
			tx: 38.05,
			ty: 97.35,
			c: -0.045,
			d: 1.025,
			l: 6
		},
		tail_end: {
			tx: 117.3,
			ty: 108.2,
			c: -0.037,
			d: 1.025,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 8.3,
			ty: 15.25,
			c: -0.037,
			d: 1.025,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 65.2,
			ty: -3.3,
			a: 0.595,
			b: 0.253,
			c: -0.319,
			d: 0.732,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 99.4,
			ty: 28.9,
			a: 0.911,
			c: -0.033,
			d: 0.934,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 99.5,
			ty: 32.95,
			a: 0.911,
			c: -0.033,
			d: 0.934,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.95,
			ty: 115.7,
			a: 0.83,
			c: -0.03,
			d: 0.851,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 69.55,
			ty: -1.7,
			c: -0.037,
			d: 1.026,
			l: 14
		},
		head_sleep: {
			tx: 90.85,
			ty: 9.6,
			c: -0.037,
			d: 1.026,
			l: 13
		},
		l_ear: {
			tx: 100.5,
			ty: -1.7,
			c: -0.037,
			d: 1.026,
			l: 12
		},
		r_claws: {
			tx: 67.2,
			ty: 122.55,
			c: -0.037,
			d: 1.026,
			l: 11
		},
		r_arm: {
			tx: 68.6,
			ty: 32.15,
			c: -0.037,
			d: 1.026,
			l: 10
		},
		r_forearm: {
			tx: 69.35,
			ty: 34.15,
			c: -0.037,
			d: 1.026,
			l: 9
		},
		body: {
			tx: 58.85,
			ty: 17.65,
			c: -0.037,
			d: 1.026,
			l: 8
		},
		lower_body: {
			tx: 56.9,
			ty: 81.85,
			c: -0.037,
			d: 1.026,
			l: 7
		},
		tail: {
			tx: 38,
			ty: 97.35,
			c: -0.045,
			d: 1.026,
			l: 6
		},
		tail_end: {
			tx: 117.25,
			ty: 108.15,
			c: -0.037,
			d: 1.026,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 8.35,
			ty: 15.15,
			c: -0.037,
			d: 1.026,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 65.3,
			ty: -3.3,
			a: 0.595,
			b: 0.253,
			c: -0.319,
			d: 0.733,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 99.45,
			ty: 28.9,
			a: 0.911,
			c: -0.033,
			d: 0.934,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 99.45,
			ty: 32.95,
			a: 0.911,
			c: -0.033,
			d: 0.934,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 100,
			ty: 115.7,
			a: 0.83,
			c: -0.031,
			d: 0.852,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 69.65,
			ty: -1.75,
			c: -0.037,
			d: 1.026,
			l: 14
		},
		head_sleep: {
			tx: 90.95,
			ty: 9.55,
			c: -0.037,
			d: 1.026,
			l: 13
		},
		l_ear: {
			tx: 100.6,
			ty: -1.75,
			c: -0.037,
			d: 1.026,
			l: 12
		},
		r_claws: {
			tx: 67.2,
			ty: 122.5,
			c: -0.037,
			d: 1.026,
			l: 11
		},
		r_arm: {
			tx: 68.65,
			ty: 32.1,
			c: -0.037,
			d: 1.026,
			l: 10
		},
		r_forearm: {
			tx: 69.35,
			ty: 34.1,
			c: -0.037,
			d: 1.026,
			l: 9
		},
		body: {
			tx: 58.95,
			ty: 17.55,
			c: -0.037,
			d: 1.026,
			l: 8
		},
		lower_body: {
			tx: 56.95,
			ty: 81.9,
			c: -0.037,
			d: 1.026,
			l: 7
		},
		tail: {
			tx: 38.05,
			ty: 97.3,
			c: -0.046,
			d: 1.026,
			l: 6
		},
		tail_end: {
			tx: 117.3,
			ty: 108.15,
			c: -0.037,
			d: 1.026,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 8.4,
			ty: 15.1,
			c: -0.037,
			d: 1.026,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 65.4,
			ty: -3.35,
			a: 0.594,
			b: 0.253,
			c: -0.32,
			d: 0.733,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 99.5,
			ty: 28.8,
			a: 0.911,
			c: -0.034,
			d: 0.934,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 99.5,
			ty: 32.9,
			a: 0.911,
			c: -0.034,
			d: 0.934,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 100.05,
			ty: 115.7,
			a: 0.83,
			c: -0.031,
			d: 0.852,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 69.75,
			ty: -1.75,
			c: -0.04,
			d: 1.026,
			l: 14
		},
		head_sleep: {
			tx: 91.05,
			ty: 9.45,
			c: -0.04,
			d: 1.026,
			l: 13
		},
		l_ear: {
			tx: 100.7,
			ty: -1.75,
			c: -0.04,
			d: 1.026,
			l: 12
		},
		r_claws: {
			tx: 67.2,
			ty: 122.5,
			c: -0.04,
			d: 1.026,
			l: 11
		},
		r_arm: {
			tx: 68.75,
			ty: 32.05,
			c: -0.04,
			d: 1.026,
			l: 10
		},
		r_forearm: {
			tx: 69.6,
			ty: 34.15,
			c: -0.04,
			d: 1.026,
			l: 9
		},
		body: {
			tx: 59.1,
			ty: 17.55,
			c: -0.04,
			d: 1.026,
			l: 8
		},
		lower_body: {
			tx: 56.95,
			ty: 81.85,
			c: -0.04,
			d: 1.026,
			l: 7
		},
		tail: {
			tx: 38.1,
			ty: 97.3,
			c: -0.046,
			d: 1.026,
			l: 6
		},
		tail_end: {
			tx: 117.4,
			ty: 108.15,
			c: -0.04,
			d: 1.026,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 8.5,
			ty: 15.1,
			c: -0.04,
			d: 1.026,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 65.5,
			ty: -3.4,
			a: 0.594,
			b: 0.253,
			c: -0.32,
			d: 0.733,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 99.6,
			ty: 28.8,
			a: 0.911,
			c: -0.037,
			d: 0.934,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 99.75,
			ty: 32.9,
			a: 0.911,
			c: -0.037,
			d: 0.934,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 100.1,
			ty: 115.7,
			a: 0.83,
			c: -0.034,
			d: 0.852,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 69.85,
			ty: -1.8,
			c: -0.04,
			d: 1.026,
			l: 14
		},
		head_sleep: {
			tx: 91.1,
			ty: 9.45,
			c: -0.04,
			d: 1.026,
			l: 13
		},
		l_ear: {
			tx: 100.8,
			ty: -1.85,
			c: -0.04,
			d: 1.026,
			l: 12
		},
		r_claws: {
			tx: 67.25,
			ty: 122.5,
			c: -0.04,
			d: 1.026,
			l: 11
		},
		r_arm: {
			tx: 68.8,
			ty: 32,
			c: -0.04,
			d: 1.026,
			l: 10
		},
		r_forearm: {
			tx: 69.6,
			ty: 34.1,
			c: -0.04,
			d: 1.026,
			l: 9
		},
		body: {
			tx: 59.15,
			ty: 17.5,
			c: -0.04,
			d: 1.026,
			l: 8
		},
		lower_body: {
			tx: 57,
			ty: 81.85,
			c: -0.04,
			d: 1.026,
			l: 7
		},
		tail: {
			tx: 38.15,
			ty: 97.3,
			c: -0.046,
			d: 1.026,
			l: 6
		},
		tail_end: {
			tx: 117.35,
			ty: 108.1,
			c: -0.04,
			d: 1.026,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 8.55,
			ty: 15.1,
			c: -0.04,
			d: 1.026,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 65.6,
			ty: -3.4,
			a: 0.594,
			b: 0.253,
			c: -0.32,
			d: 0.734,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 99.65,
			ty: 28.75,
			a: 0.911,
			c: -0.037,
			d: 0.935,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 99.75,
			ty: 32.85,
			a: 0.911,
			c: -0.037,
			d: 0.935,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 100.05,
			ty: 115.65,
			a: 0.83,
			c: -0.034,
			d: 0.852,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 69.9,
			ty: -1.85,
			c: -0.041,
			d: 1.027,
			l: 14
		},
		head_sleep: {
			tx: 91.1,
			ty: 9.4,
			c: -0.041,
			d: 1.027,
			l: 13
		},
		l_ear: {
			tx: 100.85,
			ty: -1.9,
			c: -0.041,
			d: 1.027,
			l: 12
		},
		r_claws: {
			tx: 67.3,
			ty: 122.5,
			c: -0.041,
			d: 1.027,
			l: 11
		},
		r_arm: {
			tx: 68.85,
			ty: 32.05,
			c: -0.041,
			d: 1.027,
			l: 10
		},
		r_forearm: {
			tx: 69.65,
			ty: 34.1,
			c: -0.041,
			d: 1.027,
			l: 9
		},
		body: {
			tx: 59.2,
			ty: 17.45,
			c: -0.041,
			d: 1.027,
			l: 8
		},
		lower_body: {
			tx: 57,
			ty: 81.85,
			c: -0.041,
			d: 1.027,
			l: 7
		},
		tail: {
			tx: 38.15,
			ty: 97.25,
			c: -0.046,
			d: 1.027,
			l: 6
		},
		tail_end: {
			tx: 117.4,
			ty: 108.05,
			c: -0.041,
			d: 1.027,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 8.6,
			ty: 15.05,
			c: -0.041,
			d: 1.027,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 65.65,
			ty: -3.5,
			a: 0.594,
			b: 0.253,
			c: -0.32,
			d: 0.734,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 99.7,
			ty: 28.7,
			a: 0.911,
			c: -0.037,
			d: 0.935,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 99.8,
			ty: 32.85,
			a: 0.911,
			c: -0.037,
			d: 0.935,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 100.1,
			ty: 115.65,
			a: 0.83,
			c: -0.034,
			d: 0.852,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 69.9,
			ty: -1.85,
			c: -0.041,
			d: 1.027,
			l: 14
		},
		head_sleep: {
			tx: 91.15,
			ty: 9.4,
			c: -0.041,
			d: 1.027,
			l: 13
		},
		l_ear: {
			tx: 100.85,
			ty: -1.9,
			c: -0.041,
			d: 1.027,
			l: 12
		},
		r_claws: {
			tx: 67.3,
			ty: 122.5,
			c: -0.041,
			d: 1.027,
			l: 11
		},
		r_arm: {
			tx: 68.85,
			ty: 32,
			c: -0.041,
			d: 1.027,
			l: 10
		},
		r_forearm: {
			tx: 69.65,
			ty: 34.05,
			c: -0.041,
			d: 1.027,
			l: 9
		},
		body: {
			tx: 59.15,
			ty: 17.5,
			c: -0.041,
			d: 1.027,
			l: 8
		},
		lower_body: {
			tx: 57.05,
			ty: 81.8,
			c: -0.041,
			d: 1.027,
			l: 7
		},
		tail: {
			tx: 38.15,
			ty: 97.25,
			c: -0.046,
			d: 1.027,
			l: 6
		},
		tail_end: {
			tx: 117.45,
			ty: 108.1,
			c: -0.041,
			d: 1.027,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 8.65,
			ty: 15.05,
			c: -0.041,
			d: 1.027,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 65.7,
			ty: -3.5,
			a: 0.594,
			b: 0.253,
			c: -0.32,
			d: 0.734,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 99.7,
			ty: 28.7,
			a: 0.911,
			c: -0.037,
			d: 0.935,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 99.8,
			ty: 32.8,
			a: 0.911,
			c: -0.037,
			d: 0.935,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 100.1,
			ty: 115.65,
			a: 0.83,
			c: -0.034,
			d: 0.852,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 69.95,
			ty: -1.9,
			c: -0.041,
			d: 1.027,
			l: 14
		},
		head_sleep: {
			tx: 91.15,
			ty: 9.35,
			c: -0.041,
			d: 1.027,
			l: 13
		},
		l_ear: {
			tx: 100.9,
			ty: -1.95,
			c: -0.041,
			d: 1.027,
			l: 12
		},
		r_claws: {
			tx: 67.3,
			ty: 122.45,
			c: -0.041,
			d: 1.027,
			l: 11
		},
		r_arm: {
			tx: 68.85,
			ty: 31.95,
			c: -0.041,
			d: 1.027,
			l: 10
		},
		r_forearm: {
			tx: 69.7,
			ty: 34.05,
			c: -0.041,
			d: 1.027,
			l: 9
		},
		body: {
			tx: 59.2,
			ty: 17.45,
			c: -0.041,
			d: 1.027,
			l: 8
		},
		lower_body: {
			tx: 57.05,
			ty: 81.8,
			c: -0.041,
			d: 1.027,
			l: 7
		},
		tail: {
			tx: 38.3,
			ty: 97.25,
			c: -0.049,
			d: 1.027,
			l: 6
		},
		tail_end: {
			tx: 117.45,
			ty: 108.1,
			c: -0.041,
			d: 1.027,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 8.65,
			ty: 15,
			c: -0.041,
			d: 1.027,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 65.75,
			ty: -3.55,
			a: 0.594,
			b: 0.253,
			c: -0.32,
			d: 0.734,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 99.75,
			ty: 28.65,
			a: 0.911,
			c: -0.037,
			d: 0.935,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 99.85,
			ty: 32.8,
			a: 0.911,
			c: -0.037,
			d: 0.935,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 100.1,
			ty: 115.65,
			a: 0.83,
			c: -0.034,
			d: 0.853,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 70,
			ty: -1.9,
			c: -0.041,
			d: 1.027,
			l: 14
		},
		head_sleep: {
			tx: 91.2,
			ty: 9.35,
			c: -0.041,
			d: 1.027,
			l: 13
		},
		l_ear: {
			tx: 100.95,
			ty: -1.95,
			c: -0.041,
			d: 1.027,
			l: 12
		},
		r_claws: {
			tx: 67.25,
			ty: 122.5,
			c: -0.041,
			d: 1.027,
			l: 11
		},
		r_arm: {
			tx: 68.9,
			ty: 31.95,
			c: -0.041,
			d: 1.027,
			l: 10
		},
		r_forearm: {
			tx: 69.7,
			ty: 34,
			c: -0.041,
			d: 1.027,
			l: 9
		},
		body: {
			tx: 59.25,
			ty: 17.45,
			c: -0.041,
			d: 1.027,
			l: 8
		},
		lower_body: {
			tx: 57.05,
			ty: 81.8,
			c: -0.041,
			d: 1.027,
			l: 7
		},
		tail: {
			tx: 38.3,
			ty: 97.25,
			c: -0.049,
			d: 1.027,
			l: 6
		},
		tail_end: {
			tx: 117.45,
			ty: 108.1,
			c: -0.041,
			d: 1.027,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 8.7,
			ty: 15,
			c: -0.041,
			d: 1.027,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 65.8,
			ty: -3.55,
			a: 0.594,
			b: 0.253,
			c: -0.32,
			d: 0.734,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 99.75,
			ty: 28.65,
			a: 0.911,
			c: -0.037,
			d: 0.935,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 99.85,
			ty: 32.75,
			a: 0.911,
			c: -0.037,
			d: 0.935,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 100.15,
			ty: 115.65,
			a: 0.83,
			c: -0.034,
			d: 0.853,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 70,
			ty: -1.9,
			c: -0.041,
			d: 1.027,
			l: 14
		},
		head_sleep: {
			tx: 91.2,
			ty: 9.35,
			c: -0.041,
			d: 1.027,
			l: 13
		},
		l_ear: {
			tx: 100.95,
			ty: -1.95,
			c: -0.041,
			d: 1.027,
			l: 12
		},
		r_claws: {
			tx: 67.25,
			ty: 122.5,
			c: -0.041,
			d: 1.027,
			l: 11
		},
		r_arm: {
			tx: 68.9,
			ty: 31.95,
			c: -0.041,
			d: 1.027,
			l: 10
		},
		r_forearm: {
			tx: 69.75,
			ty: 34,
			c: -0.041,
			d: 1.027,
			l: 9
		},
		body: {
			tx: 59.25,
			ty: 17.45,
			c: -0.041,
			d: 1.027,
			l: 8
		},
		lower_body: {
			tx: 57.05,
			ty: 81.8,
			c: -0.041,
			d: 1.027,
			l: 7
		},
		tail: {
			tx: 38.3,
			ty: 97.25,
			c: -0.049,
			d: 1.027,
			l: 6
		},
		tail_end: {
			tx: 117.45,
			ty: 108.05,
			c: -0.041,
			d: 1.027,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 8.7,
			ty: 15,
			c: -0.041,
			d: 1.027,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 65.8,
			ty: -3.6,
			a: 0.594,
			b: 0.253,
			c: -0.32,
			d: 0.734,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 99.75,
			ty: 28.65,
			a: 0.911,
			c: -0.037,
			d: 0.935,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 99.85,
			ty: 32.75,
			a: 0.911,
			c: -0.037,
			d: 0.935,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 100.15,
			ty: 115.6,
			a: 0.83,
			c: -0.034,
			d: 0.853,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 68.95,
			ty: -1.9,
			c: -0.042,
			d: 1.027,
			l: 14
		},
		head_sleep: {
			tx: 91.25,
			ty: 9.3,
			c: -0.042,
			d: 1.027,
			l: 13
		},
		l_ear: {
			tx: 99.9,
			ty: -1.9,
			c: -0.042,
			d: 1.027,
			l: 12
		},
		r_claws: {
			tx: 67.3,
			ty: 122.45,
			c: -0.042,
			d: 1.027,
			l: 11
		},
		r_arm: {
			tx: 69.1,
			ty: 31.6,
			c: -0.042,
			d: 1.027,
			l: 10
		},
		r_forearm: {
			tx: 69.75,
			ty: 34,
			c: -0.042,
			d: 1.027,
			l: 9
		},
		body: {
			tx: 59.3,
			ty: 17.75,
			c: -0.042,
			d: 1.027,
			l: 8
		},
		lower_body: {
			tx: 58.1,
			ty: 81.75,
			c: -0.042,
			d: 1.027,
			l: 7
		},
		tail: {
			tx: 37.2,
			ty: 97.5,
			c: -0.05,
			d: 1.027,
			l: 6
		},
		tail_end: {
			tx: 117.45,
			ty: 108.1,
			c: -0.042,
			d: 1.027,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 8.75,
			ty: 14.95,
			c: -0.042,
			d: 1.027,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 65.95,
			ty: -3.65,
			a: 0.595,
			b: 0.253,
			c: -0.322,
			d: 0.735,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 100.1,
			ty: 28.65,
			a: 0.911,
			c: -0.038,
			d: 0.935,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 99.9,
			ty: 32.7,
			a: 0.911,
			c: -0.038,
			d: 0.935,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 100.15,
			ty: 115.65,
			a: 0.83,
			c: -0.035,
			d: 0.853,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 68.55,
			ty: -1.7,
			c: -0.037,
			d: 1.026,
			l: 14
		},
		head_sleep: {
			tx: 90.9,
			ty: 9.5,
			c: -0.037,
			d: 1.026,
			l: 13
		},
		l_ear: {
			tx: 99.5,
			ty: -1.7,
			c: -0.037,
			d: 1.026,
			l: 12
		},
		r_claws: {
			tx: 67.2,
			ty: 122.55,
			c: -0.037,
			d: 1.026,
			l: 11
		},
		r_arm: {
			tx: 68.75,
			ty: 31.75,
			c: -0.037,
			d: 1.026,
			l: 10
		},
		r_forearm: {
			tx: 69.35,
			ty: 34.15,
			c: -0.037,
			d: 1.026,
			l: 9
		},
		body: {
			tx: 58.9,
			ty: 17.95,
			c: -0.037,
			d: 1.026,
			l: 8
		},
		lower_body: {
			tx: 58,
			ty: 81.85,
			c: -0.037,
			d: 1.026,
			l: 7
		},
		tail: {
			tx: 36.95,
			ty: 97.55,
			c: -0.046,
			d: 1.026,
			l: 6
		},
		tail_end: {
			tx: 117.35,
			ty: 108.15,
			c: -0.037,
			d: 1.026,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 8.45,
			ty: 15.2,
			c: -0.037,
			d: 1.026,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 65.6,
			ty: -3.4,
			a: 0.595,
			b: 0.253,
			c: -0.319,
			d: 0.733,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 99.8,
			ty: 28.8,
			a: 0.911,
			c: -0.034,
			d: 0.934,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 99.5,
			ty: 32.85,
			a: 0.911,
			c: -0.034,
			d: 0.934,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 100.05,
			ty: 115.75,
			a: 0.83,
			c: -0.031,
			d: 0.852,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 68.2,
			ty: -1.5,
			c: -0.036,
			d: 1.024,
			l: 14
		},
		head_sleep: {
			tx: 90.6,
			ty: 9.7,
			c: -0.036,
			d: 1.024,
			l: 13
		},
		l_ear: {
			tx: 99.15,
			ty: -1.5,
			c: -0.036,
			d: 1.024,
			l: 12
		},
		r_claws: {
			tx: 67.1,
			ty: 122.55,
			c: -0.036,
			d: 1.024,
			l: 11
		},
		r_arm: {
			tx: 68.5,
			ty: 31.95,
			c: -0.036,
			d: 1.024,
			l: 10
		},
		r_forearm: {
			tx: 69.15,
			ty: 34.3,
			c: -0.036,
			d: 1.024,
			l: 9
		},
		body: {
			tx: 58.65,
			ty: 18.15,
			c: -0.036,
			d: 1.024,
			l: 8
		},
		lower_body: {
			tx: 57.9,
			ty: 81.95,
			c: -0.036,
			d: 1.024,
			l: 7
		},
		tail: {
			tx: 36.8,
			ty: 97.65,
			c: -0.045,
			d: 1.024,
			l: 6
		},
		tail_end: {
			tx: 117.2,
			ty: 108.2,
			c: -0.036,
			d: 1.024,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 8.15,
			ty: 15.3,
			c: -0.036,
			d: 1.024,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 65.35,
			ty: -3.15,
			a: 0.596,
			b: 0.251,
			c: -0.319,
			d: 0.732,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 99.55,
			ty: 29.05,
			a: 0.911,
			c: -0.033,
			d: 0.933,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 99.3,
			ty: 33,
			a: 0.911,
			c: -0.033,
			d: 0.933,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.95,
			ty: 115.8,
			a: 0.83,
			c: -0.03,
			d: 0.851,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 67.8,
			ty: -1.35,
			c: -0.032,
			d: 1.023,
			l: 14
		},
		head_sleep: {
			tx: 90.3,
			ty: 9.85,
			c: -0.032,
			d: 1.023,
			l: 13
		},
		l_ear: {
			tx: 98.75,
			ty: -1.3,
			c: -0.032,
			d: 1.023,
			l: 12
		},
		r_claws: {
			tx: 67.05,
			ty: 122.65,
			c: -0.032,
			d: 1.023,
			l: 11
		},
		r_arm: {
			tx: 68.25,
			ty: 32.1,
			c: -0.032,
			d: 1.023,
			l: 10
		},
		r_forearm: {
			tx: 68.8,
			ty: 34.45,
			c: -0.032,
			d: 1.023,
			l: 9
		},
		body: {
			tx: 58.3,
			ty: 18.35,
			c: -0.032,
			d: 1.023,
			l: 8
		},
		lower_body: {
			tx: 57.8,
			ty: 82.05,
			c: -0.032,
			d: 1.023,
			l: 7
		},
		tail: {
			tx: 36.6,
			ty: 97.75,
			c: -0.041,
			d: 1.023,
			l: 6
		},
		tail_end: {
			tx: 117.1,
			ty: 108.35,
			c: -0.032,
			d: 1.023,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 7.85,
			ty: 15.5,
			c: -0.032,
			d: 1.023,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 64.95,
			ty: -3.05,
			a: 0.596,
			b: 0.251,
			c: -0.315,
			d: 0.732,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 99.25,
			ty: 29.15,
			a: 0.911,
			c: -0.029,
			d: 0.932,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 98.95,
			ty: 33.2,
			a: 0.911,
			c: -0.029,
			d: 0.932,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.85,
			ty: 115.85,
			a: 0.83,
			c: -0.027,
			d: 0.85,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 67.5,
			ty: -1.1,
			c: -0.032,
			d: 1.022,
			l: 14
		},
		head_sleep: {
			tx: 90,
			ty: 10.05,
			c: -0.032,
			d: 1.022,
			l: 13
		},
		l_ear: {
			tx: 98.4,
			ty: -1.1,
			c: -0.032,
			d: 1.022,
			l: 12
		},
		r_claws: {
			tx: 67,
			ty: 122.7,
			c: -0.032,
			d: 1.022,
			l: 11
		},
		r_arm: {
			tx: 68.05,
			ty: 32.25,
			c: -0.032,
			d: 1.022,
			l: 10
		},
		r_forearm: {
			tx: 68.65,
			ty: 34.65,
			c: -0.032,
			d: 1.022,
			l: 9
		},
		body: {
			tx: 58.05,
			ty: 18.5,
			c: -0.032,
			d: 1.022,
			l: 8
		},
		lower_body: {
			tx: 57.7,
			ty: 82.15,
			c: -0.032,
			d: 1.022,
			l: 7
		},
		tail: {
			tx: 36.45,
			ty: 97.8,
			c: -0.041,
			d: 1.022,
			l: 6
		},
		tail_end: {
			tx: 117,
			ty: 108.35,
			c: -0.032,
			d: 1.022,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 7.6,
			ty: 15.7,
			c: -0.032,
			d: 1.022,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 64.65,
			ty: -2.8,
			a: 0.596,
			b: 0.251,
			c: -0.315,
			d: 0.73,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 99.1,
			ty: 29.3,
			a: 0.911,
			c: -0.029,
			d: 0.931,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 98.75,
			ty: 33.35,
			a: 0.911,
			c: -0.029,
			d: 0.931,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.8,
			ty: 115.9,
			a: 0.83,
			c: -0.026,
			d: 0.849,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 67.1,
			ty: -0.9,
			c: -0.031,
			d: 1.021,
			l: 14
		},
		head_sleep: {
			tx: 89.75,
			ty: 10.2,
			c: -0.031,
			d: 1.021,
			l: 13
		},
		l_ear: {
			tx: 98.1,
			ty: -0.9,
			c: -0.031,
			d: 1.021,
			l: 12
		},
		r_claws: {
			tx: 66.95,
			ty: 122.75,
			c: -0.031,
			d: 1.021,
			l: 11
		},
		r_arm: {
			tx: 67.8,
			ty: 32.35,
			c: -0.031,
			d: 1.021,
			l: 10
		},
		r_forearm: {
			tx: 68.5,
			ty: 34.8,
			c: -0.031,
			d: 1.021,
			l: 9
		},
		body: {
			tx: 57.95,
			ty: 18.7,
			c: -0.031,
			d: 1.021,
			l: 8
		},
		lower_body: {
			tx: 57.65,
			ty: 82.25,
			c: -0.031,
			d: 1.021,
			l: 7
		},
		tail: {
			tx: 36.25,
			ty: 97.9,
			c: -0.037,
			d: 1.021,
			l: 6
		},
		tail_end: {
			tx: 116.95,
			ty: 108.45,
			c: -0.031,
			d: 1.021,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 7.35,
			ty: 15.85,
			c: -0.031,
			d: 1.021,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 64.4,
			ty: -2.55,
			a: 0.597,
			b: 0.251,
			c: -0.314,
			d: 0.729,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 98.9,
			ty: 29.45,
			a: 0.911,
			c: -0.029,
			d: 0.93,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 98.6,
			ty: 33.5,
			a: 0.911,
			c: -0.029,
			d: 0.93,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.7,
			ty: 115.95,
			a: 0.83,
			c: -0.026,
			d: 0.848,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 66.75,
			ty: -0.75,
			c: -0.028,
			d: 1.02,
			l: 14
		},
		head_sleep: {
			tx: 89.5,
			ty: 10.4,
			c: -0.028,
			d: 1.02,
			l: 13
		},
		l_ear: {
			tx: 97.65,
			ty: -0.75,
			c: -0.028,
			d: 1.02,
			l: 12
		},
		r_claws: {
			tx: 66.85,
			ty: 122.7,
			c: -0.028,
			d: 1.02,
			l: 11
		},
		r_arm: {
			tx: 67.6,
			ty: 32.5,
			c: -0.028,
			d: 1.02,
			l: 10
		},
		r_forearm: {
			tx: 68.15,
			ty: 34.95,
			c: -0.028,
			d: 1.02,
			l: 9
		},
		body: {
			tx: 57.55,
			ty: 18.85,
			c: -0.028,
			d: 1.02,
			l: 8
		},
		lower_body: {
			tx: 57.5,
			ty: 82.35,
			c: -0.028,
			d: 1.02,
			l: 7
		},
		tail: {
			tx: 36.1,
			ty: 98,
			c: -0.036,
			d: 1.02,
			l: 6
		},
		tail_end: {
			tx: 116.8,
			ty: 108.5,
			c: -0.028,
			d: 1.02,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 7.1,
			ty: 16.05,
			c: -0.028,
			d: 1.02,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 64.1,
			ty: -2.45,
			a: 0.597,
			b: 0.251,
			c: -0.311,
			d: 0.729,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 98.6,
			ty: 29.6,
			a: 0.911,
			c: -0.025,
			d: 0.929,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 98.3,
			ty: 33.6,
			a: 0.911,
			c: -0.025,
			d: 0.929,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.6,
			ty: 116,
			a: 0.83,
			c: -0.023,
			d: 0.847,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 66.4,
			ty: -0.6,
			c: -0.027,
			d: 1.019,
			l: 14
		},
		head_sleep: {
			tx: 89.2,
			ty: 10.55,
			c: -0.027,
			d: 1.019,
			l: 13
		},
		l_ear: {
			tx: 97.35,
			ty: -0.55,
			c: -0.027,
			d: 1.019,
			l: 12
		},
		r_claws: {
			tx: 66.75,
			ty: 122.8,
			c: -0.027,
			d: 1.019,
			l: 11
		},
		r_arm: {
			tx: 67.35,
			ty: 32.65,
			c: -0.027,
			d: 1.019,
			l: 10
		},
		r_forearm: {
			tx: 68.05,
			ty: 35.1,
			c: -0.027,
			d: 1.019,
			l: 9
		},
		body: {
			tx: 57.35,
			ty: 19.05,
			c: -0.027,
			d: 1.019,
			l: 8
		},
		lower_body: {
			tx: 57.45,
			ty: 82.4,
			c: -0.027,
			d: 1.019,
			l: 7
		},
		tail: {
			tx: 36,
			ty: 98.1,
			c: -0.036,
			d: 1.019,
			l: 6
		},
		tail_end: {
			tx: 116.7,
			ty: 108.55,
			c: -0.027,
			d: 1.019,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 6.85,
			ty: 16.25,
			c: -0.027,
			d: 1.019,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 63.85,
			ty: -2.2,
			a: 0.597,
			b: 0.251,
			c: -0.31,
			d: 0.728,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 98.45,
			ty: 29.7,
			a: 0.911,
			c: -0.025,
			d: 0.928,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 98.15,
			ty: 33.75,
			a: 0.911,
			c: -0.025,
			d: 0.928,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.5,
			ty: 116.05,
			a: 0.83,
			c: -0.022,
			d: 0.846,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 66.1,
			ty: -0.4,
			c: -0.023,
			d: 1.018,
			l: 14
		},
		head_sleep: {
			tx: 88.9,
			ty: 10.7,
			c: -0.023,
			d: 1.018,
			l: 13
		},
		l_ear: {
			tx: 97,
			ty: -0.35,
			c: -0.023,
			d: 1.018,
			l: 12
		},
		r_claws: {
			tx: 66.7,
			ty: 122.8,
			c: -0.023,
			d: 1.018,
			l: 11
		},
		r_arm: {
			tx: 67.1,
			ty: 32.7,
			c: -0.023,
			d: 1.018,
			l: 10
		},
		r_forearm: {
			tx: 67.7,
			ty: 35.25,
			c: -0.023,
			d: 1.018,
			l: 9
		},
		body: {
			tx: 57,
			ty: 19.2,
			c: -0.023,
			d: 1.018,
			l: 8
		},
		lower_body: {
			tx: 57.4,
			ty: 82.55,
			c: -0.023,
			d: 1.018,
			l: 7
		},
		tail: {
			tx: 35.8,
			ty: 98.2,
			c: -0.032,
			d: 1.018,
			l: 6
		},
		tail_end: {
			tx: 116.6,
			ty: 108.6,
			c: -0.023,
			d: 1.018,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 6.6,
			ty: 16.35,
			c: -0.023,
			d: 1.018,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 63.6,
			ty: -2.1,
			a: 0.598,
			b: 0.251,
			c: -0.31,
			d: 0.727,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 98.15,
			ty: 29.9,
			a: 0.911,
			c: -0.021,
			d: 0.927,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 97.85,
			ty: 33.9,
			a: 0.911,
			c: -0.021,
			d: 0.927,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.45,
			ty: 116.15,
			a: 0.83,
			c: -0.019,
			d: 0.845,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 65.75,
			ty: -0.2,
			c: -0.023,
			d: 1.016,
			l: 14
		},
		head_sleep: {
			tx: 88.7,
			ty: 10.85,
			c: -0.023,
			d: 1.016,
			l: 13
		},
		l_ear: {
			tx: 96.75,
			ty: -0.2,
			c: -0.023,
			d: 1.016,
			l: 12
		},
		r_claws: {
			tx: 66.6,
			ty: 122.9,
			c: -0.023,
			d: 1.016,
			l: 11
		},
		r_arm: {
			tx: 67,
			ty: 32.8,
			c: -0.023,
			d: 1.016,
			l: 10
		},
		r_forearm: {
			tx: 67.55,
			ty: 35.4,
			c: -0.023,
			d: 1.016,
			l: 9
		},
		body: {
			tx: 56.85,
			ty: 19.35,
			c: -0.023,
			d: 1.016,
			l: 8
		},
		lower_body: {
			tx: 57.25,
			ty: 82.65,
			c: -0.023,
			d: 1.016,
			l: 7
		},
		tail: {
			tx: 35.7,
			ty: 98.25,
			c: -0.031,
			d: 1.016,
			l: 6
		},
		tail_end: {
			tx: 116.55,
			ty: 108.7,
			c: -0.023,
			d: 1.016,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 6.35,
			ty: 16.5,
			c: -0.023,
			d: 1.016,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 63.3,
			ty: -1.85,
			a: 0.599,
			b: 0.249,
			c: -0.309,
			d: 0.726,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 98,
			ty: 30.05,
			a: 0.911,
			c: -0.021,
			d: 0.926,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 97.65,
			ty: 34.05,
			a: 0.911,
			c: -0.021,
			d: 0.926,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.4,
			ty: 116.15,
			a: 0.83,
			c: -0.019,
			d: 0.844,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 65.5,
			ty: -0.05,
			c: -0.022,
			d: 1.015,
			l: 14
		},
		head_sleep: {
			tx: 88.5,
			ty: 11.05,
			c: -0.022,
			d: 1.015,
			l: 13
		},
		l_ear: {
			tx: 96.45,
			ty: -0.05,
			c: -0.022,
			d: 1.015,
			l: 12
		},
		r_claws: {
			tx: 66.55,
			ty: 122.95,
			c: -0.022,
			d: 1.015,
			l: 11
		},
		r_arm: {
			tx: 66.8,
			ty: 33,
			c: -0.022,
			d: 1.015,
			l: 10
		},
		r_forearm: {
			tx: 67.45,
			ty: 35.5,
			c: -0.022,
			d: 1.015,
			l: 9
		},
		body: {
			tx: 56.7,
			ty: 19.5,
			c: -0.022,
			d: 1.015,
			l: 8
		},
		lower_body: {
			tx: 57.15,
			ty: 82.7,
			c: -0.022,
			d: 1.015,
			l: 7
		},
		tail: {
			tx: 35.5,
			ty: 98.35,
			c: -0.031,
			d: 1.015,
			l: 6
		},
		tail_end: {
			tx: 116.5,
			ty: 108.75,
			c: -0.022,
			d: 1.015,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 6.15,
			ty: 16.7,
			c: -0.022,
			d: 1.015,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 63.05,
			ty: -1.65,
			a: 0.599,
			b: 0.249,
			c: -0.308,
			d: 0.725,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 97.85,
			ty: 30.15,
			a: 0.911,
			c: -0.02,
			d: 0.925,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 97.55,
			ty: 34.15,
			a: 0.911,
			c: -0.02,
			d: 0.925,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.35,
			ty: 116.25,
			a: 0.83,
			c: -0.019,
			d: 0.843,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 65.2,
			ty: 0.1,
			c: -0.019,
			d: 1.014,
			l: 14
		},
		head_sleep: {
			tx: 88.2,
			ty: 11.2,
			c: -0.019,
			d: 1.014,
			l: 13
		},
		l_ear: {
			tx: 96.2,
			ty: 0.1,
			c: -0.019,
			d: 1.014,
			l: 12
		},
		r_claws: {
			tx: 66.5,
			ty: 123,
			c: -0.019,
			d: 1.014,
			l: 11
		},
		r_arm: {
			tx: 66.55,
			ty: 33.05,
			c: -0.019,
			d: 1.014,
			l: 10
		},
		r_forearm: {
			tx: 67.1,
			ty: 35.6,
			c: -0.019,
			d: 1.014,
			l: 9
		},
		body: {
			tx: 56.35,
			ty: 19.65,
			c: -0.019,
			d: 1.014,
			l: 8
		},
		lower_body: {
			tx: 57.1,
			ty: 82.75,
			c: -0.019,
			d: 1.014,
			l: 7
		},
		tail: {
			tx: 35.35,
			ty: 98.35,
			c: -0.027,
			d: 1.014,
			l: 6
		},
		tail_end: {
			tx: 116.4,
			ty: 108.75,
			c: -0.019,
			d: 1.014,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 5.9,
			ty: 16.8,
			c: -0.019,
			d: 1.014,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 62.75,
			ty: -1.55,
			a: 0.599,
			b: 0.249,
			c: -0.305,
			d: 0.725,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 97.6,
			ty: 30.3,
			a: 0.911,
			c: -0.017,
			d: 0.924,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 97.25,
			ty: 34.25,
			a: 0.911,
			c: -0.017,
			d: 0.924,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.25,
			ty: 116.25,
			a: 0.83,
			c: -0.016,
			d: 0.842,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 64.95,
			ty: 0.3,
			c: -0.018,
			d: 1.013,
			l: 14
		},
		head_sleep: {
			tx: 88,
			ty: 11.35,
			c: -0.018,
			d: 1.013,
			l: 13
		},
		l_ear: {
			tx: 95.9,
			ty: 0.3,
			c: -0.018,
			d: 1.013,
			l: 12
		},
		r_claws: {
			tx: 66.45,
			ty: 123,
			c: -0.018,
			d: 1.013,
			l: 11
		},
		r_arm: {
			tx: 66.35,
			ty: 33.2,
			c: -0.018,
			d: 1.013,
			l: 10
		},
		r_forearm: {
			tx: 67,
			ty: 35.7,
			c: -0.018,
			d: 1.013,
			l: 9
		},
		body: {
			tx: 56.2,
			ty: 19.8,
			c: -0.018,
			d: 1.013,
			l: 8
		},
		lower_body: {
			tx: 57,
			ty: 82.8,
			c: -0.018,
			d: 1.013,
			l: 7
		},
		tail: {
			tx: 35.25,
			ty: 98.45,
			c: -0.027,
			d: 1.013,
			l: 6
		},
		tail_end: {
			tx: 116.35,
			ty: 108.85,
			c: -0.018,
			d: 1.013,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 5.7,
			ty: 16.95,
			c: -0.018,
			d: 1.013,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 62.55,
			ty: -1.45,
			a: 0.6,
			b: 0.249,
			c: -0.305,
			d: 0.724,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 97.4,
			ty: 30.4,
			a: 0.911,
			c: -0.017,
			d: 0.923,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 97.1,
			ty: 34.3,
			a: 0.911,
			c: -0.017,
			d: 0.923,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.2,
			ty: 116.3,
			a: 0.83,
			c: -0.015,
			d: 0.841,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 64.7,
			ty: 0.45,
			c: -0.018,
			d: 1.013,
			l: 14
		},
		head_sleep: {
			tx: 87.8,
			ty: 11.45,
			c: -0.018,
			d: 1.013,
			l: 13
		},
		l_ear: {
			tx: 95.65,
			ty: 0.5,
			c: -0.018,
			d: 1.013,
			l: 12
		},
		r_claws: {
			tx: 66.4,
			ty: 123.05,
			c: -0.018,
			d: 1.013,
			l: 11
		},
		r_arm: {
			tx: 66.25,
			ty: 33.3,
			c: -0.018,
			d: 1.013,
			l: 10
		},
		r_forearm: {
			tx: 66.9,
			ty: 35.8,
			c: -0.018,
			d: 1.013,
			l: 9
		},
		body: {
			tx: 56.05,
			ty: 19.95,
			c: -0.018,
			d: 1.013,
			l: 8
		},
		lower_body: {
			tx: 56.95,
			ty: 82.9,
			c: -0.018,
			d: 1.013,
			l: 7
		},
		tail: {
			tx: 35.15,
			ty: 98.5,
			c: -0.027,
			d: 1.012,
			l: 6
		},
		tail_end: {
			tx: 116.25,
			ty: 108.9,
			c: -0.018,
			d: 1.013,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 5.55,
			ty: 17.1,
			c: -0.018,
			d: 1.013,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 62.3,
			ty: -1.3,
			a: 0.6,
			b: 0.249,
			c: -0.304,
			d: 0.724,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 97.25,
			ty: 30.55,
			a: 0.911,
			c: -0.016,
			d: 0.922,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 97,
			ty: 34.5,
			a: 0.911,
			c: -0.016,
			d: 0.922,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.15,
			ty: 116.35,
			a: 0.83,
			c: -0.015,
			d: 0.841,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 64.4,
			ty: 0.6,
			c: -0.014,
			d: 1.012,
			l: 14
		},
		head_sleep: {
			tx: 87.55,
			ty: 11.55,
			c: -0.014,
			d: 1.012,
			l: 13
		},
		l_ear: {
			tx: 95.4,
			ty: 0.65,
			c: -0.014,
			d: 1.012,
			l: 12
		},
		r_claws: {
			tx: 66.35,
			ty: 123.05,
			c: -0.014,
			d: 1.012,
			l: 11
		},
		r_arm: {
			tx: 66.05,
			ty: 33.4,
			c: -0.014,
			d: 1.012,
			l: 10
		},
		r_forearm: {
			tx: 66.55,
			ty: 35.95,
			c: -0.014,
			d: 1.012,
			l: 9
		},
		body: {
			tx: 55.8,
			ty: 20.1,
			c: -0.014,
			d: 1.012,
			l: 8
		},
		lower_body: {
			tx: 56.85,
			ty: 82.95,
			c: -0.014,
			d: 1.012,
			l: 7
		},
		tail: {
			tx: 34.95,
			ty: 98.65,
			c: -0.023,
			d: 1.012,
			l: 6
		},
		tail_end: {
			tx: 116.15,
			ty: 108.95,
			c: -0.014,
			d: 1.012,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 5.3,
			ty: 17.25,
			c: -0.014,
			d: 1.012,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 62.15,
			ty: -1.15,
			a: 0.6,
			b: 0.249,
			c: -0.304,
			d: 0.723,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 97.05,
			ty: 30.65,
			a: 0.911,
			c: -0.013,
			d: 0.921,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 96.7,
			ty: 34.55,
			a: 0.911,
			c: -0.013,
			d: 0.921,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99.05,
			ty: 116.4,
			a: 0.83,
			c: -0.012,
			d: 0.84,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 64.15,
			ty: 0.7,
			c: -0.014,
			d: 1.011,
			l: 14
		},
		head_sleep: {
			tx: 87.4,
			ty: 11.7,
			c: -0.014,
			d: 1.011,
			l: 13
		},
		l_ear: {
			tx: 95.15,
			ty: 0.75,
			c: -0.014,
			d: 1.011,
			l: 12
		},
		r_claws: {
			tx: 66.3,
			ty: 123.1,
			c: -0.014,
			d: 1.011,
			l: 11
		},
		r_arm: {
			tx: 65.85,
			ty: 33.5,
			c: -0.014,
			d: 1.011,
			l: 10
		},
		r_forearm: {
			tx: 66.45,
			ty: 36.05,
			c: -0.014,
			d: 1.011,
			l: 9
		},
		body: {
			tx: 55.65,
			ty: 20.2,
			c: -0.014,
			d: 1.011,
			l: 8
		},
		lower_body: {
			tx: 56.75,
			ty: 83.05,
			c: -0.014,
			d: 1.011,
			l: 7
		},
		tail: {
			tx: 34.9,
			ty: 98.65,
			c: -0.023,
			d: 1.011,
			l: 6
		},
		tail_end: {
			tx: 116.1,
			ty: 108.95,
			c: -0.014,
			d: 1.011,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 5.1,
			ty: 17.3,
			c: -0.014,
			d: 1.011,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 61.95,
			ty: -1.05,
			a: 0.6,
			b: 0.249,
			c: -0.303,
			d: 0.722,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 96.95,
			ty: 30.8,
			a: 0.911,
			c: -0.013,
			d: 0.92,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 96.6,
			ty: 34.75,
			a: 0.911,
			c: -0.013,
			d: 0.92,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 99,
			ty: 116.4,
			a: 0.83,
			c: -0.012,
			d: 0.839,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 63.95,
			ty: 0.9,
			c: -0.014,
			d: 1.01,
			l: 14
		},
		head_sleep: {
			tx: 87.25,
			ty: 11.9,
			c: -0.014,
			d: 1.01,
			l: 13
		},
		l_ear: {
			tx: 94.95,
			ty: 0.9,
			c: -0.014,
			d: 1.01,
			l: 12
		},
		r_claws: {
			tx: 66.2,
			ty: 123.15,
			c: -0.014,
			d: 1.01,
			l: 11
		},
		r_arm: {
			tx: 65.75,
			ty: 33.55,
			c: -0.014,
			d: 1.01,
			l: 10
		},
		r_forearm: {
			tx: 66.35,
			ty: 36.15,
			c: -0.014,
			d: 1.01,
			l: 9
		},
		body: {
			tx: 55.5,
			ty: 20.35,
			c: -0.014,
			d: 1.01,
			l: 8
		},
		lower_body: {
			tx: 56.7,
			ty: 83.15,
			c: -0.014,
			d: 1.01,
			l: 7
		},
		tail: {
			tx: 34.75,
			ty: 98.7,
			c: -0.022,
			d: 1.01,
			l: 6
		},
		tail_end: {
			tx: 116,
			ty: 109,
			c: -0.014,
			d: 1.01,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 4.9,
			ty: 17.45,
			c: -0.014,
			d: 1.01,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 61.7,
			ty: -0.9,
			a: 0.601,
			b: 0.249,
			c: -0.3,
			d: 0.722,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 96.8,
			ty: 30.85,
			a: 0.911,
			c: -0.012,
			d: 0.92,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 96.45,
			ty: 34.8,
			a: 0.911,
			c: -0.012,
			d: 0.92,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.95,
			ty: 116.45,
			a: 0.83,
			c: -0.011,
			d: 0.839,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 63.75,
			ty: 1,
			c: -0.013,
			d: 1.009,
			l: 14
		},
		head_sleep: {
			tx: 87.1,
			ty: 12,
			c: -0.013,
			d: 1.009,
			l: 13
		},
		l_ear: {
			tx: 94.7,
			ty: 1,
			c: -0.013,
			d: 1.009,
			l: 12
		},
		r_claws: {
			tx: 66.25,
			ty: 123.15,
			c: -0.013,
			d: 1.009,
			l: 11
		},
		r_arm: {
			tx: 65.6,
			ty: 33.65,
			c: -0.013,
			d: 1.009,
			l: 10
		},
		r_forearm: {
			tx: 66.25,
			ty: 36.25,
			c: -0.013,
			d: 1.009,
			l: 9
		},
		body: {
			tx: 55.35,
			ty: 20.5,
			c: -0.013,
			d: 1.009,
			l: 8
		},
		lower_body: {
			tx: 56.6,
			ty: 83.15,
			c: -0.013,
			d: 1.009,
			l: 7
		},
		tail: {
			tx: 34.6,
			ty: 98.8,
			c: -0.019,
			d: 1.009,
			l: 6
		},
		tail_end: {
			tx: 115.95,
			ty: 109,
			c: -0.013,
			d: 1.009,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 4.75,
			ty: 17.6,
			c: -0.013,
			d: 1.009,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 61.5,
			ty: -0.7,
			a: 0.602,
			b: 0.247,
			c: -0.3,
			d: 0.721,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 96.65,
			ty: 31,
			a: 0.911,
			c: -0.012,
			d: 0.919,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 96.35,
			ty: 34.9,
			a: 0.911,
			c: -0.012,
			d: 0.919,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.85,
			ty: 116.45,
			a: 0.83,
			c: -0.011,
			d: 0.838,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 63.5,
			ty: 1.1,
			c: -0.01,
			d: 1.008,
			l: 14
		},
		head_sleep: {
			tx: 86.85,
			ty: 12.1,
			c: -0.01,
			d: 1.008,
			l: 13
		},
		l_ear: {
			tx: 94.45,
			ty: 1.1,
			c: -0.01,
			d: 1.008,
			l: 12
		},
		r_claws: {
			tx: 66.15,
			ty: 123.15,
			c: -0.01,
			d: 1.008,
			l: 11
		},
		r_arm: {
			tx: 65.4,
			ty: 33.75,
			c: -0.01,
			d: 1.008,
			l: 10
		},
		r_forearm: {
			tx: 65.95,
			ty: 36.4,
			c: -0.01,
			d: 1.008,
			l: 9
		},
		body: {
			tx: 55.1,
			ty: 20.6,
			c: -0.01,
			d: 1.008,
			l: 8
		},
		lower_body: {
			tx: 56.6,
			ty: 83.2,
			c: -0.01,
			d: 1.008,
			l: 7
		},
		tail: {
			tx: 34.55,
			ty: 98.8,
			c: -0.018,
			d: 1.008,
			l: 6
		},
		tail_end: {
			tx: 115.9,
			ty: 109.1,
			c: -0.01,
			d: 1.008,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 4.55,
			ty: 17.7,
			c: -0.01,
			d: 1.008,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 61.35,
			ty: -0.65,
			a: 0.602,
			b: 0.247,
			c: -0.299,
			d: 0.721,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 96.45,
			ty: 31.1,
			a: 0.911,
			c: -0.009,
			d: 0.918,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 96.05,
			ty: 35,
			a: 0.911,
			c: -0.009,
			d: 0.918,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.8,
			ty: 116.55,
			a: 0.83,
			c: -0.008,
			d: 0.837,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 63.3,
			ty: 1.2,
			c: -0.009,
			d: 1.008,
			l: 14
		},
		head_sleep: {
			tx: 86.7,
			ty: 12.15,
			c: -0.009,
			d: 1.008,
			l: 13
		},
		l_ear: {
			tx: 94.25,
			ty: 1.3,
			c: -0.009,
			d: 1.008,
			l: 12
		},
		r_claws: {
			tx: 66.1,
			ty: 123.25,
			c: -0.009,
			d: 1.008,
			l: 11
		},
		r_arm: {
			tx: 65.3,
			ty: 33.85,
			c: -0.009,
			d: 1.008,
			l: 10
		},
		r_forearm: {
			tx: 65.85,
			ty: 36.45,
			c: -0.009,
			d: 1.008,
			l: 9
		},
		body: {
			tx: 54.95,
			ty: 20.7,
			c: -0.009,
			d: 1.008,
			l: 8
		},
		lower_body: {
			tx: 56.55,
			ty: 83.3,
			c: -0.009,
			d: 1.008,
			l: 7
		},
		tail: {
			tx: 34.4,
			ty: 98.9,
			c: -0.018,
			d: 1.008,
			l: 6
		},
		tail_end: {
			tx: 115.8,
			ty: 109.1,
			c: -0.009,
			d: 1.008,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 4.4,
			ty: 17.75,
			c: -0.009,
			d: 1.008,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 61.15,
			ty: -0.45,
			a: 0.602,
			b: 0.247,
			c: -0.299,
			d: 0.72,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 96.35,
			ty: 31.15,
			a: 0.911,
			c: -0.009,
			d: 0.918,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 96,
			ty: 35.1,
			a: 0.911,
			c: -0.009,
			d: 0.918,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.75,
			ty: 116.55,
			a: 0.83,
			c: -0.008,
			d: 0.837,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 63.1,
			ty: 1.3,
			c: -0.009,
			d: 1.007,
			l: 14
		},
		head_sleep: {
			tx: 86.55,
			ty: 12.3,
			c: -0.009,
			d: 1.007,
			l: 13
		},
		l_ear: {
			tx: 94.1,
			ty: 1.4,
			c: -0.009,
			d: 1.007,
			l: 12
		},
		r_claws: {
			tx: 66.1,
			ty: 123.25,
			c: -0.009,
			d: 1.007,
			l: 11
		},
		r_arm: {
			tx: 65.2,
			ty: 33.95,
			c: -0.009,
			d: 1.007,
			l: 10
		},
		r_forearm: {
			tx: 65.8,
			ty: 36.55,
			c: -0.009,
			d: 1.007,
			l: 9
		},
		body: {
			tx: 54.85,
			ty: 20.8,
			c: -0.009,
			d: 1.007,
			l: 8
		},
		lower_body: {
			tx: 56.5,
			ty: 83.4,
			c: -0.009,
			d: 1.007,
			l: 7
		},
		tail: {
			tx: 34.4,
			ty: 99,
			c: -0.018,
			d: 1.007,
			l: 6
		},
		tail_end: {
			tx: 115.8,
			ty: 109.2,
			c: -0.009,
			d: 1.007,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 4.3,
			ty: 17.85,
			c: -0.009,
			d: 1.007,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 61,
			ty: -0.35,
			a: 0.602,
			b: 0.247,
			c: -0.299,
			d: 0.719,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 96.25,
			ty: 31.3,
			a: 0.911,
			c: -0.008,
			d: 0.917,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 95.9,
			ty: 35.2,
			a: 0.911,
			c: -0.008,
			d: 0.917,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.75,
			ty: 116.6,
			a: 0.83,
			c: -0.008,
			d: 0.836,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 62.9,
			ty: 1.45,
			c: -0.009,
			d: 1.006,
			l: 14
		},
		head_sleep: {
			tx: 86.45,
			ty: 12.4,
			c: -0.009,
			d: 1.006,
			l: 13
		},
		l_ear: {
			tx: 93.9,
			ty: 1.5,
			c: -0.009,
			d: 1.006,
			l: 12
		},
		r_claws: {
			tx: 66.05,
			ty: 123.3,
			c: -0.009,
			d: 1.006,
			l: 11
		},
		r_arm: {
			tx: 65.05,
			ty: 34,
			c: -0.009,
			d: 1.006,
			l: 10
		},
		r_forearm: {
			tx: 65.7,
			ty: 36.6,
			c: -0.009,
			d: 1.006,
			l: 9
		},
		body: {
			tx: 54.75,
			ty: 20.9,
			c: -0.009,
			d: 1.006,
			l: 8
		},
		lower_body: {
			tx: 56.4,
			ty: 83.45,
			c: -0.009,
			d: 1.006,
			l: 7
		},
		tail: {
			tx: 34.25,
			ty: 98.95,
			c: -0.014,
			d: 1.006,
			l: 6
		},
		tail_end: {
			tx: 115.75,
			ty: 109.2,
			c: -0.009,
			d: 1.006,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 4.2,
			ty: 18,
			c: -0.009,
			d: 1.006,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 60.85,
			ty: -0.25,
			a: 0.602,
			b: 0.247,
			c: -0.298,
			d: 0.719,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 96.1,
			ty: 31.35,
			a: 0.911,
			c: -0.008,
			d: 0.916,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 95.8,
			ty: 35.3,
			a: 0.911,
			c: -0.008,
			d: 0.916,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.7,
			ty: 116.6,
			a: 0.83,
			c: -0.007,
			d: 0.835,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 62.7,
			ty: 1.55,
			c: -0.005,
			d: 1.006,
			l: 14
		},
		head_sleep: {
			tx: 86.2,
			ty: 12.45,
			c: -0.005,
			d: 1.006,
			l: 13
		},
		l_ear: {
			tx: 93.7,
			ty: 1.6,
			c: -0.005,
			d: 1.006,
			l: 12
		},
		r_claws: {
			tx: 66,
			ty: 123.3,
			c: -0.005,
			d: 1.006,
			l: 11
		},
		r_arm: {
			tx: 64.85,
			ty: 34.05,
			c: -0.005,
			d: 1.006,
			l: 10
		},
		r_forearm: {
			tx: 65.45,
			ty: 36.7,
			c: -0.005,
			d: 1.006,
			l: 9
		},
		body: {
			tx: 54.5,
			ty: 21,
			c: -0.005,
			d: 1.006,
			l: 8
		},
		lower_body: {
			tx: 56.4,
			ty: 83.45,
			c: -0.005,
			d: 1.006,
			l: 7
		},
		tail: {
			tx: 34.15,
			ty: 99,
			c: -0.014,
			d: 1.006,
			l: 6
		},
		tail_end: {
			tx: 115.65,
			ty: 109.25,
			c: -0.005,
			d: 1.006,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 4,
			ty: 18.1,
			c: -0.005,
			d: 1.006,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 60.65,
			ty: -0.2,
			a: 0.603,
			b: 0.247,
			c: -0.295,
			d: 0.719,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 95.95,
			ty: 31.4,
			a: 0.911,
			c: -0.005,
			d: 0.916,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 95.55,
			ty: 35.35,
			a: 0.911,
			c: -0.005,
			d: 0.916,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.6,
			ty: 116.7,
			a: 0.83,
			c: -0.004,
			d: 0.835,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 62.55,
			ty: 1.65,
			c: -0.005,
			d: 1.005,
			l: 14
		},
		head_sleep: {
			tx: 86.1,
			ty: 12.6,
			c: -0.005,
			d: 1.005,
			l: 13
		},
		l_ear: {
			tx: 93.5,
			ty: 1.65,
			c: -0.005,
			d: 1.005,
			l: 12
		},
		r_claws: {
			tx: 65.95,
			ty: 123.3,
			c: -0.005,
			d: 1.005,
			l: 11
		},
		r_arm: {
			tx: 64.8,
			ty: 34.15,
			c: -0.005,
			d: 1.005,
			l: 10
		},
		r_forearm: {
			tx: 65.35,
			ty: 36.75,
			c: -0.005,
			d: 1.005,
			l: 9
		},
		body: {
			tx: 54.4,
			ty: 21.05,
			c: -0.005,
			d: 1.005,
			l: 8
		},
		lower_body: {
			tx: 56.3,
			ty: 83.5,
			c: -0.005,
			d: 1.005,
			l: 7
		},
		tail: {
			tx: 34.1,
			ty: 99.05,
			c: -0.014,
			d: 1.005,
			l: 6
		},
		tail_end: {
			tx: 115.6,
			ty: 109.25,
			c: -0.005,
			d: 1.005,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 3.9,
			ty: 18.15,
			c: -0.005,
			d: 1.005,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 60.45,
			ty: -0.05,
			a: 0.603,
			b: 0.247,
			c: -0.295,
			d: 0.719,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 95.8,
			ty: 31.55,
			a: 0.911,
			c: -0.005,
			d: 0.915,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 95.45,
			ty: 35.4,
			a: 0.911,
			c: -0.005,
			d: 0.915,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.55,
			ty: 116.65,
			a: 0.83,
			c: -0.004,
			d: 0.834,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 62.4,
			ty: 1.7,
			c: -0.005,
			d: 1.004,
			l: 14
		},
		head_sleep: {
			tx: 86,
			ty: 12.65,
			c: -0.005,
			d: 1.004,
			l: 13
		},
		l_ear: {
			tx: 93.35,
			ty: 1.75,
			c: -0.005,
			d: 1.004,
			l: 12
		},
		r_claws: {
			tx: 65.95,
			ty: 123.35,
			c: -0.005,
			d: 1.004,
			l: 11
		},
		r_arm: {
			tx: 64.75,
			ty: 34.2,
			c: -0.005,
			d: 1.004,
			l: 10
		},
		r_forearm: {
			tx: 65.3,
			ty: 36.85,
			c: -0.005,
			d: 1.004,
			l: 9
		},
		body: {
			tx: 54.3,
			ty: 21.2,
			c: -0.005,
			d: 1.004,
			l: 8
		},
		lower_body: {
			tx: 56.3,
			ty: 83.55,
			c: -0.005,
			d: 1.004,
			l: 7
		},
		tail: {
			tx: 34.05,
			ty: 99.05,
			c: -0.013,
			d: 1.004,
			l: 6
		},
		tail_end: {
			tx: 115.6,
			ty: 109.3,
			c: -0.005,
			d: 1.004,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 3.75,
			ty: 18.25,
			c: -0.005,
			d: 1.004,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 60.35,
			ty: 0,
			a: 0.603,
			b: 0.247,
			c: -0.295,
			d: 0.718,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 95.75,
			ty: 31.6,
			a: 0.911,
			c: -0.004,
			d: 0.915,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 95.45,
			ty: 35.5,
			a: 0.911,
			c: -0.004,
			d: 0.915,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.55,
			ty: 116.7,
			a: 0.83,
			c: -0.004,
			d: 0.834,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 62.25,
			ty: 1.8,
			c: -0.005,
			d: 1.004,
			l: 14
		},
		head_sleep: {
			tx: 85.9,
			ty: 12.7,
			c: -0.005,
			d: 1.004,
			l: 13
		},
		l_ear: {
			tx: 93.25,
			ty: 1.85,
			c: -0.005,
			d: 1.004,
			l: 12
		},
		r_claws: {
			tx: 65.9,
			ty: 123.4,
			c: -0.005,
			d: 1.004,
			l: 11
		},
		r_arm: {
			tx: 64.6,
			ty: 34.25,
			c: -0.005,
			d: 1.004,
			l: 10
		},
		r_forearm: {
			tx: 65.2,
			ty: 36.95,
			c: -0.005,
			d: 1.004,
			l: 9
		},
		body: {
			tx: 54.25,
			ty: 21.25,
			c: -0.005,
			d: 1.004,
			l: 8
		},
		lower_body: {
			tx: 56.25,
			ty: 83.6,
			c: -0.005,
			d: 1.004,
			l: 7
		},
		tail: {
			tx: 34,
			ty: 99.15,
			c: -0.013,
			d: 1.004,
			l: 6
		},
		tail_end: {
			tx: 115.55,
			ty: 109.3,
			c: -0.005,
			d: 1.004,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 3.65,
			ty: 18.3,
			c: -0.005,
			d: 1.004,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 60.25,
			ty: 0.05,
			a: 0.603,
			b: 0.247,
			c: -0.294,
			d: 0.718,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 95.7,
			ty: 31.65,
			a: 0.911,
			c: -0.004,
			d: 0.914,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 95.3,
			ty: 35.55,
			a: 0.911,
			c: -0.004,
			d: 0.914,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.5,
			ty: 116.75,
			a: 0.83,
			c: -0.004,
			d: 0.834,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 62.15,
			ty: 1.85,
			c: -0.005,
			d: 1.003,
			l: 14
		},
		head_sleep: {
			tx: 85.8,
			ty: 12.85,
			c: -0.005,
			d: 1.003,
			l: 13
		},
		l_ear: {
			tx: 93.1,
			ty: 1.9,
			c: -0.005,
			d: 1.003,
			l: 12
		},
		r_claws: {
			tx: 65.9,
			ty: 123.35,
			c: -0.005,
			d: 1.003,
			l: 11
		},
		r_arm: {
			tx: 64.55,
			ty: 34.3,
			c: -0.005,
			d: 1.003,
			l: 10
		},
		r_forearm: {
			tx: 65.15,
			ty: 37,
			c: -0.005,
			d: 1.003,
			l: 9
		},
		body: {
			tx: 54.1,
			ty: 21.35,
			c: -0.005,
			d: 1.003,
			l: 8
		},
		lower_body: {
			tx: 56.15,
			ty: 83.6,
			c: -0.005,
			d: 1.003,
			l: 7
		},
		tail: {
			tx: 33.85,
			ty: 99.15,
			c: -0.01,
			d: 1.003,
			l: 6
		},
		tail_end: {
			tx: 115.55,
			ty: 109.4,
			c: -0.005,
			d: 1.003,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 3.5,
			ty: 18.35,
			c: -0.005,
			d: 1.003,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 60.05,
			ty: 0.2,
			a: 0.603,
			b: 0.247,
			c: -0.294,
			d: 0.717,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 95.6,
			ty: 31.75,
			a: 0.911,
			c: -0.004,
			d: 0.914,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 95.25,
			ty: 35.6,
			a: 0.911,
			c: -0.004,
			d: 0.914,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.5,
			ty: 116.8,
			a: 0.83,
			c: -0.004,
			d: 0.833,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 61.9,
			ty: 1.95,
			c: -0.001,
			d: 1.003,
			l: 14
		},
		head_sleep: {
			tx: 85.6,
			ty: 12.9,
			c: -0.001,
			d: 1.003,
			l: 13
		},
		l_ear: {
			tx: 92.85,
			ty: 1.95,
			c: -0.001,
			d: 1.003,
			l: 12
		},
		r_claws: {
			tx: 65.8,
			ty: 123.35,
			c: -0.001,
			d: 1.003,
			l: 11
		},
		r_arm: {
			tx: 64.35,
			ty: 34.4,
			c: -0.001,
			d: 1.003,
			l: 10
		},
		r_forearm: {
			tx: 64.95,
			ty: 37,
			c: -0.001,
			d: 1.003,
			l: 9
		},
		body: {
			tx: 53.9,
			ty: 21.4,
			c: -0.001,
			d: 1.003,
			l: 8
		},
		lower_body: {
			tx: 56.2,
			ty: 83.7,
			c: -0.001,
			d: 1.003,
			l: 7
		},
		tail: {
			tx: 33.75,
			ty: 99.2,
			c: -0.01,
			d: 1.003,
			l: 6
		},
		tail_end: {
			tx: 115.45,
			ty: 109.4,
			c: -0.001,
			d: 1.003,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 3.45,
			ty: 18.45,
			c: -0.001,
			d: 1.003,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 59.95,
			ty: 0.25,
			a: 0.603,
			b: 0.247,
			c: -0.294,
			d: 0.717,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 95.45,
			ty: 31.8,
			a: 0.911,
			c: -0.001,
			d: 0.913,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 95.05,
			ty: 35.7,
			a: 0.911,
			c: -0.001,
			d: 0.913,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.45,
			ty: 116.8,
			a: 0.83,
			c: -0.001,
			d: 0.833,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 61.8,
			ty: 2,
			c: -0.001,
			d: 1.002,
			l: 14
		},
		head_sleep: {
			tx: 85.5,
			ty: 12.95,
			c: -0.001,
			d: 1.002,
			l: 13
		},
		l_ear: {
			tx: 92.75,
			ty: 2.1,
			c: -0.001,
			d: 1.002,
			l: 12
		},
		r_claws: {
			tx: 65.8,
			ty: 123.4,
			c: -0.001,
			d: 1.002,
			l: 11
		},
		r_arm: {
			tx: 64.3,
			ty: 34.45,
			c: -0.001,
			d: 1.002,
			l: 10
		},
		r_forearm: {
			tx: 64.85,
			ty: 37.1,
			c: -0.001,
			d: 1.002,
			l: 9
		},
		body: {
			tx: 53.8,
			ty: 21.45,
			c: -0.001,
			d: 1.002,
			l: 8
		},
		lower_body: {
			tx: 56.1,
			ty: 83.7,
			c: -0.001,
			d: 1.002,
			l: 7
		},
		tail: {
			tx: 33.75,
			ty: 99.2,
			c: -0.009,
			d: 1.003,
			l: 6
		},
		tail_end: {
			tx: 115.4,
			ty: 109.4,
			c: -0.001,
			d: 1.002,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 3.3,
			ty: 18.55,
			c: -0.001,
			d: 1.002,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 59.95,
			ty: 0.25,
			a: 0.603,
			b: 0.247,
			c: -0.294,
			d: 0.716,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 95.35,
			ty: 31.85,
			a: 0.911,
			c: -0.001,
			d: 0.913,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 94.95,
			ty: 35.7,
			a: 0.911,
			c: -0.001,
			d: 0.913,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.4,
			ty: 116.8,
			a: 0.83,
			c: -0.001,
			d: 0.832,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 61.7,
			ty: 2.05,
			c: -0.001,
			d: 1.002,
			l: 14
		},
		head_sleep: {
			tx: 85.4,
			ty: 13,
			c: -0.001,
			d: 1.002,
			l: 13
		},
		l_ear: {
			tx: 92.65,
			ty: 2.15,
			c: -0.001,
			d: 1.002,
			l: 12
		},
		r_claws: {
			tx: 65.8,
			ty: 123.4,
			c: -0.001,
			d: 1.002,
			l: 11
		},
		r_arm: {
			tx: 64.25,
			ty: 34.5,
			c: -0.001,
			d: 1.002,
			l: 10
		},
		r_forearm: {
			tx: 64.8,
			ty: 37.15,
			c: -0.001,
			d: 1.002,
			l: 9
		},
		body: {
			tx: 53.75,
			ty: 21.5,
			c: -0.001,
			d: 1.002,
			l: 8
		},
		lower_body: {
			tx: 56.05,
			ty: 83.75,
			c: -0.001,
			d: 1.002,
			l: 7
		},
		tail: {
			tx: 33.75,
			ty: 99.25,
			c: -0.009,
			d: 1.002,
			l: 6
		},
		tail_end: {
			tx: 115.35,
			ty: 109.4,
			c: -0.001,
			d: 1.002,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 3.2,
			ty: 18.6,
			c: -0.001,
			d: 1.002,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 59.85,
			ty: 0.3,
			a: 0.603,
			b: 0.247,
			c: -0.293,
			d: 0.716,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 95.3,
			ty: 31.9,
			a: 0.911,
			c: -0.001,
			d: 0.913,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 94.9,
			ty: 35.75,
			a: 0.911,
			c: -0.001,
			d: 0.913,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.4,
			ty: 116.8,
			a: 0.83,
			c: -0.001,
			d: 0.832,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 61.6,
			ty: 2.15,
			c: -0.001,
			d: 1.002,
			l: 14
		},
		head_sleep: {
			tx: 85.35,
			ty: 13.05,
			c: -0.001,
			d: 1.002,
			l: 13
		},
		l_ear: {
			tx: 92.55,
			ty: 2.2,
			c: -0.001,
			d: 1.002,
			l: 12
		},
		r_claws: {
			tx: 65.75,
			ty: 123.4,
			c: -0.001,
			d: 1.002,
			l: 11
		},
		r_arm: {
			tx: 64.2,
			ty: 34.5,
			c: -0.001,
			d: 1.002,
			l: 10
		},
		r_forearm: {
			tx: 64.75,
			ty: 37.15,
			c: -0.001,
			d: 1.002,
			l: 9
		},
		body: {
			tx: 53.7,
			ty: 21.55,
			c: -0.001,
			d: 1.002,
			l: 8
		},
		lower_body: {
			tx: 56.1,
			ty: 83.75,
			c: -0.001,
			d: 1.002,
			l: 7
		},
		tail: {
			tx: 33.65,
			ty: 99.3,
			c: -0.009,
			d: 1.002,
			l: 6
		},
		tail_end: {
			tx: 115.4,
			ty: 109.5,
			c: -0.001,
			d: 1.002,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 3.15,
			ty: 18.65,
			c: -0.001,
			d: 1.002,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 59.7,
			ty: 0.45,
			a: 0.604,
			b: 0.245,
			c: -0.293,
			d: 0.716,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 95.25,
			ty: 31.9,
			a: 0.911,
			c: -0.001,
			d: 0.912,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 94.85,
			ty: 35.8,
			a: 0.911,
			c: -0.001,
			d: 0.912,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.4,
			ty: 116.85,
			a: 0.83,
			c: -0.001,
			d: 0.832,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 61.5,
			ty: 2.2,
			c: -0.001,
			d: 1.001,
			l: 14
		},
		head_sleep: {
			tx: 85.25,
			ty: 13.1,
			c: -0.001,
			d: 1.001,
			l: 13
		},
		l_ear: {
			tx: 92.45,
			ty: 2.25,
			c: -0.001,
			d: 1.001,
			l: 12
		},
		r_claws: {
			tx: 65.75,
			ty: 123.45,
			c: -0.001,
			d: 1.001,
			l: 11
		},
		r_arm: {
			tx: 64.15,
			ty: 34.55,
			c: -0.001,
			d: 1.001,
			l: 10
		},
		r_forearm: {
			tx: 64.7,
			ty: 37.25,
			c: -0.001,
			d: 1.001,
			l: 9
		},
		body: {
			tx: 53.65,
			ty: 21.6,
			c: -0.001,
			d: 1.001,
			l: 8
		},
		lower_body: {
			tx: 56.05,
			ty: 83.8,
			c: -0.001,
			d: 1.001,
			l: 7
		},
		tail: {
			tx: 33.6,
			ty: 99.3,
			c: -0.009,
			d: 1.001,
			l: 6
		},
		tail_end: {
			tx: 115.35,
			ty: 109.5,
			c: -0.001,
			d: 1.001,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 3.1,
			ty: 18.65,
			c: -0.001,
			d: 1.001,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 59.65,
			ty: 0.5,
			a: 0.604,
			b: 0.245,
			c: -0.293,
			d: 0.715,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 95.2,
			ty: 32,
			a: 0.911,
			d: 0.912,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 94.8,
			ty: 35.85,
			a: 0.911,
			d: 0.912,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.35,
			ty: 116.85,
			a: 0.83,
			d: 0.831,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 61.45,
			ty: 2.25,
			d: 1.001,
			l: 14
		},
		head_sleep: {
			tx: 85.25,
			ty: 13.1,
			d: 1.001,
			l: 13
		},
		l_ear: {
			tx: 92.4,
			ty: 2.3,
			d: 1.001,
			l: 12
		},
		r_claws: {
			tx: 65.75,
			ty: 123.45,
			d: 1.001,
			l: 11
		},
		r_arm: {
			tx: 64.1,
			ty: 34.6,
			d: 1.001,
			l: 10
		},
		r_forearm: {
			tx: 64.7,
			ty: 37.25,
			d: 1.001,
			l: 9
		},
		body: {
			tx: 53.55,
			ty: 21.7,
			d: 1.001,
			l: 8
		},
		lower_body: {
			tx: 56.05,
			ty: 83.8,
			d: 1.001,
			l: 7
		},
		tail: {
			tx: 33.65,
			ty: 99.35,
			c: -0.009,
			d: 1.001,
			l: 6
		},
		tail_end: {
			tx: 115.3,
			ty: 109.45,
			d: 1.001,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 3,
			ty: 18.65,
			d: 1.001,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 59.55,
			ty: 0.55,
			a: 0.605,
			b: 0.245,
			c: -0.291,
			d: 0.716,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 95.1,
			ty: 32.05,
			a: 0.911,
			d: 0.912,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 94.8,
			ty: 35.85,
			a: 0.911,
			d: 0.912,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.3,
			ty: 116.85,
			a: 0.83,
			d: 0.831,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 61.35,
			ty: 2.3,
			d: 1.001,
			l: 14
		},
		head_sleep: {
			tx: 85.2,
			ty: 13.15,
			d: 1.001,
			l: 13
		},
		l_ear: {
			tx: 92.3,
			ty: 2.35,
			d: 1.001,
			l: 12
		},
		r_claws: {
			tx: 65.75,
			ty: 123.5,
			d: 1.001,
			l: 11
		},
		r_arm: {
			tx: 64.05,
			ty: 34.65,
			d: 1.001,
			l: 10
		},
		r_forearm: {
			tx: 64.65,
			ty: 37.35,
			d: 1.001,
			l: 9
		},
		body: {
			tx: 53.55,
			ty: 21.7,
			d: 1.001,
			l: 8
		},
		lower_body: {
			tx: 55.95,
			ty: 83.85,
			d: 1.001,
			l: 7
		},
		tail: {
			tx: 33.55,
			ty: 99.35,
			c: -0.009,
			d: 1.001,
			l: 6
		},
		tail_end: {
			tx: 115.3,
			ty: 109.5,
			d: 1.001,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 2.95,
			ty: 18.75,
			d: 1.001,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 59.5,
			ty: 0.6,
			a: 0.605,
			b: 0.245,
			c: -0.29,
			d: 0.716,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 95.1,
			ty: 32,
			a: 0.911,
			d: 0.911,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 94.7,
			ty: 35.9,
			a: 0.911,
			d: 0.911,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.35,
			ty: 116.85,
			a: 0.83,
			d: 0.831,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 61.3,
			ty: 2.3,
			d: 1.001,
			l: 14
		},
		head_sleep: {
			tx: 85.15,
			ty: 13.2,
			d: 1.001,
			l: 13
		},
		l_ear: {
			tx: 92.25,
			ty: 2.35,
			d: 1.001,
			l: 12
		},
		r_claws: {
			tx: 65.75,
			ty: 123.5,
			d: 1.001,
			l: 11
		},
		r_arm: {
			tx: 64.05,
			ty: 34.65,
			d: 1.001,
			l: 10
		},
		r_forearm: {
			tx: 64.65,
			ty: 37.3,
			d: 1.001,
			l: 9
		},
		body: {
			tx: 53.5,
			ty: 21.75,
			d: 1.001,
			l: 8
		},
		lower_body: {
			tx: 55.95,
			ty: 83.85,
			d: 1.001,
			l: 7
		},
		tail: {
			tx: 33.55,
			ty: 99.4,
			c: -0.009,
			d: 1.001,
			l: 6
		},
		tail_end: {
			tx: 115.35,
			ty: 109.5,
			d: 1.001,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 2.9,
			ty: 18.75,
			d: 1.001,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 59.45,
			ty: 0.6,
			a: 0.605,
			b: 0.245,
			c: -0.29,
			d: 0.715,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 95.05,
			ty: 32.1,
			a: 0.911,
			d: 0.911,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 94.75,
			ty: 35.95,
			a: 0.911,
			d: 0.911,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.35,
			ty: 116.9,
			a: 0.83,
			d: 0.831,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 61.25,
			ty: 2.35,
			l: 14
		},
		head_sleep: {
			tx: 85.15,
			ty: 13.25,
			l: 13
		},
		l_ear: {
			tx: 92.2,
			ty: 2.4,
			l: 12
		},
		r_claws: {
			tx: 65.65,
			ty: 123.5,
			l: 11
		},
		r_arm: {
			tx: 64,
			ty: 34.65,
			l: 10
		},
		r_forearm: {
			tx: 64.6,
			ty: 37.3,
			l: 9
		},
		body: {
			tx: 53.45,
			ty: 21.75,
			l: 8
		},
		lower_body: {
			tx: 55.95,
			ty: 83.85,
			l: 7
		},
		tail: {
			tx: 33.45,
			ty: 99.4,
			c: -0.005,
			l: 6
		},
		tail_end: {
			tx: 115.25,
			ty: 109.55,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 2.9,
			ty: 18.8,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 59.4,
			ty: 0.65,
			a: 0.605,
			b: 0.245,
			c: -0.29,
			d: 0.715,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 95,
			ty: 32.1,
			a: 0.911,
			d: 0.911,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 94.7,
			ty: 35.95,
			a: 0.911,
			d: 0.911,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.25,
			ty: 116.9,
			a: 0.83,
			d: 0.831,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 61.2,
			ty: 2.35,
			l: 14
		},
		head_sleep: {
			tx: 85.1,
			ty: 13.25,
			l: 13
		},
		l_ear: {
			tx: 92.15,
			ty: 2.4,
			l: 12
		},
		r_claws: {
			tx: 65.7,
			ty: 123.5,
			l: 11
		},
		r_arm: {
			tx: 64,
			ty: 34.7,
			l: 10
		},
		r_forearm: {
			tx: 64.6,
			ty: 37.4,
			l: 9
		},
		body: {
			tx: 53.45,
			ty: 21.8,
			l: 8
		},
		lower_body: {
			tx: 55.9,
			ty: 83.9,
			l: 7
		},
		tail: {
			tx: 33.4,
			ty: 99.4,
			c: -0.005,
			l: 6
		},
		tail_end: {
			tx: 115.25,
			ty: 109.55,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 2.85,
			ty: 18.8,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 59.35,
			ty: 0.65,
			a: 0.605,
			b: 0.245,
			c: -0.29,
			d: 0.715,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 95,
			ty: 32.1,
			a: 0.911,
			d: 0.911,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 94.7,
			ty: 36,
			a: 0.911,
			d: 0.911,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.25,
			ty: 116.95,
			a: 0.83,
			d: 0.831,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 61.2,
			ty: 2.4,
			l: 14
		},
		head_sleep: {
			tx: 85.1,
			ty: 13.3,
			l: 13
		},
		l_ear: {
			tx: 92.15,
			ty: 2.45,
			l: 12
		},
		r_claws: {
			tx: 65.7,
			ty: 123.55,
			l: 11
		},
		r_arm: {
			tx: 63.95,
			ty: 34.7,
			l: 10
		},
		r_forearm: {
			tx: 64.55,
			ty: 37.4,
			l: 9
		},
		body: {
			tx: 53.4,
			ty: 21.85,
			l: 8
		},
		lower_body: {
			tx: 55.95,
			ty: 83.9,
			l: 7
		},
		tail: {
			tx: 33.35,
			ty: 99.4,
			c: -0.005,
			l: 6
		},
		tail_end: {
			tx: 115.25,
			ty: 109.55,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 2.85,
			ty: 18.85,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 59.3,
			ty: 0.7,
			a: 0.605,
			b: 0.245,
			c: -0.29,
			d: 0.715,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 94.95,
			ty: 32.15,
			a: 0.911,
			d: 0.911,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 94.65,
			ty: 36,
			a: 0.911,
			d: 0.911,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.25,
			ty: 116.9,
			a: 0.83,
			d: 0.83,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 61.15,
			ty: 2.4,
			l: 14
		},
		head_sleep: {
			tx: 85.05,
			ty: 13.3,
			l: 13
		},
		l_ear: {
			tx: 92.1,
			ty: 2.45,
			l: 12
		},
		r_claws: {
			tx: 65.7,
			ty: 123.55,
			l: 11
		},
		r_arm: {
			tx: 63.95,
			ty: 34.7,
			l: 10
		},
		r_forearm: {
			tx: 64.55,
			ty: 37.4,
			l: 9
		},
		body: {
			tx: 53.4,
			ty: 21.85,
			l: 8
		},
		lower_body: {
			tx: 55.95,
			ty: 83.9,
			l: 7
		},
		tail: {
			tx: 33.35,
			ty: 99.45,
			c: -0.005,
			l: 6
		},
		tail_end: {
			tx: 115.25,
			ty: 109.55,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 2.8,
			ty: 18.85,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 59.25,
			ty: 0.7,
			a: 0.605,
			b: 0.245,
			c: -0.29,
			d: 0.715,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 94.95,
			ty: 32.15,
			a: 0.911,
			d: 0.911,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 94.65,
			ty: 36.05,
			a: 0.911,
			d: 0.911,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.25,
			ty: 116.9,
			a: 0.83,
			d: 0.83,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 61.15,
			ty: 2.4,
			l: 14
		},
		head_sleep: {
			tx: 85.05,
			ty: 13.3,
			l: 13
		},
		l_ear: {
			tx: 92.1,
			ty: 2.45,
			l: 12
		},
		r_claws: {
			tx: 65.7,
			ty: 123.5,
			l: 11
		},
		r_arm: {
			tx: 63.95,
			ty: 34.7,
			l: 10
		},
		r_forearm: {
			tx: 64.55,
			ty: 37.4,
			l: 9
		},
		body: {
			tx: 53.4,
			ty: 21.85,
			l: 8
		},
		lower_body: {
			tx: 55.95,
			ty: 83.9,
			l: 7
		},
		tail: {
			tx: 33.4,
			ty: 99.45,
			c: -0.005,
			l: 6
		},
		tail_end: {
			tx: 115.25,
			ty: 109.55,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 2.8,
			ty: 18.85,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 59.25,
			ty: 0.7,
			a: 0.605,
			b: 0.245,
			c: -0.29,
			d: 0.715,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 94.95,
			ty: 32.15,
			a: 0.911,
			d: 0.911,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 94.65,
			ty: 36.05,
			a: 0.911,
			d: 0.911,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.25,
			ty: 116.9,
			a: 0.83,
			d: 0.83,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	},
	{
		r_ear: {
			tx: 62.25,
			ty: 2.45,
			l: 14
		},
		head_sleep: {
			tx: 85.05,
			ty: 13.35,
			l: 13
		},
		l_ear: {
			tx: 93.2,
			ty: 2.45,
			l: 12
		},
		r_claws: {
			tx: 65.7,
			ty: 123.5,
			l: 11
		},
		r_arm: {
			tx: 63.8,
			ty: 35.05,
			l: 10
		},
		r_forearm: {
			tx: 64.55,
			ty: 37.4,
			l: 9
		},
		body: {
			tx: 53.4,
			ty: 21.55,
			l: 8
		},
		lower_body: {
			tx: 54.85,
			ty: 83.9,
			l: 7
		},
		tail: {
			tx: 34.6,
			ty: 99.2,
			c: -0.008,
			l: 6
		},
		tail_end: {
			tx: 115.25,
			ty: 109.55,
			mr: 0.898,
			mg: 0.898,
			mb: 0.898,
			l: 5
		},
		r_wing: {
			tx: 2.75,
			ty: 18.85,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 4
		},
		l_wing: {
			tx: 59.2,
			ty: 0.75,
			a: 0.605,
			b: 0.247,
			c: -0.292,
			d: 0.715,
			mr: 0.801,
			mg: 0.801,
			mb: 0.801,
			acb: 0,
			acc: 11,
			acs: 8,
			ach: 180,
			glx: 5,
			gly: 5,
			glc: '#ffffff',
			glq: 1,
			gls: 1,
			l: 3
		},
		l_arm: {
			tx: 94.65,
			ty: 32.2,
			a: 0.911,
			d: 0.911,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 2
		},
		l_forearm: {
			tx: 94.65,
			ty: 36.1,
			a: 0.911,
			d: 0.911,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 1
		},
		l_claws: {
			tx: 98.25,
			ty: 116.9,
			a: 0.83,
			d: 0.83,
			mr: 0.809,
			mg: 0.809,
			mb: 0.809,
			l: 0
		}
	}
];

const result = mirrorTo(animation, 38);

fs.writeFileSync('./results/animation_fix.txt', JSON.stringify(result, undefined, '\t'));
