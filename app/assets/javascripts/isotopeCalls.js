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

	/// for filter attribution on click
	$('.articles_filter').on( 'click', '.headline', function() {
	  var filterValue = $(this).attr('data-filter');
	  $container.isotope({ filter: filterValue });
	});


	/// for persistent filter button color - default to show-all
	$('.show-all').addClass('current');
	$('.headline').click(function(){
		$('.headline').removeClass('current');
		$(this).addClass('current');
	});

	/// sidebar nav accordian hack
	$('.parent').click(function(){
		$('.hiddenitems').slideUp('slow');
		$('.hiddenitems', this).slideDown('slow');	
	});

	$('.show-all').click(function(){
		$('.hiddenitems').slideUp('slow');
	});



});
