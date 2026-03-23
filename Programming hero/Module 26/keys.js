//object.keys()
let king = {
    name : 'Akbar',
    age : 45,
    title : 'Batsha e hind'
};

//freeze
// console.log(Object.freeze(king)); //nothing will changed from king now 

//seal
console.log(Object.seal(king)); //only allow modification

let keys = Object.keys(king);
console.log(keys); //[ 'name', 'age', 'title' ]

//object.values()
console.log(Object.values(king)); //[ 'Akbar', 45, 'Batsha e hind' ]

console.log(Object.entries(king));

//delete
delete king.age;
console.log(king); //{ name: 'Akbar', title: 'Batsha e hind' }


//add
king.place = 'India';
console.log(king); //{ name: 'Akbar', title: 'Batsha e hind', place: 'India' }

//modify
king.name = 'Minar';
console.log(king);