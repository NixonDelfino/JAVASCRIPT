/*Solicitar o nome do aluno e as 3 notas do bimestre calcular a média daquele aluno.

Se o aluno passou no bimestre, dar os parabéns.

Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação.

Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota.
*/

let name = prompt("Digite seu nome: ")
let nota1 = prompt("Digite sua primeira nota do bimestre")
let nota2 = prompt("Digite sua segunda nota do bimestre: ")
let nota3 = prompt("Digite sua terceira nota do bimestre: ")

nota1 = Number(nota1)
nota2 = Number(nota2)
nota3 = Number(nota3)

let media = (nota1 + nota2 + nota3) / 3

media = media.toFixed(2)

if (media >= 6) {
    alert(`Parabéns, ${name}!!!!! Você tirou ${media} , atingindo a meta necessária ^--^`)

} else {
    alert(`Você não alcançou a média necessária ${name}, você tirou ${media}, mas não se preocupe, continue estudando que conseguirá na prova de recuperação ;D`)
}
