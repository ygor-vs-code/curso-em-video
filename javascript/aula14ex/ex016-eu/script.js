let i = document.querySelector('#inicio')
let f = document.querySelector('#fim')
let p = document.querySelector('#passo')
let res = document.querySelector('#res')

function calcular() {
    let inicio = Number(i.value)
    let fim = Number(f.value)
    let passo = Number(p.value)

    if (isNaN(inicio) || isNaN(fim) || isNaN(passo) || passo <= 0) {
        alert("Valores inválidos")
    }

    if (inicio < fim) {
        for (num = inicio; num <= fim; num += passo) {
            res.innerHTML += `${num} => `
        }
    }
    else if (inicio > fim) {
        alert("'Inicio' deve ser menor que 'Fim'")
    }
    res.innerHTML += `Fim <br> ------------- <br>`
}

function limpar() {
    res.innerHTML = ''
}

