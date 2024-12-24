const users = [
    {
        name : "Aisha_Khan12",
        dp : "https://plus.unsplash.com/premium_photo-1734552047321-94c0650d1b8f?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profile : "./myImg.jpg"
    },
    {
        name : "Priya_Sharma34",
        dp : "https://plus.unsplash.com/premium_photo-1734552047362-2b248417c3a8?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profile : "./myImg.jpg"
    },
    {
        name : "Ananya_Varma56",
        dp : "https://plus.unsplash.com/premium_photo-1734375602971-ecfc05eb7728?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profile : "./myImg.jpg"
    },
    {
        name :  "Sanya_Patel78",
        dp : "https://plus.unsplash.com/premium_photo-1700070732561-10ae0a780920?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profile : "./myImg.jpg"
    },
    {
        name :  "Neha_Gupta90",
        dp : "https://plus.unsplash.com/premium_photo-1734375603454-d4382596aad4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profile : "./myImg.jpg"
    },
    {
        name : "Isha_Singh43",
        dp : "https://plus.unsplash.com/premium_photo-1734375603742-0f6889df4a6b?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profile : "./myImg.jpg"
    },
    {
        name :  "Kavya_Mehta99",
        dp : "https://plus.unsplash.com/premium_photo-1734375601980-4562fcb2171e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profile : "./myImg.jpg"
    },
]

var clutter = ''

users.forEach(function(elem, idx){
    clutter += `<div id=${idx} class="story">
                <img src=${elem.dp} alt="">
            </div>`
})

var storyian = document.querySelector('#storyian')
storyian.innerHTML = clutter

var storyImg = document.querySelector('#storyImg')
var cross = document.querySelector('#cross i')

storyian.addEventListener('click' , function(elem){
    let idx = elem.target.id;

    let user = users[idx]

    storyImg.style.display = 'flex'
    
    storyImg.innerHTML = `
                <div class="line"></div>
                <div class="profile">
                <img src=${user.dp} alt="">
                <h4>${user.name}</h4>
            </div>
            <div class="image">
                <img src=${user.dp} alt="">
            </div>
            <div class="btm">
                <input type="text" placeholder="Reply to .."></input>
                <div id="like-svg">
                    <svg  height="24" role="img" viewBox="0 0 24 24" width="24"><path id="like" d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                 </div>
                <div id="share-svg">
                        <svg width="24" aria-label="Share" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="50"><title>Share</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                </div>
            </div>
    ` 
    var line = document.querySelector('.line')
    let wd = 0
    let litr = setInterval(function(){
       if(wd >= 350){
          clearInterval(litr)
          return
        }
        wd += 10
        line.style.width = wd + 'px'
    }, 100)


       let likeBtn = document.querySelector('#like-svg')
   let like = document.querySelector('#like')
   let likeSvg = document.querySelector('#like-svg svg')
let path = "M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z";
// let m = "xxk16z8";
let view = '0 0 48 48'
let flag = 0
    

    
   let intr = setInterval(function(){
    idx++;
    if(idx >= users.length){
        clearInterval(intr)
        storyImg.style.display = 'none'
        cross.style.display = 'none'
        return
    }
    let user = users[idx]
    storyImg.style.display = 'flex'
    
    storyImg.innerHTML = `
                <div class="line"></div>
                <div class="profile">
                <img src=${user.dp} alt="">
                <h4>${user.name}</h4>
            </div>
            <div class="image">
                <img src=${user.dp} alt="">
            </div>
            <div class="btm">
                <input type="text" placeholder="Reply to .."></input>
                 <div id="like-svg">
                    <svg  height="24" role="img" viewBox="0 0 24 24" width="24"><path id="like" d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                 </div>
                <div id="share-svg">
                        <svg width="24" aria-label="Share" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="50"><title>Share</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                </div>
            </div>
    ` 

    let likeBtn = document.querySelector('#like-svg')
   let like = document.querySelector('#like')
   let likeSvg = document.querySelector('#like-svg svg')
let path = "M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z";
// let m = "xxk16z8";
let view = '0 0 48 48'
let flag = 0
    likeBtn.addEventListener('click' , function(){
        let m = like.getAttribute('d')
        like.setAttribute('d' , path)
        path = m
        let n = likeSvg.getAttribute('viewBox')
        likeSvg.setAttribute('viewBox' , view)
        if(flag === 0){
            likeSvg.classList.add('red-fill')
            flag = 1
        } 
        else{
            flag = 0
            likeSvg.classList.remove('red-fill')
        }
        view = n
        // console.log(like.getAttribute('d'));
    })

    wd = 0
    let li = document.querySelector('.line')
    let p = setInterval(function(){
       if(wd >= 350){
           clearInterval(p)
           return
        }
        wd += 10
        li.style.width = wd + 'px'
    }, 101)
   },4000)

likeBtn.addEventListener('click' , function(){
    let m = like.getAttribute('d')
    like.setAttribute('d' , path)
    path = m
    let n = likeSvg.getAttribute('viewBox')
    likeSvg.setAttribute('viewBox' , view)
    if(flag === 0){
        likeSvg.classList.add('red-fill')
        flag = 1
    } 
    else{
        flag = 0
        likeSvg.classList.remove('red-fill')
    }
    view = n
    // console.log(like.getAttribute('d'));
})








   cross.style.display = 'block'
   cross.addEventListener('click', function(){
       storyImg.style.display = 'none'
        cross.style.display = 'none'
        clearInterval(intr)
   })
    
})




