function sum(a,b){
    let total = a + b;

    console.log(a,b,total);
}

sum(10,30);
sum(10); //10 undefined NaN

//solution give a default value 
function add(x,y=6){
    let t =x + y;
    console.log(x,y,t);

}
add(10);//still work for default value
add(20,10);

//for string
function customerName(first,last){
    let name = first + " " + last;
    console.log(name);
}
customerName('disha','sikder');
customerName("disha"); //disha undefine

//solution
function myName(fname,lname=' '){
    let my_name = fname + ' ' + lname;
    console.log(fname,lname);
}
myName('Disha');