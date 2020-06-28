document.addEventListener('DOMContentLoaded', function(){

'use strict';

const text = 'doun key';

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.createdElements = function(){
  let elemSelector = this.selector.trim();
  let attr = elemSelector.substring(1).toLowerCase();
  if (elemSelector[0] === '.') {
    elemSelector = document.createElement('div');
    elemSelector.classList.add(attr);
  }
  if (elemSelector[0] === '#') {
    elemSelector = document.createElement('p');
    elemSelector.setAttribute('id', attr);
  }
  elemSelector.style.cssText = 'height: ' + this.height + 'px;' +
  'width: ' + this.width + 'px;' +
  'background-color: ' + this.bg + ';' +
  'font-size: ' + this.fontSize + 'px;' +
  'position: absolute'
  ;

  elemSelector.innerHTML = text;
  console.log(elemSelector);
  document.body.append(elemSelector);
};


let DomElement2 = new DomElement('#block', 100, 100, 'red', 20);

DomElement2.createdElements();

addEventListener('keydown', (event) => {

  const sqware = document.getElementById('block'),
        computedStyleMinHead = getComputedStyle(sqware),
        x = Number.parseInt(computedStyleMinHead.left),
        y = Number.parseInt(computedStyleMinHead.top);

        if (event.keyCode === 37) {
          sqware.style.left = `${x - 10}px`;
        } else if (event.keyCode === 38) {
          sqware.style.top = `${y - 10}px`;
        } else if (event.keyCode === 39) {
          sqware.style.left = `${x + 10}px`;
        } else if (event.keyCode === 40) {
          sqware.style.top = `${y + 10}px`;
        }
});

});