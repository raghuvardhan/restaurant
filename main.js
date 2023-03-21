document.addEventListener('DOMContentLoaded', function() {
    // Get the elements we want to manipulate
const form = document.querySelector('form');
const emailInput = document.querySelector('#email');

// Add a class to the navigation item for the current page
const currentPage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

const reservationForm = document.getElementById('reservation-form');
const toast = document.createElement('div');
toast.classList.add('toast');

reservationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  toast.textContent = 'Booking has been confirmed';
  toast.classList.add('show');
  document.body.appendChild(toast);
  
  // Reset form
  reservationForm.reset();
});

  });
  