// estrutura de repetiçao
//for

/*
for(let i = 10; i > 0; i--){
    if(i===5){
        continue;
    }
    console.log(i);
}
*/

//while

/*
let i = 398576238756
while (i > 10) {
    console.log(i);

    i /= 40;
}
*/

//for...of

/*
let name = 'Nixon'
let names = ['João', 'Pedro', 'Rodrigo']

for(let name of names){
    console.log(name);
}
*/

// for...in

let person = {
    name: 'John',
    age: 30,
    weight: 88.6,
}

for(let property in person){
    console.log(property);
    console.log(person[property]);
}