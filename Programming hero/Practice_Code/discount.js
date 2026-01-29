const price = 4000;
//10% discount
if(price >= 5000){
    const discount = price * 10/100;
    console.log('your discount offer is '+discount);
    const payAmount = price - discount;
    console.log('you Will pay: '+payAmount);
}
else if(price > 2500){
    const discount = price * 5/100;
     console.log('your discount price is '+discount);
     const payAmount = price - discount;
    console.log('you Will pay: '+payAmount);

}
else{
    console.log('Not eligible for discount.Your bill is '+price);
}