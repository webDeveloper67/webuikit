(function($) {
	'use strict';

	// Dropdown Menu
	$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
		if (!$(this).next().hasClass('show')) {
			$(this)
				.parents('.dropdown-menu')
				.first()
				.find('.show')
				.removeClass('show');
		}
		var $subMenu = $(this).next('.dropdown-menu');
		$subMenu.toggleClass('show');

		$(this)
			.parents('li.nav-item.dropdown.show')
			.on('hidden.bs.dropdown', function(e) {
				$('.dropdown-submenu .show').removeClass('show');
			});

		return false;
	});
})(jQuery);

//
// Sticky Navbar
//

var NavbarSticky = (function() {
	// Variables

	var $nav = $('.navbar-sticky');

	// Methods

	function init($this) {
		var scrollTop = $(window).scrollTop(); // our current vertical position from the top

		// if we've scrolled more than the navigation, change its position to fixed to stick to top,
		// otherwise change it back to relative
		if (scrollTop > navOffsetTop + 200) {
			$this.addClass('navbar-sticky-on');
		} else {
			$this.removeClass('navbar-sticky-on');
		}
	}

	// Events

	if ($nav.length) {
		var navOffsetTop = $nav.offset().top;

		// Init sticky navbar
		init($nav);

		// re-calculate stickyness on scroll
		$(window).on({
			scroll: function() {
				init($nav);
			}
		});
	}
})();

// BEGIN: 05 Owl Carousel
var owlCarousel = (function() {
	var $carousel = $('.owl-carousel');
	if ($carousel.length < 1) {
		return true;
	}
	$carousel.each(function() {
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
})();
