let form=document.getElementById('addForm');
let itemList=document.getElementById('items');
let filter=document.getElementById('filter');

//form submit event
form.addEventListener('submit',addItem);
//Delete event
itemList.addEventListener('click',removeItem);
//filter event
filter.addEventListener('keyup',filterItems);

//Add item
function addItem(e){
    e.preventDefault();
    //get input value
    let newItem=document.getElementById('item').value;
    //create new li element
    let li=document.createElement('li');
    //Add class
    li.className='list-group-item';
    console.log(li);
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //create delete button element

    let deleteBtn=document.createElement('button');
    //Add class to delete button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //Add edit button
    //let editBtn=document.createElement('button');
    //editBtn.className='btn btn-dark float-right edit';
    //editBtn.appendChild(document.createTextNode('EDIT'));
    //Append button to li
    li.appendChild(deleteBtn);
    //li.appendChild(editBtn);

    //Append li to list
    itemList.appendChild(li);
}

//Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filterItems
function filterItems(e){
    //convert text to lowercase
    let text=e.target.value.toLowerCase();
    //get lis
    let items=itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        let itemName=item.firstChild.textContent;
        let itemDesc=item.children[0].textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1 || itemDesc.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    });
}