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
const person = {
    name: "Nixon",
    age: 26,
    stars: 4.9,
    isSubscribed: true
}

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
console.log(`${student.name} de idade ${student.age} pesa ${student.weight}kg`);