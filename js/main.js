
// add a fade in effect on hero image to make video look like it just loaded
const heroImage = document.querySelector('.hero-video img');

setTimeout(() => {
  heroImage.classList.add('fade-out');
}, 3000);


const btnNav = document.querySelector('.btn-nav');
btnNav.addEventListener('click', () => {
  document.querySelector('.mobile-nav').classList.toggle('active');
});