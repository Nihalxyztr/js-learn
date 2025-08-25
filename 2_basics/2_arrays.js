const marvel=["thor","captian america","iron man"]
const dc=["batman","superman","green lantern"]

// marvel.push(dc)

console.log(marvel)
//wwe can see array in java script can take any type of values not fixed to a type of array 
// like int array or string array
// here it took array as element

console.log(marvel[2])

const allheroes=marvel.concat(dc)
console.log(allheroes)
// diff between push and concat is push works on the array while concat return a new array

const all =[...marvel,...dc]
console.log(all)
// diff between concat and spread operator we can add multiple arrays rather than in concat we an only add 1 array

const arr2=[1,2,3,[4,5,6,7],8,[9,10,11,12]]

const flatarray=arr2.flat(Infinity)
console.log(flatarray)
// all subarrays are converted in single array

console.log(Array.isArray("nihal"))
///check whter is array or not

console.log(Array.from('Nihal'))
//converst in array

let s1=100;
let s2=200;
let s3=300

console.log(Array.of())


