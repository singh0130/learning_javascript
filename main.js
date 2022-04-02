//single element
const form=document.getElementById('my-form');
console.log(form);

console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));
//multiple element

console.log(document.querySelectorAll('.item'));   // it returns node list and we can perform array operations like for each loop in node list
console.log(document.getElementsByClassName('item')); //it returns htmlcollections and we cannot perfrom array operations in this first we have to convert it into array
console.log(document.getElementsByTagName('li'));

//looping through items
const items=document.querySelectorAll('.item');
items.forEach((item)=>{
    console.log(item);
});

//manipulatiing dom
const ul=document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent='Hello';
//ul.children[1].innerText='Brad';
//ul.lastElementChild.innerHTML='<h1>Hello</h1>';

const btn=document.querySelector('.btn');
//btn.style.background='red';

//ul.firstElementChild.style.background='green';
//ul.children[1].style.background='yellow';
/*
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('#my-form').style.background='#ccc';
    document.querySelector('body').classList.add('bg-dark');
});

btn.addEventListener('mouseover', (e)=>{
    e.preventDefault();
    document.querySelector('#my-form').style.background='#ccc';
    document.querySelector('body').classList.add('bg-dark');
});

btn.addEventListener('mouseout', (e)=>{
    e.preventDefault();
    document.querySelector('#my-form').style.background='#ccc';
    document.querySelector('body').classList.add('bg-dark');
});
*/
const myform=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

myform.addEventListener('submit',onsubmit);
let formData=[];

function onsubmit(e){
    e.preventDefault();
    if(nameInput.value=='' || emailInput.value==''){
        msg.classList.add('error');
        msg.innerHTML='Please enter all fields';

        setTimeout(()=>msg.remove(),3000);
    }
    else{
        if(JSON.parse(localStorage.getItem('formData'))!=null)
        {
            formData=JSON.parse(localStorage.getItem('formData'));
        }
        else
        {
            formData=[];
        }
        formData.push({
            userName:nameInput.value,
            userEmail:emailInput.value
        });
        localStorage.setItem('formData',JSON.stringify(formData));
        dispData();
    }
}
function dispData(){
    if(localStorage.getItem('formData'))
        {
            //const li=document.createElement('li');
            userList.innerHTML="";
            JSON.parse(localStorage.getItem('formData')).forEach(data=>{
                userList.innerHTML +=`<li>${data.userName} : ${data.userEmail}</li>`; 
                //li.appendChild(document.createTextNode(`${data.userName} : ${data.userEmail}`));
            });
            //userList.appendChild(li);
            //clear fields
            nameInput.value='';
            emailInput.value='';
        }
}
dispData();