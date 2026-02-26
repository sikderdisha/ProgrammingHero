//getElementsByTagName

// document.getElementsByTagName('li');

//alternative
liCollection = document.getElementsByTagName('li');
console.log(liCollection);

ulCollection = document.getElementsByTagName('ul');
console.log(ulCollection);

//loop
for(const li of liCollection){
     //console.log(li)
    console.log(li.innerText)
}

const headings = document.getElementsByTagName('h1');
for(const heading of headings){
    console.log(heading);
    //console.log(heading.innerText);
}


//getElementById
const x=document.getElementById('list1');
console.log(x);
console.log(x.innerText);

const h=document.getElementById('heading');
console.log(h);
console.log(h.innerText);


//text change
const update =document.getElementById('list2').innerText='this is a banana';
console.log(update);


//getElementsByClassName

//how to use getElementByClass in tailwind
const t =document.getElementsByClassName('text-[25px]');
t[0].innerText = 'Leave me alone';
console.log(t);

//querySelectorAll

//for class
const q = document.querySelector('.container');
console.log(q);
console.log(q.innerText);

//for id
const p = document.querySelector('#pid');
console.log(p);
console.log(p.innerText);

//for tag
const s =document.querySelector('p');
console.log(s);
w = s.innerText ='hey this is disha';
console.log(w)