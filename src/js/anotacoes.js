const textoElement = document.getElementById('texto');
        
// Verificar se há texto salvo no localStorage
if (localStorage.getItem('textoSalvo')) {
    textoElement.value = localStorage.getItem('textoSalvo');
}

// Adicionar um ouvinte de evento para o evento "input" no textarea
textoElement.addEventListener('input', function() {
    // Quando o texto é alterado, salve no localStorage
    localStorage.setItem('textoSalvo', textoElement.value);
});