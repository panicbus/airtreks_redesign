$(document).ready(function() {
   
  $("#owl-demo").owlCarousel({ 
      navigation : true, // Show next and prev buttons
      navigationText: [
        "<i class='glyphicon glyphicon-chevron-left left-arrow'></i>",
        "<i class='glyphicon glyphicon-chevron-right right-arrow'></i>"
      ],
      slideSpeed : 300,
      paginationSpeed : 500,
      singleItem : true,
      autoPlay: true,
      rewindSpeed: 500,
      stopOnHover: true
  });


  // SPECIALS CAROUSEL //
  var owl = $("#owl-2");
 
  owl.owlCarousel({
      itemsCustom : [
        [0, 1],
        [450, 2],
        [600, 2],
        [700, 3],
        [1000, 3],
        [1200, 3],
        [1400, 3],
        [1600, 3]
      ],
      slideSpeed : 300,
      paginationSpeed : 500,
      autoPlay: false,
      rewindSpeed: 500,
      // stopOnHover: true,      
      navigation : true,
      navigationText: [
        "<i class='glyphicon glyphicon-chevron-left'></i>",
        "<i class='glyphicon glyphicon-chevron-right'></i>"
      ]
  });

  $("#owl-3").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });

 
});