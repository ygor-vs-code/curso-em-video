// Atribuições simples

var a = 5 + 2
var b = a - 8
var c = b * a + 2
var d = c / b % 2
var e = d + 5 / 6 ** 5


document.write(`var a == ${a} <br/> var b == ${b} <br/> var c == ${c} <br/> var d == ${d} <br/> var e == ${e} <br/>`)


// Auto-atribuições

var num = 8
num += 2
num -=5
num **=5
num /=55
num %=6

document.write(`${num.toFixed(2)} <br/>`)

//Incremento

var n = 10
n++
n--

document.write(n)