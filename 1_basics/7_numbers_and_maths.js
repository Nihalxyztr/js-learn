const score = 900
//js automatically detect it is number 

const num1 = new Number(100)
// we define here that the data we typed is a number 

console.log(num1)

console.log(num1.toString().length)
const num2 =100.999
console.log(num2.toFixed(2))
//rounds and gives the number based on parameters passed

const num3 = 12.899
console.log(num3.toPrecision(2))
// presicon works with priority of numbers before decimal 

const hundreds=1000000

console.log(hundreds.toLocaleString('en-IN'))


/****************Maths************** */

console.log(Math)
console.log(Math.abs(-2))
console.log(Math.round(12.89))


console.log(Math.random())
console.log((Math.random()*10)+1)

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min +1))+min)
// formula for getting random value in range min to maximum
