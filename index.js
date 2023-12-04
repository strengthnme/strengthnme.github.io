let slideIndexOne = 1;
    let slideIndexTwo = 1;

    showSlidesOne(slideIndexOne);
    showSlidesTwo(slideIndexTwo);

    function showSlidesOne(index) {
        const slides = document.querySelectorAll('.carousel-one-item');
        if (index < 1) {
            slideIndexOne = slides.length;
        }
        if (index > slides.length) {
            slideIndexOne = 1;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[slideIndexOne - 1].style.display = 'block';
    }

    function showSlidesTwo(index) {
        const slides = document.querySelectorAll('.carousel-two-item');
        if (index < 1) {
            slideIndexTwo = slides.length;
        }
        if (index > slides.length) {
            slideIndexTwo = 1;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[slideIndexTwo - 1].style.display = 'block';
    }

    function changeSlideOne(n) {
        showSlidesOne((slideIndexOne += n));
    }

    function changeSlideTwo(n) {
        showSlidesTwo((slideIndexTwo += n));
    }

    document.querySelector(".carousel-container-one .back").addEventListener("click", function () {
        changeSlideOne(-1);
    });

    document.querySelector(".carousel-container-one .forward").addEventListener("click", function () {
        changeSlideOne(1);
    });

    document.querySelector(".carousel-container-two .prev").addEventListener("click", function () {
        changeSlideTwo(-1);
    });

    document.querySelector(".carousel-container-two .next").addEventListener("click", function () {
        changeSlideTwo(1);
    });
