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
var revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(function (el) {
  revealObserver.observe(el);
  // stagger children in grids
  var siblings = el.parentElement ? el.parentElement.querySelectorAll('.reveal') : [];
  siblings.forEach(function (sib, i) {
    sib.style.transitionDelay = (i * 0.1) + 's';
  });
});

// =====================
// PORTFOLIO FILTER
// =====================
var filterBtns = document.querySelectorAll('.filter-btn');
var portfolioCards = document.querySelectorAll('.portfolio-card');

filterBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    filterBtns.forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');

    var filter = btn.getAttribute('data-filter');
    portfolioCards.forEach(function (card) {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// =====================
// CONTACT FORM
// =====================
var form = document.getElementById('contact-form');
var successMsg = document.getElementById('form-success');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  successMsg.style.display = 'block';
  form.reset();
  setTimeout(function () {
    successMsg.style.display = 'none';
  }, 5000);
});

// =====================
// SCROLL TO TOP
// =====================
var scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', function () {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});
scrollTopBtn.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =====================
// SMOOTH NAV SCROLL
// =====================
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    var target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
