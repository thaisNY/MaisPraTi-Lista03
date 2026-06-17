    /*
    Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade
    no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para
    listar o inventário completo. Permita que o usuário informe um item para usar:
    reduza a quantidade em 1 ou exiba "item esgotado" se for zero.
    */ 

    inventario =  {
        espada: 5,
        varinha: 1,
        livroMagico: 5
    }

    console.log("Invetario Inicial")
    for (let propriedade in inventario) {
    console.log(propriedade + ": " + inventario[propriedade]);
    }


    const prompt =  require('prompt-sync')(); 


    while(true){

        let entrada = prompt("Digite o item ou sair: ")

        if (inventario[entrada] > 0){

            inventario[entrada] -= 1
            console.log(`Você usou 1 ${entrada}! Restam: ${inventario[entrada]}`)
        }
        else if(inventario[entrada] == 0 || "sair" ){
            
        
            if(inventario[entrada] == 0){
                console.log("Item esgotado")
            }
            else if (entrada == "sair"){
                console.log("Obrigado por acessar o inventario")
            }
            else{
                console.log("Entrada Invalida")
            }
            break
        }
     
    }


