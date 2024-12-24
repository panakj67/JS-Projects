let body = document.querySelector('body')
let btns = document.querySelectorAll('button')

btns.forEach(function(btn){
   
    btn.addEventListener('click' , function(elem){
        body.style.backgroundColor = btn.innerHTML
    })
})