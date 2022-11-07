/*
     Function(contructor)

     *expressão new
     *criar um novo objeto
     *this keyword
*/
// this se refere ao Person que está fora, assim puxando o nome do objeto para o log
function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + " está andando" // + " texto" = concatenar
    }
}
const nixon = new Person("Nixon")
const joao = new Person("João")
console.log(nixon.walk());
console.log(joao.walk());

//new puxa a função como objeto, usando this na função se refere a todos os new com aquele nome