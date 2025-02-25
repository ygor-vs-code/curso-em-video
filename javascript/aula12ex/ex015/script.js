function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        
    }

}