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

const baseURL2 = 'https://ghibliapi.herokuapp.com/people';
const searchForm2 = document.querySelector('form2'); 
const Peoples = document.querySelector('ul2'); 

searchForm2.addEventListener('submit', fetchPeoples); 

function fetchPeoples(event) {

  event.preventDefault2();

    fetch(baseURL2) 
    .then(data2 => {
       return data2.json2();
    }) 

    .then(json2 => {
       displayPeoples(json2)
    })
}

function displayPeoples(json2) {
    console.log('data:', json2)
    let peoples = json2.forEach(people => {
        let rp = document.createElement('h5');
        let relp = document.createElement('h6');
        let descp = document.createElement('li2');
        rp.innerText = people.names;
        descp.innerText = people.gender;
        relp.innerText = people.age;

        Peoples.appendChild(rp);
        Peoples.appendChild(relp);
        Peoples.appendChild(descp);
    })
}
     //   const baseURL2 = 'https://ghibliapi.herokuapp.com/people';
//
  //      const searchForm2 = document2.querySelector2('form2');
    //    const Peoples = document2.querySelector2('ul2');
//
  //      searchForm2.addEventListener2('submit2', fetchPeoples);
//
  //      function fetchPeoples(event2) {
//
  //          event2.preventDefault2();


    //        fetch(baseURL2)
      //          .then(data2 => {
        //            return data2.json(2);
          //      })
            //    .then(json => {
              //      displayPeoples(json)
                //})
//
  //      }

    //    function displayPeoples(json) {
      //      console.log2('data2:', json)
//
  //          let peoples = json.forEach(people => {
    //            let rp = document.createElement('h5');
      //          let relp = document.createElement('h6');
        //        let descp = document.createElement('li2');
          //      rp.innerText = people.name;
            //    descp.innerText = people.gender;
              //  relp.innerText = people.films;
               // Peoples.appendChild(rp);
               // Peoples.appendChild(relp);
               // Peoples.appendChild(descp);

           // })
       // }
   // }






//const searchTerm = document.querySelector('.search');
//const searchForm = document.querySelector('form');
//const submitBtn = document.querySelector('.submit');

//RESULTS SECTION
//const section = document.querySelector('section');

//searchForm.addEventListener('submit', fetchResults); 

//function fetchResults(e) {
  //  console.log(e); //2

   // url = 'https://ghibliapi.herokuapp.com/films=${search.value}';
    //  console.log('URL:',url); }

    //  function fetchResults(e) {
      //  e.preventDefault(); //1
      //  url = 'https://ghibliapi.herokuapp.com/films=${search.value}';  
  //  }

  //  fetch(url)
   // .then(function(result) {
  //  console.log(result)
  //  return result.json(); //2
 // }).then(function(json) {
 //     console.log(json); //3
 // });

 // function displayResults(json) {
  //  console.log("DisplayResults", json); 
  //};







//const Films = document.querySelector('ul'); 

//searchForm.addEventListener('submit', fetchFilms); 



//function fetchFilms(event) {



//event.preventDefault();


  //  fetch(baseURL) 
    //.then(data => {
      // return data.json();
   // }) 
    //.then(json => {
     //  displayFilms(json)
    //})

//}

//function displayFilms(json) {
  //  console.log('data:', json)

    //let films = json.forEach(film => {
      //  let r = document.createElement('h3');
       // let rel = document.createElement('h4');
        //let desc = document.createElement('li');
        //r.innerText = film.title;
        //desc.innerText = film.description;
        //rel.innerText = film.release_date;
        //Films.appendChild(r);
        //Films.appendChild(rel);
        //Films.appendChild(desc);

   // })
//}
