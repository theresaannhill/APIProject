const baseURL = 'https://api.spacexdata.com/v3/missions'; // this is my base thats reaching out to
// the space x rockets

const searchForm = document.querySelector('form'); // referencing form from html document
const spaceShip = document.querySelector('ul'); // referencing ul from html documnent

searchForm.addEventListener('submit', fetchSpace); // grabbing searchform variable, adding event listener,
// event is a submit event, and the submit calls fetchSpace function

function fetchSpace() {


fetch(baseURL) // fetch starts the process of fetching a resource from a network,
    // and that fetch returns a promise.  That promise is fulfilled or "resolved" once the reponse from
    // the fetch is available.
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
        let r = document.createElement('li');
        let desc = document.createElement('li');
        r.innerText = mission.mission_name;
        desc.innerText = mission.description;
        spaceShip.appendChild(r);
        spaceShip.appendChild(desc);

    })
}

