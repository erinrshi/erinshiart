// for index page

var slideIndex = 1;
showDivs(slideIndex);
switchSlide();

function plusSlides(n) {
    showDivs(slideIndex += n);
}

// image controls
function currentSlide(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

//automatically switch slides
function switchSlide() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    x[slideIndex-1].style.display = "block";
    setTimeout(switchSlide, 3000);
}

// < > space keys to switch
window.addEventListener("keydown", (event) => {
    if (event.keyCode == 37 || event.keyCode == 38) {//prev
      plusSlides(-1);
    }
    if (event.keyCode == 39 || event.keyCode == 32 || event.keyCode == 40){//next
        plusSlides(1);
    }
  });
