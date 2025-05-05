function getRandomDog(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        const dog = data.message;
    })
}

function loadTenDogs(){
    fetch("https://dog.ceo/api/breeds/image/random/10")
    .then(response => response.json())
    .then(data => {
        const dogImages = data.message;
        dogImages.forEach(dog => {
            const img = document.createElement('img');
            img.src = dog;
            document.body.appendChild(img);
        });
    })
}

function getSpecificDog(breed){
    fetch("https://dog.ceo/api/breeds/image/")
    .then(response => response.json())
    .then(data => {
        const dog = data.message;
    })
}



window.onload = getRandomDog();