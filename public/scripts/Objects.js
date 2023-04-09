/*
* Description: Create/Generate asteroids
* Author: Lucas Mateus
* Created at: 08/04/2023
* Updated at: 09/04/2023
*/

// ============================= //
/* CLASSE GERADORA DE ASTEROIDES */
// Gera o tamanho, posição e velocidade dos asteróides //
// =================================================== //
class Asteroid{

    // ======================== //
    /* ATRIBUTOS DOS ASTEROIDES */
    imgAster;
    divTag;
    SPEED;
    arrayAsteroids = [];
    gameWindow = document.getElementById("game_window");
    qtdObjcts = 0;
    idCreate = 1;
    // ======================= //

    // ============================= //
    /* COMPORTAMENTOS DOS ASTEROIDES */
    // ============================= //
    
    
    // ---------------------------------- //
    // Gera uma velocidade aleatória
        setSPEED(){
            this.SPEED = Math.random() * 10;
        };
    // ---------------------------------- //
    
    
    // --------------------------------------------------------------------- //
    // Cria a img do asteroide
        createAsteroid(){
            // Cria a tag HTML <img>
                this.imgAster = document.createElement("img");
            
            // Define qual imagem a aparecer na tag
                this.imgAster.src = "../../assets/commom_asteroid.png";
            
            // Gera um tamanho random, entre 30px ~ 70px
                this.imgAster.style.width = Math.round( 30 + Math.random() * 40) + "px";
                this.imgAster.style.height = "auto";
        }
    // ---------------------------------------------------------------------- //
    
    
    // ------------------------------------------------------------------------------- //
    // Cria a tag HTML <div> para conter a tag HTML <img>
        createDiv(){
            // Cria a tag HTML <div>
                this.divTag = document.createElement("div");
            
            // Atribui a classe de estilização "asteroids" à <div>
                this.divTag.classList.add("asteroids");
                this.divTag.classList.add("asteroids_animation");

            // Atribui um id de criação para a div
                this.divTag.id = this.idCreate++;
            
            // ESTILIZAÇÃO
                // Posição/Movimento
                    this.divTag.style.position = "absolute";
                // Distância entre a div e o topo da tela
                    this.divTag.style.top = "0px";
                // Disntância entre a div e a lateral esquerda da tela (250px ~ 1000px)
                    this.divTag.style.left = Math.round(250 + Math.random() * 750) + "px";
                // Altura e Largura: coladasso na img
                    this.divTag.style.width = "fit-content";
                    this.divTag.style.height = "fit-content";

            // Insere a <div> criada no início do array
                this.arrayAsteroids.push(this.divTag);
        }
    // --------------------------------------------------------------------------------- //


    // ----------------------------------------- //
    // Insere os elementos no game
        insertObj(){
            
            // Pega o tamanho do array de asteroides
            let size = this.arrayAsteroids.length;


            // Verifica quantos elementos já existem na tela
            if (size < 20){

                // Chama o método que cria a img
                this.createAsteroid();
                
                // Chama o método que cria a img
                this.createDiv();

                // Adiciona a img do asteroid na div
                this.divTag.appendChild(this.imgAster);
                
                // Adiciona a div na tela
                this.gameWindow.appendChild(this.arrayAsteroids[size]);

                // Aumenta a qtd de elementos criados
                this.qtdObjcts++;
            }else{
                // Remove o elemento apagado da tela
                this.gameWindow.removeChild(this.arrayAsteroids.shift());
            }

        }
    // ----------------------------------------- //
}


// ======================== //
/* IDENTIFICAÇÃO DE COLISÃO */
// ======================== //
function colision(){
    let sus = document.getElementById("susnave");
    
    aster.arrayAsteroids.forEach(element => {

        let sus_x = sus.offsetLeft; //100
        let sus_y = sus.offsetTop;
        let tam_sus_x = sus.style.width + sus_x; //60
        let tam_sus_y = sus.style.width + sus_y;
        
        let elmt_x = element.offsetLeft;//130
        let elmt_y = element.offsetTop;
        let tam_elmt_x = element.style.width + sus_y;//30
        let tam_elmt_y = element.style.width + sus_y;

        if((elmt_x >= sus_x || elmt_x <= tam_sus_x &&
         //  100  >=  130   ||   100  <=  160
            sus_x >= elmt_x || sus_x <= tam_elmt_x)){
            
            
                alert("tapoha bixo");
        }
    });
}




const aster = new Asteroid();

/* LOOP PARA GERAR ASTEROIDES */
asteroid_Creator = setInterval(() => {
    aster.insertObj();
    document.getElementById("qtdCreated").innerHTML = "Created: " + aster.qtdObjcts;
    // console.log(aster.arrayAsteroids);
}, 1000);

colision_checker = setInterval(() => {colision();}, 20);

function stopAll(){
    clearInterval(asteroid_Creator);
};

