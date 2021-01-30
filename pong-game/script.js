var canvas, ctx, ALTURA = 600, LARGURA = 600, frames = 0, divMain = document.getElementById("main"), estadoAtual,

bola = {
    x: LARGURA/2 - 15,
    y: ALTURA/2 - 15,
    largura: 30,
    altura: 30, 
    cor: "#a24b92",
    dirx: -1,
    diry: 1,
    mod: 0,
    velocidade: 50,

    desenha: function(){
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
},

jogador = {
    x: 20,
    y: ALTURA / 2 - 60,
    altura: 120,
    largura: 30,
    velocidade: 10,
    cor: "#a24b92",
    mov: 0,

    desenha: function(){
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
    },

    movimentacao: function(){
        if(this.mov == 0){
            this.y += this.velocidade
        }else if(this.mov == 1){
            this.y -= this.velocidade
        }
    },
},

bot = {
    x: 550,
    y: ALTURA / 2 - 60,
    altura: 120,
    largura: 30,
    velocidade: 10,
    cor: "#a24b92",
    mov: 0,

    desenha: function(){
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
}

function clique(evento){
    //Altera o movimento do jogador entre para cima ou para baixo
    if(jogador.mov == 0){
        jogador.mov = 1;
    }else if(jogador.mov == 1){
        jogador.mov = 0;
    };
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

    jogador.desenha();
    bot.desenha();
    bola.desenha();
    //jogador.movimentacao();
};