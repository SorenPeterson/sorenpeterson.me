Router.onBeforeAction(function() {
	this.layout('Layout');
	this.next();
})

Router.route('/', function() {
	this.render('Home');
});

Router.route('/portfolio', function() {
	this.render('Portfolio');
});

Router.route('/videos', function() {
	this.render('Videos');
});

Router.route('/videos/:category', function() {
	this.render('VideoCategory', {
		data: function() {
			return {
				category: this.params.category
			};
		}
	});
});

Router.route('/opensource', function() {
	this.render('OpenSource');
});

