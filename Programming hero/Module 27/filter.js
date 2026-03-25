const array = [1,4,5,77,9,3];
const evenNumber = array.filter(arr => arr % 2 === 0);
console.log(evenNumber);

const numbers = [1,2,33,45,20,80,55,63];
const result = numbers.filter(num => num > 50);
console.log(result);

const names = ['disha', 'diya', 'dipa', 'antora', 'anamika', 'mukti'];
const nam = names.filter(name => name[0] === 'd');
console.log(nam);

const student =[
    {name:'disha',age:20},
    {name : 'anu' , age:35},
    {name : 'maya',age:23}
];
console.log(student.filter(stu => stu.age > 20));