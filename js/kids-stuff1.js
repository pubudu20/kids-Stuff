var stage = document.querySelector("#stage");
var elements = [];

for (var i = 0;i <50; i++){
    var elm = document.createElement('div');
    elm.className = 'square';
    elements.push(elm);
    stage.append(elm);
    elm.style.left = (innerWidth - elm.clientWidth) * Math.random() +'px';
    elm.style.top = (innerHeight - elm.clientHeight) * Math.random() + 'px';
    elm.style.backgroundColor = randomColor();
}


setInterval(function (){
    for (var i = 0;i < elements.length; i++){
        elements[i].style.left = (innerWidth - elm.clientWidth) * Math.random() +'px';
        elements[i].style.top = (innerHeight - elm.clientHeight) * Math.random() + 'px';
        elements[i].style.transform = 'scale('+ Math.random() +') rotate('+(Math.random() * 361)+'deg)';
        elements[i].style.borderRadius = (Math.random() * 100) + '%';
    }

},1000)





function randomColor(){
    var r = Math.random() * 256;
    var g = Math.random() * 256;
    var b = Math.random() * 256;
    return 'rgb('+ r +',' + g+',' + b + ')'
}

var title = document.querySelector("#stage h1");
var texts = [];
texts.push("Down but not out!");
texts.push("Better Late than Never!");
texts.push("Not competing");

var i = 0;
var j = 0;
setInterval(function(){
    var displayText = texts[j].substring(0,i++);
    title.innerHTML = displayText + "<span class='caret'></span>";

    if(i >= (texts[j].length +10)){
        i = 0;
        j++;
    }
},250);
