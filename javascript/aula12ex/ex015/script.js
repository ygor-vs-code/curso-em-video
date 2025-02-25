function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('#res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'assets/homem-bebe.jpg')
            }
            else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'assets/homem-jovem.jpg')
            }
            else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'assets/homem-adulto.jpg')
            }
            else {
                //Idoso
                img.setAttribute('src', 'assets/homem-idoso.jpg')
            }
        }
        else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'assets/mulher-bebe.jpg')
            }
            else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'assets/mulher-jovem.jpg')
            }
            else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'assets/mulher-adulto.jpg')
            }
            else {
                //Idoso
                img.setAttribute('src', 'assets/mulher-idoso.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}