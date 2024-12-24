let body = document.querySelector('body')
let h1 = document.querySelector('h1')
let cursor = document.querySelector('#cursor')

body.addEventListener('mousemove', function(dets){
    cursor.style.left = dets.x + 'px'
    cursor.style.top = dets.y + 'px'
})

h1.addEventListener('mouseenter' ,function(){
    cursor.style.scale = 4
})

h1.addEventListener('mouseleave', function(){
    cursor.style.scale = 1
})