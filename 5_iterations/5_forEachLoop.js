const code=["ruby","java","js","python"]

code.forEach(function(val){
    console.log(val);
    
})

code.forEach( (item)=>{
    console.log(item);
    
})

// function print(item){
//     console.log(item)
// }

// code.forEach(print)

code.forEach( (item , index ,array)=>{
    console.log(item ,index , array);
    
})

const mycoding=[{
    lagnunageName:"javascript",
    lagnunagefile:"js"

},
{
    lagnunageName:"python",
    lagnunagefile:"py"

},
{
    lagnunageName:"c++",
    lagnunagefile:"cpp"

},
{
    lagnunageName:"java",
    lagnunagefile:"java"

}

]

mycoding.forEach( (item)=>{
    console.log(item.lagnunageName)
})