let canvas = document.getElementById("cobrinha");
let context = canvas.getContext ("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box.
    y: 8 * box
}

function criarBG() {
    context.fillStyle = "Lightgree";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
    for(i=0; i < snake,length; i++);
        context.fillStyle = "green";
        context.fillRect (snake[1].x, snake[i].y, box, box);
}

criarBG();
criarCobrinha