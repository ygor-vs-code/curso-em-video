var valor = Number(window.prompt('Digite o valor do produto:'))
var desconto = Number(window.prompt('Digite o desconto em %:'))
var vd = valor * desconto / 100
var final = valor - vd

document.write(`O deconto foi de: R$ ${vd.toFixed(2)}. E o produto sairá por: R$ ${final.toFixed(2)}`)