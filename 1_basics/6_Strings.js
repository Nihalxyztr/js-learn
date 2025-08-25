// String are denoted in " " and even in ' '

const name="Nihal"

const age=18;
// console.log(name + age +"Value")
// primitve way to concat the strings

console.log(`Hello my name is ${name} and my age is ${age}`);

const game= new String("Tom-clancy-Wildland")

console.log(game[0]);
console.log(game.__proto__);

console.log(game.length);

console.log(game.toUpperCase());
console.log(game)// we can see here it just changed the  refernce string not the orignal one


console.log(game.charAt(2));

const newStr=game.substring(-8,3)
console.log(newStr)

//String slice till (0,n) => prints till n-1 values

const anotherStr= game.slice(-6, 8)
console.log(anotherStr);
// it includes till the length  didnt understand this one properly


const str1="    xyz    "
console.log(str1)
console.log(str1.trim())

const url="https://nihal.com//nihal%20tripathi"

console.log(url.replace('%20','-'));
// changes the value of 1st parameter to 2nd

console.log(url.includes('nihal'))
console.log(url.includes('xyz'))
//return boolean value if it include 


console.log(game.split('-'))
// splits the string on the basis of sperator pass in an array

