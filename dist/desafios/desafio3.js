"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let result = 0;
limparSaldo();
function somarAoSaldo(soma) {
    if (campoSaldo) {
        result += soma;
        campoSaldo.innerHTML = result.toString();
        limparCampoSoma();
    }
}
function limparCampoSoma() {
    soma.value = "";
}
function limparSaldo() {
    if (campoSaldo) {
        result = 0;
        campoSaldo.innerHTML = result.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
}
if (botaoLimpar) {
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}
// <h4>Valor a ser adicionado: <input id="soma"> </h4>
//     <button id="atualizar-saldo">Atualizar saldo</button>
//     <button id="limpar-saldo">Limpar seu saldo</button>
//     <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1> 
