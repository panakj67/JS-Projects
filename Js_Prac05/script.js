let body = document.querySelector('body')
// let parent = document.querySelector('#parent')
let btn = document.querySelector('button')
// body.appendChild(h1)

// parent.appendChild(h1)

let images = [
    'https://www.pngplay.com/wp-content/uploads/7/Bug-Vector-PNG-HD-Quality.png',
    'https://w7.pngwing.com/pngs/291/566/png-transparent-ulysses-butterfly-illustration-butterfly-insect-butterfly-watercolor-painting-blue-butterfly-group-thumbnail.png',
    'https://static.vecteezy.com/system/resources/thumbnails/016/536/696/small/watercolor-grasshopper-clip-art-png.png',
    'https://i.pinimg.com/736x/a1/8f/3a/a18f3a298ecf59c9dd781971c63e5797.jpg',
    'https://i.etsystatic.com/16060308/r/il/70b3dc/5058435023/il_570xN.5058435023_58uj.jpg',
    'https://thumbs.dreamstime.com/b/monarch-butterfly-poisonous-butterflies-butterfly-vector-png-pink-gold-butterfly-clipart-monarch-butterfly-poisonous-303525825.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhPO3xcVq2IIsHD_CaCUTmnDQK1dINS7gR6A&s'
]

btn.addEventListener('click', function(){
    let valX = Math.random() * 90
    let valY = Math.random() * 90
    let rot = Math.random() * 360
    let idx = Math.floor(Math.random() * images.length)

    let img = document.createElement('img')
    img.setAttribute('src' , images[idx])
    img.style.height = '100px'
    img.style.position = 'absolute'
    img.style.left = valX + '%'
    img.style.top = valY + '%'
    img.style.rotate = rot + 'deg'
    body.appendChild(img)
})
