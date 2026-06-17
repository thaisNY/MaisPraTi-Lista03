/*
Crie um objeto representando um livro com as propriedades: titulo, autor, preco e paginas. 
Use o laço for...in para percorrer o objeto e exibir o nome de cada propriedade 
junto com o seu valor. Depois, adicione uma nova propriedade 
chamada taxaEntrega ao objeto e exiba o preço total do livro (preço do livro + taxa de entrega)
*/

//Criar o objeto

livro = {
    titulo: "O Alquimista",
    autor: "Paulo Coelho",
    preco: 40,
    paginas: 224,
    taxaEntrega: 120
}

for (let propriedade in livro) {
  console.log(propriedade + ": " + livro[propriedade]);
}

let precoTotal = livro.preco + livro.taxaEntrega

console.log("Preço Total com Entrega: " + precoTotal);