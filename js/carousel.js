window.onload = function() {
  recCarouselEvents();
}

function recCarouselEvents() {
  // RECOMMENDATION CAROUSELS
  var recTranslate = 0;
  var recTranslateIncrem = 386 * 2;
  var carRecsItems = $('.carousel-recs .carousel-listitem');
  var carRecsItem = $(carRecsItems[0]);
  var carRecsItemWidth = carRecsItem.outerWidth(true);
  var carRecsRowWidth = (carRecsItemWidth * 4);
  var carRecsMaxRowWidth = (carRecsItemWidth * carRecsItems.length);

  $('.carousel-prev-rec').click(function() {
    // PREV RECS
    carRecsList = $('.carousel-list');
    recTranslate += recTranslateIncrem;

    if (recTranslate <= 0) {
      carRecsList.css('transform', 'translatex(' + recTranslate + 'px)');
    } else {
      recTranslate = 0;
    }
  })

  $('.carousel-next-rec').click(function() {
    // NEXT RECS
    carRecsList = $('.carousel-list');
    recTranslate -= recTranslateIncrem;

    if (recTranslate >= (recTranslateIncrem * -2)) {
      carRecsList.css('transform', 'translatex(' + recTranslate + 'px)');
    } else {
      recTranslate = (recTranslateIncrem * -2);
    }

  });
}