//const tinderUser=new Object() Singleton Object


//non- singletion object
const tinderUser={}

tinderUser.id="121"
tinderUser.name="rax"
tinderUser.islog=false
// console.log(tinderUser)


const regUser={
    email:"some@gamil.com",
    userfullname:{
        first:"Nihal",
        last:"Tripathi"
    }
}
console.log(regUser.userfullname)
console.log(regUser.userfullname.first)

const obj1={
    1:'a',
    2:"b"
}

const obj2={
    3:"a",
    4:'b'
}

// const obj3={
//     obj1,obj2
// }

const obj3=Object.assign({},obj1,obj2)

console.log(obj3)

// another way 

const obj4={
    ...obj1,...obj2,
}
console.log(obj4)


console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))

console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('islog'))


const course={
    cname:"js",
    price:999,
    instructor:"nihal"
}

const{instructor : teach} = course
console.log(teach)

//api format in json
// {
//     "name":'nihal',
//     "coursename":"blender 1-100",
//     "price":1000
// }

