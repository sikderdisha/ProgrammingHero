//create new element
const newChild =document.createElement('h1');
const c =document.createElement('p');

//set text
newChild.innerText='Heading';
c.innerText='disha';

//find the parent where you will add the element
const parent =document.getElementsByTagName('body')[0];
const p =document.getElementsByTagName('body')[0]; //cause body is only one element


//append child(add new child into the parent)
parent.appendChild(newChild);
p.appendChild(c);