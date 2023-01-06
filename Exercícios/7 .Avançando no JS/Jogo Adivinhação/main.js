//Variáveis

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1;

//Events

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', EnterReset)

//Funções

function handleTryClick(event) {
    event.preventDefault()
    
    const inputNumber = document.querySelector("#inputNumber")
    
    if (Number(inputNumber.value) == randomNumber) {
        ToggleScreen()
        document.querySelector(".screen2 h2").innerText = ` Acertou em ${xAttempts} tentativas`
    }
    
    inputNumber.value = ""
    xAttempts++

}
function handleResetClick() {
    ToggleScreen()
    xAttempts = 1
}
function ToggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
function EnterReset() {
    if (event.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}