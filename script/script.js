'use strict';

const wrapper = document.querySelector('.wrapper'),
      color = document.getElementById('color'),
      change = document.getElementById('change'),
      symbArr = ['a', 'b', 'c', 'd', 'f'];

change.addEventListener('click', () => {

  const numSymbArr = [];
  for (let i = 0; i < 6; i++) {
    let numSymb = Math.floor(Math.random() * 2);
    if (numSymb === 0) {
      numSymb = Math.floor(Math.random() * 10);
      numSymbArr.push(numSymb);
    } else {
      numSymb = symbArr[Math.floor(Math.random() * 5)];
      numSymbArr.push(numSymb);
    }
  }
  wrapper.style.backgroundColor = `#${numSymbArr[0]}${numSymbArr[1]}${numSymbArr[2]}${numSymbArr[3]}${numSymbArr[4]}${numSymbArr[5]}`;
  
  color.innerHTML = `#${numSymbArr[0]}${numSymbArr[1]}${numSymbArr[2]}${numSymbArr[3]}${numSymbArr[4]}${numSymbArr[5]}`;
});



