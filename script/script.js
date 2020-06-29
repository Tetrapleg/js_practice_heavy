'use strict';

const reset = document.getElementById('reset'),
    start = document.getElementById('start'),
    red = document.querySelector('.red'),
    green = document.querySelector('.green'),
    blue = document.querySelector('.blue');
    

let ballInterval,
    count = 0;
let ballAnimate = function(){

  ballInterval = requestAnimationFrame(ballAnimate);
  count++;
  if(count < 700){
    red.style.top = count + 'px';
    green.style.top = count + 'px';
    green.style.left = count * 2 + 'px';
    blue.style.left = count * 2 + 'px';
  } else {
    cancelAnimationFrame(ballInterval);
  }
};

let animate = true;

start.addEventListener('click', () => {
  if(animate){
    ballInterval = requestAnimationFrame(ballAnimate);
    animate = false;
  } else {
    animate = true;
    cancelAnimationFrame(ballInterval);
  }
});

reset.addEventListener('click', () => {
  cancelAnimationFrame(ballInterval);
  animate = true;
  count = 0;
  red.style.top = 0 + 'px';
  green.style.top = 0 + 'px';
  green.style.left = 0 + 'px';
  blue.style.left = 0 + 'px';
});
