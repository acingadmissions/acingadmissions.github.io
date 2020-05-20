$(document).ready(function() {
  $("#team-slider").owlCarousel({
    items: 1,
    itemsDesktop: [1000, 1],
    itemsDesktopSmall: [979, 1],
    itemsTablet: [768, 1],
    pagination: true,
    navigation: false,
    navigationText: ["", ""],
    autoPlay: true,
    slideBy: 1
  });
 
});

$(function() {
  var lastId,
    topMenu = $("#navbarResponsive"),
    topMenuHeight = topMenu.outerHeight() + 200,
    // All item list
    menuItems = topMenu.find("a"),
    // Anchors reponding to menu items
    scrollItems = menuItems.map(function() {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });

  $(window).scroll(function() {
    // Container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;
    // Get id of current scroll item
    var current = scrollItems.map(function() {
      if ($(this).offset().top < fromTop) {
        return this;
      }
    });
    // Get the id of the current element
    current = current[current.length - 1];
    var id = current && current.length ? current[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/Remove active class
      menuItems
        .removeClass("active")
        .filter("[href='#" + id + "']")
        .addClass("active");
    }
  });
});
