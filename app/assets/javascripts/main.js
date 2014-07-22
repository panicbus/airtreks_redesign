$(document).ready(function(){

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



	// scrolling //
	$('#tortw').click(function(){
      $('html, body').animate({
        scrollTop: $("#toRTW101").offset().top - 10
      }, 500 );
      return false;
  });

	// for fade-in of first carousel text on page load
	$('.image-content').delay(500).fadeIn(400);


})