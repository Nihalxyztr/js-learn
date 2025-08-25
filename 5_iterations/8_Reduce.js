const mynum=[1,2,3]

const total=mynum.reduce( (acc,curval)=>{
    console.log(`${acc} , ${curval}`);
    return acc +curval
},0)
console.log(total)

const cart=[
    {
        itemname:"jscourse",
        price:2000
    },
    {
        itemname:"python course",
        price:1200
    },
    {
        itemname:"java course",
        price:200
    }
]

const res= cart.reduce((acc,item)=>item.price+acc,0)
console.log(res);
