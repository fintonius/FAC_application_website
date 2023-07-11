let art = document.getElementById('art');
art.addEventListener('click', () => {window.location.replace("art-link.html")})

let home = document.getElementById('home');
home.addEventListener('click', homePage);

function homePage() {
    window.location.replace("index.html");
    console.log('click!');
}

let web = document.getElementById('web');
web.addEventListener('click', () => {window.location.replace("web-link.html")})