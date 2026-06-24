/*
Implemente uma pilha usando um array para simular o histórico de um
navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual()
(peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a
cada operação.
*/

//LIFO Last in first out

// 1. Declare o array do histórico aqui
historico = []
let pagina
// 2. Crie a função para visitar uma página
function visitar(pagina) {
   historico.push(pagina)
}

//3.Voltar a pagina
function voltar() {
    let paginaRemovida = historico.pop();
}

//4. Atual lembrando que array conta a parti do 0
function paginaAtual() {
    //  Verifique se o histórico não está vazio antes de olhar
    if (historico.length > 0) {
        let atual = historico[historico.length - 1]
        console.log(`Página Atual: ${atual}`);
    } else {
        console.log("Nenhuma página no histórico.")
    }
}

//Simulando

visitar("pagina british council")
visitar("pagina instagram")
visitar("pagina facebook")
visitar("pagina g1")
paginaAtual()
voltar()
voltar()
paginaAtual()