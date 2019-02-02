import createCanvas from '/js/canvas.js';
import {prop_access} from '/js/propAccess.js';

//Création de canvas et de la zone de jeu
const screen = new createCanvas(document.getElementById('tetris'));
let canvas = prop_access(screen, 'area');
let context = screen.context;

