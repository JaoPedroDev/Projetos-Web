// Objeto com as propriedades fundamentais do jogo
var GAME = {
    LARGURA: 320,
    ALTURA: 480,

    // Declarar algumas variáveis
    RATIO: null,
    larguraAtual: null,
    alturaAtual: null,
    canvas: null,
    ctx: null,

    iniciar: function(){
        
        // A proporção da largura para a altura
        GAME.RATIO = GAME.LARGURA / GAME.ALTURA;
        // Esses irão mudar quando a tela for redimensionada
        GAME.larguraAtual = GAME.LARGURA;
        GAME.alturaAtual = GAME.ALTURA;
        // O elemento canvas
        GAME.canvas = document.getElementById("canvas");
        // O navegador vai colocar como padrão 320 X 200 se não setado
        GAME.canvas.largura = GAME.LARGURA;
        GAME.canvas.altura = GAME.ALTURA;
        // Contexto do canvas
        GAME.ctx = GAME.canvas.getContext("2d");

        // Esconder a barra de endereço dos navegadores
        GAME.ua = navigator.userAgent.toLowerCase();
        GAME.android = GAME.ua.indexOf('android') > -1 ? true : false;
        GAME.ios = (GAME.ua.indexOf('iphone') > -1 || GAME.ua.indexOf('ipad') > -1 ) ? true : false;
 
        // Chamar a função de redimensionar
        GAME.redimensionar();
    },

    redimensionar: function(){

        GAME.alturaAtual = window.innerHeight;
        // Redimensiona a largura em proporção a nova altura
        GAME.larguraAtual = GAME.alturaAtual * GAME.RATIO;

        // Isso vai criar um espaço extra na pagina
        // assim podemos esconder a barra de endereço
        if (GAME.android || GAME.ios){
            document.body.style.height = (window.innerHeight + 50) + 'px';
        }

        // Define a largura e altura do novo canvas
        // Ainda é 320x480, mas em uma escala diferente
        GAME.canvas.style.width = GAME.larguraAtual + 'px';
        GAME.canvas.style.height = GAME.alturaAtual + 'px';

        // Um timeout pois alguns navegadores não acionam
        // se não tiver um delay
        window.setTimeout(function(){
            window.scrollTo(0,1);
        },1);
    }
};

window.addEventListener('load', GAME.iniciar, false);
window.addEventListener('resize', GAME.redimensionar, false);