// Dark Mode Toggle
const themeToggle = document.getElementById('toggle-theme');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark')
        ? 'Switch to Light Mode'
        : 'Switch to Dark Mode';
});

// Custom Cursor
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.pageY}px`;
    cursor.style.left = `${e.pageX}px`;
});
document.addEventListener('mousedown', () => cursor.classList.add('expand'));
document.addEventListener('mouseup', () => cursor.classList.remove('expand'));

// Parallax Scrolling
const parallax = document.querySelector('.parallax');
window.addEventListener('scroll', () => {
    let offset = window.scrollY;
    parallax.style.backgroundPositionY = `${offset * 0.7}px`;
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');
    });
});

// Stats Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach((counter) => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 200;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 15);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});

// Chat Widget
const chatToggle = document.getElementById('chat-toggle');
const chatBox = document.getElementById('chat-box');
chatToggle.addEventListener('click', () => {
    chatBox.classList.toggle('hidden');
});
