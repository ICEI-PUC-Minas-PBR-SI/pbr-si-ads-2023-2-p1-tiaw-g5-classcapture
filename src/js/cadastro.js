<<<<<<< HEAD
<<<<<<< HEAD
//visualizar senha
let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
=======
let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

let email = document.querySelector('#nome')
let labelEmail = document.querySelector('#labelNome')
>>>>>>> 7c9ba0f (Enviando JavaScript do Cadastro)
=======
//visualizar senha
let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
>>>>>>> d0782cb (corrigindo erro cadastro)
let validEmail = false

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false


email.addEventListener('keyup', () => {
  let emailValue = email.value.trim();
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    labelEmail.setAttribute('style', 'color: red');
    labelEmail.innerHTML = 'E-mail *Insira um e-mail válido';
    email.setAttribute('style', 'border-color: red');
    validEmail = false;
  } else {
    labelEmail.setAttribute('style', 'color: green');
    labelEmail.innerHTML = 'E-mail';
    email.setAttribute('style', 'border-color: green');
    validEmail = true;
  }
});


nome.addEventListener('keyup', () => {
    if(nome.value.length <= 3){
      labelNome.setAttribute('style', 'color: red')
      labelNome.innerHTML = 'Nome [Insira no minimo 3 caracteres]'
      nome.setAttribute('style', 'border-color: red')
      validNome = false
    } else {
      labelNome.setAttribute('style', 'color: green')
      labelNome.innerHTML = 'Nome'
      nome.setAttribute('style', 'border-color: green')
      validNome = true
    }
<<<<<<< HEAD
<<<<<<< HEAD
})

usuario.addEventListener('keyup', () => {
  if(usuario.value.length <= 4){
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Usuário [Insira no minimo 5 caracteres]'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false
  } else {
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: green')
    validUsuario = true
  }
})

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})
  
//visualizar senha
=======
  })
=======
})
>>>>>>> d0782cb (corrigindo erro cadastro)

usuario.addEventListener('keyup', () => {
  if(usuario.value.length <= 4){
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Usuário [Insira no minimo 5 caracteres]'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false
  } else {
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: green')
    validUsuario = true
  }
})

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})
  
<<<<<<< HEAD
>>>>>>> 7c9ba0f (Enviando JavaScript do Cadastro)
=======
//visualizar senha
>>>>>>> d0782cb (corrigindo erro cadastro)
btn.addEventListener('click', () => {
    let inputsenha = document.querySelector('#senha')

    if (inputsenha.getAttribute('type') == 'password') {
        inputsenha.setAttribute('type', 'text')
    } else {
        inputsenha.setAttribute('type', 'password')
    }
})


btnConfirm.addEventListener('click', () => {
<<<<<<< HEAD
<<<<<<< HEAD
    let inputConfirmSenha = document.querySelector('#confirmSenha')
=======
    let inputConfirmSenha = document.querySelector('#confirmsenha')
>>>>>>> 7c9ba0f (Enviando JavaScript do Cadastro)
=======
    let inputConfirmSenha = document.querySelector('#confirmSenha')
>>>>>>> d0782cb (corrigindo erro cadastro)

    if (inputConfirmSenha.getAttribute('type') == 'password') {
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
})
<<<<<<< HEAD
<<<<<<< HEAD
//fim visualizar senha

function cadastrar(){
  if(validEmail && validNome && validUsuario && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
    {
      emailCad: email.value,
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: senha.value
    })
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
    
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrado com sucesso!</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(() => {
      window.location.href = '/src/pages/login.html';
    })
    
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}
=======
=======
//fim visualizar senha
>>>>>>> d0782cb (corrigindo erro cadastro)

function cadastrar(){
  if(validEmail && validNome && validUsuario && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
<<<<<<< HEAD
      
    } else {
      msgError.setAttribute('style', 'display: block')
      msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
      msgSuccess.innerHTML = ''
      msgSuccess.setAttribute('style', 'display: none')
    }
  }
>>>>>>> 7c9ba0f (Enviando JavaScript do Cadastro)
=======
    listaUser.push(
    {
      emailCad: email.value,
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: senha.value
    })
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
    
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrado com sucesso!</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(() => {
      window.location.href = '/src/pages/login.html';
    })
    
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}
>>>>>>> d0782cb (corrigindo erro cadastro)
