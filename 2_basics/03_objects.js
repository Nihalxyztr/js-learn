// if we make object trough constructor then it is singelton
//if we object through literals than it is not singelton 

//object literals

const sym1= Symbol("key1")

const jsUser={
    name:"nihal",
    "full name":"Nihal tripathi",
    [sym1]:"newsym",//synatx to define symbol;
    age:'18',
    loctaion:"Mathura",
    isLogged:false,
    lastLoginDate:["monday","saturday"]
}

// how to access the values from objects

console.log(jsUser.name)

console.log(jsUser["name"])


console.log(jsUser["full name"])//synatx to print this type of key 

console.log(jsUser[sym1])


jsUser.age='19'

// Object.freeze(jsUser)
jsUser.age="20"
console.log(jsUser)


jsUser.greeting=function(){
    console.log("hello js user")
}

jsUser.greetingTwo=function(){
    console.log(`hello js user ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())