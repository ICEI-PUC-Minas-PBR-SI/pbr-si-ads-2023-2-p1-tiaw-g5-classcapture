const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = "Choose an image";
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});



document.addEventListener("DOMContentLoaded", function () {
    const photoFrames = document.querySelectorAll('.photo-frame');

    // Adicionar evento de clique a cada photo-frame
    photoFrames.forEach(photoFrame => {
        photoFrame.addEventListener('click', function () {
            // Captura o elemento da imagem dentro do photo-frame clicado
            const image = this.querySelector('img');
            // Cria um elemento de overlay para a imagem em tela cheia
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            // Cria a imagem em tela cheia
            const fullScreenImage = new Image();
            fullScreenImage.src = image.src;
            fullScreenImage.classList.add('full-screen-image');

            // Adiciona a imagem em tela cheia ao overlay
            overlay.appendChild(fullScreenImage);

            // Adiciona o overlay ao corpo do documento
            document.body.appendChild(overlay);

            // Adiciona evento de clique para fechar a tela cheia
            overlay.addEventListener('click', function () {
                document.body.removeChild(overlay);
            });
        });
    });
});
// Função para adicionar uma imagem ao photo frame clicado
function addImageToFrame(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function (event) {
            const imageUrl = event.target.result;
            const img = document.createElement('img');
            img.src = imageUrl;

            // Substitui a imagem no photo frame clicado
            event.currentTarget.querySelector('img').replaceWith(img);
        };

        reader.readAsDataURL(file);
    }
}

// Event listener para o input de arquivo
const fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', function (event) {
    addImageToFrame(event);
    // Limpa o valor do input para permitir adicionar a mesma imagem novamente
    this.value = '';
});

// Event listener para adicionar imagens aos photo frames clicados
const photoFrames = document.getElementById('photoFrames');
photoFrames.addEventListener('click', function (event) {
    const target = event.target;
    if (target.tagName === 'IMG') {
        fileInput.click();
    }
});


