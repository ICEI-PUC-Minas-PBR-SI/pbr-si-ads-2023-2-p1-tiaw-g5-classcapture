
function calcularFaltasRestantes() {
    const totalAulas = parseInt(document.getElementById("totalAulas").value);
    const faltasAtuais = parseInt(document.getElementById("faltasAtuais").value);

    const limiteFaltas = totalAulas * 0.25; // 25% do total de aulas

    const faltasRestantes = Math.ceil(limiteFaltas - faltasAtuais);

    if (faltasRestantes < 0) {
        document.getElementById("resultado").innerHTML = "Você já ultrapassou o limite de faltas!";
    } else {
        document.getElementById("resultado").innerHTML = "Você pode ter mais " + faltasRestantes + " faltas.";
    }
}