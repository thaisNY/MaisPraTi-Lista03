/*
Crie um array de objetos onde cada objeto representa um contato com nome,
telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita
buscar um contato pelo nome usando for...of e exiba os dados encontrados ou
uma mensagem de "não encontrado".
*/

agenda = [
    {nome: "Pedro",
     telefone: "81-97172-3231",
     email: "example@gmail.com"
    },
    
    {nome: "Lucas",   
     telefone: "81-99192-3231",
     email: "example2@gmail.com"
    },

    {nome: "Larissa",
     telefone: "81-9913-3231",
     email: "example3@gmail.com"
    }
]



agenda.forEach(contato => {
   console.log(`Nome: ${contato.nome} telefone:  ${contato.telefone} e-mail: ${contato.email}`)
   
});


const prompt =  require('prompt-sync')();
buscar = prompt("Digite o nome do contato que deseja buscar: ")

let encontrado = false

for (let contato of agenda) {

    if( contato.nome == buscar){
        encontrado = true
        console.log(`Nome: ${contato.nome} telefone:  ${contato.telefone} e-mail: ${contato.email}`)
    }
}

if (!encontrado){
    console.log("Nao encontrado")
}