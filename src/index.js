import './style.scss';
const key = require('../keys.js');
let container = document.querySelector('.container');
const loadMore = document.getElementById('load_more_button');
let count = 1;
let userInput = document.getElementById('picQuantityInput');
const userInputSubmit = document.getElementById('picQuantitySubmit'); 

const clientID = key.api_key;

function classRand() {
  const classArr = ['tall', 'long', 'small', 'large', 'small'];
  var rand = classArr[Math.floor(Math.random() * classArr.length)];
  return rand
}

function insertChild(imgUrl) {
  const div = document.createElement('DIV');
  div.innerHTML = `<img src="${imgUrl}" alt="random image">`;
  div.className = classRand();
  return div;
}

function insertImgIntoDom(data) {
  data.forEach(function (value) {
    const image_url = value.urls.thumb;
    let div = insertChild(image_url);
    container.appendChild(div);
  });
}

function quantityRequest () {
  if (userInput.value > 50) {
    alert('input a number between 1 & 50');
    userInput.value = '';
    return; }
  container.innerHTML = ''; 
  fetchImgs(clientID, '&per_page=' + userInput.value)
  .then(data => {
    insertImgIntoDom(data);
    userInput.value = ''; 
  }).catch(err => {
    console.log(err);
  }); 
}

async function fetchImgs(userid, parameter) {
  let res = await fetch(`https://api.unsplash.com/users/peteriveyphotography/photos/?${userid}${parameter}`);
  let data = await res.json()
  return data;
}

fetchImgs(clientID, '&per_page=5')
  .then(data => {
    const name = data[0].user.instagram_username;
    document.getElementById('header-html').innerHTML += ' ' + 'from' + ' ' + name;
    insertImgIntoDom(data);
  }).catch(err => {
    console.log(err);
  });

document.querySelector('.container').addEventListener('click', (e) => {
  if (e.target.parentNode.tagName === 'DIV') {
    if (e.target.parentNode.className === 'large') {
      e.target.parentNode.className = '';
    } else {
      e.target.parentNode.className = (classRand());
    }
  };
});

loadMore.addEventListener('click', (e) => {
  count += 1
  fetchImgs(clientID, '&page=' + count)
    .then(data => {
      insertImgIntoDom(data);
    }).catch(err => {
      console.log(err);
    });
}); 

userInputSubmit.addEventListener('click', () => {
  quantityRequest()
});

userInput.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) quantityRequest();
});



