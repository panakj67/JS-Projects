// localStorage.setItem('theme' , 'light')
var mode = document.querySelector('#mode')
var theme = localStorage.getItem('theme')

if(theme == 'light'){
     mode.innerHTML = `<i class="ri-moon-clear-fill"></i>`
        mode.style.color = 'black'
}
else{
    mode.innerHTML = `<i class="ri-sun-fill"></i>`
        mode.style.color = 'yellow'
}

var main = document.querySelector('#main')
main.setAttribute('class' , theme)




mode.addEventListener('click' , function(){
    if(theme == 'light'){
        localStorage.setItem('theme' , 'dark');
        mode.innerHTML = `<i class="ri-sun-fill"></i>`
        mode.style.color = 'yellow'
    }
        
    else{
        localStorage.setItem('theme' , 'light');
        mode.innerHTML = `<i class="ri-moon-clear-fill"></i>`
        mode.style.color = 'black'
    }
    theme = localStorage.getItem('theme')
    main.setAttribute('class' , theme)
})