import { restClient } from '@polygon.io/client-js';

async function getTopFiveStocks(){
    const topStocks = fetch("https://tradestie.com/api/v1/apps/reddit?date=2022-04-03")
    .then(response => response.json())
	.then(data => {
	})
	return topStocks;
}

function getStockActivity(){
const rest = restClient("YOUR_API_KEY");

rest.stocks.aggregates(
	"AAPL",
	1,
	"day",
	"2023-01-09",
	"2023-02-10",
	{
		adjusted: "true",
		sort: "asc",
		limit: 120
	}
	).then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
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
          };
        }
}

function turnOnAnnyang() {
annyang.start()
}

function turnOffAnnyang() {
annyang.abort()
}