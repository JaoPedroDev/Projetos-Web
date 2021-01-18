var tdList = document.getElementById("tdList")
var n = 1
function addOnList(){
    tdList.innerHTML += 
    `<li id="${n}"><input type="checkbox" class="cb">${document.getElementById("txtInput").value}</li>`
    n++
}

var addB = document.getElementById("addB")
function load(){
    addB.addEventListener("click", addOnList)
}