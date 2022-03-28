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
/*
let additems=document.querySelector('.title');
additems.style.color='green';
additems.style.fontWeight='bold'; 

let items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='Hello 2';
items[2].style.backgroundColor='green';
*/
/*
for(let i=0;i<items.length;i++)
{
    items[i].style.fontWeight='bold';
}
*/
/*
Array.from(items).forEach(function(item){
    item.style.fontWeight='bold';
});
*/


//let li=document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
/*
if we add a new li tag without the same class name
and we did the previous operations of getElementsByClassName
nothing will happen but if we did the same thing with getElementsByTagName
changes will be seen in the new li tag also
*/

//queryselector
//task-6
/*
let header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';
let input=document.querySelector('input');
input.value='Hello world';

let submit=document.querySelector('input[type="submit"]');
submit.value='SEND';

let item=document.querySelector('.list-group-item');
item.style.color='red';

let lastitem=document.querySelector('.list-group-item:last-child');
lastitem.style.color='blue';

let seconditem=document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor='green';

let thirditem=document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.visibility='hidden';
*/
//queryselectorall

let titles=document.querySelectorAll('.title');
console.log(titles);
//titles[0].textContent='Hello';

//titles[1].style.color='green';

let items=document.querySelectorAll('.list-group-item');
items[1].style.color='green';

let odd=document.querySelectorAll('li:nth-child(odd)');
let even=document.querySelectorAll('li:nth-child(even)');
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
    even[i].style.backgroundColor='#f4f4f4';
}