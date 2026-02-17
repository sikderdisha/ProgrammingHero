//string works like array
let array = [1,9,4,77.30];
console.log(array.length); //length

array[3]=80;
console.log(array);





//string
let capital ="Dhaka";
console.log(capital.length); //length(space included)

let cap ='d isha'; //6 hobe not 5(space count hobe)
console.log(cap.length);

capital[0]='x';//no change because string er immutable
console.log(capital); 