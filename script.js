const bar1 = document.querySelector('[activeBar1]')
const bar2 = document.querySelector('[activeBar2]')
const bar3 = document.querySelector('[activeBar3]')

const circle1 = document.querySelector('[circle1]')
const circle2 = document.querySelector('[circle2]')
const circle3 = document.querySelector('[circle3]')

function activeItem(barra, circulo) {
    barra.classList.add('b-ativo')
    circulo.classList.add('c-ativo')
}

function offItem(barra, circulo){
    barra.classList.remove('b-ativo')
    circulo.classList.remove('c-ativo')

}

function condicao() {
   /* if(programar && jogar == 1){
        offItem(bar3, circle3)
    }else if(jogar && namorar == 1){
        offItem(bar1, circle1)
    }else if(namorar && programar == 1){
        offItem(bar2, circle2)
    }else if(programar && jogar && namorar == 1){
        offItem(bar1, circle1) || offItem(bar2, circle2)
    }*/

    if(programar == 1){
        if(jogar == 1){
            offItem(bar3, circle3)
        }else if(namorar == 1){
            offItem(bar2, circle2)
        }
    }else if(jogar == 1){
        if(programar == 1){
            offItem(bar3, circle3)
        }else if(namorar == 1){
            offItem(bar1, circle1)
        }
    }else if(namorar == 1) {
        if(programar == 1){
            offItem(bar2, circle2)
        }else if(jogar == 1){
            offItem(bar1, circle1)
        }else{
            offItem(bar1, circle1),offItem(bar3, circle3),offItem(bar3, circle3)
        }
    }
}

/*if(bol1 && bol2 == true){
        offItem(bar3, circle3)
    }else if(bol2 && bol3 == true){
        offItem(bar1, circle1)
    }else if(bol3 && bol1 == true){
        offItem(bar2, circle2)
    }else if(bol3 && bol1 && bol2 == true){
        offItem(bar2, circle2) || (bar1, circle1)
    }*/

var bol1 = true
var bol2 = true
var bol3 = true
var programar
var jogar
var namorar

bar1.onclick = () => { 
    if(bol1) {
        activeItem(bar1, circle1)
        bol1 = false
        var programar = 1
        console.log(programar)
    }else{
        offItem(bar1, circle1)
        bol1 = true 
        var programar = 0
        console.log(programar)
    } 
    if(programar == 1){
        if(jogar == 1){
            offItem(bar3, circle3)
        }else if(namorar == 1){
            offItem(bar2, circle2)
        }else{
            offItem(bar2, circle2)
        }
    }
}


bar2.onclick = () => {
    if(bol2) {
        activeItem(bar2, circle2)
        bol2 = false
        var jogar = 1
        console.log(jogar)
    }else{
        offItem(bar2, circle2)
        bol2 = true
        var jogar = 0
        console.log(jogar)
    } 
    if(namorar == 1){
            offItem(bar2, circle2)
        }else if(jogar == 1){
        if(programar == 1){
            offItem(bar3, circle3)
        }else if(namorar == 1){
            offItem(bar1, circle1)
        }else{
            offItem(bar3, circle3)
        }
    }
    
}

bar3.onclick = () => {
    if(bol3) {
        activeItem(bar3, circle3)
        bol3 = false
        var namorar = 1
        console.log(namorar)
    }else{
        offItem(bar3, circle3)
        bol3 = true
        var namorar = 0
        console.log(namorar)
    }
    if(namorar == 1) {
        if(programar == 1){
            offItem(bar2, circle2)
        }else if(jogar == 1){
            offItem(bar1, circle1)
        }else{
            offItem(bar1, circle1)
        }
    }
}
