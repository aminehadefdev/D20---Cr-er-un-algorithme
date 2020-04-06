
var dif = ''
var input
var mul = 10
var random
var his = []
var container = document.getElementById('container')
var nbTentative = 10
var game = ()=>{
    var radios = document.getElementsByClassName('radio')
    for (let i = 0; i < radios.length; i++) {
        radios[i].addEventListener('click', function(){
            dif = this.value
            if (dif == 'normal') {
                mul = 50
                random = Math.floor(Math.random() * mul)
            }else if(dif == 'hard'){
                mul = 100
                random = Math.floor(Math.random() * mul)
            }
            removeRadio()
            addInput()
            valid()
        }) 
    }
}

var removeRadio = ()=>{
    document.getElementById('easy').nextElementSibling.remove()
    document.getElementById('easy').remove()
    document.getElementById('normal').nextElementSibling.remove()
    document.getElementById('normal').remove()
    document.getElementById('hard').nextElementSibling.remove()
    document.getElementById('hard').remove()
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
        document.getElementById('input').remove()
    }else{
        if (valInput == numberRandom) {
            document.getElementById('p1').textContent = 'gagnier!!'
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