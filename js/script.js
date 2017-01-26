	var menu = $(".js-navigation");
	var menuTouchBtn = $(".js-burger");

	menuTouchBtn.click(function(e) {
		e.preventDefault();
		menu.fadeToggle();
	});

	// На ширине больше 760пх меню открыто всегда
	$(window).resize(function() {
		var wid = $(window).width();

		if (wid > 760 && menu.is(":hidden")) {
			menu.removeAttr("style");
		}

	});




