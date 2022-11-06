/*
usar ' quando " no texto
usar " quando ' no texto
usar ` quando ' e " no texto e também permite multilinha, também permite expressôes
*/

console.log('"Nixon"');

console.log("'Nixon'");

console.log(`"'"Nixon"'"`);

console.log(`Nixon
Nixon
Nixon"'`);

console.log(`Nixon ${1 + 1}`);

/*Números*/

console.log(12 === Infinity);
console.log(33);
console.log(12/4);

/*Boolean - Booleanos (true or false)*/

console.log(true);
console.log(false);

/*Undefined(indefinido)*/

console.log(undefined);


/*Null(nulo)*/

console.log(null);

/*Object (estrutural)
  Propriedades/Atributos
  Funcionalidades/Métodos
  entre {}
*/

console.log({
    name: "Nixon",
    idade: 26,
    andar: function()  {
        console.log('andar')
    }
})

/*Array (vetores)
  uma lista, agrupamento de dados
  [Nixon, 26]
*/

console.log([
  "Nixon", 
36, 
"Brasil"]);

/*
@Data Types:
  -Primitive / Primitive value
  -Structural
  -Structural Primitive

  #Primitives(não objeto, imutável)
    -String
    -Number
    -Boolean
    -undefined
    -Symbol
    -BigInt

  #Structural
    -Object
        -Array
        -Map
        -Set
        -Date
        -...
    -Function
  
  #Structural Primitive
    -null
*/