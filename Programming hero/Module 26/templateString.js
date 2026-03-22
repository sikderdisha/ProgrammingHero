//multiline sting
let name = `I am Disha.
Who are you?
Are you drank:`;  //we can't write this type multiline with double quote or single quote

console.log(name);

function productDetails(price,des){
    const pro =`This is my new phone, the price is ${price}.
    If you need more about it ,you may read the description ${des},`;
    console.log(pro);
}
productDetails(12000,'Samsung Company');


function details(n,des){
    const div=
    `<div class = card>
          Hey ${n.toUpperCase()}.I got a new phone from ${des}.It calculate ${(10+50)*20}
    </div>`;

    console.log(div);

  
}
details('Disha','samsung');