$(document).ready(function(){

	var navLink = function(link){
		$(".view-options").removeClass("current");
		$(".hiddenitems").slideUp();
		$(".content-default").hide();
		$(link).addClass("current");
	}
	
	// $(".content-default").addClass("current"); // main splash for content section // no hooked up

	// if ($(".hiddenitems") == ))

	$(".ready").click(function(){
		navLink(this)
		$(".ready-div").addClass("current"); /// changes the content area to ready
		$(".ready-hiddenitems").slideDown("current");		
		
	});

	$(".set").click(function(event){
		navLink(this)
		$(".set-div").addClass("current"); // changes the content area to set
		$(".set-hiddenitems").slideDown("current");		
	});

	$(".go").click(function(event){
		navLink(this)
		$(".go-div").addClass("current"); /// changes the content area to go
		$(".go-hiddenitems").slideDown("current");		
	});
	


})