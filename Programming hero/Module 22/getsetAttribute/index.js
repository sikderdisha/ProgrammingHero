// 1. Element ধরো
const h1 = document.querySelector('h1'); // অথবা getElementsByTagName('h1')[0]

// 2. Attribute value নাও
const h = h1.getAttribute('class');

// 3. দেখাও
console.log(h); // Output: "heading"


//change the class name
const x = document.querySelector('h1');
const y=x.setAttribute('heading','title');
console.log(y);