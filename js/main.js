'use strict';

// ============================================
// Navigation
// ============================================
function initMobileNav() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isOpen = navLinks.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            menuToggle.innerHTML = isOpen ? '✕' : '☰';
        });

        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.innerHTML = '☰';
            });
        });

        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.innerHTML = '☰';
            }
        });
    }
}

// ============================================
// Phase 3 - Home Page Features
// ============================================

// Typing Animation for Hero Tagline
function initTypingAnimation() {
    const taglineElement = document.querySelector('.tagline .typing-text');
    if (!taglineElement) return;

    const taglines = [
        'Fueled by curiosity, caffeine, and the occasional philosophical crisis.',
        'Balancing machine intelligence with human chaos.',
        'I build systems… and occasionally break them to understand them better'
    ];

    let currentTaglineIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 55;

    function typeTagline() {
        const currentTagline = taglines[currentTaglineIndex];
        
        if (isDeleting) {
            taglineElement.textContent = currentTagline.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            typingSpeed = 25;
        } else {
            taglineElement.textContent = currentTagline.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            typingSpeed = 45;
        }

        if (!isDeleting && currentCharIndex === currentTagline.length) {
            // Pause at end of tagline
            typingSpeed = 2500;
            isDeleting = true;
        } else if (isDeleting && currentCharIndex === 0) {
            // Move to next tagline
            isDeleting = false;
            currentTaglineIndex = (currentTaglineIndex + 1) % taglines.length;
            typingSpeed = 300;
        }

        setTimeout(typeTagline, typingSpeed);
    }

    // Start typing animation
    typeTagline();
}

// Animate Stats on Scroll
function initStatsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length === 0) return;

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statElement = entry.target;
                const targetValue = parseInt(statElement.getAttribute('data-target') || statElement.textContent);
                animateNumber(statElement, 0, targetValue, 2000);
                observer.unobserve(statElement);
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => {
        const currentValue = parseInt(stat.textContent);
        stat.setAttribute('data-target', currentValue);
        stat.textContent = '0';
        observer.observe(stat);
    });
}

function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    const isNumber = !isNaN(end);

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        if (isNumber) {
            const current = Math.floor(start + (end - start) * easeOut);
            element.textContent = current;
        }

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = end;
        }
    }

    requestAnimationFrame(update);
}

// Initialize all home page features
function initHomePageFeatures() {
    // Only run on home page
    if (document.querySelector('.hero')) {
        initTypingAnimation();
        initStatsAnimation();
    }
}

// ============================================
// Phase 5 - Scroll Animations & Visual Polish
// ============================================

// Scroll Animation Observer
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    
    if (animatedElements.length === 0) return;
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve after animation to improve performance
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Header Scroll Effect
function initHeaderScrollEffect() {
    const header = document.querySelector('header');
    if (!header) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Enhanced Card Hover Effects
function initCardEffects() {
    const cards = document.querySelectorAll('.highlight-card, .project-card, .interest-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
}

// Initialize all Phase 5 features
function initPhase5Features() {
    initScrollAnimations();
    initHeaderScrollEffect();
    initSmoothScroll();
    initCardEffects();
}

// Update main initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initMobileNav();
        initHomePageFeatures();
        initPhase5Features();
    });
} else {
    initMobileNav();
    initHomePageFeatures();
    initPhase5Features();
}
