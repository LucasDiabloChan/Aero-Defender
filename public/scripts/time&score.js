/*
- Description: Update the score and time survived
- Author: Lucas Mateus
- Created at: 29/04/2023
- Updated at: 29/04/2023
*/


/* ================ */
/* UPDATE THE CLOCK */
/* ================ */
const clock_li = document.getElementById("time");
var minutes = 0;
var seconds = 0;

clock = setInterval(()=>{
    
    // Calcula o tempo a ser exibido
    if(seconds == 59){
        seconds = 0;
        minutes++;
    }
    else{
        seconds++;
    }

    // Atualiza o score
    if (minutes < 10 && seconds < 10)
        clock_li.innerHTML = "0"+minutes + ":" + "0" + seconds;
    else if(minutes < 10)
        clock_li.innerHTML = "0"+minutes + ":" + seconds;
    else
        clock_li.innerHTML = minutes + ":" + seconds;

    updateScore();
}, 1000);

/* ================ */
/* UPDATE THE SCORE */
/* ================ */
const score_li = document.getElementById("score");

function updateScore(){
    score_li.innerHTML = (minutes * 600 + seconds * 10 + aster.qtdObjcts * 100);
}