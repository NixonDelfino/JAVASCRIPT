// function expression
// Function anonymous

//parameter
const sum = function(number1, number2) {
    let total = (number1 + number2);
    return total
}

sum(9, 5) //arguments

let number1 = 34
let number2 = 22
sum(number1, number2)

console.log(`o número 1 é ${number1}`);
console.log(`o número 2 é ${number2}`);
console.log(`a soma é ${sum(number1, number2)}`);

