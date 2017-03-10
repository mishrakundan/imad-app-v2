console.log('Loaded!');

// change the text of the main-text div
var img=document.getElementById('main-text');
element.innerHTML =' Hi! I am Kundan Mishra,and this is my first webapp.';

//Move the image
var img=document.getElementById('madi');
var marginLeft =0;
function MoveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.oneclick = function (){
    var interval = setInterval(moveRight, 100);
    
};