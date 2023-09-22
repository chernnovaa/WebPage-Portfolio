'use strict';

document.querySelector('.nav').addEventListener('click', function (e) {
  console.log(e.target.parentElement);
  e.preventDefault();

  if (e.target.parentElement.classList.contains('nav__link')) {
    console.log('link');

    const id = e.target.parentElement.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
