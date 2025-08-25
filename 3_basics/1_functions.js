function sayMyname(){
    console.log("n")
    console.log("i")
    console.log("h")
    console.log("a")
    console.log("l")
}
sayMyname();
//parameter are(num1,num2)
function addNum(num1,num2){
    // console.log(num1+num2)
    return num1+num2
}

const result =addNum(3,4)
console.log(result)
//arguments are (3,4)
// addNum(3,"5")
// addNum(1,"a")
// addNum(1,null)


function loginUserMessage(username){
    return `${username} just looged in`
}
const res=loginUserMessage("nihal")
console.log(res)

//if we dont provide any value then it return undefined
 
function calcCartPrice(...num1){
    return num1;
}

console.log(calcCartPrice(200,300,400))


const user={
    username:"nihal",
    price:199
}

function handle(anyobject){
    console.log(`username is ${anyobject.username} price is ${anyobject.price}`)

}
handle(user)

handle({
    name:"raj",
    price:100
})

const arr=[200,300,400,100]

function returnsecondval(getArray){
    return getArray[1]
}

console.log(returnsecondval(arr))