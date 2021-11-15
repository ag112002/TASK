let needleHand=document.querySelector('.needle');
let r
function rotate() {
let val=document.querySelector('.box').value;
document.querySelector('.box').disabled=true;
var rot =31;
const hourRotate = 206+rot*(val/10);
needleHand.style.transform = `rotate(${hourRotate}deg)`;
}

let hr = 0;
let min =0;
let sec=0;
let t;
function startTimer()
{
  if(sec<59)
  {
  sec++;
  document.querySelector('#sec').innerHTML=sec;
  }
  else {
    sec=0;
    document.querySelector('#sec').innerHTML=sec;
    min++;
  }
  if(min<=59)
  {
    document.querySelector('#min').innerHTML=min;
  }
  else {
    min=0;
    hr++;
    document.querySelector('#min').innerHTML=min;
  }
  if(hr<24)
  {
    document.querySelector('#hr').innerHTML=hr;
  }
  else {
    stop();
  }
}
function start(){
  t=setInterval(startTimer,100);
  r=setInterval(rotate,100);
}
function stop(){
  clearInterval(t);
  clearInterval(r);
  document.querySelector('.box').disabled=false;
}
function reset(){
  const reset=206;
  clearInterval(t);
  clearInterval(r);
  document.querySelector('.box').disabled=false;
  document.querySelector('#sec').innerHTML='00';
  document.querySelector('#min').innerHTML='00';
  document.querySelector('#hr').innerHTML='00';
  needleHand.style.transform = `rotate(${reset}deg)`;
}
