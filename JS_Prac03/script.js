let btn = document.querySelector('#download button');
let growth = document.querySelector('#growth');
let h1 = document.querySelector('#download h1')
let msg = document.querySelector('h2')
let grow = 0

let random = Math.floor(Math.random() * 100)

btn.addEventListener('click' , function(){
    var growInt = setInterval(function(){
        grow++;
        growth.style.width = grow + '%';
        h1.innerHTML = grow + '%';
    },random)

    setTimeout(function(){
        clearInterval(growInt);
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = .4
        btn.style.pointerEvents = 'none'
        msg.textContent = `Your file is downloaded in ${random/10} seconds`
    },random * 100)
})