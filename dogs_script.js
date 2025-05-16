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

// put a wait/fetch statement for each method

window.onload = loadRandomDogs();