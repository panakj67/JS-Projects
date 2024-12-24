var frineds = [
    {
       name : 'pankaj',
       weight : 60
    },
    {
        name : 'pankaj',
        weight : 50
    },
    {
        name : 'pankaj',
        weight : 90
    },
    {
        name : 'pankaj',
        weight : 70
    },
    {
        name : 'pankaj',
        weight : 69
    },
    {
        name : 'pankaj',
        weight : 49
    },
    {
        name : 'pankaj',
        weight : 58
    }
]

let total = 0;
frineds.forEach(function(elem){
    total += elem.weight;
})

let result = total <= 500 ? 'yes' : 'no'
console.log(result);
