var link = document.querySelector('#edit-profile-photo');

link.addEventListener('click', function() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = function(e) {
        var file = e.target.files[0];
        var reader = new FileReader();

        reader.onloadend = function() {
            localStorage.setItem('profileImage', reader.result);
            var img = document.querySelector('.imgperfil');
            img.src = reader.result;
        }

        reader.readAsDataURL(file);
    }

    input.click();
});

document.addEventListener('DOMContentLoaded', function() {
    var img = document.querySelector('.imgperfil');
    var storedImage = localStorage.getItem('profileImage');

    if (storedImage) {
        img.src = storedImage;
    }
});

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