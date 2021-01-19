var tdList = document.getElementById("tdList")
var n = 1 // Usado para colocar o id de cada item da lista como um numero em ordem crescente começando do 1

// Cria um checkbox no HTML para cada item da lista
function addOnList(){
    tdList.innerHTML += 
    `<li id="${n}"><input type="checkbox" class="cb">${document.getElementById("txtInput").value}</li>`
    n++
}

// EvenListeners
var addB = document.getElementById("addB")
function load(){
    addB.addEventListener("click", addOnList)
}