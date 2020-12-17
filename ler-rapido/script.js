var ini = document.getElementById('ini')
var pau = document.getElementById('pau')
var res = document.getElementById('res')
var texto = document.getElementById("texto")
var visor = document.getElementById("visor")
var textoSeparado = separaPalavras(texto.innerText, ' ')
var tmp
var pos = 0
function principal(){
    if(pos < textoSeparado.length){
        console.log(tmp)
        visor.innerText = textoSeparado[pos]
        pos++
    }else{
        pos = 0
    }
}
//Separa as palavras de um texto usando split
function separaPalavras(string, separador){
    var arrayDePalavras = string.split(separador)
    return arrayDePalavras
}
function iniciar(){
    tmp = setInterval(principal, 1000)
}
function pausar(){
    clearInterval(tmp)
}
function resetar(){
    pos = 0
    visor.innerText = textoSeparado[0]
}
function carregar(){
    ini.addEventListener("click", iniciar)
    pau.addEventListener("click", pausar)
    res.addEventListener("click", resetar)
}
window.addEventListener("load", carregar)
