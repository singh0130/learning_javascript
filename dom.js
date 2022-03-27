//console.dir(document); //it wil show all the properties and methods attached to the document object
/*
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title=123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms);
console.log(document.links);
console.log(document.images);
*/

//console.log(document.getElementById('header-title'));
let headertitle=document.getElementById('header-title');
/*
headertitle.textContent='Hello!';
console.log(headertitle);
headertitle.innerText='Goodbye';
headertitle.innerHTML='<h3>Hello</h3';
*/

//headertitle.style.borderBottom='solid 3px #000';

let additems=document.querySelector('.title');
additems.style.color='green';
additems.style.fontWeight='bold'; 