// let bullet1 = document.querySelector(".bullet1");
// let bullet2 = document.querySelector(".bullet2");
// let bullet3 = document.querySelector(".bullet3");
// let bullet4 = document.querySelector(".bullet4");
// let sliderTrack = document.querySelector(".slider-track");

// bullet1.addEventListener("click", (e) => {
//   e.preventDefault();
//   sliderTrack.style.transform = `translateX(0%)`;
// });

// bullet2.addEventListener("click", (e) => {
//   e.preventDefault();
//   sliderTrack.style.transform = `translateX(-100%)`;
// });

// bullet3.addEventListener("click", (e) => {
//   e.preventDefault();
//   sliderTrack.style.transform = `translateX(-200%)`;
// });

// bullet4.addEventListener("click", (e) => {
//   e.preventDefault();
//   sliderTrack.style.transform = `translateX(-300%)`;
// });

/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Устанавливает текущий слайд */
function slideIndexCurrent(n) {
  showSlides((slideIndex = n));
}

/* Основная функция слайдера */
function showSlides(n) {
  let dots = document.getElementsByClassName("circle-bullet");
  let sliderTrack = document.querySelector(".slider-track");
  var textSliderItem = document.getElementsByClassName("slider-item-text");
  // console.log(textSliderItem);

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  for (i = 0; i < textSliderItem.length; i++) {
    textSliderItem[i].style.display = `none`;
  }

  // slides[slideIndex - 1].style.display = "block";
  textSliderItem[slideIndex - 1].style.display = `block`;
  sliderTrack.style.transform = `translateX(${100 - slideIndex * 100}%)`;
  dots[slideIndex - 1].className += " active";
}
