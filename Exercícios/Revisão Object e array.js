//Object

const person = {
    name: 'Nixon',
    age: 26,
    weight: 90.3,
    isAdmin: true
}
console.log(`${person.name} tem ${person.age} anos e ${person.weight} KG`);

//Array

const animals = [
    'Lion',
    'Monkey',
    {
        name: 'Cat',
        age: 3,
        color: 'gray'
    }    
]
//acessar valores dentro so array

console.log(animals[2].color)
console.log(animals[0]);