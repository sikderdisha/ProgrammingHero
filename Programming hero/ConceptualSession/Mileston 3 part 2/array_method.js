let array =  ['disha','puja','mim','nisha'];
let arr = [1,0,8,5,8];

//includes:check if the value is present in the array or not
console.log(array.includes('puja')); //true
console.log(arr.includes(9));//false


//join:convert array into string
console.log(array.join());//default ,
console.log(array.join("-"));
console.log(arr.join());


//reverse:reverse the array
console.log(array.reverse());


//isArray:check is it array or not
console.log(Array.isArray(array)); //true

//indexOf:return index of the element
console.log(array.indexOf('disha'));
