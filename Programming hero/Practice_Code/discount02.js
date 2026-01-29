const price = 500;

//take input from user
const input = require("readline-sync"); 
let age = input.question("Enter your age: ");
age = Number(age);
console.log('Your age is: '+age);

//conditions
if(age <= 10){
    console.log("You can eat free.")
}
else if(age > 10 && age < 18){
    const discount = price * 10/100;
    console.log('You have a discount of 10% or '+discount);
    const payAmount = price - discount;
    console.log("Your payAmount is "+payAmount);
}
else{
    console.log("Your bill : "+price);
}