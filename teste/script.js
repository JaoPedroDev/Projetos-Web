// Nomear o jogo
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

        // Chamar a função de redimensionar
        GAME.resize();
    },

    resize: function(){
        
    }
}