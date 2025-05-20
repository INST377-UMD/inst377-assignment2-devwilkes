import { restClient } from '@polygon.io/client-js';
const stockInfoAPI = "https://api.polygon.io/v3/reference/dividends?apiKey=ZnmZWgJk6oIysTWu6E2NFgPKD5jbrpss";

function createTopFiveTable(){
  const table = document.getElementById("redditStocks");
    fetch("https://tradestie.com/api/v1/apps/reddit?date=2022-04-03")
    .then(data => data.json())
	  .then(data => {
      console.log(data);
    for (let i = 0; i < 5; i++){
        const ticker = data[i].ticker;
        const commentCount = data[i].no_of_comments;
        const sentiment = data[i].sentiment;


        tr = document.createElement("tr");
        tickerData = document.createElement("td");
        commentData = document.createElement("td");
        sentimentData = document.createElement("td");

        tickerdata.innerHTML = ticker;
        commentData.innerHTML = commentCount;
        table.appendChild(tr);

        tr.appendChild(tickerData);
        tr.appendChild(commentData);
        table.appendChild(tr);
        

        if(sentiment == "bullish"){
          bullPic = document.createElement("img");
          bullPic.src = "https://as1.ftcdn.net/v2/jpg/02/85/66/24/1000_F_285662447_dcv5myxoHXT5Xcsqs4K6prgBpgMWObAr.jpg";
          sentimentData.appendChild(bullPic);
          tr.appendChild(sentimentData);
          table.appendChild(tr);
        } else if (sentiment == "bearish"){
          bearPic = document.createElement("img");
          bearPic.src = "https://static.vecteezy.com/system/resources/previews/008/071/174/non_2x/bear-or-bearish-market-stock-trend-trade-exchange-stock-bar-charts-are-downtrend-like-a-bear-free-vector.jpg";
          sentimentData.appendChild(bearPic);
          tr.appendChild(sentimentData);
          table.appendChild(tr);
        }

        yahooLink = "https://finance.yahoo.com/quote/"
        tickerLink = document.createElement("a");
        tickerLink.href = yahooLink + ticker;
        tr.appendChild(tickerLink);
        table.appendChild(tr);

    }
	})
}


function getStockActivity(){
  const rest = restClient("ZnmZWgJk6oIysTWu6E2NFgPKD5jbrpss");

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

function getStockInfo(){
  const ticker = document.getElementById("ticker");
  fetch(stockInfoAPI)
  .then(response => response.json())
  .then(data => {
    const tickerList = []
    data.tickers.forEach(ticker => {
      tickerList.push(ticker.ticker);
    });
  });
}

function generateChart(label, data){
  const ctx = document.getElementById('myChart');

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: label,
          datasets: [{
            label: 'Closing Prices',
            data: data,
            borderWidth: 2
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: false
            }
          }
        }
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
            "look up *stock":function () {
              getStockInfo("*stock");
            }
          };
        }
}

function turnOnAnnyang() {
annyang.start()
}

function turnOffAnnyang() {
annyang.abort()
}

window.onload = function() {
  createTopFiveTable();
  //getStockActivity();
  //getStockInfo();
}