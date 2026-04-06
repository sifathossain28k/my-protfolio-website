// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a, .hero-buttons a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        }
    });
});

// Contact form submission simulation (no backend)
const contactForm = document.getElementById('contactForm');
const feedbackPara = document.getElementById('form-feedback');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name  !email  !message) {
            feedbackPara.style.color = '#dc2626';
            feedbackPara.textContent = '❌ Please fill in all fields.';
            return;
        }
        if (!email.includes('@') || !email.includes('.')) {
            feedbackPara.style.color = '#dc2626';
            feedbackPara.textContent = '❌ Please enter a valid email address.';
            return;
        }

        // Simulate success
        feedbackPara.style.color = '#10b981';
        feedbackPara.textContent = '✅ Thank you! I\'ll get back to you soon.';
        contactForm.reset();
        setTimeout(() => {
            feedbackPara.textContent = '';
        }, 4000);
    });
}

// Optional: Demo image reminder in console (helpful hint)
console.log('🔧 Portfolio ready — Replace demo-profile.jpg and demo-about.jpg with your actual images.');
console.log('📁 Place your images (e.g., profile.jpg, about.jpg) and update src attributes in index.html');

// Add a dynamic year in footer if needed (optional)
const yearSpan = document.querySelector('.footer-content p');
if (yearSpan && !yearSpan.innerHTML.includes('2026')) {
    // just for consistency, nothing forced
}