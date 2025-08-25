const email ="nihal@mail.com"
if(email){
    console.log("got one")
}else{
    console.log("did not got")
}


// falsy value 

// false , 0 ,-0, BigInt 0n, "", null",undefined,Nan


//truthy 

//"0" , 'false'," ",[],{}, function(){}

const obj={}
if (Object.keys(obj).length===0) {
    console.log("empty ")
}

// Nullish coalescing operator (??): null undefiend

let val1;
val=5 ?? 10
// val=null?? 10

val = null ?? undefined ?? 15

console.log(val)

//it is diffrent form ternary 


//Ternary 

// condition ? true :false

const price=10;
price<100 ? console.log("it is less") : console.log("it is more")