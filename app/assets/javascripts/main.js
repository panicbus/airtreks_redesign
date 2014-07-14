$(document).ready(function(){

	var navLink = function(link){
		$(".view-options").removeClass("current");
		$(link).addClass("current")
	}
	
	$("content-default").addClass("current"); // main splash for content section


	$(".ready").click(function(){
		navLink(this)
		$(".ready-div").addClass("current");
		
	});

	$(".set").click(function(event){
		navLink(this)
		$(".set-div").addClass("current");
	});

	$(".go").click(function(event){
		navLink(this)
		$(".go-div").addClass("current");
	});

	

	// if (".rtw101-content").hasClass('current'){

	// }

})