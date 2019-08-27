(function($) {
	'use strict';
	// Owl Carousel

	var owlCarousel = $('.owl-carousel');
	if (owlCarousel.length < 1) {
		return true;
	}
	owlCarousel.each(function() {
		var slider = $(this);
		var sliderArrow = slider.attr('data-arrow') == 'false' ? false : true; //option: true or false
		var sliderDots = slider.attr('data-dots') == 'false' ? false : true; //option: true or false
		var sliderAutoPlay = slider.attr('data-autoplay') ? false : true; //option: number in ms
		var sliderAutoPlayTime = slider.attr('data-autoplay')
			? Number(sliderAutoPlay)
			: 4000;
		var sliderSpeed = slider.attr('data-speed')
			? slider.attr('data-speed')
			: 800; //option: number in ms (Smart speed)
		var sliderMargin = slider.attr('data-margin')
			? slider.attr('data-margin')
			: 30; //option: number in px
		var sliderLoop = slider.attr('data-loop') == 'false' ? false : true; //option: true or false
		var sliderStart = slider.attr('data-start') ? slider.attr('data-start') : 0; //option: number
		var sliderSlideBy = slider.attr('data-slideby')
			? sliderSlideBy == 'page' ? 'page' : Number(slider.attr('data-slideby'))
			: Number(1); //option: number
		var sliderHoverPause = slider.attr('data-pause') == 'false' ? false : true; //option: true or false
		var sliderMerge = slider.attr('data-merge') == 'true' ? true : false; //option: number (use in slider items DIV)
		var sliderDrag = slider.attr('data-drag') == 'false' ? false : true; //option: true or false
		var sliderRewind = slider.attr('data-rewind') == 'true' ? true : false; //option: true or false
		var sliderCenter = slider.attr('data-center') == 'true' ? true : false; //option: true or false
		var sliderVideo = slider.attr('data-video') == 'true' ? true : false; //option: true or false
		var sliderLazy = slider.attr('data-lazyload') == 'true' ? true : false; //option: true or false
		var sliderRTL = slider.attr('data-rtl'); //option: true (false by default)
		var sliderItems = slider.attr('data-items') ? slider.attr('data-items') : 4; //option: number (items in all device)
		var sliderItemsXl = slider.attr('data-items-xl')
			? slider.attr('data-items-xl')
			: Number(sliderItems); //option: number (items in 1200 to end )
		var sliderItemsLg = slider.attr('data-items-lg')
			? slider.attr('data-items-lg')
			: Number(sliderItemsXl); //option: number (items in 992 to 1199 )
		var sliderItemsMd = slider.attr('data-items-md')
			? slider.attr('data-items-md')
			: Number(sliderItemsLg); //option: number (items in 768 to 991 )
		var sliderItemsSm = slider.attr('data-items-sm')
			? slider.attr('data-items-sm')
			: Number(sliderItemsMd); //option: number (items in 576 to 767 )
		var sliderItemsXs = slider.attr('data-items-xs')
			? slider.attr('data-items-xs')
			: Number(sliderItemsSm); //option: number (items in start to 575 )
		slider.owlCarousel({
			margin: Number(sliderMargin),
			loop: sliderLoop,
			merge: sliderMerge,
			mouseDrag: sliderDrag,
			startPosition: Number(sliderStart),
			rewind: sliderRewind,
			slideBy: sliderSlideBy,
			center: sliderCenter,
			lazyLoad: sliderLazy,
			nav: sliderArrow,
			navText: [
				'<i class="ti-angle-left"></i>',
				'<i class="ti-angle-right"></i>'
			],
			autoplay: sliderAutoPlay,
			autoplayTimeout: sliderAutoPlayTime,
			autoplayHoverPause: sliderHoverPause,
			dots: sliderDots,
			smartSpeed: Number(sliderSpeed),
			video: sliderVideo,
			rtl: sliderRTL,
			responsive: {
				0: {items: Number(sliderItemsXs)},
				576: {items: Number(sliderItemsSm)},
				768: {items: Number(sliderItemsMd)},
				992: {items: Number(sliderItemsLg)},
				1200: {items: Number(sliderItemsXl)}
			}
		});
	});

	// END: Owl Carousel

	// BEGIN: 06 Swiper Slider
	var swiperSlider = function() {
		if ($('.swiper-slider-fade').length !== 0) {
			var swiper = new Swiper('.swiper-container', {
				effect: 'fade', //other supported effects: coverflow, flip, cube, slide
				pagination: null,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				autoplay: 5000,
				speed: 1000,
				spaceBetween: 0,
				loop: true,
				simulateTouch: true,
				onSlideChangeEnd: function(swiper) {
					$('.swiper-slide').each(function() {
						if ($(this).index() === swiper.activeIndex) {
							// Fadein in active slide
							$(this).find('.slider-content').fadeIn(25);
						} else {
							// Fadeout in inactive slides
							$(this).find('.slider-content').fadeOut(25);
						}
					});
				}
			});
		}
	};
	// END: Swiper Slider
})(jQuery);
