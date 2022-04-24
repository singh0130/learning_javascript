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

let intervalId=0;
function getPosts(){
    clearInterval(intervalId);
    intervalId=setInterval(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title} - created at ${((new Date().getTime()-post.createdAt)/1000).toFixed(0)} seconds ago</li>`;
        });
        document.body.innerHTML=output;
        console.log('timer id:',intervalId);
    },1000);
}

function createPost(post,callback){
    setTimeout(()=>{
        posts.push({...post, createdAt: new Date().getTime()});
        callback();
    },2000);
}


createPost({title:'Post Three',body:'This is post three'},getPosts);
createPost({title:'Post Four',body:'This is post four'},getPosts);