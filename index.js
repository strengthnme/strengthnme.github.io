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
    const items = document.querySelectorAll('.carousel-two-item');
    const arrowUp = document.querySelector('.arrow-up');
    const arrowDown = document.querySelector('.arrow-down');
    let currentItem = 0;

    // Function to change the item visibility
    const changeItem = (index) => {
        items.forEach(item => item.style.display = 'none'); // Hide all items
        items[index].style.display = 'block'; // Show only the active item
    };

    // Initially display the first item
    changeItem(currentItem);

    arrowUp.addEventListener('click', () => {
        currentItem = (currentItem > 0) ? currentItem - 1 : items.length - 1;
        changeItem(currentItem);
    });

    arrowDown.addEventListener('click', () => {
        currentItem = (currentItem < items.length - 1) ? currentItem + 1 : 0;
        changeItem(currentItem);
    });
});








