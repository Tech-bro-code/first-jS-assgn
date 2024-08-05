let library = [];
library.push(
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        yearPublished: 1925,
        available: "true",
    },
    {
        title: "To kill a Mockingbird",
        author: "Harper Lee",
        yearPublished: 1960,
        available: "true",
    },
    {
        title: "1984",
        author: "George Orwell",
        yearPublished: 1949,
        available: "false",
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austin",
        yearPublished: 1813,
        available: "true",
    }
)
console.log(library)
library[2] = 
{
    title: "1984",
    author: "George Orwell",
    yearPublished: 1949,
    available: "true",
}
console.log(library);

const newLibrary = library.splice(3,1);
 console.log(library);
 console.log(newLibrary);
 
 console.log(library.includes("The Great Gatsby"));

     
library[0] =
{
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
    available: "false"
}
console.log(library.shift());

library.unshift(
    {
        title: "The Catcher in the Rye",
        author: "J.D Sallinger",
        yearPublished: 1951,
        available: "true"
    }
)

library.filter((x) => {
    console.log(x.title); 
 });  
let allTitle = library.map((x) => `${x.title}`).join(", ");
console.log(allTitle);
let  newArrivals = library.slice(1);
 console.log(newArrivals);

