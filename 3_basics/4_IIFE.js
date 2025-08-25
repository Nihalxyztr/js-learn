( function name(){
    console.log("hi nihal")
 })();// semicolon is neceecary while using iife

 // we use iife to remove global scope pollution

 ((name)=>{
    console.log(name)
 })("nihal")