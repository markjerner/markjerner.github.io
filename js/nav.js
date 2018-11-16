const hamburger = document.querySelector('.hamburger')
const smNav = document.querySelector('#sm-nav')

hamburger.addEventListener('click', (e) => {
  smNav.classList.toggle('slide')
  hamburger.classList.toggle('slide')
})
