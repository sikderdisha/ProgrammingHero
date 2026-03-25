//non primitive == non primitive (false)
//primitive == primitive/primitive== non primitive (true)

console.log(5 == '5'); //true
//It convert the string into a number before comparing

console.log(NaN == NaN);//false
//NaN মানে "Not a Number" / invalid number result
// ❗ NaN কখনোই কোনো কিছুর equal না—even নিজেকেও না