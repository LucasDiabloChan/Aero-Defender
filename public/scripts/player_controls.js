/*
* Description: All player's functions for gaming
* Author: Lucas Mateus
* Created at: 08/04/2023
* Updated at: 09/04/2023
*/

// ------------------------------------- //
// Atributes
const LIFE = 3;
const POWER = 1;
const PLAYER_SPEED = 4;

// Player
const SUSNAVE = document.getElementById("susnave-div");
console.log(SUSNAVE);
var dir_X = 0;
var dir_Y = 0;
var pos_X = SUSNAVE.offsetLeft;
var pos_Y = SUSNAVE.offsetTop;

// Game settings
var keyboard = null;

// ----------------------------------------- //

/* LISTEN THE PRESSED KEY BY THE USER */
// document.querySelector("body").onkeydown = (event) => {console.log(event.key)};
document.addEventListener("keydown", (event) => {pressDown(event)});
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

    SUSNAVE.style.left = pos_X + "px";
    SUSNAVE.style.top = pos_Y + "px";
}