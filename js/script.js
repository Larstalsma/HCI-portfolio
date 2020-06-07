function staggerSubNav(navItem) {
	var subNavTween = new TweenMax.staggerFromTo(navItem, 0.5, {y: '-15px', autoAlpha: 0, ease: Power4.easeOut},{y: '0px', autoAlpha: 1}, 0.1);
}
$('nav > ul > li').on('mouseenter', function() {
	staggerSubNav($(this).find('li'));
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
