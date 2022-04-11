
function verificar() {
    
    var idade = document.querySelector('#formu').value
    var img = window.document.getElementById('img')
    var div = document.getElementById('verificador')
    var radio = document.getElementById('sexo') // Checkbox masculina
    var data = new Date()
    var ano = data.getFullYear() // Ano atual

    var result = ano - idade 

    if (result == ano) { // Mensagem de erro
        div.innerHTML = '[ERRO] Ano de nascimento não informado'
    }
        else if (radio.checked && result <= 7) { // Homens
            div.innerHTML = `Detectamos homem com ${result} anos.`
            img.src = 'menino1.png'
            div.appendChild(img);
        // Criança de 0 a 7 anos
        } else if (radio.checked && result <= 17) {
            div.innerHTML = `Detectamos homem com ${result} anos.`
            img.src = 'jovem1.png'
            div.appendChild(img);
        // Jovem de 8 a 17 anos
        } else if (radio.checked && result < 65) {
            div.innerHTML = `Detectamos homem com ${result} anos.`
            img.src = 'homem1.png'
            div.appendChild(img);
        // adulto 18 a 64 anos
        } else if (radio.checked && result >= 65) {
            div.innerHTML = `Detectamos homem com ${result} anos.`
            img.src = 'velho.png'
            div.appendChild(img);
        // velho apartir de 65 anos
        }
        else if (result <= 7) {  // Mulheres
            div.innerHTML = `A Detectamos mulher com ${result} anos`
            img.src = 'menina1.png'
            div.appendChild(img);
        } else if (result <= 17) {
            div.innerHTML = `Detectamos Mulher com ${result} anos`
            img.src = 'moça1.png'
            div.appendChild(img);
        } else if (result < 65) {
            div.innerHTML = `Detectamos Mulher com ${result} anos`
            img.src = 'mulher1.png'
            div.appendChild(img);
        } else {
            div.innerHTML = `Detectamos Mulher com ${result} anos`
            img.src = 'senhora.png'
            div.appendChild(img);
        }

}
