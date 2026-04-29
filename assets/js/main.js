// Main JavaScript for Tirth Resume 2.0 (Extreme Upgrade)

document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.9;
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) el.classList.add('active');
        });
    };
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    // 2. 3D Tilt Effect Logic
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        });
    });

    // 3. Dynamic Glow & Custom Cursor Trail
    const glow = document.querySelector('.x-bg-glow');
    document.addEventListener('mousemove', (e) => {
        if (glow) {
            const x = e.clientX;
            const y = e.clientY;
            glow.style.left = `${x}px`;
            glow.style.top = `${y}px`;
        }
    });

    // 4. Smooth Page Transitions
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href !== '#' && !href.startsWith('http')) {
                e.preventDefault();
                document.body.classList.add('page-exit');
                setTimeout(() => window.location.href = href, 500);
            }
        });
    });
});
