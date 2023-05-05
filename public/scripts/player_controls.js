/*
* Description: All player's functions for gaming
* Author: Lucas Mateus
* Created at: 08/04/2023
* Updated at: 29/04/2023
*/

// ------------------------------------- //
// Atributes
const LIFE = 3;
const POWER = 1;
const PLAYER_SPEED = 4;

// Player
const SUSNAVE = document.getElementById("susnave-div");
var dir_X = 0;
var dir_Y = 0;
var pos_X = SUSNAVE.offsetLeft;
var pos_Y = SUSNAVE.offsetTop;

// Game settings
const WALLS = document.getElementById("game_window");
const LEFT_WALL = WALLS.offsetLeft;
const RIGHT_WALL = WALLS.offsetLeft + WALLS.offsetWidth;
const TOP_WALL = WALLS.offsetTop;
const BOTTOM_WALL = WALLS.offsetTop + WALLS.offsetHeight;
var keyboard = null;

// ----------------------------------------- //

/* LISTEN THE PRESSED KEY BY THE USER */
// document.querySelector("body").onkeydown = (event) => {console.log(event.key)};
document.addEventListener("keypress", (event) => {pressDown(event)});
document.addEventListener("keyup", (event) =>{pressUp(event)});

// Inicia o movimento
function pressDown(event){
    
    // PARA: BAIXO // CIMA
    if (event.key == "w" || event.key == "ArrowUp")
        dir_Y = -1;
    if (event.key == "s" || event.key == "ArrowDown")
        dir_Y = 1;
    
    // PARA: BAIXO // CIMA
    if (event.key == "a" || event.key == "ArrowLeft")
        dir_X = -1;
    if (event.key == "d" || event.key == "ArrowRight")
        dir_X = 1;
    
    move();
}

// Para o movimento
function pressUp(event){
    // PARA: BAIXO // CIMA
    if (event.key == "w" || event.key == "ArrowUp")
        dir_Y = 0;
    if (event.key == "s" || event.key == "ArrowDown")
        dir_Y = 0;
    
    // PARA: BAIXO // CIMA
    if (event.key == "a" || event.key == "ArrowLeft")
        dir_X = 0;
    if (event.key == "d" || event.key == "ArrowRight")
        dir_X = 0;
}

// Move o player
function move(){

    pos_X += (dir_X * PLAYER_SPEED);
    pos_Y += (dir_Y * PLAYER_SPEED);

    fogeNaum(pos_X, pos_Y);
}

// Impede o player de sair do campo
function fogeNaum(pos_X, pos_Y){
    
    // Confere se o player não saiu do box - X
    if (pos_X <= (LEFT_WALL + 5)){
        SUSNAVE.style.left = LEFT_WALL + 5 + "px";    
    }else if(pos_X >= (RIGHT_WALL - 65)){
        SUSNAVE.style.left = RIGHT_WALL - 65 + "px";
    }else{
        SUSNAVE.style.left = pos_X + "px";
    }

    // Confere se o player não saiu do box - Y
    if (pos_Y <= (TOP_WALL + 10)){
        pos_Y = TOP_WALL + 10;
        SUSNAVE.style.top = pos_Y + "px";

    }else if(pos_Y >= (BOTTOM_WALL - 62)){
        pos_Y = BOTTOM_WALL - 62;
        SUSNAVE.style.top = pos_Y + "px";
        
    }else{
        SUSNAVE.style.top = pos_Y + "px";
    }

    console.log(pos_X, pos_Y);
}