//trim
let x =' disha ';
console.log(x);
console.log(x.trimStart);

let y = 'disha ';
console.log(y);
console.log(y.trimEnd());

if(x === y){
    console.log('okey');
}
else{
    console.log('not okey');
}

//print not okey
if(x.trim() === y.trim()){
    console.log('okey');
}
else{
    console.log('not okey');
}
