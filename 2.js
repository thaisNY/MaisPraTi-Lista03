/*
Crie dois objetos representando personagens de um jogo, cada um com as
propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de
cada personagem lado a lado e determine qual deles tem maior poder total
(soma de vida + ataque + defesa).
*/

personagem1 = {
    nome: "Patamon",
    vida: 200,
    ataque: 60,
    defesa: 120
}

personagem2 = {
    nome: "Etmon",
    vida: 50,
    ataque: 120,
    defesa: 50
}

for (let propriedade in personagem1) {
  console.log(propriedade + ": " + personagem1[propriedade]);
}

for (let propriedade in personagem2) {
  console.log(propriedade + ": " + personagem2[propriedade]);
}

forca1 = personagem1.vida + personagem1.ataque + personagem1.defesa
forca2 = personagem2.vida + personagem2.ataque + personagem2.defesa

if (forca1 > forca2){
    console.log("Personagem mais forte: " + personagem1.nome);
}