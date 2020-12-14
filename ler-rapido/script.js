var tmp //Variável tempo publica para as funções iniciar e pausar
var pos = 0 //Variável posição para determinar qual objeto da Array "textoSeparado" sera mostrado
function mostraPalavras(){
    var inputTexto = document.getElementById("texto")
    var visor = document.getElementById("visor")
    var textoSeparado = separaPalavras(inputTexto.innerText, ' ')//Separa as palavras da div "texto"
    if(pos < textoSeparado.length){//Testa se o numero da pos é menor que o numero de objetos da array
        visor.innerText = textoSeparado[pos]
        pos++
    }else{//reseta a posição
        pos = 0
    }
}
function separaPalavras(str, separador){//Separa as palavras de um texto usando split
    var arrayDePalavras = str.split(separador)
    return arrayDePalavras
}
function iniciar(){//Inicia o intervalo de repetição a função "mostraPalavras"
    tmp = setInterval(mostraPalavras, 150)
}
function pausar(){//Pausa o intervalo
    clearInterval(tmp)
}
function resetar(){//Reseta a posição da array
    pos = 0
}