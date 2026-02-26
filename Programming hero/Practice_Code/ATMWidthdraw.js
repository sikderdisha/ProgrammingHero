/* ATM balance input,withdraw input.
     If withdraw <= balance and withdraw % 500 == 0 
        then Withdraw is successful.
    or enter amount multiple of 500
    or Insufficient balance */ 

    

    let input_balance = 2000;
    let input = require("readline-sync");
    let Withdraw_Amount = input.question("Enter the amount: ")
    Withdraw_Amount = Number(Withdraw_Amount);

    if(Withdraw_Amount <= input_balance){
        if(Withdraw_Amount % 500 == 0){
             console.log("Withdraw is successful");
        }
        else{
             console.log("Enter the multiple amount of 500.");
        }
    }
    else{
         console.log( "Insufficient balance");
    }
    

    