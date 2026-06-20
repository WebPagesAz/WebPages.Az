// =====================
// NAVBAR — scroll shadow
// =====================
var navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// =====================
// HAMBURGER MENU
// =====================
var hamburger = document.getElementById('hamburger');
var mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', function () {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    mobileMenu.classList.remove('open');
  });
});

// =====================
// SCROLL REVEAL
// =====================
var reveals = document.querySelectorAll('.reveal');
var revealObserver = new
