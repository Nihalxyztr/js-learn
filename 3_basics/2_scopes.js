
let a=300
if(true){
    let a=10
    const b=20
    console.log("inner",a)
}

console.log(a)
// console.log(b)



function one(){
    const user="nihal"


    function two(){
        const website="youtube"
        console.log(user)
    }
    // fxn two can acces variable of fxn one beacause the global scoope for fxn two is fxn one
    // console.log(website)
    // fxn one cannot acces the variables beacause they are blocked scope
    two()
}
one()

// if we dont call fxn one the fxn two will also not run so

if(true){
    const username="nihal"
    if(username== "nihal"){
        const website="goggle"
        console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)



///////////intresting/////////

console.log(addone(5))
function addone(val){
    return val+1;
}
// so in addone we can call the fxn before beacause we are not holding it in any 
// variable so it can be called
const add2= function(num){
    return num+2;
}
add2(5)
// but in this vcase we have holded the add2 to a variable and this is concept of hoisting