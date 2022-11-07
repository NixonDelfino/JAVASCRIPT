//arrow function

/*
const sayMyName = (name) => {
    console.log(name);
}

sayMyName('Nixon')
*/

//callback function - função passando por um parâmetro

function sayMyName(name) {
    console.log('antes de executar a callback');
    name()
    console.log('depois de executar a callback');
}

sayMyName(
    () => {
        console.log('estou em uma callback');
    }
)