'use strict';

let arr = ['245', '345','445','245','345','445', '345'];

for (let i = 0; i < arr.length; i++) {
  let x = arr[i].charAt(0);

  if (x === '2' || x === '4') {
    console.log(arr[i]);
  }
}

console.log(arr);


let i,
    y;

for (i = 2; i <= 100; i++) {
  for(y = 2; y <= i; y++) {
    if (i % y === 0) {
      break;
    }
  }
  if (i === y) {
    console.log(i + ' Делители этого числа: 1 и ' + i);
  }
}


