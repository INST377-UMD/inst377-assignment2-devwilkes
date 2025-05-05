function getZenQuotes(){
    fetch("https://zenquotes.io/api/random")
        .then(response => response.json())
        .then(data => {
            const quote = data.q;
            const author = data.a;
            document.getElementById("quote").innerText = quote;
            document.getElementById("author").innerText = author;
        })
}

window.onload = getZenQuotes()