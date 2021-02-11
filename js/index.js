const templateIMG = document.getElementById('imgTemplate');
const url = 'https://comsoc-epr-default-rtdb.firebaseio.com/.json';
const base = 'https://www.aragon.unam.mx/fes-aragon/#!/muro-aragon/noticias/';

fetchNoticias();

function fetchNoticias(){
    fetch(url).then(res => res.json()).then(data => {
        let items = data.slice(0,3) //Puedes seleccionar entre 0,3 y 0,5
        for (const item of items) {
            let template = `
            <div onclick="location.href='${base.concat(item.titulo_normalizado)}'" class="card bg-transparent text-white">
                <img class="card-img h-100 shadow-sm" src="${item.src}" alt="${item.titulo}">
                <div class="card-img-overlay">
                    <h5 class="card-title">${item.titulo}</h5>
                    <p class="card-text text-right font-italic">${item.fecha}</p>
                </div>
            </div>
            `
            templateIMG.innerHTML += template;
        }
    });
}