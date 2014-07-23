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


////////////////

	var navLink = function(link){
		$(".view-options").removeClass("current");
		$(".hiddenitems").slideUp();
		$(".content-default").hide();
		$(link).addClass("current");
	}
	
	// $(".content-default").addClass("current"); // main splash for content section // no hooked up

	$(".nav-title").click(function(){
		navLink(this);
		$(".content-default").show();
	})

	$(".ready-nav").click(function(){
		navLink(this);
		$(".ready-div").addClass("current").fadeIn(); /// changes the content area to ready
		$(".ready-hiddenitems").slideDown("current");		
		
	});

	$(".set-nav").click(function(event){
		navLink(this)
		$(".set-div").addClass("current"); // changes the content area to set
		$(".set-hiddenitems").slideDown("current");		
	});

	$(".go-nav").click(function(event){
		navLink(this)
		$(".go-div").addClass("current"); /// changes the content area to go
		$(".go-hiddenitems").slideDown("current");		
	});
	

	// moving RTW 101 banner 
	$(document).scroll(function(){
			var pageScroll = $(this).scrollTop();
			var rtwBanner = $('#rtwBannerAnchor').offset().top - 500;
			
			if (pageScroll > rtwBanner) {
				$('.rtw101-splash').animate({
					bottom: "100px",
				}, 'slow');
			}


// NAVBAR ENSMALLEN ON SCROLL
	// 		if (pageScroll < 100 ) {
	// 			$('.navbar').css('height','100px');
	// 		} else {
	// 			$('.navbar').css({
	// 				'height':'50px',
	// 				'position':'fixed',
	// 			});
	// 		}
	});


	// BOOTSTRAP ACCORDION ///
	// $('.collapse').collapse()

	$('#collapseOne').collapse("hide");  // hides them all on page load



	// scrolling down to RTW content section //
	$('#tortw').click(function(){
      $('html, body').animate({
        scrollTop: $("#toRTW101").offset().top - 10
      }, 500 );
      return false;
  });

	// for fade-in of first carousel text on page load
	$('.image-content').delay(500).fadeIn(400);

	// BOOSTRAP CAROUSEL
	$('.carousel').carousel()


	/// MASONRY ///

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