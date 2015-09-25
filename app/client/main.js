Template.PortfolioItem.events({
	'click .portfolio-item-container': function(evt, tmpl) {
		$(tmpl.find('.portfolio-item-expanded')).removeClass('closed').addClass('open');
	},
	'click .portfolio-item-expanded .close': function(evt, tmpl) {
		$(tmpl.find('.portfolio-item-expanded')).removeClass('open').addClass('closed');
	}
});

Template.Portfolio.onRendered(function() {
	$('.screenshot-list-container').height(
		$('.portfolio-item-expanded').height() - 100
	);
	$(window).resize(function() {
		$('.screenshot-list-container').height(
			$('.portfolio-item-expanded').height() - 100
		);
	});
});

