// Operador Condicional (Ternário)

// dependendo da condição, nós receberemos valores diferentes

//condição então valor 1 se não valor 2
// condition ? value1 : value 2

// EXs.:

// Café da manhã
let pao = true
let queijo = false

const niceBreakfast = pao || queijo ? 'Café bom' : 'Café ruim'

console.log(niceBreakfast);

//Maior de 18

let age = 5

const canDrive = age >= 18 ? 'Can drive' : "Can't drive"

console.log(canDrive);
