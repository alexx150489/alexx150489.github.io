$(document).ready(function(){

// == PORTFOLIO FILER ==

$(".portfolio__filters span:not(.filters-title)").click(function() {
		var $this = $(this);
		$(".portfolio__filters span").removeClass("active-filter");
		$this.addClass("active-filter");
		
		var filter = $this.attr("data-filter");
		$(".potfolio__slider .all").hide();
		$(".potfolio__slider ." + filter).stop( true, true ).fadeIn(700);
	})

});