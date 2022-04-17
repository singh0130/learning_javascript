'use strict';

//function without fat arrow
/*
var getA=function(a){
    return a;
}
*/

//function with fat arrow
let getA= a => a;
//on the left side of the => is argument and function is replaced by => and on the right side is body of the function
//we don't have to explicitely use return here for one line statement
console.log(getA(1));

let square= (a) => {
    return a*a;
}
console.log(square(2));

/*
let a=4;
let cube= () => {
    return a*a*a;
}
console.log(cube());
*/

let mult= (a,b) => {
    return a*b;
}
console.log(mult(2,4));

var x=function(){
    this.val=1;
    setTimeout(() => {
        this.val++;
        console.log(this.val);
    },1000)
}

var xx=new x();
//Arrow function does not have their own this so if you want to use someone else this use arrow function
//and every function has its own this.
//Arrow function does not have their own this so the use their parents lexical scope this

//in regular functions i can actuallly pass arguments without specifying any parameters
var y=function(){
    console.log(arguments[0]);
}

y(1,2,3);

// we can do this by using spread operator in fat arrow functions
var yy= (...n) => {
    console.log(n[0]);
}

yy(4,5,6);

//Fat Arrow Assignment Task
class Student{
    static count=0;
    constructor(name,age,phone,marks){
        this.name=name;
        this.age=age;
        this.phone=phone;
        this.marks=marks;
        Student.count++;
    }
    eligible(){
        if(this.marks>=40){
            console.log('eligible');
        }
        else{
            console.log('not eligible');
        }
    }
    static studentCount(){
        console.log(Student.count);
    }
    eligibleForPlacement(minMarks){
        return (minAge) => {
            if(this.marks>minMarks && this.age>minAge)
            {
                console.log(`${this.name} is eligible for placement`);
            }
            else {
                console.log(`${this.name} is not eligible for placement`);
            }
        }
    }
}

let Mohit1=new Student('Mohit1',24,12345,88);
let Mohit2=new Student('Mohit2',25,12346,39);
let Mohit3=new Student('Mohit3',26,12347,81);
let Mohit4=new Student('Mohit4',27,12348,84);
let Mohit5=new Student('Mohit5',28,12349,98);

Mohit1.eligibleForPlacement(40)(18);
