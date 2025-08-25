//for

// for (let i = 0; i < 10;i++) {
//     const element =i 
//     if(element==5){
//         console.log("5 is best number")
//     }
//     console.log(element)
    
// }


// console.log(element)
// wont run due to scopes

for (let i = 1; i <=10; i++) {
   // console.log(`Table of ${i}`)
   for (let j = 1; j <=10; j++) {
    // console.log(`inner loop ${j} and outer loop ${i}`)
    //console.log(`${i} * ${j} = `+ i*j)
   }
    
}

let myarr=["flash","batman","superman"]

for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
   // console.log(element)
    
}

//break and continue

for (let index = 1; index < 20; index++) {
    if(index==5){
        console.log("detected 5")
        break;
    }
    console.log(`value of ${index}`)
    
}

for (let index = 1; index < 20; index++) {
    if(index==5){
        console.log("detected 5")
        continue;
    }
    console.log(`value of ${index}`)
    
}
// break exits the loop while continue just skips the one itreation or whtever you can understand from snippet