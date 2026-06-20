/*
Crie um array de objetos representando produtos com nome, preço e quantidade.
Use forEach para calcular o valor total em estoque de cada produto (preço ×
quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o
estoque.
*/

produtos = [
    {nome: "mause",
     preco: 15,
     quantidade: 40
    },
    
    {nome: "teclado",
     preco: 40,
     quantidade: 20
    },

    {nome: "monitor",
     preco: 5,
     quantidade: 400
    },
]


let totalEstoquePorProduto = 0
let totalEstoque = 0

produtos.forEach(produto => {
   totalEstoquePorProduto = produto.preco * produto.quantidade
   console.log(`${produto.nome} : R$ ${totalEstoquePorProduto}`)
   totalEstoque += totalEstoquePorProduto
});

console.log(`Valor total do Estoque: R$ ${totalEstoque}`)
