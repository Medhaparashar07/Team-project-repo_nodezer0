// Page switching logic
const buttons = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');
const navLinks = document.getElementById('nav-links');
const toggleBtn = document.getElementById('menu-toggle');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    pages.forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    const target = btn.getAttribute('data-target');
    document.getElementById(target).classList.add('active');

    // Close mobile menu when clicked
    navLinks.classList.remove('show');
  });
});

// Mobile menu toggle
toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Add to cart alert
const cartButtons = document.querySelectorAll('.cart-btn');
cartButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Item added to cart!');
  });
});
