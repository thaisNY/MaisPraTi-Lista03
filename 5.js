let orcamento = {
    alimentacao : {planejado: 400, gasto: 800},
    transporte : {planejado: 200, gasto: 100},
    lazer : {planejado: 100, gasto: 400},
    saude : {planejado: 1000, gasto: 1000}
}


let somaPlanejada = 0;
let somaGasto = 0;

for (let categoria in orcamento){
    let planejado = orcamento[categoria].planejado
    let gasto = orcamento[categoria].gasto

    somaPlanejada += planejado
    somaGasto += gasto

    if (planejado >= gasto){
        console.log(`Na categoria ${categoria} ficou dentro do orcamento`) 
    }
    else{
        console.log(`Na categoria ${categoria} ficou fora do orcamento`)
    }
}


let balanco = somaPlanejada - somaGasto

if (balanco > 0){
    console.log(`Foi planejado gastar R$ ${somaPlanejada} e foi gasto R$ ${somaGasto}, ficando o balanço positivo em R$ ${balanco}`)
}
else if(balanco == 0){
    console.log(`Foi planejado gastar R$ ${somaPlanejada} e foi gasto R$ ${somaGasto}, ficando o balanço nulo`)
}
else {
    console.log(`Foi planejado gastar R$ ${somaPlanejada} e foi gasto R$ ${somaGasto}, ficando o balanço negativo em R$ ${balanco * -1}`)
}