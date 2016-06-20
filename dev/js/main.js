$(document).ready(function() {
  
  var popup = $('.popup'),
      overlay = $('.overlay'),
      popupCloseBtn = $('.popup__close'),
      shareBtn = $('.share-btn'),
      storeHeader = $('.store-header'),
      storeClose = $('.store__close'),
      noteBlock = $('.note');



  shareBtn.on('click', function(e) {
    e.preventDefault();

    overlay.css('display', 'block');
    popup.css('display', 'block');
  });

  popupCloseBtn.on('click', function(e) {
    e.preventDefault();

    overlay.css('display', 'none');
    popup.css('display', 'none');
  });

  overlay.on('click', function(e) {
    e.preventDefault();

    overlay.css('display', 'none');
    popup.css('display', 'none');
  });



  storeClose.on('click', function(e) {
    e.preventDefault();

    storeHeader.css('display', 'none');
  });



  if (noteBlock.length == 1) {
    $('.notes-header__button_share').css('display', 'none');
    $('.notes-header__button').css('width', '100%');
  };

});