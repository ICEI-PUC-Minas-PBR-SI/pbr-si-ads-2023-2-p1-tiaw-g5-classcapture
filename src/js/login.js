window.onload = () => {
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let button = document.getElementById('entrar')
    let link = document.createElement("a");
    
    button.appendChild(link);
    link.innerText = 'Entrar';

    username.addEventListener("change", (event) => {
        if(event.target.value.length){
            password.addEventListener("change", (event) => {            
                console.log(event.target.value.length);
                link.setAttribute('href', 'template.html');
            
            });
        } else {
            link.removeAttribute('href');
        }

    });
}
