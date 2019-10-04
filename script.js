const baseURL = 'https://ghibliapi.herokuapp.com/films';

const searchForm = document.querySelector('form'); 
const Films = document.querySelector('ul'); 

searchForm.addEventListener('submit', fetchFilms); 

function fetchFilms(event) {



event.preventDefault();


    fetch(baseURL) 
    .then(data => {
       return data.json();
    }) 
    .then(json => {
       displayFilms(json)
    })
    
}

function displayFilms(json) {
    console.log('data:', json)

    let films = json.forEach(film => {
        let r = document.createElement('h3');
        let rel = document.createElement('h4');
        let desc = document.createElement('li');
        r.innerText = film.title;
        desc.innerText = film.description;
        rel.innerText = film.release_date;
        Films.appendChild(r);
        Films.appendChild(rel);
        Films.appendChild(desc);

    })
}

        