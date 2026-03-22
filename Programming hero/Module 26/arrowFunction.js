//traditional method
//function declaration

console.log(add(10,50));
function add(num1,num2){
    return num1+num2;
}
console.log(add(20,30)); //50



//function Expression
//console.log(total(20,20));//error.It is the problem
const total = function(num1,num2)
{
    return num1 + num2;
}
console.log(total(20,20));//40
