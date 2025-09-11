import { Renderer } from 'pixi.js';

export class Fight {
	constructor(data: any);

	get paused(): boolean;

	update(): void;

	getDisplay(): import('pixi.js').ICanvas;

	pause(frames: number): void;

	getMTFormat(forceDAData?: boolean): string;

	destroy(): void;
}
