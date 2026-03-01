const updateTitle=document.getElementById('update');
console.log(updateTitle);
//alert msg
// updateTitle.onclick = function(){
//     alert('button is clicked');
// }

//hover
updateTitle.addEventListener('mouseover',function(){
updateTitle.style.backgroundColor='pink';})
 
//click event    
updateTitle.addEventListener('click',function(){
alert('button is clicked');
updateTitle.style.color='white';
updateTitle.style.backgroundColor='orange';
h1.innerText='Title is updated';
document.body.style.backgroundColor='black';
document.body.style.color='white';

    })

