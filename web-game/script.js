//Variáveis do jogo
var canvas, ctx, ALTURA, LARGURA, frames = 0, maxPulos = 3, velocidade = 6,

chao = {
    y: 550,
    altura: 50,
    cor:'#915816',//Prestar atenção na cor
    
    desenha: function(){
        ctx.fillStyle = this.cor;
        ctx.fillRect(0, this.y, LARGURA, this.altura);
    }
},

bloco = {
    x: 50,
    y: 0,
    altura: 50,
    largura: 50,
    cor: "#000000",
    gravidade: 1.6,
    velocidade: 0,
    forcaDoPulo: 23.6,
    qntPulos: 0,

    atualiza: function(){
        this.velocidade += this.gravidade;
        this.y += this.velocidade;

        if(this.y > chao.y - this.altura){
            this.y = chao.y - this.altura;
            this.qntPulos = 0;
        };
    },

    pula: function(){
        if(this.qntPulos < maxPulos){
            this.velocidade = -this.forcaDoPulo;
            this.qntPulos++
        }
    },

    desenha: function(){
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
},

obstaculos = {
    _obs: [],
    _cores: ["#ffbc1c","#ff1c1c","#ff85e1","#52a7ff","#78ff5d"],
    tempoInsere: 0,

    insere: function() {
        this._obs.push({
            x: LARGURA,
            largura: 30 + Math.floor(20 * Math.random()),
            altura: 30 + Math.floor(120 * Math.random()),
            cor: this._cores[Math.floor(5 * Math.random())]
        });

        this.tempoInsere = 30 + Math.floor(30 *Math.random());
    },

    atualiza: function(){
        if(this.tempoInsere == 0){
            this.insere();
        }else{
            this.tempoInsere--;
        }

        for (var i = 0, tam = this._obs.length; i < tam; i++){
            var obs = this._obs[i];

            obs.x -= velocidade;
            if(obs.x <= -obs.largura){
                this._obs.splice(i, 1);
                tam--;
                i--;
            }
        }
    },

    desenha: function(){
        for (var i = 0, tam = this._obs.length; i < tam; i++){
            var obs = this._obs[i];
            ctx.fillStyle = obs.cor;
            ctx.fillRect(obs.x, chao.y-obs.altura, obs.largura, obs.altura);
        }
    }
}

function clique(evento){
    bloco.pula();
}

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
    canvas.style.border = "1px solid #000";

    ctx = canvas.getContext("2d")
    document.body.appendChild(canvas);

    document.addEventListener("mousedown", clique);

    roda();
}

function roda(){
    atualiza();
    desenha();

    window.requestAnimationFrame(roda);
}

function atualiza(){
    frames++;

    bloco.atualiza();
    obstaculos.atualiza();
}

function desenha(){
    ctx.fillStyle = '#8ebf5e'
    ctx.fillRect(0, 0, LARGURA, ALTURA)

    chao.desenha();
    obstaculos.desenha();
    bloco.desenha();
}

//Inicializa o jogo
main()