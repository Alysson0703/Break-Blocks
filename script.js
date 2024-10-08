const canvas = document.getElementById('gameCanvas')

const ctx = canvas.getContext('2d');

canvas.widht = 480;
canvas.height = 320;

let raqueteAltura = 10;
let raqueteLargura = 75;
let raquete = (canvas.widht - raqueteLargura) /2;

let bola = 10;
let x = canvas.widht / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

const linha = 3;
const coluna = 5;
const largura = 75;
const altura = 20;
const padding  = 10;
const blocotop = 30;
const esquerda = 30;

const blocos = [];
for(let c=0; c < coluna; c++){
    blocos[c] = [];
    for (let r=0; r < linha; r++){
        blocos[c][r] = {
            x: 0, y: 0, status: 1
        };
    }
}

function desenhoBola(){
    ctx.beginPath();
    ctx.arc(x, y, bola, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath()
}

function desenhoRaquete(){
    ctx.beginPath();
    ctx.rect(raquete, canvas.height - raqueteAltura, raqueteLargura, raqueteAltura);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath()
}

function desenhoBlocos(){
    for(let c=0; c < coluna; c++){
        for(let r=0; r < linha; r++){
            if(blocos[c][r].status == 1){
                const blocoX = c * (largura + padding) + esquerda;
                const blocoY = r * (largura + padding) + blocotop;
                blocos[c][r].x = blocoX;
                blocos[c][r].y = blocoY;
                ctx.beginPath();
                ctx.rect(blocoX, blocoY, largura, altura);
                ctx.fillStyle = "#0095DD"
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function colisao(){
    for()
}