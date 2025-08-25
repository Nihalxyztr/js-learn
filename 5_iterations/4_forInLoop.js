const obj={
    js:"javascirpt",
    cpp:"c++",
    rb:"ruby"
}

for (const key in obj) {
   console.log(`${key} shortcut is for ${obj[key]}`)
}

const prog=["js","cpp","rb","py","java"]

for(const key in prog){
    console.log(key)
    console.log(prog[key])
}

// map can also not be iterable by forIn

