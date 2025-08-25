// for of

const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}

const str="Nihal"

for (const greet of str) {
    console.log(greet)
}

//Maps

const map = new Map()
map.set("in","India")

for (const [key,value] of map) {
    console.log(key,value)
}

const obj={
    'game1': "bgmi",
    "game2":"codm"
}

for (const [key,value] of object) {
    console.log(key,value)
}
// it wont work for objects this way

