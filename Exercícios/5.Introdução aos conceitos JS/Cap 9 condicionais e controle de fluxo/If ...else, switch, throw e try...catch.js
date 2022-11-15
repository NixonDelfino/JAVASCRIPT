// Control flow

// if...else

let temperature = 37.2
let highTemperature = temperature >= 37.5
let midTemperature = temperature < 37.5 && temperature >=37

if(highTemperature){
    console.log('Está com febre alta');
} else if(midTemperature){
    console.log('Está com pouca febre');
} else{
    console.log('Não está com febre');
}

// switch
//break opcional, se não tiver ele continua até achar um

function calculate(number1, operator, number2) {
    let result = 0

switch (operator) {
    case '+':
        result = number1 + number2
        break
    case '-':
        result = number1 - number2
        break
    case '*':
        result = number1 * number2
        break
    case '/':
        result = number1 / number2
        break
    default:
        console.log('não implementado');
        break;
    }
    return result
}

console.log(calculate(4, '/', 8));

// throw

function sayMyName(name = '') {
    if (name === ''){
        throw 'Nome é obrigatório'
    }

    console.log(name);
}

// try...catch
try{
    sayMyName('Nixon')
} catch(e){
    console.log(e);
}
console.log('após o try/catch');