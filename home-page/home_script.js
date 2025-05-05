const api_url ="https://zenquotes.io/api/quotes/";

async function getapi(url)
{
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
}

getapi(api_url);

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

window.onload = getZenQuotes();