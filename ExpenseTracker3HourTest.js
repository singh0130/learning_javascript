const myform=document.querySelector('#my-form');
const amountInput=document.querySelector('#amount');
const discInput=document.querySelector('#disc');
const categoryInput=document.querySelector('#category');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

myform.addEventListener('submit',onsubmit);

window.addEventListener('DOMContentLoaded',display);
function display(){
    Object.keys(localStorage).forEach(key=>{
        let details=JSON.parse(localStorage.getItem(key));
        userList.innerHTML +=`<li id=${details.category}> ${details.amount} - ${details.description} -${details.category}<button onclick=deleteUser('${details.category}')>Delete</button>
        <button onclick=editUser('${details.amount}','${details.description}','${details.category}')>Edit</button></li>`;
    })
}

function onsubmit(e){
    e.preventDefault();
    if(amountInput.value=='' || discInput.value==''){
        msg.innerHTML='Please enter all fields';

        setTimeout(()=>msg.remove(),3000);
    }
    else{
        const obj={
            amount:amountInput.value,
            description:discInput.value,
            category:categoryInput.value
        }
        localStorage.setItem(obj.category,JSON.stringify(obj));
        addUsers(obj);
        amountInput.value='';
        discInput.value='';
        categoryInput.value='';
    }
}

function addUsers(obj){
    const userList=document.querySelector('#users');
    //if(localStorage.getItem(obj.userEmail)!==null){
        //removeUserFromScreen(obj.userEmail);
    //}
    const childHTML = `<li id=${obj.category}> ${obj.amount} - ${obj.description} -${obj.category}
                                        <button onclick=deleteUser('${obj.category}')> Delete User </button>
                                        <button onclick=editUser('${obj.amount}','${obj.description}','${obj.category}')>Edit User </button>
                                     </li>`
    //const childHTML=`<li id=${obj.userEmail}>${obj.userName}:${obj.userEmail}<button onclick=deleteUser('${obj.userEmail}')>Delete</button>
    //<button onclick=editUser('${obj.userName}','${obj.userEmail}')>Edit</button></li>`
    userList.innerHTML=userList.innerHTML+childHTML;
}

function deleteUser(category){
    localStorage.removeItem(category);
    removeUserFromScreen(category);
}

function removeUserFromScreen(category){
    const childNodeToBeDeleted=document.getElementById(category);
    if(childNodeToBeDeleted){
        userList.removeChild(childNodeToBeDeleted);
    }
}



function editUser(amount,description,category){
    amountInput.value=amount;
    discInput.value=description;
    deleteUser(category);
}