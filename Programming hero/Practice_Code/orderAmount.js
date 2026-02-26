/* if order amount is order amount >= 1000 :free delivery
otherwise delivery charge is 80 taka*/

const input = require("readline-sync");
let orderAmount = input.question("Enter the amount: ");
orderAmount = Number(orderAmount);

if(orderAmount >= 1000){
    console.log("You have a free delivery offer.")
}
else{
    console.log("Delivery charge is 80 taka.")
}
