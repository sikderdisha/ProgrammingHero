//array
//using index is confusing and need to write same thing again and again
let array = [1,34,39,21,88];
console.log(array);
console.log(array[0]);
console.log(array[1]);

//array destructuring
let arr = [12,10,34,55];
let [num1,num2,num3,num4] = arr;
console.log(num1);
console.log(num2,num3,num4); 


//object
let products ={
    name : 'iphone 12',
    price : 190000,
    company : 'Apple'
};

console.log(products.name);
console.log(products.company);

//alternative
let {name,price,company} = products;
console.log(name, price, company);