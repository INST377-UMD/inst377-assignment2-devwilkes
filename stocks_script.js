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