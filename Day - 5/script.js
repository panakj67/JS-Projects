var p = document.querySelector("#overlay p");

var color = ["#9400D3","#4B0082","#0000FF","#00FF00","#FFFF00","#FF7F00","#FF0000"];
var font = ["helvetica now display","Postmark"]
var idx = 0, f = 0;
function anim(){
    p.style.color = color[idx];
    p.style.fontFamily = font[f];
    idx = (idx + 1)%color.length;
    f = (f+1)%font.length;
}

setInterval(anim , 50);