/*
Crie um objeto representando um produto com as propriedades: nome, preço,
categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as
propriedades e seus valores. Em seguida, adicione uma nova propriedade
desconto ao objeto e exiba o preço final calculado.
*/  

produto = {
    nome: "Pc gamer",
    preco: 4000,
    categoria: "Eletronico",
    quantEstoque: 20,
    desconto: 235
}

for (let propriedade in produto) {
  console.log(propriedade + ": " + produto[propriedade]);
}

let precoFinal = produto.preco - produto.desconto

console.log("Preço Final: " + precoFinal);