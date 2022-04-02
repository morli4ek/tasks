const imageBlock = document.querySelector(".slide-img");
const buttonLeft = document.querySelector(".left");
const buttonRight = document.querySelector(".right");

const slides = ['cat1.jpg' , 'cat2.jpg' , 'cat3.jpg' , 'cat4.jpg'];

let currentSlideIndex = 0;

const changeImage = () => {
    imageBlock.src = "img/" + slides[currentSlideIndex];
};

const nextSlide = () => {
    // const isLastSlide = currentSlideIndex < slides.length;
    // if (isLastSlide) {
    //     buttonRight.disabled = true;
    // };
    currentSlideIndex = currentSlideIndex + 1;
    changeImage();
    
};

const previousSlide = () => {
    currentSlideIndex = currentSlideIndex - 1;
    changeImage();
};