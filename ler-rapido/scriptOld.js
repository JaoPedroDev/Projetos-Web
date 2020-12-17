let tmp //Variável tempo publica para as funções iniciar e pausar
var pos = 0 //Variável posição para determinar qual objeto da Array "textoSeparado" sera mostrado
function mostraPalavras(){
    var inputTexto = document.getElementById("texto")
    var visor = document.getElementById("visor")
    var textoSeparado = separaPalavras(inputTexto.innerText, ' ')//Separa as palavras da div "texto"
    
    //Testa se o numero da pos é menor que o numero de objetos da array
    if(pos < textoSeparado.length){
        visor.innerText = textoSeparado[pos]
        pos++
    }else{//reseta a posição
        pos = 0
    }
}
function separaPalavras(string, separador){//Separa as palavras de um texto usando split
    var arrayDePalavras = string.split(separador)
    return arrayDePalavras
}
    var vel;
function iniciar(){//Inicia o intervalo de repetição da função "mostraPalavras"
    vel = document.getElementById('vel').value
    if(vel === ''){
        vel = 500
    }
        tmp = setInterval(mostraPalavras, vel)
}
function pausar(){//Pausa o intervalo
    clearInterval(tmp)
}
function resetar(){//Reseta a posição da array
    pos = 0
}
function change(){
    alert(tmp)
}