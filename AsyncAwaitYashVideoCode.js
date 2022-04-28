async function dadmakepromise(){
    try{
        const a=1;
        const dadspromise=await new Promise((resolve,reject) => {
            setTimeout(() => {
                var salaryCredited=true;
                var salary=3000;
                var costofps5=40000;
                var costofps4=30000;
                if(salaryCredited===true && salary>costofps5){
                    resolve('Buy him a ps5');
                } else if(salaryCredited===true && salary>costofps4){
                    reject({Success:false, message: 'should i buy you a ps4 instead'});
                } else{
                    reject('Sorry son, i will try next month :(');
                }
            },1000);
        });
        console.log(dadspromise);
    } catch(err){
        console.log(err);
    }
}
dadmakepromise();

async function playPlaystation(){
    console.log('a');
    console.log('b');
    const message=await new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve('Buying a play station');
        },1000);
    });
    console.log(message);
    const message2=await new Promise((resolve,reject)=> {
        setTimeout(()=>{
            console.log('Booting the ps');
            resolve('Booting successful');
        },500);
    });
    console.log(message2);
    console.log('playing');
}
playPlaystation();