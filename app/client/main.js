Template.PortfolioItem.events({
	'click .portfolio-item-container': function(evt, tmpl) {
		$(tmpl.find('.portfolio-item-expanded')).removeClass('closed').addClass('open');
	},
	'click .portfolio-item-expanded .close': function(evt, tmpl) {
		$(tmpl.find('.portfolio-item-expanded')).removeClass('open').addClass('closed');
	}
});

