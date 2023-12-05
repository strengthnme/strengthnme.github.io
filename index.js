const slide = document.querySelector(".slider");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
btn1.onclick = function () {
  slide.style.transform = "translateX(0px)";
};
btn2.onclick = function () {
  slide.style.transform = "translateX(-100%)";
};
btn3.onclick = function () {
  slide.style.transform = "translateX(-200%)";
};

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel-two');
    const arrowUp = document.querySelector('.arrow-up');
    const arrowDown = document.querySelector('.arrow-down');
    let currentItem = 0;
    const totalItems = carousel.children.length;

    const updateCarousel = () => {
        const transformValue = -currentItem * 300; // Height of each item
        carousel.style.transform = `translateY(${transformValue}px)`;
    };

    arrowUp.addEventListener('click', () => {
        if (currentItem === 0) {
            // If at the first item, go to the last item
            currentItem = totalItems - 1;
        } else {
            currentItem--;
        }
        updateCarousel();
    });

    arrowDown.addEventListener('click', () => {
        if (currentItem < totalItems - 1) {
            currentItem++;
        } else {
            // If at the last item, go back to the first item
            currentItem = 0;
        }
        updateCarousel();
    });
});







