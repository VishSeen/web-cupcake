
// function to active mobile nav
const btnNav = document.querySelector('.btn-nav');
btnNav.addEventListener('click', () => {
  document.querySelector('.mobile-nav').classList.toggle('active');
});


// scroll to top effect
function goTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}