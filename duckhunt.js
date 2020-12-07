var richtingen = ["N", "O", "Z", "W", "NO", "NW", "ZO", "ZW"];
var duck  = document.getElementById("duck");
var misscounter = document.getElementById("achtergrond");
var duckTop = 250;
var duckLeft = 500;
var duckRight = 125;
var speed = 25;
var hitpunt = 0;
var misspunt = 0;



function eventHandeling (){
    setInterval (moveDuck, 500);
}

function positionDuck (object){
    duck.style.top = duckTop + 'px';
    duck.style.left = duckLeft + 'px';
}

positionDuck(duck); 
eventHandeling();

function moveDuck() {

    var random = richtingen [Math.floor(Math.random()*richtingen.length)];

    switch (random) {
        case "N":
            var moveN = parseInt (duck.style.top, 10)-speed;
            duck.style.top = moveN + 'px';
            break;

        case "O":
            var moveO = parseInt (duck.style.left, 10)+speed;
            duck.style.left = moveO + 'px';
            break;

        case "Z":
            var moveZ = parseInt (duck.style.top, 10)+speed;
            duck.style.top = moveZ + 'px';
            break;

        case "W":
            var moveW = parseInt (duck.style.left, 10)-speed;
            duck.style.left = moveW + 'px';
            break;

        case "NO":
            var moveN = parseInt (duck.style.top, 10)-speed;
            duck.style.top = moveN + 'px';
            var moveO = parseInt (duck.style.left, 10)+speed;
            duck.style.left = moveO + 'px';            
            break;

        case "NW":
            var moveN = parseInt (duck.style.top, 10)-speed;
            duck.style.top = moveN + 'px';
            var moveW = parseInt (duck.style.left, 10)-speed;
            duck.style.left = moveW + 'px';
            break;

        case "ZO":
            var moveZ = parseInt (duck.style.top, 10)+speed;
            duck.style.top = moveZ + 'px';
            var moveZ = parseInt (duck.style.top, 10)+speed;
            duck.style.left = moveO + 'px';
            break;

        case "ZW":
            var moveZ = parseInt (duck.style.top, 10)+speed;
            duck.style.top = moveZ + 'px';
            var moveW = parseInt (duck.style.left, 10)-speed;
            duck.style.left = moveW + 'px';            
            break;

    }
}

duck.onclick = SchietenHit;
misscounter.onclick = SchietenMiss;


function SchietenMiss(){
    misspunt++;
    miss.innerHTML = misspunt;
    if(misspunt == 20){
        alert("Je hebt verloren Je punten: " + hitpunt + " Hit " + misspunt + " Miss ");
    }
}

function SchietenHit(event){
    hitpunt++;
    hit.innerHTML = hitpunt;
    if(hitpunt == 20){
        alert("Je hebt gewonnen. Je punten: " + hitpunt + " Hit " + misspunt + " Miss ");
    }
    event.stopPropagation();
}

console.log(misspunt);
console.log(hitpunt);