let btn = document.querySelector('button')
let img1 = document.querySelector('#img1')
let img2 = document.querySelector('#img2')

let likeBtn = document.querySelector('#like-svg')
let like = document.querySelector('#like')
let likeSvg = document.querySelector('#like-svg svg')

let p = document.querySelector('#image1 p')

let likes = 4873

let shareBtn = document.querySelector('#share-svg')
const friends = [
    {
        name : 'Nikhil rai',
        avtar : 'https://scontent.cdninstagram.com/v/t51.2885-19/464768440_8801682036618171_9152971725468328673_n.jpg?stp=dst-jpg_s150x150&_nc_cat=111&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=PicK5C6dSR4Q7kNvgENXToQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYDaJPKHzRZkAywLD1SOvifUR9wNTCUrjWaONlSPZFNgDg&oe=6757BAF8'
    },
    {
        name : 'Nafis Kamran',
        avtar : 'https://scontent.cdninstagram.com/v/t51.2885-19/379687247_700680971440148_5619657967136454337_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=108&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=4WLpcIzwR6MQ7kNvgHQi5lN&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYB92V5wXga6fYKmg1QeRNr4kYAIDfn9Eu8yUJUMUh_3Rw&oe=6757C390'
    },
    {
        name : 'Shiva Singh',
        avtar : 'https://scontent.cdninstagram.com/v/t51.2885-19/375811219_2723821517787272_6787414693446964477_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=103&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=fP5aUUz8cS0Q7kNvgHWxLoX&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYDiwE7UHLKVZZ0HW1vG0MgY6jsIFr0KV3_9TeIg1dNkGQ&oe=6757962F'
    },
    {
        name : 'Sunny',
        avtar : 'https://scontent.cdninstagram.com/v/t51.2885-19/465701718_542989208513576_3628786174179134147_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=109&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=wjPXKobOa9gQ7kNvgFKnN8u&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYDDpeQBzTZFhmQwv60hBsQOW4YlclBTovG3nkL53_qKog&oe=675798AF'

    },
    {
        name : 'Atleast mintu',
        avtar : 'https://scontent.cdninstagram.com/v/t51.2885-19/468952251_1113788966921059_4426056632067216280_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=107&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=JSpPcP0cYqwQ7kNvgEwgzD9&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYDzG34T8Y6f0boIXZc1o56poadUlQ8S7hun0Qip-ifjxw&oe=6757BE1A'
    },
    {
        name : 'Nikhil rai',
        avtar : 'https://scontent.cdninstagram.com/v/t51.2885-19/464768440_8801682036618171_9152971725468328673_n.jpg?stp=dst-jpg_s150x150&_nc_cat=111&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=PicK5C6dSR4Q7kNvgENXToQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYDaJPKHzRZkAywLD1SOvifUR9wNTCUrjWaONlSPZFNgDg&oe=6757BAF8'
    },
    {
        name : 'Nafis Kamran',
        avtar : 'https://scontent.cdninstagram.com/v/t51.2885-19/379687247_700680971440148_5619657967136454337_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=108&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=4WLpcIzwR6MQ7kNvgHQi5lN&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYB92V5wXga6fYKmg1QeRNr4kYAIDfn9Eu8yUJUMUh_3Rw&oe=6757C390'
    },
    {
        name : 'Shiva Singh',
        avtar : 'https://scontent.cdninstagram.com/v/t51.2885-19/375811219_2723821517787272_6787414693446964477_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=103&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=fP5aUUz8cS0Q7kNvgHWxLoX&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYDiwE7UHLKVZZ0HW1vG0MgY6jsIFr0KV3_9TeIg1dNkGQ&oe=6757962F'
    },
    {
        name : 'Sunny',
        avtar : 'https://scontent.cdninstagram.com/v/t51.2885-19/465701718_542989208513576_3628786174179134147_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=109&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=wjPXKobOa9gQ7kNvgFKnN8u&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYDDpeQBzTZFhmQwv60hBsQOW4YlclBTovG3nkL53_qKog&oe=675798AF'

    },
    {
        name : 'Atleast mintu',
        avtar : 'https://scontent.cdninstagram.com/v/t51.2885-19/468952251_1113788966921059_4426056632067216280_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=107&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=JSpPcP0cYqwQ7kNvgEwgzD9&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYDzG34T8Y6f0boIXZc1o56poadUlQ8S7hun0Qip-ifjxw&oe=6757BE1A'
    },
    {
        name : 'Nikhil rai',
        avtar : 'https://scontent.cdninstagram.com/v/t51.2885-19/464768440_8801682036618171_9152971725468328673_n.jpg?stp=dst-jpg_s150x150&_nc_cat=111&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=PicK5C6dSR4Q7kNvgENXToQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYDaJPKHzRZkAywLD1SOvifUR9wNTCUrjWaONlSPZFNgDg&oe=6757BAF8'
    },
    {
        name : 'Nafis Kamran',
        avtar : 'https://scontent.cdninstagram.com/v/t51.2885-19/379687247_700680971440148_5619657967136454337_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=108&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=4WLpcIzwR6MQ7kNvgHQi5lN&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYB92V5wXga6fYKmg1QeRNr4kYAIDfn9Eu8yUJUMUh_3Rw&oe=6757C390'
    },
    {
        name : 'Shiva Singh',
        avtar : 'https://scontent.cdninstagram.com/v/t51.2885-19/375811219_2723821517787272_6787414693446964477_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=103&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=fP5aUUz8cS0Q7kNvgHWxLoX&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYDiwE7UHLKVZZ0HW1vG0MgY6jsIFr0KV3_9TeIg1dNkGQ&oe=6757962F'
    },
    {
        name : 'Sunny',
        avtar : 'https://scontent.cdninstagram.com/v/t51.2885-19/465701718_542989208513576_3628786174179134147_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=109&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=wjPXKobOa9gQ7kNvgFKnN8u&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYDDpeQBzTZFhmQwv60hBsQOW4YlclBTovG3nkL53_qKog&oe=675798AF'

    },
    {
        name : 'Atleast mintu',
        avtar : 'https://scontent.cdninstagram.com/v/t51.2885-19/468952251_1113788966921059_4426056632067216280_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=107&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=JSpPcP0cYqwQ7kNvgEwgzD9&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYDzG34T8Y6f0boIXZc1o56poadUlQ8S7hun0Qip-ifjxw&oe=6757BE1A'
    },
    {
        name : 'Nikhil rai',
        avtar : 'https://scontent.cdninstagram.com/v/t51.2885-19/464768440_8801682036618171_9152971725468328673_n.jpg?stp=dst-jpg_s150x150&_nc_cat=111&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=PicK5C6dSR4Q7kNvgENXToQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYDaJPKHzRZkAywLD1SOvifUR9wNTCUrjWaONlSPZFNgDg&oe=6757BAF8'
    },
    {
        name : 'Nafis Kamran',
        avtar : 'https://scontent.cdninstagram.com/v/t51.2885-19/379687247_700680971440148_5619657967136454337_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=108&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=4WLpcIzwR6MQ7kNvgHQi5lN&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYB92V5wXga6fYKmg1QeRNr4kYAIDfn9Eu8yUJUMUh_3Rw&oe=6757C390'
    },
    {
        name : 'Shiva Singh',
        avtar : 'https://scontent.cdninstagram.com/v/t51.2885-19/375811219_2723821517787272_6787414693446964477_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=103&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=fP5aUUz8cS0Q7kNvgHWxLoX&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYDiwE7UHLKVZZ0HW1vG0MgY6jsIFr0KV3_9TeIg1dNkGQ&oe=6757962F'
    },
    {
        name : 'Sunny',
        avtar : 'https://scontent.cdninstagram.com/v/t51.2885-19/465701718_542989208513576_3628786174179134147_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=109&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=wjPXKobOa9gQ7kNvgFKnN8u&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYDDpeQBzTZFhmQwv60hBsQOW4YlclBTovG3nkL53_qKog&oe=675798AF'

    },
    {
        name : 'Atleast mintu',
        avtar : 'https://scontent.cdninstagram.com/v/t51.2885-19/468952251_1113788966921059_4426056632067216280_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=107&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=JSpPcP0cYqwQ7kNvgEwgzD9&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYDzG34T8Y6f0boIXZc1o56poadUlQ8S7hun0Qip-ifjxw&oe=6757BE1A'
    }
]

