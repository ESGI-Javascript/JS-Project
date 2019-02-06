import createCanvas from '/js/canvas.js';
import {prop_access} from '/js/propAccess.js';
import {type_check_v1, type_check_v2, type_check} from '/js/typeCheck.js';

//Création de canvas et de la zone de jeu
const screen = new createCanvas(document.getElementById('tetris'));
let canvas = prop_access(screen, 'area');
let context = screen.context;

//création de la pièce
const tetrisMatrix = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
];

function draw(){
    drawTetrisMatrix(values.matrix, values.position);
}

//param : tetrisMatrix et décalage
//fonction : dessiner la pièce
function drawTetrisMatrix(matrix, offset){
    tetrisMatrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value !== 0){
                context.fillStyle = 'red';
                //on utilise le décalage pour l'ordonnée y et l'abscisse x
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
            }
        });
    });
}

//afficher le score de la partie
function updateScore() {
    document.getElementById('score').innerText = values.score;
}



const values = {
    position : {x: 5, y:5},
    matrix: tetrisMatrix,
    score: 0
}

updateScore();
draw();
