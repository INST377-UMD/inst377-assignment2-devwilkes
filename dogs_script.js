async function loadRandomDogs(){
    const dogFetch =  await fetch("https://dog.ceo/api/breeds/image/random/10")
    .then(response => response.json())
    .then(data => {
        const dogImages = data.message;
        dogImages.forEach(dog => {
            const img = document.createElement('img');
            img.src = dog;
        });
    })
    return dogFetch
}

async function getSpecificDog(breed){
    const breedFetch = await fetch("https://dog.ceo/api/breeds/image/")
    .then(response => response.json())
    .then(data => {
        const dog = data.message;
    })
}

async function getDogInfo(breed){
    const infoFetch = await fetch("https://dogapi.dog/api-docs/v2//breeds/{"+ breed + "}")
    .then(response => response.json())
    .then(data => {
        const name = data.name;
        const description = data.description;
        const minLife = data.life.min;
        const maxLife = data.life.max;
    })
}

async function getAllDogBreeds(){
    const breedFetch = await fetch("https://dogapi.dog/docs/api-v2/breeds")
    .then(response => response.json())
    .then(data => {
        breedList = [];
        data.forEach(breed => {
            breedList.push(breed);
        });
    })
}

function generateBreedButtons(){
    const breedList = getAllDogBreeds();
    breedList.forEach(breed => {
        const button = document.createElement('button');
        button.className = "button-19";
        button.innerHTML = breed;
        button.onclick = function() {
            document.createElement('')
        }
        document.body.appendChild(button);
    });
}
// put a wait/fetch statement for each method

function audioListener(){
        if (annyang) {
          var commands = {
            "say hello": () => {
              alert("Hello world!");
              console.log("Hello world!");
            },

            "change the color to *color": function () {
              document.body.style["background-color"] = "*color";
            },

            "navigate to *page": function () {
              if ("*page" == "home") {
                window.location.href =
                  "home_page.html";
              } else if ("*page" == "stocks") {
                window.location.href =
                  "stocks_page.html";
              } else if ("*page" == "dogs") {
                window.location.href =
                  "dogs_page.html";
              }
            },
          };
        }
}

function turnOnAnnyang() {
annyang.start()
}

function turnOffAnnyang() {
annyang.abort()
}

window.onload = loadRandomDogs();