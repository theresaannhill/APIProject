const baseURL = 'https://api.spacexdata.com/v3/ships'; 

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
      displayShips(json)
    })
    
}

fetchSpace()

function displayShips(json) {
    console.log('data:', json)

    let missions = json.forEach(ships => {
        let rs = document.createElement('h3');
        let descs = document.createElement('li2');
        rs.innerText = ships.ship_name;
        desc.innerText = ships.roles;
        spaceShip.appendChild(rs);
        spaceShip.appendChild(descs);

    })

    rs.setAttribute('Name');
    descs.setAttribute('Roles');

}

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

    r.setAttribute('Name');
    desc.setAttribute('Description');

}

