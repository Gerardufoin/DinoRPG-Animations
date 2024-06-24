// @ts-check

// Clamp the entity colors between 0 and 1 to prevent artefacts due to https://github.com/pixijs/pixijs/issues/10035
export let exportCorrectionShader = `
varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
	vec4 color = texture2D(uSampler, vTextureCoord);
	gl_FragColor = vec4(vec3(clamp((color.r / color.a), 0.0, 1.0), clamp((color.g / color.a), 0.0, 1.0), clamp((color.b / color.a), 0.0, 1.0)) * color.a, color.a);
}
`;
