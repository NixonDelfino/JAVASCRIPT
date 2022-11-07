//arrow function

/*
const sayMyName = (name) => {
    console.log(name);
}

sayMyName('Nixon')
*/

//callback function

function sayMyName(name) {
    console.log(name);
}

sayMyName(
    () => {
        console.log('estou em uma callback');
    }
)