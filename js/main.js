$(function() {
  $(".toggles button").click(function() {
    const get_id = this.id;
    const get_current = $(`.posts .` + get_id);

    $(".post").not(get_current).hide(500);
    get_current.show(500);
  });

  $("#showAllButton").click(function() {
    $(".post").show(500);
  })
});

$(document).ready(function(){
  let items = {
    number: 8,
  };

  let windowWidth = $(window).width();

  if(windowWidth <= 768 && windowWidth > 420) {
    items.number = 5;
  } else if ($(window).width() <= 420) {
    items.number = 3;
  }

  $(".owl-carousel").owlCarousel({
    items: items.number,
  });
});