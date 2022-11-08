var slides = document.getElementsByClassName("slide");
var numOfSlides = slides.length;

// insert dots below slideshow
var insertedDots = ``;
for (let i = 0; i < numOfSlides; i++) {
    insertedDots += `<span class="dot"></span>`
}
var slideshow = document.querySelector(".slideshow");
slideshow.nextElementSibling.innerHTML = insertedDots;


var currentSlideIndex = 0;
var dots = document.querySelectorAll('.dot');
var numOfDots = dots.length;


// handler next button
var nextButton = document.querySelector(".button-next");
nextButton.addEventListener("click", () => { 
    moveToSlideIndex(currentSlideIndex + 1); 
});
nextButton.addEventListener('mouseover', () => { 
    stopAuto(); 
});
nextButton.addEventListener('mouseout', () => { 
    startAuto(); 
});

// handler prev Button
var prevButton = document.querySelector(".button-prev");
document.querySelector(".button-prev").addEventListener("click", () => {
    moveToSlideIndex(currentSlideIndex - 1);
})
prevButton.addEventListener('mouseover', () => { 
    stopAuto(); 
});
prevButton.addEventListener('mouseout', () => { 
    startAuto(); 
});

// handler bullet point
dots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {
        if (currentSlideIndex !== dotIndex) {
            moveToSlideIndex(dotIndex);
        }
    });
    dot.addEventListener('mouseover', () => {
        stopAuto();
    });
    dot.addEventListener('mouseout', () => {
        startAuto();
    });
})

function moveToSlideIndex(newSlideIndex) {
    if (newSlideIndex < 0) {
        newSlideIndex = numOfSlides - 1;
    }
    if (newSlideIndex >= numOfSlides) {
        newSlideIndex = 0;
    }
    reset();
    slides[newSlideIndex].style.display = "block";
    dots[newSlideIndex].classList.add("dot-active");
    currentSlideIndex = newSlideIndex;
}

function reset() {
    for (let i = 0; i < numOfSlides; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < numOfDots; i++) {
        dots[i].classList.remove("dot-active");
    }
}

// automatic slideshow
moveToSlideIndex(currentSlideIndex);
var autoSlide;
startAuto();

function nextSlide() {
    currentSlideIndex ++;
    moveToSlideIndex(currentSlideIndex);
}

function startAuto() {
    autoSlide = setInterval(nextSlide, 5000);
}

function stopAuto() {
    clearInterval(autoSlide);
}