// @ts-check

export let offsetShader = `
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec3 offset;

void main(void){
	vec4 color = texture2D(uSampler, vTextureCoord);
	gl_FragColor = vec4(vec3(color.r / color.a + offset.r / 255.0, color.g / color.a + offset.g / 255.0, color.b / color.a + offset.b / 255.0) * color.a, color.a);
}
`;
