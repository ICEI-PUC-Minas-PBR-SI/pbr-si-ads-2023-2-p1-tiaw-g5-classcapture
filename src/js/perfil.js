function alterarEmail() {
    var novoEmail = prompt("Digite o novo e-mail:");
    if (novoEmail !== null) {
        document.getElementById("email").textContent = novoEmail;
    }
}

function alterarTelefone() {
    var novoTelefone = prompt("Digite o novo telefone:");
    if (novoTelefone !== null) {
        document.getElementById("telefone").textContent = novoTelefone;
    }
}

function alterarDataNascimento() {
    var novaDataNascimento = prompt("Digite a nova data de nascimento:");
    if (novaDataNascimento !== null) {
        document.getElementById("dataNascimento").textContent = novaDataNascimento;
    }
}