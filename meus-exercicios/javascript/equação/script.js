/* var a = Number(5)
var b = Number(3)
var c = Number(2)

var delt = Number(b**2-4*a*c)

if (delt < 0){
    console.log('Não')
}
else{
    var xa = Number(- b + (delt**0.5)) / (2*a)
    var xo = Number(- b - (delt**0.5)) / (2*a)

    console.log(`S= {${xa}, ${xo}}`)
} */



function calcular() {
    var va = window.document.querySelector('#a')
    var vb = window.document.querySelector('#b')
    var vc = window.document.querySelector('#c')
    var res = window.document.querySelector('#res')
    var delt = Number(vb.value ** 2 - 4 * va.value * vc.value)
    var x1 = Number(- vb.value + (delt ** 0.5)) / (2 * va.value)
    var x2 = Number(- vb.value - (delt ** 0.5)) / (2 * va.value)
    if (delt < 0) {
        res.innerHTML = 'O delta é menor que 0'
    } else {
        res.innerHTML = `S= {${x1.toFixed(2)}, ${x2.toFixed(2)}}`
    }
}