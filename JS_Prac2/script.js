
let btn = document.querySelector('button')
let h2 = document.querySelector('h2')

let flag = 0;

btn.addEventListener('click' , function(){
    if(flag == 0){
        
    h2.textContent = 'Sending Request..'
    h2.style.color = 'royalblue'
    btn.innerHTML = 'Sending..'

    setTimeout(function(){
        h2.textContent = 'Friend'
        h2.style.color = 'green'
        btn.innerHTML = 'Remove'   
    }, 3000)
    flag = 1

    }
    else{
       h2.textContent = 'Stranger'
       h2.style.color = 'red'
       btn.textContent = 'Add Freind'
       flag = 0
    }
})