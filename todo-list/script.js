var tdList = document.getElementById("tdList");
var txtInput = document.getElementById("txtInput");
var n = 1; // Usado para colocar o id de cada item da lista como um numero em ordem crescente começando do 1

// Cria um checkbox no HTML para cada item da lista
function addOnList(){
    //Cria o elemento
    var checkbox = document.createElement("input");
    //Adiciona as informações do elemento
    checkbox.type = "checkbox";
    checkbox.id = `cb${n}`;
    checkbox.name = "tdItem";

    var label = document.createElement("label");
    label.htmlFor = `cb${n}`;
    label.id = `lb${n}`;
    //Adiciona texto dentro do elemento criado
    label.appendChild(document.createTextNode(txtInput.value));

    var br = document.createElement("br");

    //Adiciona os elementos criados dentro da div "tdList"
    tdList.appendChild(checkbox);
    tdList.appendChild(label);
    tdList.appendChild(br);
    //Adiciona 1 em "n" para os próximos ids
    n++;
};

function isChecked(){
    if(this.checked){
        console.log("checkbox is checked...");
    }
    else{
        console.log("checkbox is not checked...");
    };
};

// EvenListeners
function main(){
    var addB = document.getElementById("addB");
    var cbListener = document.getElementById(`cb${n}`)

    addB.addEventListener("click", addOnList);
    cbListener.addEventListener("change", isChecked())
};