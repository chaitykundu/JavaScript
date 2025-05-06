/*For a given array with prices of 5items-[260, 645, 400, 900, 50]
all items have an offer of 10% off on them. Change the arra to store 
final price after applying offer*/

let prices = [260, 645, 400, 900, 50]
let val;
for(let i=0; i<prices.length; i++){
    offer= prices[i]/10;
    prices[i] =  prices[i] - offer;
}
console.log( prices);