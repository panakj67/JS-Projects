let img = document.querySelector('img')
let moveX = 0
let moveY = 0

document.addEventListener('keydown' , function(dets){
    if(dets.code == 'ArrowRight'){
        if(moveX < 85) moveX++
    }
    else if(dets.code == 'ArrowLeft'){
        if(moveX > 1) moveX--
    }
    else if(dets.code == 'ArrowUp'){
        if(moveY > 1) moveY--
    }
    else if(dets.code == 'ArrowDown'){
        if(moveY < 65) moveY++
    }
    
    img.style.left = moveX + '%'
    img.style.top = moveY + '%'
})