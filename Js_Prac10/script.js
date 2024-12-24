var arr = [
    {
       model: 'Samsung',
       price: 50000,
       color: 'black' ,
       quantity: 43
    },
    {
       model : 'IPhone 13',
       price : 70000,
       color : 'White',
       quantity : 64
    },
    {
        model : 'One Plus',
        price : 10000,
        color : 'Blue',
        quantity : 54
    },
   
]

let price = 0
arr.forEach(function(elem){
    price = price + (elem.price * elem.quantity)
})

console.log(price);
