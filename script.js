const toggleButton = document.querySelector('.toggle');
const circle = document.querySelector('.circle');

let bulb = 'off';

toggleButton.addEventListener('click' , () =>{
    if(bulb == 'off'){
        circle.style.backgroundColor = "yellow";
        circle.style.boxShadow = '0px 0px 100px yellow';
        toggleButton.textContent = 'OFF';
        bulb = 'on';
    }
    else{
        circle.style.backgroundColor = "black";
        circle.style.boxShadow = 'none';
        toggleButton.textContent = 'ON';
        bulb = 'off';
    }
})