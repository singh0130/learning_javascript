//call apply and bind
let name={
    firstName:"Mohit",
    lastName:"Singh"
}
let printFullName=function(hometown,state){
    console.log(this.firstName+" "+this.lastName+" from "+hometown+","+state);
}
//function borrowing
//syntax - functionName.call(objectname,function args);
//objectname is the name of the object this should point to
printFullName.call(name,"korba","Chhattisgarh");

let name2={
    firstName:"Rohit",
    lastName:"Singh"
}

printFullName.call(name2,"korba","Chhattisgarh");
printFullName.apply(name2,["Korba","Chhattisgarh"]);

//bind method
let printMyname=printFullName.bind(name2,["Korba","Chhattisgarh"]);
console.log(printMyname);
printMyname();

let Student={
    age:20
}

function printAge(){
    console.log(this.age);
}

let result=printAge.bind(Student);
result();

//Currying
//using bind method
let multiply=function(x,y){
    console.log(x*y);
}

let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(3);

let multiplyByThree=multiply.bind(this,3);
multiplyByThree(3);

//using closures
let add=function(x){
    return function(y){
        console.log(x+y);
    }
}

let addTwo=add(2);
addTwo(3);

let addThree=add(3);
addThree(3);

