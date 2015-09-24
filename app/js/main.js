var headerHeight = document.querySelector('header').offsetHeight
  , headerDistance = 100
  , nav = document.querySelector('nav')


window.addEventListener('scroll', function(e) {
  if (window.scrollY >= headerHeight - headerDistance) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
})
