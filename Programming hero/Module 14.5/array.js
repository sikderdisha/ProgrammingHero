//array
let array = [1,9,5,7,8];
console.log(array);

//element of the array
console.log(array.length);

//print one element
console.log(array[4]);

//loop
for(let value of array){
    console.log(value);
}

//add element in last index
array.push('d'); 
console.log(array);

//add 1st index
array.unshift('x');
console.log(array);

//remove from last
array.pop();
console.log(array);

//remove from 1st
array.shift();
console.log(array);

// update elemnet
array[3]="disha";
console.log(array); //replace
