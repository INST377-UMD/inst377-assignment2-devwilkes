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
            const quote = data[0].q;
            const author = data[0].a;
            document.getElementById("quote").innerText = quote;
            document.getElementById("author").innerText = "- " + author;
        })
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
          };
        }
}

function turnOnAnnyang() {
annyang.start()
}

function turnOffAnnyang() {
annyang.abort()
}

window.onload = getZenQuotes();

