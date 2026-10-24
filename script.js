document.querySelector('#year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.project, .skills-grid > div, .section-heading, .about-grid').forEach((item) => observer.observe(item));

const finePointer = window.matchMedia('(pointer: fine)');
const cursorGlow = document.querySelector('.cursor-glow');
const cursorDot = document.querySelector('.cursor-dot');

if (finePointer.matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.body.classList.add('has-fine-pointer');
  window.addEventListener('pointermove', (event) => {
    cursorGlow.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    cursorDot.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
  });

  document.querySelectorAll('a, button').forEach((element) => {
    element.addEventListener('pointerenter', () => document.body.classList.add('cursor-active'));
    element.addEventListener('pointerleave', () => document.body.classList.remove('cursor-active'));
  });
}
