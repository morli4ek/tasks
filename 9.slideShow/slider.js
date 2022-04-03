const imageBlock = document.querySelector(".slide-img");
const buttonLeft = document.querySelector(".left");
const buttonRight = document.querySelector(".right");


const slides = ['cat1.jpg' , 'cat2.jpg' , 'cat3.jpg' , 'cat4.jpg'];

let currentSlideIndex = 0;

buttonLeft.disabled = true;

const changeImage = () => {
    imageBlock.src = "img/" + slides[currentSlideIndex];
};

const nextSlide = () => {
    buttonLeft.disabled = false;
    currentSlideIndex = currentSlideIndex + 1;
    const isLastSlide = currentSlideIndex === slides.length - 1;
    if (isLastSlide) {
        buttonRight.disabled = true;
    } 
    changeImage();
    
};

const previousSlide = () => {
    buttonRight.disabled = false;
    currentSlideIndex = currentSlideIndex - 1;
    const isFirstSlide = currentSlideIndex === 0;
    if (isFirstSlide) {
        buttonLeft.disabled = true
    }
    changeImage();
};