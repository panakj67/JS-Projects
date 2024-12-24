const users = [
    {
      profilePhoto: "https://images.unsplash.com/photo-1704791403624-c192488ca4fa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusPhoto: "https://images.unsplash.com/photo-1730292422392-ebe05786caa7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullname: "Rahul Sharma",
      timeUploaded: "2 hours ago"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1606944975563-a1f1b3f1632c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusPhoto: "https://images.unsplash.com/photo-1659423422819-d55b410763c5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullname: "Anjali Verma",
      timeUploaded: "18 minutes ago"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1606851448252-6200418fd706?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusPhoto: "https://images.unsplash.com/photo-1602600276082-6ac42babe263?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullname: "Akash Mehra",
      timeUploaded: "3 hours ago"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1554083021-dd6b85a6d423?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusPhoto: "https://images.unsplash.com/photo-1732647169576-49abfdef3348?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullname: "Sneha Iyer",
      timeUploaded: "1 hour ago"
    },
    {
      profilePhoto: "https://plus.unsplash.com/premium_photo-1661277623381-ded746f8dbdc?q=80&w=1822&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusPhoto: "https://images.unsplash.com/photo-1689477030312-d53f023fb663?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullname: "Arjun Nair",
      timeUploaded: "5 hours ago"
    },
    {
      profilePhoto: "https://plus.unsplash.com/premium_photo-1661661520332-c6df862bdc37?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusPhoto: "https://images.unsplash.com/photo-1696531262908-4209cb35ea18?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullname: "Keerthi Reddy",
      timeUploaded: "25 minutes ago"
    },
    {
      profilePhoto: "https://plus.unsplash.com/premium_photo-1682433070003-ebc1dff983ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusPhoto: "https://images.unsplash.com/photo-1730292422709-8a714a82c7e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullname: "Vikram Gupta",
      timeUploaded: "50 minutes ago"
    },
    {
      profilePhoto: "https://plus.unsplash.com/premium_photo-1661589937682-7ad74aca83c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusPhoto: "https://images.unsplash.com/photo-1604614006904-49e3b710eeb8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullname: "Sanjana Deshmukh",
      timeUploaded: "4 hours ago"
    },
    {
      profilePhoto: "https://plus.unsplash.com/premium_photo-1682433080446-20528748cb68?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusPhoto: "https://images.unsplash.com/photo-1635401674380-ba812b15df6b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullname: "Aman Sinha",
      timeUploaded: "30 minutes ago"
    },
    {
      profilePhoto: "https://plus.unsplash.com/premium_photo-1661591147149-f223ef220c26?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusPhoto: "https://plus.unsplash.com/premium_photo-1682390303252-4e1e31e692e4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullname: "Priya Chatterjee",
      timeUploaded: "6 hours ago"
    }
  ];

  var sum = ''
  users.forEach(function(user,idx){
      sum = sum + `<div id=${idx} class="status">
                    <img src="${user.profilePhoto}" alt="">
                    <div>
                        <h4>${user.fullname}</h4>
                        <h6>${user.timeUploaded}</h6>
                    </div>
                 </div>`
  })

  var allStatus = document.querySelector('.allStatus')
  var full = document.querySelector('#full')
  
  allStatus.innerHTML = sum

  allStatus.addEventListener('click' , function(dets){
    var gold = users[dets.target.id];
    full.style.display = 'block'
    full.style.backgroundImage = `url(${gold.statusPhoto})`;

    setTimeout(function(){
      full.style.display = 'none';
    } , 3000)
  })
  
  