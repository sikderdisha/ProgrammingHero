console.log('file connected');

//querySelector
document.querySelector('li').innerText='new list';
document.querySelector('li a').innerText='youtube link';

//access using class
document.querySelector('.pera span').innerText='disha';

//querySelectorAll

//not working because index number needed
// document.querySelectorAll('p').innerText='hello disha';
document.querySelectorAll('p')[1].innerText='hello disha';