const users = [
    {
       name : 'Sarthak',
       age : 32,
       city : 'Bhopal',
       salary : 4500
    },
    {
       name : 'Harsh',
       age : 42,
       city : 'Jhansi',
       salary : 14500
    },
    {
       name : 'Adarsh',
       age : 37,
       city : 'Delhi',
       salary : 12100
    },
    {
       name : 'Akarsh',
       age : 30,
       city : 'Hyderabad',
       salary : 2500
    },
    {
       name : 'Harshit',
       age : 40,
       city : 'Dholakpur',
       salary : 150
    },
]

var clutter = ''
users.forEach(function(user){
     clutter += `<div id="box">
        <h1>${user.name}</h1>
        <h4>Age : ${user.age} , City : ${user.city}</h4>
        <h5>Salary : ${user.salary} USD
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In sunt impedit natus sapiente adipisci.</p>
        </div>`
})

var body = document.querySelector('body')
body.innerHTML = clutter