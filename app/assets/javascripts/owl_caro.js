$(document).ready(function() {
   
  $("#owl-demo").owlCarousel({
  
      navigation : true, // Show next and prev buttons
      navigationText: [
        "<i class='glyphicon glyphicon-chevron-left'></i>",
        "<i class='glyphicon glyphicon-chevron-right'></i>"
      ],
      slideSpeed : 300,
      paginationSpeed : 500,
      singleItem : true,
      autoPlay: true,
      rewindSpeed: 500,
      stopOnHover: true
 
  });
 
});