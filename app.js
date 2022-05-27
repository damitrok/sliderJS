const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');

const container = document.querySelector('.container');

const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');

let activeSlideIndex = 0;

const slidesCount = mainSlide.querySelectorAll('div').length;

sidebar.style.top = `-${(slidesCount -1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
});

downBtn.addEventListener('click', () => {
    changeSlide('down');
});

document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowDown') {
        changeSlide('down');
    } else if (event.code == 'ArrowUp') changeSlide('up');
  });

document.addEventListener('mousewheel', function(event) {
    if (event.wheelDelta) changeSlide('up'); else changeSlide('down');
});

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        };
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        };
    };

    const height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${height * activeSlideIndex}px)`;
    sidebar.style.transform = `translateY(${height * activeSlideIndex}px)`;
};