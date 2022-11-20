/*
        Jogo da adivinhação

Apresente a mesnagem ao usuário:
"Adivinhe o número que estou pensando? Está entre 0 e 10"

Crie uma lógica para gerar um número aleatório e verificar se o npumero digitado é o mesmo que o aleatório gerado pelo sistema.

Enquanto o usuário não adivinhar o número, mostrar a mensagem: "Erro, tente novamente: "

Caso o usuário acerte o número, apresentar a mensagen: " Parabéns! você a divinhou o número em x tentativas"

substitua o "x" pelo número de tentativas
*/

let result = prompt("Adivinhe o nùmero que estou pensando. Está entre 0 e 10.")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1;

while (Number(result) != randomNumber) {
    result = prompt("Erro, Tente Novamente: ")
    xAttempts++
}

alert(`Parabéns!!! você adivinhou em ${xAttempts} tentativas, o número que pensei foi ${randomNumber}`)