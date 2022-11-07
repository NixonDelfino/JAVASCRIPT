//1. Declare uma variável de nome weight
//let weight;

//2. Que tipo de dado é a variável acima?
//console.log(typeof weight);

/*3. Declare uma variável e atribua valores para cada um dos dados:
        *name: String
        *age: Number (integer)
        *stars: Number (float)
        *isSubscribed: Boolean
*/

/*const person = {
    name: "Nixon",
    age: 26,
    stars: 4.9,
    isSubscribed: true
}*/

//4. A variável student abaixo é de que tipo de dado?
/*let student = {};
console.log(typeof student);*/

//4.1. Atribua a ela as mesmas propriedades e valores do exercício 3.

let student = {
    name: "Nixon",
    age: 26,
    stars: 4.9,
    isSubscribed: true,
    weight: 96.4
};

/*4.2. Mostre no console a seguinte mensagem:
<name> de idade <age> pesa <weight> kg.*/

/*console.log(`${student.name} de idade ${student.age} pesa ${student.weight}kg`);*/

/*5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor ou seja, somente um Array vazio*/

//let students = []

/*6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4.*/

/*let students = [
        student,
]

console.log(students);*/

/*7. coloque no console o valor da posição zero do array acima*/

//console.log(students[0]);

/*8. Crie um novo student e coloque na posição 1 do Array students*/

let student1 = {
    name: "Laura",
    age: 27,
    stars: 5,
    isSubscribed: false,
    weight: 85.3
}

students = [
    student,
    student1
]
console.log(students);

/*9. sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se acertou*/

console.log(a);
var a = 1