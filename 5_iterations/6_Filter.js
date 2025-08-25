// const code=["ruby","java","js","python"]

// const values=code.forEach( (item)=>{
//     //console.log(item);
//     return item;
    
// })
// console.log(values)

const mynum=[1,2,3,4,5,6,7,8,9,10]


// const newnums=mynum.filter( (num)=> {
//     return num>4
// } )
// console.log(newnums)


// const newnums=[]
// mynum.forEach( (num)=>{
//     if(num>4){
//         newnums.push(num)
//     }
// })

// console.log(newnums)


const books = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho", year: 1988, genre: "Fiction", price: 300 },
  { id: 2, title: "Atomic Habits", author: "James Clear", year: 2018, genre: "Self-help", price: 450 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian", price: 250 },
  { id: 4, title: "Sapiens", author: "Yuval Noah Harari", year: 2011, genre: "History", price: 600 },
  { id: 5, title: "Harry Potter", author: "J.K. Rowling", year: 1997, genre: "Fantasy", price: 500 },
  { id: 6, title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", year: 2016, genre: "Self-help", price: 350 },
  { id: 7, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Classic", price: 280 },
  { id: 8, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", year: 1997, genre: "Finance", price: 400 },
  { id: 9, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Classic", price: 270 },
  { id: 10, title: "Ikigai", author: "Héctor García", year: 2016, genre: "Self-help", price: 320 },
  { id: 11, title: "Silence of the Lambs", author: "Thomas Harris", year: 1988, genre: "Psycho Killer", price: 420 },
  { id: 12, title: "American Psycho", author: "Bret Easton Ellis", year: 1991, genre: "Psycho Killer", price: 390 },
  { id: 13, title: "Misery", author: "Stephen King", year: 1987, genre: "Psycho Killer", price: 350 },
  { id: 14, title: "Psycho", author: "Robert Bloch", year: 1959, genre: "Psycho Killer", price: 310 },
  { id: 15, title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", year: 2005, genre: "Psycho Killer", price: 480 }
];


//const userbooks= books.filter( (bk)=> bk.genre=='Psycho Killer')

const userbooks= books.filter( (bk)=> bk.price>300)
console.log(userbooks);





