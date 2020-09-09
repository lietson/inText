(function(){
    'use strict'

    var texto = document.getElementById("texto");
    var resultado = document.getElementById("resultado");
    var btn_converter = document.getElementById("converter")
    var like = document.querySelector(".like")
    var adoro = document.querySelector(".adoro")
    var nao_like = document.querySelector(".naolike")

    btn_converter.addEventListener('click', () => {
        let valor = texto.value.split('').reverse();
        resultado.value = valor.join('');
    })

})()