// 3. delevery cost
function deliveryCost(tshirtNumber) {
    const deliveryCostFirst100piece = 100;
    const deliveryCostSecond200piece = 80;
    const deliveryCostRestPiece = 50;
    if(tshirtNumber <= 100) {
        const first100DeliveryCost = tshirtNumber * deliveryCostFirst100piece;
        return first100DeliveryCost;
    }
    else if(tshirtNumber > 100 && tshirtNumber <= 200) {
        const first100deliveryCost = 100 * first100DeliveryCost;
        const restTshirtNumber = tshirtNumber - 100;
        const second200deliveryCost = restTshirtNumber * deliveryCostSecond200piece;
        const totalDeliveryCost = first100deliveryCost + second200deliveryCost;
        return totalDeliveryCost;
    }
    else{
        const first100DeliveryCost = 100 * deliveryCostFirst100piece;
        const second200deliveryCost = 80 * deliveryCostSecond200piece;
        const restTshirtNumber = tshirtNumber - 200;
        const restDeliveryCost = restTshirtNumber * deliveryCostRestPiece;
        const totalDeliveryCost = first100DeliveryCost + second200deliveryCost + restDeliveryCost;
        return totalDeliveryCost;
    }
}

const finalDeliveryCost = deliveryCost(234);
console.log(finalDeliveryCost);

// 4. Perfect Friend
function perfectFriend(friendName) {
    let fiveLetterFriend = friendName[0];
    for(let i = 0; i < friendName.length; i++) {
        if(friendName[i].length = fiveLetterFriend.length) {
            fiveLetterFriend = friendName[i];
        }
    }
    return fiveLetterFriend;
}

const friends = ['lipi', 'mahfuz', 'mukit', 'foysal', 'tamim', 'tanzina'];
var bigNameFriend = perfectFriend(friends);
// console.log(bigNameFriend);