let b = true

let blur = document.querySelector('#blur')
let cross = document.querySelector('#cross i')
const shareDiv = document.querySelector('#share')
const shareCont = document.querySelector('#share-cont')

let z = 0
let input = document.querySelector('#search input')

shareBtn.addEventListener('click' , function(){
    // console.log(shareDiv);
    if(z == 1){
        input.value = ''
        z = 0
    }

    input.addEventListener('input', function(){
        const inputVal = input.value.toLowerCase()
        const filter = friends.filter(friend =>{
            return friend.name.toLowerCase().includes(inputVal)
        })
       
        populate(filter)
     })

    shareCont.style.display = 'block'
    blur.style.display = 'block'
    shareDiv.innerHTML = ''
    shareDiv.style.alignItems = 'center'
    friends.forEach(function(friend){
       const friendDiv = document.createElement('div');
       friendDiv.className = 'friend';

       let avtar = document.createElement('img')
       avtar.src = friend.avtar;
       avtar.className = 'avtar'

       const name = document.createElement('h4')
       name.className = 'name';
       name.textContent = friend.name;

       friendDiv.appendChild(avtar)
       friendDiv.appendChild(name)

       shareDiv.appendChild(friendDiv);       
    })

    z = z == 0 ? 1 : 0
})

cross.addEventListener('click' , function(){
    shareCont.style.display = 'none'
    blur.style.display = 'none'
    // cross.style.display = 'none'
})


