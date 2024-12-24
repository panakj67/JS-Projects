// alert()
let btn = document.querySelector('#follow-btn')
let box = document.querySelector('.box')
let h3 = document.querySelector('.box h3')
let h2 = document.querySelector('.box h2')
let main = document.querySelector('#main')

let flag = 0
let theme = 'light'


let mode_btn = document.querySelector('#mode-button')
mode_btn.addEventListener('click' , function(){
    if(theme === 'light'){
        mode_btn.textContent = 'Light'
        theme = 'dark'
        main.classList.remove('light-main')
        box.classList.remove('light-box')
        main.classList.add('dark-main')
        box.classList.add('dark-box')
        h2.style.color = '#fff'
    }
    else{
        main.classList.remove('dark-main')
        box.classList.remove('dark-box')
        main.classList.add('light-main')
        box.classList.add('light-box')
        mode_btn.textContent = 'Dark'
        h2.style.color = 'black'
        theme = 'light'
    }
})

btn.addEventListener('click', function(){
    if(flag == 0){
        btn.textContent = 'Requested'
        h3.textContent = 'Sending.. Request'
        h3.style.color = 'rgb(227, 0, 91)' 
        btn.style.backgroundColor = '#ddd5d5d1';
        btn.style.color = 'black'
    
        setTimeout(function(){
            h3.textContent = 'Friend'
            h3.style.color = 'rgb(30, 227, 0)'
            btn.textContent = 'Remove'
        },3000)
        flag = 1
    }
    else{
        btn.textContent = 'Follow'
        btn.style.backgroundColor = '#0095F6'
        btn.style.color = '#fff'
        h3.textContent = 'Stranger'
        h3.style.color = 'red'
        flag = 0
    }
})
