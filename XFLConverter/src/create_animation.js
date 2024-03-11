function create_animation(name, values_start, values_end, frames, func) {
	const animation = [];
	for (let i = 0; i < frames; ++i) {
		const frame = {};
		frame[name] = {};
		for (const k of Object.keys(values_start)) {
			frame[name][k] =
				Math.round(
					(values_start[k] + (values_end[k] - values_start[k]) * func((i / (frames - 1)) * Math.PI)) * 1000
				) / 1000;
		}
		animation.push(frame);
	}
	return animation;
}

console.log(
	create_animation(
		'eye',
		{
			a: 1,
			d: 1,
			acb: 0
		},
		{
			a: 0.9,
			d: 0.9,
			acb: -30
		},
		23,
		Math.sin
	)
);
