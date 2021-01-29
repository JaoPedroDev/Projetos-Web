var tdList = document.getElementById("tdList");
var txtInput = document.getElementById("txtInput");
var n = 0; // Usado para colocar o id de cada item da lista como um numero em ordem crescente começando do 1

// Cria um checkbox no HTML para cada item da lista
function addOnList(){
    //Cria o elemento
    var li = document.createElement("li");
    li.id = n;
    //li.onclick = lineThrough(n);
    li.appendChild(document.createTextNode(txtInput.value));

    //Adiciona os elementos criados dentro do ul "tdList"
    tdList.appendChild(li);
    //Adiciona 1 em "n" para os próximos ids
    n++;
};

function lineThrough(number){
    var i = document.getElementById(number);
    i.style.textDecoration = "line-through";
};

// EvenListeners
function main(){
    var addB = document.getElementById("addB");

    addB.addEventListener("click", addOnList);
};