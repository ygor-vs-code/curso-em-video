// delta = b²-4.a.c
// x = -b +- raiz de delta /2.a

var a = Number(5)
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
}

