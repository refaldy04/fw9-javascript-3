import fetch from 'node-fetch';

let searchName = function () {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((res) => res.map((el) => console.log(el.name)))
    .catch((err) => console.log('Network Error'));
  return;
};

searchName();
