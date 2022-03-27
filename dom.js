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

let items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='Hello 2';
items[2].style.backgroundColor='green';

/*
for(let i=0;i<items.length;i++)
{
    items[i].style.fontWeight='bold';
}
*/

Array.from(items).forEach(function(item){
    item.style.fontWeight='bold';
});

let li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
/*
if we add a new li tag without the same class name
and we did the previous operations of getElementsByClassName
nothing will happen but if we did the same thing with getElementsByTagName
changes will be seen in the new li tag also
*/