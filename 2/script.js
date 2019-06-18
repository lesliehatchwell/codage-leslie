$ (document) .ready(function() {
	$( "p" ).on( "click", function() {
		 if ($("p").hasClass ('maclasserouge')){
		 	$("p").removeClass('maclasserouge')
		 }else{
		$("p").addClass ('maclasserouge')
		 }
	});
});

