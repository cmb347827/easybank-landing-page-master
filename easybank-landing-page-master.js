'use strict'; 

$(window).resize(function(){
	location.reload();
});


$(window).on('load',function(){
    
	$("#navbarCollapse").on("show.bs.collapse", function(){
        //menu is collapsed, show close icon.
		$('#open').toggleClass('hidden');
		$('#close').toggleClass('show').attr('aria-hidden',"false");
		$('.toggle').attr('aria-expanded',"true");
		$('.outer').addClass('overlay');
		
    });
	$("#navbarCollapse").on("hide.bs.collapse", function(){
        $('#close').toggleClass('show').attr('aria-hidden',"true");
		$('#open').toggleClass('hidden');
		$('.toggle').attr('aria-expanded',"false");
		$('.outer').removeClass('overlay');
    });
    
	
});
