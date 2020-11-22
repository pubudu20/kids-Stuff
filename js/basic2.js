var elm = document.querySelector("div");
var circle = document.querySelector("#div2");

var radius = 100;
var angle = 0;
var angleIncrement = 2 * Math.PI /180;

setInterval(function(){
    var xPos = radius * Math.cos(angle);
    var yPos = radius * Math.sin(angle);
    angle -= angleIncrement;

    elm.style.top = ((innerHeight - elm.clientHeight)/2 + yPos)+ "px";
    elm.style.left = ((innerWidth - elm.clientWidth)/2 + xPos)+ "px";
},20)


circle.addEventListener("mouseenter",function (){
    alert("OUT");
});