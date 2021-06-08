const playerPointsHtml = document.querySelector("#player-points");
const computerPointsHtml = document.querySelector("#computer-points");
const roundHtml = document.querySelector("#round-points");
const diceHtml = document.querySelector("#dice-points");

let roundPoints = 0;
let dicePoints = 0;
let actual = 0;
let globalPoints = [0,0];
let maxPoint = 100;

function update(){
    playerPointsHtml.innerHTML = globalPoints[0] ;
    computerPointsHtml.innerHTML = globalPoints[1];
    roundHtml.innerHTML = roundPoints;
    diceHtml.innerHTML = dicePoints;
}

function endGame(){
        globalPoints[actual] += roundPoints;
        roundPoints = 0;
        update();
        if(globalPoints[actual] >=maxPoint){
            alert("Wygrawa gracz numer " + (actual+1) + "!!!");
        }
        actual++;
        if(actual === 2){
            actual = 0;
        }
        highLightImage();
}

function highLightImage(){
        document.querySelector("#image"+ actual).classList.add("image-active");
        let other = 0 === actual ? 1:0; 
        document.querySelector("#image"+ other).classList.remove("image-active");
}

function throwDice (){
    dicePoints = Math.floor(Math.random()*6+1);
    roundPoints+= dicePoints;
    if(dicePoints===1){
        roundPoints = 0;
        endGame();
    }
    update();
}

document.querySelector("#throw").addEventListener("click",throwDice);
document.querySelector("#end").addEventListener("click",endGame);