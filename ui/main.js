console.log('Loaded!');
//Move the image
var img=document.getElementById('madi');
var marginleft =0;
function MoveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.oneclick = function (){
    var intervel = set1interval(moveRight, 100);
    
};