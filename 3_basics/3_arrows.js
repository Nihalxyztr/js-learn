const user={
    username:"nihal",
    price:999,

    welcomemessage:function(){
        console.log(`${this.username} , welcome to website`)
    }
}
user.welcomemessage()
console.log(this)

// function valofthis(){

//     let username="nihal"
//     console.log(this.username)
// }
// valofthis()

// const valofthis=function(){
    
//     let username="nihal"
//     console.log(this.username)
// }
// valofthis()

 valofthis=()=>{
    
    let username="nihal"
    console.log(this.username)
}
valofthis()

const addtwo =(num1 ,num2)=> (num1+num2)
// if we dont use curly braces we dont need to write return this is a type of implicit expression
