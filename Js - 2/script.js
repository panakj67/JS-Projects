// reduce() -> it reduces the array into as single entity. mtlb ?? for example summing up
// the values of array, like adding the prices of all objects

let arr = [2, 3, 4, 6, 7, 12, 23];
let sum = arr.reduce(function(acc , val){
    return acc + val;
} , 0) // accumulator and value ... function and intial value of accumulator 

// 57

let products = [
    {
        name: "iPhone 15 Pro",
        price: 999,
        category: "Electronics",
        brand: "Apple",
        inStock: true
    },
    {
        name: "Nike Air Max",
        price: 129,
        category: "Footwear", 
        brand: "Nike",
        inStock: false
    },
    {
        name: "Coffee Maker",
        price: 79,
        category: "Appliances",
        brand: "Keurig",
        inStock: true
    },
    {
        name: "Leather Wallet",
        price: 45,
        category: "Accessories",
        brand: "Fossil",
        inStock: true
    },
    {
        name: "Gaming Monitor",
        price: 299,
        category: "Electronics",
        brand: "Samsung",
        inStock: true
    }
];


// Filter and display only products of categ. electronics and having price > 300
let Electronics = products.filter(function(val){
    return val.category === "Electronics" && val.price > 300;
});

//reduce will reduce the array of objects by adding up  the prices of all the objects

let totalPrice = products.reduce(function(acc , val){ // val contains an object
    return acc + val.price;
} , 0);

// 1551


// Includes -> It checks wheather it prsent in the arrary or not , returns either true or false.
let isPresent = arr.includes(22);
// false : means does not belongs to array arr. 

// Object Declaration -> {}
let obj = {}; // blank object

// Inside object
{
    // Property : value , 
    // Property : value , 
    // Property : value 
} 

let person = {
     name : "Pankaj",
     age : 19,
     isSmart : true,
     isHandsome : function(){ // Now isHandsome is not property , Its a method !!
        return this.isSmart;
     }
};

//Object's values can be accessed by using  dot(.) operator.
// It can also be accessed by using square bracket([]) -> but the condition is you have to
// write property name in single quotes(''). for example

let age = person.age;
// 19
let x = prompt();// Suppose age
console.log(person[x]); // It converts the x into the data that the var x is holding.
// Here x-> age

// But in dot(.) operator it finds the value of property x in object
console.log(person.x);
//undefined


