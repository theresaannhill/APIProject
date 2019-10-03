const baseURL = 'https://api.spacexdata.com/v3/missions'; 

const searchForm = document.querySelector('form'); 
const spaceShip = document.querySelector('ul'); 

searchForm.addEventListener('submit', fetchSpace); 

function fetchSpace() {


fetch(baseURL) 
    .then(data => {
       // console.log(data)
        return data.json();
    }) 
    .then(json => {
       // console.log('promise results:' json);

       // a callback function is a function that is to be executed after function has
       //finished executing.  In this case, our callback function is "displayRockets", and it is waiting on 
       //our 'fetchSpace' function and all of it's promises to resolve being called
       // and passed data
       displayMissions(json)
    })
    
}

fetchSpace()

function displayMissions(json) {
    console.log('data:', json)

    let missions = json.forEach(mission => {
        let r = document.createElement('h2');
        let desc = document.createElement('li');
        r.innerText = mission.mission_name;
        desc.innerText = mission.description;
        spaceShip.appendChild(r);
        spaceShip.appendChild(desc);

    })

    r.setAttribute('Title');
    desc.setAttribute('Info');

}

    

