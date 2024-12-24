let arr = [2,3];
//push -> last se new element add karna
arr.push(67); // [2, 3, 67]
arr.push(69); // [2, 3, 67, 69]
//last element ko bahar karna
let val = arr.pop();
console.log(val); // 69

//unshift -> age se add krna
arr.unshift(8); // [8 , 2, 3, 67]
console.log(arr);

//shift -> age se bahar nikalna
arr.shift(); // [2 ,3 ,67]

arr.push(2);
arr.lastIndexOf(2)
// 3
arr[5] = 67

arr[100] = 69

arr[-1] = 90 // [2, 3, 67, 2, empty, 67, empty × 94, 69, -1: 90]

let a = new Array(100);
a.fill(-1); //(100) [-1, -1, -1 , ...]

sum = 0

//No return value , mtlb ?? matlab return hota hi nahi hai forEach() mein !!.
a.forEach(function(val){
    sum += val
});

sum += -100

sum += 200/2 * 4;
console.log(sum);

// map() fnction returns a new array without changing the data of original array.
// It is necessary to return any value in map function , becoz it apply callback function to each element of the original array.
let b = arr.map(function(val){
    return val * 2 - 100 / 4 + 500 * 9;
});

arr.push(8);

//filter(): Creates a new array with elements that satisfy a specific condition!!
//We want only even elements from original array
let c = arr.filter(function(val){
     return val % 2 === 0; // return boolean(T / F) ->  if true ,  the element is added to new array
})

//Removes elements startinf from index 1 and removing 100 elements from that particular index.
arr.splice(1 , 100);