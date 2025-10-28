// script.js

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Particle animation
const particles = document.querySelectorAll('.particle');

particles.forEach(particle => {
    const speed = Math.random() * 2 + 1; // random speed
    const direction = Math.random() * 360; // random angle

    function moveParticle() {
        const x = parseFloat(particle.style.left);
        let newY = (parseFloat(particle.style.top) || 0) + speed;
        if (newY > window.innerHeight) {
            newY = -10; // reset to top
            particle.style.left = Math.random() * 100 + '%';
        }
        particle.style.top = newY + 'px';
        requestAnimationFrame(moveParticle);
    }

    moveParticle();
});

// Hero glow animation
const heroGlow = document.querySelector('.hero-glow');
if (heroGlow) {
    let glowDirection = 1;
    let glowOpacity = 0.2;

    function animateGlow() {
        glowOpacity += 0.005 * glowDirection;
        if (glowOpacity >= 0.5 || glowOpacity <= 0.2) glowDirection *= -1;
        heroGlow.style.opacity = glowOpacity;
        requestAnimationFrame(animateGlow);
    }
    animateGlow();
}

// CTA button hover effect
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(btn => {
    btn.addEventListener('mouseenter', () => btn.style.transform = 'scale(1.05)');
    btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1)');
});

// Animate feature cards on scroll
const featureCards = document.querySelectorAll('.feature-card, .stat-card, .social-link');

function revealOnScroll() {
    const windowBottom = window.innerHeight + window.scrollY;
    featureCards.forEach(card => {
        if (card.offsetTop + card.offsetHeight / 2 < windowBottom) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
