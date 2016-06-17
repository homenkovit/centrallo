$(document).ready(function() {
  
  var popup = $('.popup'),
      overlay = $('.overlay'),
      popupCloseBtn = $('.popup__close'),
      shareBtn = $('.share-btn'),
      tabletHeader = $('.tablet-header'),
      mobileHeader = $('.mobile-header'),
      tabletClose = $('.tablet__close'),
      mobileClose = $('.mobile__close'),
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



  tabletClose.on('click', function(e) {
    e.preventDefault();

    tabletHeader.css('display', 'none');
  });

  mobileClose.on('click', function(e) {
    e.preventDefault();

    mobileHeader.css('display', 'none');
  });



  if (noteBlock.length == 1) {
    $('.notes-header__button_share').css('display', 'none');
    $('.notes-header__button').css('width', '100%');
  };

});