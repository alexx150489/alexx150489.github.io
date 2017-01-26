	// === slcik.js ===
	// https://github.com/kenwheeler/slick


	$('#js-potfolio-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			}
		]
	});

