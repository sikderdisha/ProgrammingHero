function pass(a,b){
    console.log(a,b);
    
    a= a-2; //a=20-2=18
    b=b-1//b=24
    return a*b;

}
console.log('The functional output is: ' +pass(10,15));

let x = 20;
let y = 25;
let result = pass(x,y);
console.log(result); //18 * 24 = 432 but not change the value of x ,y(main value is unchanged)