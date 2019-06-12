import './style.scss';
// import {
//   className
// } from 'postcss-selector-parser';
// console.log('HI')

// var httpRequest = new XMLHttpRequest()
// httpRequest.onreadystatechange = function (data) {
//   // code
// }
// httpRequest.open('GET', url)
// httpRequest.send()


// const client_id = 'd956c6d15641100d543f18d20a30441edfb593cdbf60cd5e966711f6f6755b14  '

// $.getJSON(`https://api.unsplash.com/${client_id}`);

// /users/:username/photos

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

