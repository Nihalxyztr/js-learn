//Category of data 
//1) Primitive 
//2 ) Non - Primitive

//Primitive
// 7 type : Chnages are made in a refrence copy not orignal.
//Call by Value : String,Number,Boolean,null,undefined,Symbol,Bigint


//

//Refernce (Non -Primitive)
//Arrays,Objects,Functions

// const killers=["Ed Kemper","Son of Sam","Hannibal Lecter","BTK"]

let obj1={
    name : "Nihal",
    age:"18"
}

const myFunction = function(){
    console.log("hello")
}
myFunction()

console.log(typeof myFunction)


/// Stack(Primitive)   , Heap (Non- Primitive)

let name1= "Nihal";
let name2 = name1;
name2= "raj"
console.log(name1)
console.log(name2)
// no change in first variable
// stack mem allocation changes done in copy 

let user1={
    email:"user@mail.com",
    upi:"xyz@ybl"
}

let user2= user1

user2.email="nihal@email.com"

console.log(user1.email)
console.log(user2.email)

// change in the user1 email also
//heap memeory allocation changes done in org refernce