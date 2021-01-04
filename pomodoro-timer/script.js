let i = 0
var mm = 0
var ss = 0

function startPauseSwitch(){
    if (i == 0){
        stapau.value = "Pause"
        i = 1
        start()
    }else{
        i = 0
        stapau.value = "Start"
        pause()
    }
}

var time = 1
var counter
function start(){
    counter = setInterval(() => { timer(); }, time)
}

function pause(){
    clearInterval(counter)
}
function reset(){
    clearInterval(counter)
    i = 0
    stapau.value = "Start"
    mm = 00
    ss = 00
    visor.innerText = "00:00"
}

var visor = document.getElementById("visor")
function timer(){
    ss++
    if(ss == 59){
        ss = 0
        mm++
        if(mm == 25){
            pause()
        }
    }

    var format = (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)
    visor.innerText = format
}
let stapau = document.getElementById("stapau")
let res = document.getElementById("res")
function load(){
    stapau.addEventListener("click", startPauseSwitch)
    res.addEventListener("click", reset)
}