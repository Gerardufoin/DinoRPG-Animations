// @ts-check

export let offsetShader = `
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec3 offset;
uniform vec3 mult;

void main(void){
	vec4 color = texture2D(uSampler, vTextureCoord);
	gl_FragColor = vec4(vec3((color.r / color.a) * mult.r + offset.r / 255.0, (color.g / color.a) * mult.g + offset.g / 255.0, (color.b / color.a) * mult.b + offset.b / 255.0) * color.a, color.a);
}
`;
