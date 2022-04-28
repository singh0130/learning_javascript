/*
console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('ticket');
    },3000);
});

const getPopcorn=promiseWifeBringingTicks.then((t)=>{
    console.log('wife: i have the tickets');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve,reject)=>{
        resolve(`${t} popcorn`);
    });
});

const getButter=getPopcorn.then((t)=>{
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');
    return new Promise((resolve,reject)=>{
        resolve(`${t} butter`);
    });
});

const getCoke=getButter.then((t)=>{
    console.log('husband: i got some butter');
    console.log('husband: we should go in');
    console.log('wife: i need coke');
    return new Promise((resolve,reject)=>{
        resolve(`${t} coke`);
    });
});

getCoke.then((t)=>console.log(t));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
*/

// async and await
console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie=async () => {
    const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
        setTimeout(() =>{
            resolve('ticket');
            //reject('ticket'); // for checking the try catch block
        },3000);
    });

    const getPopcorn=new Promise((resolve,reject) => {
        resolve('popcorn');
    });

    const addButter=new Promise((resolve,reject) => {
        resolve('butter');
    });

    const getCandy=new Promise((resolve,reject) => {
        resolve('candy');
    });

    const getCoke=new Promise((resolve,reject) => {
        resolve('coke');
    });

    let ticket;
    try{
        ticket=await promiseWifeBringingTicks;
    } catch(e){
        ticket='sad face';
    }
    /*
    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    */
    //let popcorn=await getPopcorn;

    /*
    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');
    */

    //let butter=await addButter;

    /*
    console.log(`husband: i got some ${butter} on popcorn`);
    console.log('husband: anything else darling?');
    console.log('wife: lets go we are getting late');
    console.log('husband: thank you for the reminder *grins*');
    */

    //let coke=await getCoke;

    let [popcorn,candy,coke]=await Promise.all([getPopcorn,getCandy,getCoke]);
    console.log(`${popcorn}, ${candy}, ${coke}`);

    return ticket;
}
preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');