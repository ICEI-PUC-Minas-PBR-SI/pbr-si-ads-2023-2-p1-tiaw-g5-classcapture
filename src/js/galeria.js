document.addEventListener("DOMContentLoaded", function () {
    const inputFile = document.getElementById("picture__input");
    const photoFrames = document.querySelectorAll('.photo-frame');
    let currentFrameIndex = 0;

    // Adiciona um evento de mudança para o input de arquivo
    inputFile.addEventListener('change', function (event) {
        addImageToFrame(event, currentFrameIndex);
        currentFrameIndex = (currentFrameIndex + 1) % photoFrames.length;
    });

    // Adiciona evento de clique a cada photo-frame
    photoFrames.forEach((photoFrame, index) => {
        photoFrame.addEventListener('click', function () {
            // Define o índice atual ao clicar em uma photo-frame
            currentFrameIndex = index;
            inputFile.click();
        });
    });

    // Carrega imagens do localStorage ao carregar a página
    loadImagesFromLocalStorage();

    // Define o texto inicial para a tag pictureImage (se existir)
    const pictureImage = document.querySelector('.picture__image');
    if (pictureImage) {
        const pictureImageTxt = "Choose an image";
        pictureImage.innerHTML = pictureImageTxt;
    }
});

// Função para adicionar uma imagem a uma photo-frame específica
function addImageToFrame(event, frameIndex) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (event) {
            const imageUrl = event.target.result;

            // Salva a imagem no localStorage
            saveImageToLocalStorage(frameIndex, imageUrl);

            // Seleciona a photo-frame pelo índice e substitui a imagem
            const targetFrame = document.querySelectorAll('.photo-frame')[frameIndex];
            const img = document.createElement('img');
            img.src = imageUrl;

            // Substitui a imagem na photo frame específica
            targetFrame.innerHTML = '';
            targetFrame.appendChild(img);
        };

        reader.readAsDataURL(file);
    }
}

// Função para salvar a imagem no localStorage
function saveImageToLocalStorage(index, imageUrl) {
    const images = JSON.parse(localStorage.getItem('images')) || [];
    images[index] = imageUrl;
    localStorage.setItem('images', JSON.stringify(images));
}

// Função para carregar as imagens do localStorage ao carregar a página
function loadImagesFromLocalStorage() {
    const images = JSON.parse(localStorage.getItem('images')) || [];

    images.forEach((imageUrl, index) => {
        const targetFrame = document.querySelectorAll('.photo-frame')[index];
        const img = document.createElement('img');
        img.src = imageUrl;

        // Substitui a imagem na photo frame específica
        targetFrame.innerHTML = '';
        targetFrame.appendChild(img);
    });
}
