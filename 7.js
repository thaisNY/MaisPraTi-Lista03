/*
Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar
cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use
forEach para calcular e exibir separadamente a média dos aprovados e a média
dos reprovados.
*/

classe = [
    {nome: "Pedro",
     nota: 8   
    },
    
    {nome: "Igor",
     nota: 6.5   
    },

    {nome: "Lucas",
     nota: 2.5   
    },

    {nome: "Mirella",
     nota: 9 
    },

    {nome: "Thais",
     nota: 10
    },

    {nome: "Thiago",
     nota: 2
    }
]

for (let aluno of classe) {

    if(aluno.nota >= 7){
        console.log(`${aluno.nome} : Aprovado`)
    }
    else if(aluno.nota >=3 && aluno.nota < 7){
        console.log(`${aluno.nome} : Recuperação`)
    }
    else{
        console.log(`${aluno.nome} : Reprovado`)
    }
    
}

let total = 0
let somaAprovado = 0
let somaReprovados = 0
let i = 0
let j = 0

classe.forEach(aluno => {
   if(aluno.nota >= 7){
        somaAprovado += aluno.nota
        i += 1
        
    }
    else if(aluno.nota < 3){
        somaReprovados += aluno.nota
        j += 1
        
    }
});

console.log(`Media dos aprovados ${somaAprovado / i}`)
console.log(`Media dos reprovados ${somaReprovados / j}`)
