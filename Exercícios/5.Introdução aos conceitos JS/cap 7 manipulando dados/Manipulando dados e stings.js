/*
Prototype

   *prototype-based language
   *prototype chain
   *__proto__
*/
//direto no console
//"Nixon".__proto__
//23.0.__proto__
//true.__proto__

/*
Type conversion (type casting) vs type coersion
*alteração de um tipo de dado para outro tipo de dado
*/

/*
console.log('9' + 5); //coersao de tipo

console.log(Number('9') + 5); //conversão de tipo
*/

//Manipulando Strings e Números
// Trasnformar String em Número e Número em String
/*
let string = "123"
console.log(Number(string));
let number = 321
console.log(String(number));
*/

// Manipulando Strings e Números
// Contar quantos caracteres tem uma palavra e quantos digitos tem um número

/*
let word = "Paralelepípedo"
console.log(word.length);
let number = 1234
console.log(String(number).length);
*/

// Trasnformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
/*
let number = 24651891526.165168462195
console.log(number.toFixed(2).replace(".", ","));
*/

//Transformar letras minúsculas em maiúsculas, Faça o contrário disso também
/*
let word = "Programar é muito bacana"
console.log(word.toLowerCase().toUpperCase());*/

//Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, trasnforme o array em um texto e onde eram espaços, coloque _
/*
let phrase = "Eu quero viver o amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toUpperCase());
*/

// Verificar se o texto contém a palavra Amor
/*
let phrase = "Eu quero Viver!"
console.log(phrase.includes("Viver"));
*/

// Criar Array com construtor

let myArray = new Array('a', 'b', 'c')
console.log(myArray);