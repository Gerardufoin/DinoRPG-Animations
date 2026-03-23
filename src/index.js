// src/index.js
import * as PIXI from 'pixi.js'; // Import global pour enregistrer les bases
import { Application, Container, Graphics, Texture, Matrix, Renderer, autoDetectRenderer } from 'pixi.js';

// --- SUPPORTS WEBGL (Indispensable pour les couleurs/filtres) ---
import '@pixi/core'; 
import '@pixi/filter-color-matrix'; // C'est LUI qui gère les couleurs des Dinos
import '@pixi/sprite';

// --- SUPPORTS CANVAS (Optionnel, pour la compatibilité) ---
import { CanvasRenderer } from '@pixi/canvas-renderer';
import '@pixi/canvas-renderer';
import '@pixi/canvas-display';
import '@pixi/canvas-graphics';
import '@pixi/canvas-sprite';

// Tes imports métiers
import { dino } from './dino.js';
import { sdino } from './sdino.js';
import { smonster } from './smonster.js';
import { Fight } from './fight/Fight.js';

// On exporte aussi autoDetectRenderer pour que Puppeteer puisse choisir le meilleur
export { 
  Application, 
  Graphics, 
  Container, 
  Texture, 
  Matrix, 
  Renderer,
  CanvasRenderer, 
  autoDetectRenderer, // <--- À ajouter
  sdino, 
  smonster, 
  Fight, 
  dino 
};