//loops
let arr =[1,56,11,59];
 
for(let i=0;i<=arr.length;i++){
    console.log(arr[i]);
}


//alternative
for(const array of arr){
    console.log(array);
}

const products =[
    {id:1,name:'xiome20',price:20000},
    {id:22,name:'oppo',price:20000},
    {id:2,name:'realme',price:20000},
    {id:3,name:'infinity20',price:20000},
    {id:20,name:'redmi20',price:20000}
];

// for(const product of products){
//     console.log(product);
// }


//matched

function matchedProducts(products,search){
    const update=[];//to store multiple outputs
    for(const product of products){
        if(product.name === search){
            update.push(product);
        }
   
}
return update;
}
console.log(matchedProducts(products,'infinity20'));//full string in search

//partial search
function newProducts(products,search){
    const newUpdate=[];
    for(const pro of products){
        if(pro.name.includes(search)){
            newUpdate.push(pro);

        }
        return newUpdate
    }
}
console.log(newProducts(products,'20'));