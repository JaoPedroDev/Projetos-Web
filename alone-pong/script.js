var frames = 0


function main(){
    roda();
}

function roda(){
    frames++;
    desenha();
    atualiza();

    requestAnimationFrame(roda);
}

function atualiza(){

}

function desenha(){
    // Background
    GAME.ctx.fillStyle = "#21283d";
    GAME.ctx.fillRect(0, 0, GAME.LARGURA, GAME.ALTURA);

    GAME.ctx.fillStyle = "#ffff";
    GAME.ctx.fillRect(12, 12, 15, 10);

}

window.addEventListener('load', main, false);