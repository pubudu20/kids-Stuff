var elm = document.querySelector("div");
var elm2 = document.querySelector("#div2");

function linearAnimation(){
var yPos = 0;
var bounce = false;
setInterval(function(){
    elm.style.top = yPos + "px";
    !bounce ? yPos += 10 : yPos -= 10;
    if(yPos >= (innerHeight - elm.clientHeight)){
        bounce = true;
    }
    else if(yPos <= 0){
        bounce = false;

    }
},50)
}

function animateUpandDown(){
var angle = 0;
setInterval(function(){
    var y = (innerHeight/2) * Math.sin(angle++ * Math.PI/100);
    elm.style.top = ((innerHeight - elm.clientHeight)/2) + y + "px";
    console.log(y);
},20);
}

function animateUpUpAndSide(){
    var angle = 0;
    setInterval(function(){
        var y = (innerHeight/2) * Math.sin(angle++ * Math.PI/100);
        elm2.style.top = ((innerHeight - elm.clientHeight)/2) + y + "px";
        elm2.style.left = ((innerWidth - elm.clientWidth)/2) + y + "px";
        console.log(y);
    },20);
}

animateUpUpAndSide();

var x = 0;
bounce = false;
setInterval(function(){
    var y = 100 * Math.sin(x * Math.PI/180);
    !bounce ? x++: x--;
    elm.style.top = ((innerHeight - elm.clientHeight)/2 + y) + "px";
    elm.style.left = x + "px";

    if(x >= (innerHeight - elm.clientHeight)){
        bounce = true;
    }else if(x <=0){
        bounce = false;
    }
})