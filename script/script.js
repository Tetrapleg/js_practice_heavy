'use strict';

let enterInfo = '         66666666666 jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj       ';

const recenseText = function(text){
  if (typeof(text) === 'string'){
    text = text.trim();
    if (text.length > 30){
      text = text.substring(0, 30) + '...';
    }
  } else {
    text = 'Введённые данные не явлыяются строкой';
  }
  // console.log(text);
  return text;
  
};

let res = recenseText(enterInfo);
console.log(res);


