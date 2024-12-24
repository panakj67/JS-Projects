
const names = ['Pankaj' , 'Sarthak' , 'Harsh', 'Adarsh']
var body = document.querySelector('body')

var sum = ''
names.forEach(function(elem){
     sum += `<div id="box">
        <h2>${elem}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
    </div>`
})

body.innerHTML = sum
console.log(sum);



