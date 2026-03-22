//normal
let max = Math.max(1,8,10,50);
console.log(max);//50

//spread operator
const arr = [12,70,65,100,400];
console.log(Math.max(arr)); //NaN cause here we pass array not the element
console.log(Math.max(...arr)); //spread operator

const array = [1,8,10,30,5];
function add(n1,n2){
    console.log(n1+n2);
}
//add(array);//not work
add(...array);//add 1st two number


//array
const a = [12,4,7,9];
const a2 = a;
a2.push(10);
console.log(a,a2); //both array have 10

const x=[1,2,4,5,7];
const y=[...x];
y.push(10);
console.log(x,y);//only y will be updated

