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

//let titles=document.querySelectorAll('.title');
//console.log(titles);
//titles[0].textContent='Hello';

//titles[1].style.color='green';

/*
let items=document.querySelectorAll('.list-group-item');
items[1].style.color='green';

let odd=document.querySelectorAll('li:nth-child(odd)');
let even=document.querySelectorAll('li:nth-child(even)');
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
    even[i].style.backgroundColor='#f4f4f4';
}
*/

//traversing the dom
let itemList=document.querySelector('#items');
//parentnode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
/*
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);
*/

//childNodes
//console.log(itemList.childNodes); //not preferred to use as it inculdes line breaks as text also in the ListNode
/*
console.log(itemList.children); //it returns HTMLCollection but no line breaks as text
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';
*/
//firstchild
//console.log(itemList.firstChild); //use-less
//firstElementChild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent='Hello 1';

//lastchild
//console.log(itemList.lastChild); //use-less
//lastElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent='Hello last';

//nextSibling
//console.log(itemList.nextSibling);
//nextElementSibling
//console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling.previousSibling);
//previousElementSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color='green';

//createElement

//create a div
//let newDiv=document.createElement('div');
//Add class
//newDiv.className='hello';
//Add id
//newDiv.id='Hello1';
//Add attribute
//newDiv.setAttribute('title','Hello Div');
//create text node
//let newDivText=document.createTextNode('Hello world');
//Add text to div
/*
newDiv.appendChild(newDivText);

let container=document.querySelector('header .container');
let h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);
newDiv.style.fontSize='30px';

console.log(newDiv);

let ul=document.querySelector('ul');
let li=document.querySelector('li');

ul.insertBefore(newDiv,li);
*/

//Events
//let button=document.getElementById('button').addEventListener('click',buttonClick);

//function buttonClick(e){
    //console.log(123);
    //document.getElementById('header-title').textContent='changed';
    //document.querySelector('#main').style.backgroundColor='#f4f4f4';
    //console.log(e);
    /*
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    console.log(e.type);
    */
   //console.log(e.clientX);
   //console.log(e.clientY);
   //console.log(e.offsetX);
   //console.log(e.offsetY);
    /*
   console.log(e.altKey);
   console.log(e.ctrlKey);
   console.log(e.shiftKey);
   */
//}
let button=document.getElementById('button');
//button.addEventListener('click',runEvent);
//button.addEventListener('dblclick',runEvent);
//button.addEventListener('mousedown',runEvent);
//button.addEventListener('mouseup',runEvent);

let box=document.getElementById('box');
//box.addEventListener('mouseenter',runEvent);
//box.addEventListener('mouseleave',runEvent);

//box.addEventListener('mouseover',runEvent);
//box.addEventListener('mouseout',runEvent);
//box.addEventListener('mousemove',runEvent);
let itemInput=document.querySelector('input[type="text"]');
let form=document.querySelector('form');
let select=document.querySelector('select');

//itemInput.addEventListener('keydown',runEvent);
//itemInput.addEventListener('keyup',runEvent);
//itemInput.addEventListener('keypress',runEvent);
//itemInput.addEventListener('focus',runEvent);
//itemInput.addEventListener('blur',runEvent);

//itemInput.addEventListener('cut',runEvent);
//itemInput.addEventListener('paste',runEvent);

//itemInput.addEventListener('input',runEvent);

//select.addEventListener('change',runEvent);
//select.addEventListener('input',runEvent);

form.addEventListener('submit',runEvent);

function runEvent(e){
    e.preventDefault();
    console.log('Event type: '+e.type);
    //let output=document.getElementById('output');
    //output.innerHTML='<h3>MouseX: '+e.offsetX+'</h3>'+'<h3>MouseY: '+e.offsetY+'</h3>';
    //box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";

    //document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
    //console.log(e.target.value);
    //output.innerHTML='<h3>'+e.target.value+'</h3>';
}

