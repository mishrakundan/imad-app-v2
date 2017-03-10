console.log('Loaded!');

// change the text of the main-text div
var element=document.getElementById('main-text');
element.innerHTML =' Hi! I am Kundan Mishra,and this is my first webapp.';

//Move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight (){
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.oneclick = function (){
    var interval = setInterval(moveRight, 50);
    
};