$(document).ready(function(){
	
	//// PHONE/BIZ DIV SLIDE /////

	$(document).scroll(function(){
		var pageScroll = $(this).scrollTop();
		var phonebiz = $('#phonebizanchor').offset().top - 200;
		
		if (pageScroll > phonebiz) {
			$(".phone").animate({"left":"30px"}, "slow");
			$(".biz").animate({"right":"30px"}, "slow");
		};

	});		

	

	///// moving RTW 101 banner ////// 
	$(document).scroll(function(){
			var pageScroll = $(this).scrollTop();
			var rtwBanner = $('#rtwBannerAnchor').offset().top - 500;
			
			if (pageScroll > rtwBanner) {
				$('.rtw101-splash').animate({
					bottom: "100px",
				}, 'slow');
			}
	});


	//// scrolling down to RTW 101 from top carousel ////
	$('#tortw').click(function(){
      $('html, body').animate({
        scrollTop: $("#toRTW101").offset().top - 10
      }, 500 );
      return false;
  });


	// for fade-in of first carousel text on page load //
	$('.image-content').delay(500).fadeIn(400);


	// BOOSTRAP CAROUSEL //
	$('.carousel').carousel()


	/// ARTICLE EXPAND ///
 	$(function(){ 
		var $container = document.querySelector('.masonry');

	  $('.itemz').click(function() {
	    if ($('.itemz').hasClass('is-expanded')){
	    	$('.itemz').removeClass('is-expanded');
	    }
	    $( this ).toggleClass('is-expanded');
	    $container.masonry();
	  });
	});



})