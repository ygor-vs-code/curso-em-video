/* var cat1 = 0
var cat2 = 3
var hip = 5
if (cat1 > 0 && cat2 > 0) {
    hip = (cat1 ** 2 + cat2 ** 2) ** 0.5
    console.log(`${hip}`)
} else if (hip > 0 && cat1 > 0) {
    cat2 = (hip ** 2 - cat1 ** 2) ** 0.5
    console.log(`${cat2}`)
} else if (hip > 0 && cat2 > 0) {
    cat1 = (hip ** 2 - cat2 ** 2) ** 0.5
    console.log(`${cat1}`)
} */

function calcular() {
    var cat1 = Number(document.getElementById('cat1').value)
    var cat2 = Number(document.getElementById('cat2').value)
    var hip = Number(document.getElementById('hip').value)
    var resultado = document.getElementById('resultado')
    var res = 0

    //hipotenusa
    if (cat1 > 0 && cat2 > 0) {
        res = Number((cat1**2 + cat2**2)**0.5)
        resultado.innerHTML = `Hipotenusa = ${res.toFixed(2).replace('.', ',')}`

        //cateto2
    } else if (hip > 0 && cat1 > 0) {
        res = Number((hip**2 - cat1 **2)**0.5)
        resultado.innerHTML = `Cateto = ${res.toFixed(2).replace('.', ',')}`

        //cateto1
    } else if (hip > 0 && cat2 > 0) {
        res = Number((hip**2 - cat2**2)**0.5)
        resultado.innerHTML = `Cateto = ${res.toFixed(2).replace('.', ',')}`
    }
}