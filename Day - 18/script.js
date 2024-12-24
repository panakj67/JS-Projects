// JavaScript starts form alert , prompt, console.log,warn,error!!
// alert("hey");
// var p = prompt("Or ??");
// console.log("Entered Value : ",p);
// console.warn("Entered Value : ",p);
// console.error("Entered Value : ",p);

var nm = document.querySelector('#name');
var email = document.querySelector('#email');
var password = document.querySelector('#pass');

nm.addEventListener('submit', (event) =>{
    console.log(event.target.value);
})