function populate(friendsList){
    shareDiv.innerHTML = ''
    friendsList.forEach(friend => {
        const friendDiv = document.createElement('div');
        friendDiv.className = 'friend';

        // Create avatar image
        const avtar = document.createElement('img');
        avtar.src = friend.avtar;
        avtar.className = 'avtar';

        // Create name element
        const name = document.createElement('h4');
        name.className = 'name';
        name.textContent = friend.name;

        // Append avatar and name to the friend div
        friendDiv.appendChild(avtar);
        friendDiv.appendChild(name);

        // Append the friend div to the friends list
        shareDiv.appendChild(friendDiv);
    });
}




btn.addEventListener('click' , function(){
    let img1Src = img1.getAttribute('src')
    let img2Src = img2.getAttribute('src')

    img1.setAttribute('src' , img2Src)
    img2.setAttribute('src' , img1Src)
})

let path = "M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z";
// let m = "xxk16z8";
let view = '0 0 48 48'
let flag = 0

likeBtn.addEventListener('click' , function(){
    console.log(likeSvg.getAttribute('viewBox'));
    let m = like.getAttribute('d')
    like.setAttribute('d' , path)
    path = m
    let n = likeSvg.getAttribute('viewBox')
    likeSvg.setAttribute('viewBox' , view)
    if(flag === 0){
        likeSvg.classList.add('red-fill')
        likes++
        p.textContent = `${likes} likes`
        flag = 1
    } 
    else{
        flag = 0
        likes--
        p.textContent = `${likes} likes`
        likeSvg.classList.remove('red-fill')
    }
    view = n
    // console.log(like.getAttribute('d'));
})

let likeBtn2 = document.querySelector('#like-svg2')
let like2 = document.querySelector('#like2')
let likeSvg2 = document.querySelector('#like-svg2 svg')

let p2 = document.querySelector('#image2 p')


let path2 = "M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z";
// let m = "xxk16z8";
let view2 = '0 0 48 48'
let flag2 = 0
let likes2 = 86784

likeBtn2.addEventListener('click' , function(){
    console.log(likeSvg2.getAttribute('viewBox'));
    let m = like2.getAttribute('d')
    like2.setAttribute('d' , path2)
    path2 = m
    let n = likeSvg2.getAttribute('viewBox')
    likeSvg2.setAttribute('viewBox' , view2)
    if(flag2 === 0){
        likeSvg2.classList.add('red-fill')
        likes2++
        p2.textContent = `${likes2} likes`
        flag2 = 1
    } 
    else{
        flag2 = 0
        likes2--
        p2.textContent = `${likes2} likes`
        likeSvg2.classList.remove('red-fill')
    }
    view2 = n
    // console.log(like.getAttribute('d'));
})
