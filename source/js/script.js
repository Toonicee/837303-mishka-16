var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var bestButton = document.querySelector('.best-product__button');
var mPopup = document.querySelector('.modal');
var modalBtn = document.querySelector('.modal-button');
var btn_prev = document.querySelector('.slider .reviews__prev');
var btn_next = document.querySelector('.slider .reviews__next');
var reviews = document.querySelectorAll('.slider .slider__list');
var i = 0;

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

  bestButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    mPopup.classList.remove("modal");
  });

  modalBtn.addEventListener("click", function (evt){
    evt.preventDefault();
    mPopup.classList.add("modal")
  });

//Слайдер
    btn_prev.onclick = function(){
         reviews[i].classList.remove('showed');
         i--;

         if(i < 0){
             i = reviews.length - 1;
         }

         reviews[i].classList.add('showed');
    }

    btn_next.onclick = function(){
         reviews[i].classList.remove('showed');
         i++;

         if(i >= reviews.length){
             i = 0;
         }

         reviews[i].classList.add('showed');
    }
