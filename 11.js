/*
Implemente uma fila usando um array para simular o atendimento de uma
clínica. Crie as funções chegarPaciente(nome) (enqueue), chamarProximo()
(dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3,
exibindo o estado da fila a cada operação.
*/

//FIFO First in first out

atendimentoClinica = []
let nome

function chegarPaciente(nome) {
    atendimentoClinica.push(nome)
}

function chamarProximo(){
    atendimentoClinica.shift() //remove do comeco
}

function exibirFila(){
    if (atendimentoClinica.length > 0){
        console.log(`Fila Atual: [ ${atendimentoClinica.join(" -> ")} ]`);
    }
    else{
        console.log("Nao tem mais paciente para remover")
    }
}

//Simulando
chegarPaciente("Pedro")
chegarPaciente("Lucas")
chegarPaciente("Julio")
chegarPaciente("Alex")
chegarPaciente("Ally")
exibirFila()
chamarProximo()
chamarProximo()
chamarProximo()
exibirFila()