/*
Crie uma lista de pacientes
Cada paciente deverá conter
    nome
    idade
    peso
    altura

Escreva uma lista contendo o nome dos pacientes.
*/

const patients = [
    {
        name: "Luiz",
        age: 20,
        weight: 100,
        height: 190,
    },
    {
        name: "Roberta",
        age: 29,
        weight: 75,
        height: 164,
    },
    {
        name: "Leandro",
        age: 46,
        weight: 89,
        height: 175,
    },
]

let patientsNames = []
let patientsAges = []
let patientsWeight = []
let patientsHeight = []

for(let patient of patients){
    patientsNames.push(patient.name)
}
for(let patient of patients){
    patientsAges.push(patient.age)
}
for(let patient of patients){
    patientsWeight.push(patient.weight)
}
for(let patient of patients){
    patientsHeight.push(patient.height)
}
alert(`${patientsNames[0]} tem ${patientsAges[0]} anos, tem ${patientsHeight[0]}cm de altura e pesa ${patientsWeight[0]}kg`)
alert(`${patientsNames[1]} tem ${patientsAges[1]} anos, tem ${patientsHeight[1]}cm de altura e pesa ${patientsWeight[1]}kg`)
alert(`${patientsNames[2]} tem ${patientsAges[2]} anos, tem ${patientsHeight[2]}cm de altura e pesa ${patientsWeight[2]}kg`)


/*
dada uma lista de pacientes, descubra o IMC de cada paciente e imprima:
"Paciente X possui o IMC de: Y"
Onde X é o nome do paciente e Y é o IMC desse paciente
Crie uma função para fazer o cálculo de IMC
peso / (altura*altura) = IMC
*/

function IMC(weight, height) {
    return (weight / ((height / 100 ) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
    return `
    Paciente ${patient.name} possui o IMC de ${IMC(patient.weight, patient.height)}
    `  
}

for (let patient of patients) {
    alert(printPatientIMC(patient))
}