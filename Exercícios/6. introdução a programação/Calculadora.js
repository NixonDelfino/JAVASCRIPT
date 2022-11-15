/*
Capturar 2 Números e fazer as operações seguintes:
- Soma
- Subtração
- Multiplicação
- Divisão
- Resto de divisão

e para casa operação mostrar alerta com o resultado.
*/

let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const subtraction = firstNumber - secondNumber
const multiplication = firstNumber * secondNumber
const division = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('Resultado final(Soma): ' + sum)
alert('Resultado final(Subtração): ' + subtraction)
alert('Resultado final(Multiplicação): ' + multiplication)
alert('Resultado final(Divisão): ' + division)
alert('Resultado final(Resto da Divisão): ' + restDiv)