let btn = document.querySelector('button');
let h2 = document.querySelector('h2');

let teams = ['RCB' , 'CSK' , 'MI' , 'GT', 'PBKS', 'SRH', 'DC', 'RR', 'KKR', 'LSG'];

btn.addEventListener('click' , function(){
    let idx = Math.floor(Math.random() * teams.length);
    h2.textContent = teams[idx];
})