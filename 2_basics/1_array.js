//array 
// array in js are resizable 

const arr1=[0,1,2,3,4]
console.log(arr1)

const killer=["lecter", "BTK","Son of sam"]
console.log(killer[0])

killer.push("brian moser")//add at last
console.log(killer)

killer.pop()//remove last
console.log(killer)

killer.unshift("edumnd kemper")// add at first
console.log(killer)

killer.shift()//remove first
console.log(killer)

const newarr=killer.join()//converts in string 

console.log(killer)
console.log(newarr)

console.log(typeof newarr)


//slice and splice

console.log("A" , killer)

const myn1= killer.slice(1 , 2)

console.log(myn1)

console.log("B" , killer)

const myn2 =killer.splice(1,2)
console.log("C" , killer)
console.log(myn2)


// diifrence betwwen splice and slice is splice manipulates the whole array while slice does not and
//slice does till 1 less while splice takes till range passed 