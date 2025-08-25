let mydate = new Date()
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(typeof mydate) //object 

let newdate= new Date(2024,0,21) 
let newdate1= new Date("2023-01-21")
//(year , month ,date) month start from 0
//but if you use "year-mm-dd" format the month start with 01
console.log(newdate.toLocaleString())
console.log(newdate1.toLocaleString())


let mytimeStamp=Date.now()
console.log(mytimeStamp)
console.log(mydate.getTime())

console.log(Math.floor(Date.now()/1000))
// to get value in seconds



