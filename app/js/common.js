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
<<<<<<< HEAD
		prevArrow:"<img class='a-left control-c prev slick-prev' src='img/general/arrow_left.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='img/general/arrow_right.png'>"
=======
		prevArrow:"<img class='a-left control-c prev slick-prev' src='../img/general/arrow_left.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='../img/general/arrow_right.png'>"
>>>>>>> 0338e1c4981288644a519d81978515a767cea59a
	});

	$('.clients-slider').slick({
		infinite: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
<<<<<<< HEAD
		prevArrow:"<img class='a-left control-c prev slick-prev' src='img/general/arrow_left.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='img/general/arrow_right.png'>"
	});

	$('.portfolio-filter li:not(.active)').on('click', function() {
        var slider = $('.js-portfolio-slider');
        var current = $(this).attr('data-filter');

        if (slider.hasClass('slick-initialized')) {
            slider.slick('unslick');
        }
        slider.empty();
        if (current !== 'all') {
            $('.portfolio-slider [data-filter="' + current + '"]').each(function() {
                $(this).clone().appendTo(slider);
            });
        } else {
            slider.html($('.portfolio-slider').html());
        }
        slider.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            dots: true,

            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }],
        });
        $(this).addClass('active').siblings().removeClass('active');
    }).filter('[data-filter="all"]').click();

=======
		prevArrow:"<img class='a-left control-c prev slick-prev' src='../img/general/arrow_left.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='../img/general/arrow_right.png'>"
	});
>>>>>>> 0338e1c4981288644a519d81978515a767cea59a
});


