/*
* Description: Create/Generate asteroids
* Author: Lucas Mateus
* Created at: 08/04/2023
* Updated at: 29/04/2023
*/

// ============================= //
/* CLASSE GERADORA DE ASTEROIDES */
// Gera o tamanho, posição e velocidade dos asteróides //
// =================================================== //
class Asteroid{

    // ======================== //
    /* ATRIBUTOS DOS ASTEROIDES */
    imgAster; // Imagem do asteroid
    divTag; // Div que contêm a img do asteroid
    SPEED; // Velocidade do asteroid
    arrayAsteroids = []; // Array com todos os asteroids
    gameWindow = document.getElementById("game_window"); // Game Container
    qtdObjcts = 0; // Quantidade de objetos gerados
    arraySize = 0; // Tamanho do array

    // ======================= //

    // ============= //
    /* GET FUNCTIONS */
    // ============= //
    getArraySize(){
        console.log(this.arrayAsteroids.length);
        return this.arrayAsteroids.length;
    }


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
                this.imgAster.src = "./assets/commom_asteroid.png";
            
            // Gera um tamanho random, entre 30px ~ 70px
                this.imgAster.style.width = Math.round( 30 + Math.random() * 40) + "px";
                this.imgAster.style.height = Math.round( 20 + Math.random() * 40) + "px";
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
            
            // Pega o tamanho do array
            this.arraySize = this.getArraySize();

            // Verifica quantos elementos já existem na tela
            if (this.arraySize < 20){

                // Chama o método que cria a img
                this.createAsteroid();
                
                // Chama o método que cria a img
                this.createDiv();

                // Adiciona a img do asteroid na div
                this.divTag.appendChild(this.imgAster);
                
                // Adiciona a div na tela
                this.gameWindow.appendChild(this.arrayAsteroids[this.arraySize]);

                // Aumenta a qtd de elementos criados
                this.qtdObjcts++;
            }else{
                // Remove o elemento apagado da tela
                this.gameWindow.removeChild(this.arrayAsteroids.shift());
            }

        }
    // ----------------------------------------- //
    

    // ------------------------ //
    // Limpa todos os asteroids //
        clearAsteroids(){

            // Remove todos os asteroids da tela
            for(let k = 0; k <= this.getArraySize(); k++){
                // Remove o asteroid
                this.gameWindow.removeChild(this.arrayAsteroids.shift());
            };

        }
    // ------------------------ //

}


// ======================== //
/* IDENTIFICAÇÃO DE COLISÃO */
// ======================== //
function colision(){
      
    /* verificação dos elementos */
    aster.arrayAsteroids.forEach(element => {

        // AMOGUSNAVE
        let sus = document.getElementById("susnave-div");
        
        /* SUSNAVE */
            // Dimensões: X e Y
            let OBJ_AMOGUS = {
                X_originPoint: sus.offsetLeft,
                X_endPoint: sus.offsetWidth + sus.offsetLeft,
                Y_originPoint: sus.offsetTop,
                Y_endPoint: sus.offsetHeight + sus.offsetTop
            };
            console.log(OBJ_AMOGUS);

        /* OBJETO */
            // Dimensões: X e Y
            let OBJ_ASTEROID = {
                    X_originPoint: (element.offsetLeft),
                    X_endPoint: (element.offsetWidth + element.offsetLeft),
                    Y_originPoint: (element.offsetTop),
                    Y_endPoint: (element.offsetHeight + element.offsetTop)
                };
                console.log(OBJ_ASTEROID);

        // Verifica se o PONTO DE ORIGEM do eixo X do AMOGUS está entre o PONTO DE ORIGEM e TÉRMINO do asteroid 
        // OU
        // SE o PONTO DE TÉRMINO do eixo X do AMOGUS está entre o PONTO DE ORIGEM E TÉRMINO do asteroid
        let xColision = (
                        OBJ_AMOGUS["X_originPoint"] >= OBJ_ASTEROID["X_originPoint"] 
                        && OBJ_AMOGUS["X_originPoint"] <= OBJ_ASTEROID["X_endPoint"]
                        ||
                        OBJ_AMOGUS["X_endPoint"] >= OBJ_ASTEROID["X_originPoint"] 
                        && OBJ_AMOGUS["X_endPoint"] <= OBJ_ASTEROID["X_endPoint"]
                        );
        
        // Verifica se o PONTO DE ORIGEM do eixo Y do AMOGUS está entre o PONTO DE ORIGEM e TÉRMINO do asteroid 
        // OU
        // SE o PONTO DE TÉRMINO do eixo Y do AMOGUS está entre o PONTO DE ORIGEM E TÉRMINO do asteroid
        let yColision = (
                        OBJ_AMOGUS["Y_originPoint"] >= OBJ_ASTEROID["Y_originPoint"] 
                        && OBJ_AMOGUS["Y_originPoint"] <= OBJ_ASTEROID["Y_endPoint"]
                        ||
                        OBJ_AMOGUS["Y_endPoint"] >= OBJ_ASTEROID["Y_originPoint"] 
                        && OBJ_AMOGUS["Y_endPoint"] <= OBJ_ASTEROID["Y_endPoint"]
                        );

        /* COLISÕES, PARA TUDO */
        if(xColision && yColision){
            // Para a geração de asteroids
            stopAll();
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


/* Verificador de colisão */
colision_checker = setInterval(() => {colision();}, 20);


function pauseGame(){
    // Remove a animação dos asteroides
    for(let k = 0; k <= aster.getArraySize(); k++){
        // A classe cm animação
        aster.arrayAsteroids[k].style.animation = "none";

        console.log(aster.arrayAsteroids[k]);
    };
}

function stopAll(){
    // Para a geração dos asteroids
    clearInterval(asteroid_Creator);

    // Para a contagem do tempo
    clearInterval(clock);
    
    // Avisa o cabrunco que ele perdeu
    document.getElementById("lose").style.display = "block";

    // Limpa a tela
    aster.clearAsteroids();
};
