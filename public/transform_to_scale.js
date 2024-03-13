/* eslint-disable */

document.getElementById('convert').addEventListener('click', () => {
	const v = document.getElementById('transform').value;
	const cv = JSON.parse(v.replace(/[ \t\r\n]/g, '').replace(/([{,])([^:]+):/g, '$1"$2":'));
	const container = new DinoAnim.Container();
	container.transform.setFromMatrix(new DinoAnim.Matrix(cv.a ?? 1, cv.b ?? 0, cv.c ?? 0, cv.d ?? 1));
	document.getElementById('result').innerHTML = `x: ${Math.round(container.scale.x * 100) / 100} | y: ${
		Math.round(container.scale.y * 100) / 100
	} | r: ${Math.round(container.angle * 100) / 100}`;
});
