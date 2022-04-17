'use strict';
//this inside global scope
this.table='window table';
//console.log(window.table);

this.garage={
    table:'garage table',
    /*
    cleanTable(){
        console.log(`cleaning ${this.table}`);
    }
    */
};
//garage.cleanTable();
//console.log(this.garage.table);

//this inside an object
let johnsRoom={
    table:'johns table',
    /*
    cleanTable(){
        console.log(`cleaning ${this.table}`);
    }
    */
};

//console.log(johnsRoom.table);

//this inside a method
//johnsRoom.cleanTable();

//this inside a function
/*
const cleanTable=function(soap){
    const innerFunction=(_soap)=>{
        console.log(`cleaning ${this.table} using ${_soap}`);    
    }
    //innerFunction.bind(this)(soap);
    innerFunction(soap);
}
*/
//cleanTable.call(this,'some soap');
//cleanTable.call(this.garage,'some soap');
//cleanTable.call(johnsRoom,'some soap');

//this inside an ineer function
//adding a inner function in cleanaTable method

//this inside a constructor
let createRoom=function(name){
    this.table=`${name}s table`;
}
createRoom.prototype.cleanTable=function(soap){
    console.log(`cleaning ${this.table} using ${soap}`);
}

const jillRoom=new createRoom('jill');
const juliaRoom=new createRoom('julia');
//console.log(jillRoom.table);

jillRoom.cleanTable('some sopa');
juliaRoom.cleanTable('some soap');

//this inside a class
class CreateRoom{
    constructor(name){
        this.table=`${name}s table`;
    }
    cleanTable(soap){
        console.log(`cleaning ${this.table} using ${soap}`);
    }
}

const jillanRoom=new CreateRoom('jillan');
const julianRoom=new CreateRoom('julian');

jillanRoom.cleanTable('some sopa');
julianRoom.cleanTable('some soap');


//This Assignment Task
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
}

let Mohit1=new Student('Mohit1',24,12345,88);
let Mohit2=new Student('Mohit2',25,12346,39);
let Mohit3=new Student('Mohit3',26,12347,81);
let Mohit4=new Student('Mohit4',27,12348,84);
let Mohit5=new Student('Mohit5',28,12349,98);

Mohit2.eligible();
Student.studentCount();