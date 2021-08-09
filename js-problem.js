// 1. Problem 01 (Seer to Mon Convert)
function seerToMon(seer) {
if (seer <= 0) {
let error = "Enter a positive value"
return error;
}
else {
let mon = seer/40;
return mon;
};
};
const mon = seerToMon(800);
console.log(mon);
// ==============================================================
// 2. Problem 02 (Total Sales)
function totalSales(shirtQuantity, pantQuantity, shoesQuantity) {
// Prices of Products
const shirtPrice = 100;
const pantPrice = 200;
const shoesPrice = 500;
// Price with Product Quantity
const shirtTotal = shirtPrice * shirtQuantity;
const pantTotal = pantPrice * pantQuantity;
const shoesTotal = shoesPrice * shoesQuantity;
// Total Price after the Sale of Shirt, Pant and Shoe
const total = shirtTotal + pantTotal + shoesTotal;
return total;
}
const totalOfSales = totalSales(5, 10, 5);
if(totalOfSales <= 0){
console.log("Input a positive value")
}else{
console.log(totalOfSales);
};
// ============================================================
// 3. Problem 03 (Delivery Cost)
function deliveryCost(tshirtNumber) {
// delivery costs criteria
const deliveryCostFirst100piece = 100;
const deliveryCostSecond200piece = 80;
const deliveryCostRestPiece = 50;
// condition for 1-100 tshirts
if(tshirtNumber <= 100) {
const first100DeliveryCost = tshirtNumber * deliveryCostFirst100piece;
return first100DeliveryCost;
}
// condition for 101-200 tshirts
else if(tshirtNumber <= 200) {
const first100deliveryCost = 100 * deliveryCostFirst100piece;
const restTshirtNumber = tshirtNumber - 100;
const second200deliveryCost = restTshirtNumber * deliveryCostSecond200piece;
const totalDeliveryCost = first100deliveryCost + second200deliveryCost;
return totalDeliveryCost;
}
else if(tshirtNumber <= 0) {
let error = "Enter a positive value"
return error;
}
// condition for more than 200 tshirts
else{
const first100DeliveryCost = 100 * deliveryCostFirst100piece;
const second200deliveryCost = 100 * deliveryCostSecond200piece;
const restTshirtNumber = tshirtNumber - 200;
const restDeliveryCost = restTshirtNumber * deliveryCostRestPiece;
const totalDeliveryCost = first100DeliveryCost + second200deliveryCost + restDeliveryCost;
return totalDeliveryCost;
}
}
const finalDeliveryCost = deliveryCost(225);
console.log(finalDeliveryCost);
// =============================================================
// 4. Problem 04 (Perfect Friend)
function perfectFriend(friends) {
for(let i = 0; i < friends.length; i++) {
let element = friends[i];
if(element.length == 5) {
return element;
}
else if(typeof friends[i] == 'number') {
let error = 'Please enter strings in the array';
return error;
}
}
}
const friends = ['Shakib', 'Mushfiq', 'Mustafiz', 'Tamim', 'Mahmudullah','akiba'];
var perfectFriendName = perfectFriend(friends);
console.log(perfectFriendName);
// ===========================================================