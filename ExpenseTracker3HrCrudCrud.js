const myform=document.querySelector('#my-form');
const amountInput=document.querySelector('#amount');
const discInput=document.querySelector('#disc');
const categoryInput=document.querySelector('#category');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

myform.addEventListener('submit',onsubmit);

window.addEventListener('DOMContentLoaded',display);
function display(){
    /*
    Object.keys(localStorage).forEach(key=>{
        let details=JSON.parse(localStorage.getItem(key));
        userList.innerHTML +=`<li id=${details.category}> ${details.amount} - ${details.description} -${details.category}<button onclick=deleteUser('${details.category}')>Delete</button>
        <button onclick=editUser('${details.amount}','${details.description}','${details.category}')>Edit</button></li>`;
    })
    */
    axios.get('https://crudcrud.com/api/63d443ad10c149aca7b1c2f19968192a/expenseTracker')
    .then((response)=>{
        console.log(response);
        for(let i=0;i<response.data.length;i++){
            addUsers(response.data[i]);
        }
    })
    .catch((err)=> console.log(err));
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
        //localStorage.setItem(obj.category,JSON.stringify(obj));
        //addUsers(obj);
        axios.post('https://crudcrud.com/api/63d443ad10c149aca7b1c2f19968192a/expenseTracker',obj)
        .then((response)=>{
            addUsers(response.data);
            //console.log(response);
        })
        .catch((err)=> console.log(err));
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
    const childHTML = `<li id=${obj._id}> ${obj.amount} - ${obj.description} -${obj.category}
                                        <button onclick=deleteUser('${obj._id}')> Delete User </button>
                                        <button onclick=editUser('${obj.amount}','${obj.description}','${obj._id}')>Edit User </button>
                                     </li>`
    //const childHTML=`<li id=${obj.userEmail}>${obj.userName}:${obj.userEmail}<button onclick=deleteUser('${obj.userEmail}')>Delete</button>
    //<button onclick=editUser('${obj.userName}','${obj.userEmail}')>Edit</button></li>`
    userList.innerHTML=userList.innerHTML+childHTML;
}

function deleteUser(id){
    //localStorage.removeItem(category);
    //removeUserFromScreen(category);
    axios.delete(`https://crudcrud.com/api/63d443ad10c149aca7b1c2f19968192a/expenseTracker/${id}`)
    .then((response)=> {
        removeUserFromScreen(id);
    })
    .catch((err)=> {
        console.log(err);
    });
}

function removeUserFromScreen(id){
    const childNodeToBeDeleted=document.getElementById(id);
    if(childNodeToBeDeleted){
        userList.removeChild(childNodeToBeDeleted);
    }
}



function editUser(amount,description,id){
    amountInput.value=amount;
    discInput.value=description;
    deleteUser(id);
}