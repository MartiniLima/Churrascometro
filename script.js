let inAdultos = document.getElementById("adultos")
let inCriancas = document.getElementById("criancas")
let inDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular(){
    console.log("calculando...")

    let adultos = inAdultos.value
    let criancas = inCriancas.value
    let duracao = inDuracao.value

    let qtdCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)

    let qtdBebida = bebidaPP(duracao) * adultos +(bebidaPP(duracao) / 2 * criancas)

    let qtdCerveja = cervejaPP(duracao) * adultos


    resultado.innerHTML = `<b><p>${qtdCarne}g de Carne</p></b>`
    resultado.innerHTML += `<b><p>${qtdBebida}ml de Agua, Refri e/ou Suco</p></b>`
    resultado.innerHTML += `<b><p>${qtdCerveja}ml de Cerveja</p></b>`
}

function carnePP(duracao){
    if(duracao >= 6){
        return  650
    } else{
        return 400
    }
}

function bebidaPP(duracao){
    if(duracao >= 6){
        return 1500
    }
    else{
        return 1000
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000
    }else{
        return 1200
    }
}