//Map
const mynum=[1,2,3,4,5,6,8,9];

const res =mynum.map( (num) => num+10)
console.log(res)

//Chaining

const newNum=mynum.map( (num)=>num*10).map((num)=>num+1).filter((num)=> num>30)
console.log(newNum)


