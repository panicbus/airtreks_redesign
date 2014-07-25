$(window).load(function(){ 
		
	var $container = $('.article-tiles'); 

		$container.isotope({
			itemSelector: '.itemz',
	  	layoutMode: 'fitRows',
	  	isFitWidth: true,
	  	filter: '*',
			animationOptions: {
				duration: 500,
				easing: 'linear',
				queue: false
			}
		});

	// plugin to load the images after the boxsize has been defined	
	$container.imagesLoaded( function() {
  	$container.isotope('layout');
	});

	/// for persistent filter button color
	$('.show-all').addClass('current');
	$('.headline').click(function(){
		$('.headline').removeClass('current');
		$(this).addClass('current');
	});


	/// for filter attribution on click
	$('.articles_filter').on( 'click', '.headline', function() {
	  var filterValue = $(this).attr('data-filter');
	  $container.isotope({ filter: filterValue });
	});


});
