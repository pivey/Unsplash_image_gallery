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

const container = document.querySelector('.container');
const clientID = 'client_id=d956c6d15641100d543f18d20a30441edfb593cdbf60cd5e966711f6f6755b14'


// response.arrayBuffer().then(function(buffer) {
// });

async function fetchImgs(userid) {
  let res = await fetch(`https://api.unsplash.com/users/peteriveyphotography/photos/?${userid}`);
  let data = await res.json()
  return data;
}

fetchImgs(clientID)
  .then(data => {
    const name = data[0].user.instagram_username;
    document.getElementById('header-html').innerHTML += ' ' + 'from' + ' ' + name;

    data.forEach(function (value) {
      const image_url = value.urls.thumb;
      let div = insertChild(image_url);
      container.appendChild(div);
    });

  });



// $.getJSON(`https://api.unsplash.com/users/peteriveyphotography/photos/?
// ${clientID}`, function(data){

//   const name = data[0].user.instagram_username;

//  document.getElementById('header-html').innerHTML += ' ' + 'from' + ' ' + name; ;

//   $.each(data, function(index, value){

//     const image_url = value.urls.thumb; 
//     let div = insertChild(image_url);
//     container.appendChild(div); 
//   });
// });

document.querySelector('.container').addEventListener('click', (e) => {
  if (e.target.parentNode.tagName === 'DIV') {
    if (e.target.parentNode.className === 'large') {
      e.target.parentNode.className = '';
    } else {
      e.target.parentNode.className = (classRand());
    }
  };
});
