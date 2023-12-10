let button = document.querySelector('#entrar')

button.addEventListener('click', entrar)


function entrar(event) {
    event.preventDefault();
    let username = document.querySelector('#username');
    let userLabel = document.querySelector('#userLabel');
    
    let password = document.querySelector('#password');
    let passLabel = document.querySelector('#senhaLabel');

    let msgError = document.querySelector('#msgError');

    if (!username.value || !password.value) {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Por favor, preencha todos os campos.';
        return;
    }

    let listaUser = JSON.parse(localStorage.getItem('listaUser')) || []

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }
    
    listaUser.forEach((item) => {
        if(username.value == item.userCad && password.value == item.senhaCad) {
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })

    if(username.value == userValid.user && password.value == userValid.senha) {
        setTimeout(() => {
            window.location.href = '/src/pages/home.html';
        })

        let token = Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)

        localStorage.setItem('userLogado', JSON.stringify(userValid))
    } else {
        userLabel.setAttribute('style', 'color: red')
        username.setAttribute('style', 'border-color: red')
        passLabel.setAttribute('style', 'color: red')
        password.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou senha incorreto'
        username.focus()
    }
}
