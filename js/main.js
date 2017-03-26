var headerHeight = document.querySelector('header').offsetHeight;
var headerDistance = 100;
var nav = document.querySelector('nav');

window.addEventListener('scroll', function(e) {
  if (window.scrollY >= headerHeight - headerDistance) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
})
