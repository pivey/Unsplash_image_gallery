import './style.scss';
import {
  className
} from 'postcss-selector-parser';
console.log('HI')

document.querySelector('.container').addEventListener('click', (e) => {
        if (e.target.parentNode.tagName === 'DIV') {
        if (e.target.className === '') {
          e.target.parentNode.className= 'tall';
        } else if (e.target.parentNode.className === 'tall') {
            e.target.parentNode.className= 'long';
        //   e.target.parentNode.classList.remove('tall');
        //   e.target.parentNode.classList.add('long');
        } else if (e.target.parentNode.className === 'long') {
            e.target.parentNode.className= 'large';
        //   e.target.parentNode.classList.remove('long');
        //   e.target.parentNode.classList.add('large');
        } else if (e.target.parentNode.className === 'large') {
            e.target.parentNode.className= '';
        //   e.target.parentNode.classList.remove('large');
        //   e.target.parentNode.classList.add('');
        }
      }
});

