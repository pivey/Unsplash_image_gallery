import './style.scss';
import {
  className
} from 'postcss-selector-parser';
console.log('HI')

function classRand () {
  const classArr = ['tall','long','large'];
  var rand = classArr[Math.floor(Math.random() * classArr.length)];
  return rand
}

document.querySelector('.container').addEventListener('click', (e) => {
  if (e.target.parentNode.tagName === 'DIV') {
    if(e.target.parentNode.className === 'large') {
      e.target.parentNode.className = ''; 
    } else {
      e.target.parentNode.className = (classRand());
    }
  };
});