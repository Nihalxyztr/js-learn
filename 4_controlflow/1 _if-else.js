//control flow statements 
//

//if

//if(condition true){
//will excete the statemnts in this block
//}


//if(condition alse){
//will not execute the staments in this block
//}


// comaprison opeator

// <, >, <=, =>,!=, == , ===(it also check type)


const scor=200;
if(scor>100){
    const pow="fly"
    console.log(`user power ${pow}`)
}
// console.log(pow)
// scoping issue


const bal=1000
if(bal>500) console.log('test'),console.log('test2')//  not to do this way

if(bal<500){
    console.log("less")
}
else if(bal<750){
    console.log("less than 750")
}
else{
    console.log("less thn 1200")
}


const logIn=true
const debitcard=true
const googleLog=true;
const perosnallog=false;

if(logIn && debitcard){
    console.log("can shop")
}

if(googleLog || perosnallog){
    console.log("user log")
}

