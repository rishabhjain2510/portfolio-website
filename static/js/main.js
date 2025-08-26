document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    // --- Custom Cursor & Hover Logic ---
    const cursor = document.getElementById('custom-cursor');
    window.addEventListener('mousemove', e => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.2, ease: 'power3.out' });
        const el = document.elementFromPoint(e.clientX, e.clientY);
        cursor.classList.toggle('hover', !!el.closest('a, button'));
    });

    // --- Navigation Slider Logic ---
    const navSlider = document.getElementById('nav-slider');
    const activeLink = document.querySelector('.nav-link.active');
    if(activeLink) {
        gsap.set(navSlider, {
            left: activeLink.offsetLeft,
            width: activeLink.offsetWidth
        });
    }
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('mouseenter', e => {
             if(!e.target.classList.contains('active')) {
                gsap.to(navSlider, { left: e.target.offsetLeft, width: e.target.offsetWidth, duration: 0.4, ease: 'power3.out' });
            }
        });
    });

    document.getElementById('nav-container').addEventListener('mouseleave', () => {
        const currentActiveLink = document.querySelector('.nav-link.active');
        if(currentActiveLink) {
             gsap.to(navSlider, { left: currentActiveLink.offsetLeft, width: currentActiveLink.offsetWidth, duration: 0.4, ease: 'power3.out' });
        }
    });

    // --- Scroll-triggered Animation Setup ---
    function setupScrollAnimations(context) {
        const revealElements = gsap.utils.toArray('.reveal-text', context);
        revealElements.forEach(el => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                },
                opacity: 0,
                y: 40,
                duration: 1,
                ease: 'power3.out'
            });
        });
    }
    
    // Animate all reveal elements on the current page
    setupScrollAnimations(document.body);

    // --- Initial Page Load Animation ---
    const tl = gsap.timeline({ defaults: { ease: "power3.out" }});
    tl.from('.rdj-logo, .top-right-icons', { duration: 0.8, opacity: 0, y: -30, stagger: 0.2, delay: 0.2 })
      .from('nav', { duration: 0.8, opacity: 0, y: 30 }, "-=0.6")
      .from('main > section > div', { duration: 0.8, opacity: 0, y: 50, stagger: 0.2 }, "-=0.5");
});
