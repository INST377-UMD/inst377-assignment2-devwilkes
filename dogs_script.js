function loadRandomDogs(){
    fetch("https://dog.ceo/api/breeds/image/random/10")
    .then(data => data.json())
    .then(data => {
        for (let i = 0; i < 10; i++) {
          document.getElementById(`img${i + 1}`).src = data.message[i];
        }
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

function getAllDogBreeds(){
   fetch("https://dogapi.dog/docs/api-v2/breeds")
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

            "load dog breed *breed": function () {
              const breed = "*breed";
              getDogInfo(breed);
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

window.onload = function (){
  loadRandomDogs();
  generateBreedButtons();
};