const mobileMenuBtn = document.querySelector('#mobileMenuBtn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuCloseBtn = document.querySelector('.mobile-nav-close');

// Open mobile menu
mobileMenuBtn.addEventListener('click',() => {
  mobileMenu.classList.add('is-active');
  mobileMenuBtn.setAttribute('aria-expanded','true')
})

// Close mobile menu
mobileMenuCloseBtn.addEventListener('click',() => {
  mobileMenu.classList.remove('is-active');
  mobileMenuBtn.setAttribute('aria-expanded','false')
})