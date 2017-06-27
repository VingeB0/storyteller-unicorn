// $(window).load(function() {
// 	$(".loader_inner").fadeOut();
// 	$(".loader").delay(400).fadeOut("slow");
// });

$(document).ready(function(){
	$('.featured-slider').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		prevArrow:"<img class='a-left control-c prev slick-prev' src='../img/general/arrow_left.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='../img/general/arrow_right.png'>"
	});

	$('.clients-slider').slick({
		infinite: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		prevArrow:"<img class='a-left control-c prev slick-prev' src='../img/general/arrow_left.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='../img/general/arrow_right.png'>"
	});
});


