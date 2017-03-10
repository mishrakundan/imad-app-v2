console.log('Loaded!');
// change the text of the main-text div

var element=document.getElementById('main-text');
element.innerHTML =' Hi! I am Kundan Mishra,and this is my first webapp.';

$('document').ready(function(){
      var element = document.getElementById('main-text');
      element.innerHTML = 'This value is inserted in the main.js';
      var img = document.getElementById('croc');
      img.onclick = function ()
      {
          img.style.marginleft = '100px';
      };
});

//Move the image
    var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight (){
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.oneclick = (function (){
    var interval = setInterval(moveRight, 50);
    
}) ();