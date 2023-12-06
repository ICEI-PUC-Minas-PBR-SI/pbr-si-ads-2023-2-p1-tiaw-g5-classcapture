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

