const posts=[
    {
        title:'Post One',
        body:'This is post one',
        createdAt:new Date().getTime()
    },
    {
        title:'Post Two',
        body:'This is post two',
        createdAt:new Date().getTime()
    }
];

function getPosts(){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            let output='';
            posts.forEach((post,index)=>{
                output+=`<li>${post.title} - created at ${((new Date().getTime()-post.createdAt)/1000).toFixed(0)} seconds ago</li>`;
            });
            document.body.innerHTML=output;
            resolve();
        },1000);
    });
}


function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject('Error: something went wrong');
            }
        },2000);
    });
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length!=0){
                posts.pop();
                resolve();
            }
            else{
                reject('Array is empty now');
            }
        },1000);
    });
}


/*
async function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject('Error: something went wrong');
            }
        },2000);
    });
}

async function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length!=0){
                posts.pop();
                resolve();
            }
            else{
                reject('Array is empty now');
            }
        },1000);
    });
}
*/

/*
createPost({title:'Post Three', body:'This is post three'}).then(()=>{
    getPosts();
    deletePost().then(()=>{
        getPosts();
    }).catch(err=>console.log(err));
}).catch((err)=>{
    console.log(err);
});
*/

async function printPosts(){
    await createPost({title:'Post Three', body:'This is post three',createdAt:new Date().getTime()});
    await getPosts();
    await createPost({title:'Post Four', body:'This is post four',createdAt:new Date().getTime()});
    await getPosts();
    await createPost({title:'Post Five', body:'This is post five',createdAt:new Date().getTime()});
    await getPosts();
    console.log('Hello!');
}

printPosts();

//promise.all
/*
const promise1=Promise.resolve('Hello world');
const promise2=10;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'GoodBye');
});

Promise.all([promise1,promise2,promise3]).then(values => console.log(values));

function lastUpdateActivity(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let error=false;
            if(!error){
                resolve(new Date().getTime());
            }
            else{
                reject('Error!');
            }
        },1000);
    })
}

const createPromise=createPost({title:'Post Three', body:'This is post three',createdAt:new Date().getTime()}).then(getPosts);
const updatePromise=lastUpdateActivity();
Promise.all([createPromise,updatePromise]).then((messages)=>console.log(messages[1]-new Date().getTime())).catch(err=>HTMLFormControlsCollection.log(err));
*/

