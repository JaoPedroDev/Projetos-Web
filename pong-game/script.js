var canvas, ctx, ALTURA, LARGURA, frames = 0, divMain = document.getElementById("main")


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
    
    ctx = canvas.getContext("2d");
    divMain.appendChild(canvas);

    document.addEventListener("mousedown", clique);

    roda();
}

function roda(){
    
};

main();
