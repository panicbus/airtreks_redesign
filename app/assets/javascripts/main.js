$(document).ready(function(){

	var navLink = function(link){
		$(".view-options").removeClass("current");
		$(".ready-hiddenitems, .set-hiddenitems, .go-hiddenitems").removeClass("current");
		$(link).addClass("current")
	}
	
	$("content-default").addClass("current"); // main splash for content section // no hooked up

	$(".ready").click(function(){
		navLink(this)
		$(".ready-div").addClass("current");
		$(".ready-hiddenitems").slideToggle("current");		
		
	});

	$(".set").click(function(event){
		navLink(this)
		$(".set-div").addClass("current");
		$(".set-hiddenitems").slideToggle("current");		
	});

	$(".go").click(function(event){
		navLink(this)
		$(".go-div").addClass("current");
		$(".go-hiddenitems").slideToggle("current");		
	});
	


})