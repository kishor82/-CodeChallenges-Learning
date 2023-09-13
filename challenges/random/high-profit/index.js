const stockPrices = [1, 5, 3, 8, 10, 9];

let buyPrice = stockPrices[0];
let sellPrice = null;
let totalProfit = 0;

for (let i = 1; i <= stockPrices.length - 1; i++) {
  sellPrice = stockPrices[i];
  let futurePrice = stockPrices[i + 1] || 0;
  if (sellPrice - buyPrice >= 0) {
    if (futurePrice < sellPrice) {
      totalProfit += sellPrice - buyPrice;
      buyPrice = futurePrice;
    }
  }
}

console.log({ totalProfit });
