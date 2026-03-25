//loop
let array = [1,2,4,6];
let sum =0;
for(let num of array){
   sum = sum + num;

}
console.log(sum);

//alternative
let result = array.reduce((previous, current) => previous + current, 0);
//current=This is the current element of the array being processed.
//prvious = result,previous
// This is the accumulator — it holds the result so far while iterating through the array.
//0=initial value of the accumulator
console.log(result);