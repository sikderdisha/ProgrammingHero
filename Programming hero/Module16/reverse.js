//reverse():reverse string
//split():string to array
//join():array to string

let str = 'hello';
let reverse = str.split("").reverse().join("");
console.log(reverse);

//method 2
let newstr ='disha';
//string is immutable so we need an empty string to store new string
let rev="";

for (let i = 0; i < newstr.length; i++) {
    rev = newstr[i] + rev;
}
console.log(rev);


