var canvas, ctx, ALTURA, LARGURA, frames = 0, divMain = document.getElementById("main"), estadoAtual,


jogador = {
    x:20,
    y:30,
    altura: 60,
    largura: 20,
    velocidade: 5,
    cor: "#a24b92",
    indoParaBaixo: 0,
    indoParaCima: 1,

    desenha: function(){
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
    },

    paraCima: function(){
        this.y -= this.velocidade
    },

    paraBaixo: function(){
        this.y += this.velocidade
    }
}

function clique(evento){
    jogador.paraBaixo();

    /*if(estadoAtual == indoParaBaixo){
        // Fazer o jogador ir pra cima
        jogador.paraCima();
        estadoAtual = indoParaCima;
    }else if(estadoAtual == indoParaCima){
        // Fazer o jogador ir pra baixo
        jogador.paraBaixo();
        estadoAtual = indoParaBaixo;
    }*/
};

function main(){
    ALTURA = window.innerHeight;
    LARGURA = window.innerWidth;

    if(LARGURA >= 500){
        LARGURA = 600;
        ALTURA = 600;
    }

    canvas = document.createElement("canvas");
    canvas.width = LARGURA;
    canvas.height = ALTURA;
    
    ctx = canvas.getContext("2d");
    divMain.appendChild(canvas);

    document.addEventListener("mousedown", clique);

    estadoAtual = jogador.indoParaBaixo;

    roda();
}

function roda(){
    desenha();

    requestAnimationFrame(roda);
};


function atualiza(){

};

function desenha(){
    ctx.fillStyle = "#21283d";
    ctx.fillRect(0, 0, LARGURA, ALTURA);

    ctx.fillStyle = "#b252a1";
    ctx.fillRect(LARGURA/2 + 3, 0, 3, ALTURA);

    jogador.desenha();
};

main();