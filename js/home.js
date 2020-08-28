var slideIndex = 1;
    showSlides(slideIndex);

// Next/prev controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// < > space keys to switch
window.addEventListener("keydown", (event) => {
    if (event.keyCode == 37) {
      plusSlides(-1);
    }
    if (event.keyCode == 39|| event.keyCode == 32){
        plusSlides(1);
    }
  });
