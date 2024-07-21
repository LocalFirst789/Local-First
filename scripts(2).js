document.getElementById('menuButton').addEventListener('click', function() {
    document.getElementById('sideMenu').style.left = '0';
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('sideMenu').style.left = '-100%';
});

const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let index = 0;

document.getElementById('nextButton').addEventListener('click', () => {
    index = (index + 1) % slideCount;
    updateSlider();
});

document.getElementById('prevButton').addEventListener('click', () => {
    index = (index - 1 + slideCount) % slideCount;
    updateSlider();
});

function updateSlider() {
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;
}
