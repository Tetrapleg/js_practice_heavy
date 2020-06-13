'use strict';


let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];




for(let item in week){
  if (item < 5 && item != new Date().getDay()) {
    document.write(week[item] + ('</br>')); 
  }
  if (item > 4 && item != new Date().getDay()) {
    document.write(('<em>') + week[item] + ('</em>') + ('</br>'));
  }
  if (item == new Date().getDay()) {
  document.write(('<strong>') + week[new Date().getDay()] + ('</strong>'));
  }
}
