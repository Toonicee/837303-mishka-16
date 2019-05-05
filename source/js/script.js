var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');



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

var bestButton = document.querySelector('.best-product__button');
var mPopup = document.querySelector('.modal');
var modalBtn = document.querySelector('.modal-button');

  bestButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    mPopup.classList.remove("modal");
  });

  modalBtn.addEventListener("click", function (evt){
    evt.preventDefault();
    mPopup.classList.add("modal")
  });
