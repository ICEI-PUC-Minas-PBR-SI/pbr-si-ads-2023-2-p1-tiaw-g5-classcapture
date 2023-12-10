const camposDoFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-form-assinatura]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const novoCadastro = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "nascimento": e.target.elements["nascimento"].value,
        "celular": e.target.elements["celular"].value,
        "cpf": e.target.elements["cpf"].value
    };

    // Verifica se já há dados no localStorage
    const cadastrosAntigos = JSON.parse(localStorage.getItem("cadastros")) || [];

    // Adiciona o novo cadastro ao array
    cadastrosAntigos.push(novoCadastro);

    // Salva o array atualizado no localStorage
    localStorage.setItem("cadastros", JSON.stringify(cadastrosAntigos));

    console.log("Cadastro salvo no localStorage:", novoCadastro);
    console.log("Todos os cadastros:", cadastrosAntigos);

    window.location.href = '/pages/home.html';
});

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("input", () => {
        if (campo.name === "cpf" && campo.value.length >= 11) {
            formataCampo(campo, "cpf");
        }
        if (campo.name === "celular") {
            formataCampo(campo, "celular");
        }

    });

    campo.addEventListener("blur", () => {
        let mensagem = "";
        campo.setCustomValidity('')
        if (campo.name === "cpf") {
            validaCPF(campo);
        }
        if (campo.name == "nascimento" && campo.name != "") {
            if(!validaIdade(campo)) {
                campo.setCustomValidity('O usuário não é maior de idade');
            }
        }
        tiposDeErro.forEach(erro => {
            if(campo.validity[erro]) {
                mensagem = mensagens[campo.name][erro];
                console.log(mensagem)
            }
        })
        const mensagemErro = campo.parentNode.querySelector('.mensagem-erro')
        const validadorInput = campo.checkValidity();

        if(!validadorInput) {
            mensagemErro.textContent = mensagem;
            campo.classList.add('campo-invalido');
        } else {
            mensagemErro.textContent = "";
            campo.classList.remove('campo-invalido');
            campo.classList.add('campo-validado');
        }
    });
});

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    nascimento: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para comprar assinatura.'
    },
    celular: {
        valueMissing: 'O campo de celular não pode estar vazio.',
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function formataCampo(campo, tipo) {
    let valor = campo.value.replace(/\D/g, '');

    if (tipo === "cpf") {
        valor = valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
    } else if (tipo === "celular") {
        valor = valor.replace(/^(\d{2})(\d{1,5})(\d{4})$/, "($1) $2-$3");
    }

    campo.value = valor;
}

function validaCPF(campo) {
    const cpfSemFormato = campo.value.replace(/\D/g, '');
    const cpfValido = /^\d{11}$/;
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ];

    const cpfFormatado = cpfSemFormato.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    if (cpfValido.test(cpfSemFormato) && !numerosRepetidos.includes(cpfSemFormato) && verificaPrimeiroDigito(cpfSemFormato) && verificaSegundoDigito(cpfSemFormato)) {
        console.log(`${cpfFormatado} é um CPF Válido`);
    } else {
        campo.setCustomValidity('Esse CPF não é válido')
    }

    function verificaPrimeiroDigito(cpfSemFormato) {
        let soma = 0;
        let multiplicador = 10;
        for (let tamanho = 0; tamanho < 9; tamanho++) {
            soma += cpfSemFormato[tamanho] * multiplicador;
            multiplicador--;
        }

        soma = (soma * 10) % 11;

        if (soma > 9) {
            soma = 0;
        }

        return soma === Number(cpfSemFormato[9]);
    }

    function verificaSegundoDigito(cpfSemFormato) {
        let soma = 0;
        let multiplicador = 11;
        for (let tamanho = 0; tamanho < 10; tamanho++) {
            soma += cpfSemFormato[tamanho] * multiplicador;
            multiplicador--;
        }

        soma = (soma * 10) % 11;

        if (soma > 9) {
            soma = 0;
        }

        return soma === Number(cpfSemFormato[10]);
    }
}

function validaIdade(campo) {
    const dataNascimento = new Date(campo.value);
    const dataAtual = new Date();
    const dataMais18 = new Date(dataNascimento.getUTCFullYear() + 18, dataNascimento.getUTCMonth(), dataNascimento.getUTCDate())
    return dataAtual >= dataMais18
}

//cartão

