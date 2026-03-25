//loop
let ar = [1,2,3,4];
// let result = [];

// for(let num of ar){
//      result.push(num * 2);
// }
// console.log(result);

//map
// let double = num => num * 2 //num(parameter)
// // const result = ar.map(double);//we also write it in one line
// //map take one element from array and called double to work then store new element in result variable
// console.log(result);

let double = ar.map(num => num * 2);
console.log(double);
let square = ar.map(num => num * num);
console.log(square);



//nam এ পুরো string থাকে
//👉 তারপর nam[0] দিয়ে first letter নিচ্ছোnam variable a 1st index gulo store hoye jabe.
//nam = 'disha    nam[0]'d again nam = anto nam[0]=a
let obj = ['disha','anto'];
let names = obj.map(nam => nam[0]);

console.log(names);

//Array of objects
let products = [
    {name : 'key board',company: 'Samsung'},
    {name :'watch', company :'apple'}
]
// console.log(products.map(pro => pro.name));
// console.log(products.map(com => com.company));

//multi line
console.log(products.map(product => {
    const product_name = product.name.toUpperCase();
    const company_name = product.company.toUpperCase();
    return {product_name,company_name};
})) 