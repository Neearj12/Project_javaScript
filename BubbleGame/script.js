var timer=60;
var score=0;
var hitrn=0;
// for increase score
function scoreincr(){
  score+=10;
  document.querySelector('#scoreval').textContent=score;
}
//  make getnewhit
function getnewhit(){
hitrn=  Math.floor(Math.random()*10);
document.querySelector('#hitval').textContent=hitrn;
}


// make bubble
function makebubble(){
var clutter="";  
  for(var i=0;i<=84;i++){
   var rn= Math.floor(Math.random()*10)
 clutter+=`<div class="bubble"> ${rn} </div>`;
}
document.querySelector('#pbtm').innerHTML=clutter;
}
// making timer
var timer=60;
function runtime(){
  var timerfun= setInterval(function(){
    if(timer>0){
timer--;
document.querySelector('#timervalue').textContent=timer;
    }
    else{
      clearInterval(timerfun);
      document.querySelector('#pbtm').innerHTML=`<h1>Game Over</h1>`;
    }
  },1000)
}
document.querySelector('#pbtm').addEventListener('click',function(details){
var clickednum=(Number(details.target.textContent));
if(clickednum===hitrn){
  scoreincr();
  makebubble();
  getnewhit();
}
})
getnewhit();
runtime();
makebubble();

