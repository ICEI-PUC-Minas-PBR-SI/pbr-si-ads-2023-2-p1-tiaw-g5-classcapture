let userLogado = JSON.parse(localStorage.getItem('userLogado'));

let logado = document.querySelector('#logado');
logado.innerHTML = `Olá ${userLogado.nome}`

const botaoSair = document.querySelector('#botaoSair');

botaoSair.addEventListener('click', sair);

function sair () {
    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');
    window.location.href = '/index.html';
}