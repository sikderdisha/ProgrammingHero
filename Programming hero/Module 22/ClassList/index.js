const p = document.getElementById('pid');
// p.style.color='white';
// p.style.backgroundColor="red";
p.style.padding = '10px';
p.style.borderRadius ='20px';
p.style.margin='5px';

const h =document.getElementsByTagName('h1');
h[0].style.textAlign='center';
h[0].style.backgroundColor='green'
h[0].style.color='white';

p.classList.add('bg','text');
p.classList.remove('text');
p.classList.replace('bg','pink');