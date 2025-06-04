
window.addEventListener('scroll', function() {
const navbar = document.getElementById('navbar');
if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
} else {
    navbar.classList.remove('scrolled');
}

// Update active navigation link
updateActiveNavLink();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    }
});
});

// Update active navigation link based on scroll position
function updateActiveNavLink() {
const sections = ['about', 'projects', 'resume', 'contact'];
const navLinks = document.querySelectorAll('.nav-link');

let current = '';

sections.forEach(section => {
    const element = document.getElementById(section);
    if (element) {
    const rect = element.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
        current = section;
    }
    }
});

navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
    link.classList.add('active');
    }
});
}

// Contact form submission
function handleSubmit(event) {
event.preventDefault();

const formData = new FormData(event.target);
const name = formData.get('name');
const email = formData.get('email');
const message = formData.get('message');

// Simulate form submission
alert(`Thank you, ${name}! Your message has been sent. I'll get back to you at ${email} soon.`);

// Reset form
event.target.reset();
}

// Resume download
function downloadResume() {
alert('Resume download would start here. In a real implementation, this would download the PDF file.');
}

// Intersection Observer for animations
const observerOptions = {
threshold: 0.1,
rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add(entry.target.dataset.animation || 'fade-in');
    }
});
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
const animatedElements = document.querySelectorAll('.slide-in, .fade-in');
animatedElements.forEach(el => {
    observer.observe(el);
});
});
