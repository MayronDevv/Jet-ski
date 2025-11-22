const hamburger = document.querySelector('.hamburger');
const navUL = document.querySelector('.nav ul');
const openBtn = document.getElementById('openModal');
const modal = document.getElementById('contactModal');
const closeBtn = document.querySelector('.close-modal');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('active');
    hamburger.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    document.querySelector('.header').classList.toggle('scrolled', window.scrollY > 50);
});

openBtn.addEventListener('click', e => {
    e.preventDefault();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
});

modal.addEventListener('click', e => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                if (entry.target.classList.contains('check')) {
                    entry.target.querySelectorAll('li').forEach((li, i) => {
                        setTimeout(() => li.classList.add('visible'), i * 120);
                    });
                }
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-in, .jet-card').forEach(el => observer.observe(el));
    document.querySelectorAll('.check').forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(e => {
        e.forEach(n => {
            if (n.isIntersecting) n.target.classList.add("visible");
        });
    }, { threshold: 0.15 });

    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
});