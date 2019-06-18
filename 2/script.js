$ (document) .ready(function() {
	$( "p" ).on( "click", function() {
		 if ($(this).hasClass ('maclasserouge')){
		 	$(this).removeClass('maclasserouge')
		 }else{
		$(this).addClass ('maclasserouge')
		 }

		 $(this).html("HELLO")
	});
});

