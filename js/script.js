let idade = document.getElementById('idade')
let peso = document.getElementById('peso')

let resultValue = document.getElementById('result')
let resultContainer = document.getElementById('result-container')

let alertContainer = document.getElementById('alert-container')
let container = document.getElementById('container')

function submit() {
    let i = idade.value 
    let p = peso.value 
    let result;

    if (i == ' ' || i == 0 || p == ' ' || p == 0) {
        alertContainer.style.display = 'flex'
        container.style.cssText = 'filter: blur(10px);'
    } else {
        if (i >= 0 && i <= 17) {
            result = p * 40
        } else if (i >= 18 && i <= 54) {
            result = p * 35
        } else if (i >= 55 && i <= 65) {
            result = p * 30
        } else if (i >= 66) {
            result = peso * 25
        }
    
        if (result >= 1000) {
            result = result / 1000
            resultValue.innerHTML = `${result}L`
        } else if (result < 1000) {
            resultValue.innerHTML = `${result}ml`
        }
    
        resultContainer.style.display = 'flex'
    }
}

function back(e) {
    paiUm = e.parentNode
    paiDois = paiUm.parentNode

    paiDois.style.display = 'none'
    container.style.cssText = 'filter: blur(0px);'
}

function reset() {
    idade.value = ' '
    peso.value = ' '
    resultContainer.style.display = 'none'
}