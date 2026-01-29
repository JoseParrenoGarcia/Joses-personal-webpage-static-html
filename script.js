// ============================================================================
// JOSE PARREÑO GARCIA - DATA SCIENCE LEADERSHIP CONSULTANT
// Interactive Behaviors & Scroll Animations
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    initScrollEffects();
    initNavigation();
    initScrollAnimations();
    initFormHandling();
    initCarousels();
    initCollapsiblePillars();
});

// ============================================================================
// Navigation
// ============================================================================
function initNavigation() {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');

    // Add shadow on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Active section highlighting
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ============================================================================
// Scroll Effects
// ============================================================================
function initScrollEffects() {
    // Parallax effect on hero
    const hero = document.querySelector('.hero-content');
    const heroDecoration = document.querySelector('.hero-decoration');

    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const speed = 0.5;

            hero.style.transform = `translateY(${scrolled * speed}px)`;
            hero.style.opacity = 1 - (scrolled / 800);

            if (heroDecoration) {
                heroDecoration.style.transform = `translate(-5%, ${scrolled * 0.3}px)`;
            }
        });
    }
}

// ============================================================================
// Scroll Animations
// ============================================================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                // Don't unobserve so animation can trigger on scroll up
            }
        });
    }, observerOptions);

    // Observe service cards with stagger
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe carousel article cards with stagger
    const articleCards = document.querySelectorAll('.article-card.carousel');
    articleCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animationDelay = `${(index % 5) * 0.08}s`;
        observer.observe(card);
    });


    // Observe timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.animationDelay = `${index * 0.2}s`;
        observer.observe(item);
    });

    // Observe detail cards
    const detailCards = document.querySelectorAll('.detail-card');
    detailCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animationDelay = `${index * 0.12}s`;
        observer.observe(card);
    });

    // Observe credentials
    const credentials = document.querySelectorAll('.credential-item');
    credentials.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.animationDelay = `${0.5 + index * 0.1}s`;
        observer.observe(item);
    });
}

// ============================================================================
// Carousel Navigation
// ============================================================================
function initCarousels() {
    const pillars = document.querySelectorAll('.article-pillar');

    pillars.forEach(pillar => {
        const container = pillar.querySelector('.carousel-container');
        const prevBtn = pillar.querySelector('.carousel-nav.prev');
        const nextBtn = pillar.querySelector('.carousel-nav.next');

        if (!container || !prevBtn || !nextBtn) return;

        const cardWidth = 340; // Card width + gap
        const scrollAmount = cardWidth + 24;

        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent pillar collapse toggle
            container.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent pillar collapse toggle
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        // Optional: Update button visibility based on scroll position
        container.addEventListener('scroll', () => {
            const maxScroll = container.scrollWidth - container.clientWidth;

            if (container.scrollLeft <= 0) {
                prevBtn.style.opacity = '0.3';
                prevBtn.style.cursor = 'default';
            } else {
                prevBtn.style.opacity = '';
                prevBtn.style.cursor = 'pointer';
            }

            if (container.scrollLeft >= maxScroll - 10) {
                nextBtn.style.opacity = '0.3';
                nextBtn.style.cursor = 'default';
            } else {
                nextBtn.style.opacity = '';
                nextBtn.style.cursor = 'pointer';
            }
        });

        // Trigger initial scroll event to set button states
        container.dispatchEvent(new Event('scroll'));
    });
}

// ============================================================================
// Collapsible Pillars
// ============================================================================
function initCollapsiblePillars() {
    const pillars = document.querySelectorAll('.article-pillar');

    pillars.forEach(pillar => {
        const header = pillar.querySelector('.pillar-header');

        if (!header) return;

        // Click handler
        header.addEventListener('click', (e) => {
            // Don't toggle if clicking on nav buttons
            if (e.target.closest('.carousel-nav-group')) return;

            togglePillar(pillar, header);
        });

        // Keyboard accessibility
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                togglePillar(pillar, header);
            }
        });
    });
}

function togglePillar(pillar, header) {
    const isCollapsed = pillar.classList.contains('collapsed');

    pillar.classList.toggle('collapsed');
    header.setAttribute('aria-expanded', isCollapsed ? 'true' : 'false');
}

// ============================================================================
// Form Handling
// ============================================================================
function initFormHandling() {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const button = contactForm.querySelector('.btn-primary');

            // Update button state
            const originalText = button.textContent;
            button.textContent = 'Sending...';
            button.disabled = true;

            // Reset after form submission (Formspree will handle the redirect)
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 3000);
        });
    }

    // Newsletter form handling
    const newsletterForm = document.querySelector('.newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            // Let the form submit naturally to Substack
            const button = newsletterForm.querySelector('.btn-primary');
            const originalText = button.textContent;

            button.textContent = 'Subscribing...';
            button.disabled = true;

            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 3000);
        });
    }
}

// ============================================================================
// Utility: Smooth number counting animation
// ============================================================================
function animateNumber(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = end;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Animate credential numbers when they come into view
const credentialObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const number = entry.target.querySelector('.credential-number');
            if (number && !number.dataset.animated) {
                const text = number.textContent;
                const value = parseInt(text.replace(/\D/g, ''));
                const suffix = text.replace(/[0-9]/g, '');

                if (!isNaN(value)) {
                    number.dataset.animated = 'true';
                    let current = 0;
                    const duration = 1500;
                    const increment = value / (duration / 16);

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= value) {
                            number.textContent = value + suffix;
                            clearInterval(timer);
                        } else {
                            number.textContent = Math.floor(current) + suffix;
                        }
                    }, 16);
                }
            }
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const credentials = document.querySelectorAll('.credential-item');
    credentials.forEach(item => credentialObserver.observe(item));
});
