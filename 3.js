/*
Crie um objeto representando um funcionário com nome, cargo, salário e anos de
experiência. Use for...in para listar todos os dados. Com base nos anos de
experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5
anos = 10%, acima de 5 anos = 15%.
*/

funcionario1 = {
    nome: "Pedro",
    cargo: "CTO",
    salario: 32000,
    anosExperiencia: 13
}


for (let propriedade in funcionario1) {
  console.log(propriedade + ": " + funcionario1[propriedade]);
}

let bonosAnual

if(funcionario1.anosExperiencia <= 2){
    bonosAnual = funcionario1.salario  * 0.05
    console.log("Bônus anual: " + bonosAnual)
}
else if(funcionario1.anosExperiencia>= 3 && funcionario1.anosExperiencia<=5){
    bonosAnual = funcionario1.salario * 0.10
    console.log("Bônus anual: " + bonosAnual)
}
else{
    bonosAnual = funcionario1.salario * 0.15
    console.log("Bônus anual: " + bonosAnual)
}
