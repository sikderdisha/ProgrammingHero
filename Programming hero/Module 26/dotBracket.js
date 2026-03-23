let employee = {
    name : 'Minar',
    1: 'desk one',
    // employee-id :12367; not woking cz if your property name has 2 parts you need to write it under quotation
    'employee-id' :12367,

};
console.log(employee);
console.log(employee.name);

// console.log(employee.1);//error,so here we need bracket notation 
console.log(employee[1]);
// console.log(employee.'employee-id') //dont work 
console.log(employee["employee-id"]);
console.log(employee["name"])