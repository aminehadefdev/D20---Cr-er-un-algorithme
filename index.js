var dif = ''
var input
var mul = 10
var random
var container = document.getElementById('container')
var nbTentative = 10
var game = ()=>{
    var radios = document.getElementsByClassName('radio')
    for (let i = 0; i < radios.length; i++) {
        radios[i].addEventListener('click', function(){
            dif = this.value
            if (dif == 'normal') {
                mul = 50
            }else if(dif == 'hard'){
                mul = 100
            }
            random = Math.floor(Math.random() * mul) + 1
            removeRadio()
            addInput()
            valid()
        }) 
    }
}

var removeRadio = ()=>{
    removeElmAndNextElem('easy')
    removeElmAndNextElem('normal')
    removeElmAndNextElem('hard')
}

var removeElmAndNextElem = (elm) => {
    document.getElementById(elm).nextElementSibling.remove()
    document.getElementById(elm).remove()
}

var addInput = ()=>{
    input = document.createElement('input')
    container.appendChild(input)
    input.id = 'input'
}

var valid = ()=>{
    document.addEventListener('keyup', (evt)=>{
        if(evt.keyCode == 13){
            check(input.value, random)
        }
    })
}

var check = (valInput, numberRandom)=>{
    if (nbTentative - 1 <= 0) {
        document.getElementById('p1').textContent = 'game over'
        input.remove()
    }else{
        if (valInput == numberRandom) {
            document.getElementById('p1').textContent = 'gagné!!'
        }else if(valInput < numberRandom){
            document.getElementById('p1').textContent = 'trop petit'
            input.value = ''
            nbTentative--
            addHistoric(valInput)
        }else if(valInput > numberRandom){
            document.getElementById('p1').textContent = 'trop grand'
            input.value = ''
            nbTentative--
            addHistoric(valInput)
        }
    }
}

var addHistoric = (val)=>{
    var p = document.getElementById('p2')
    p.textContent += val + ", "
}
game()