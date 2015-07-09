Router.onBeforeAction(function() {
	this.layout('Layout');
	Meteor.call('isAdmin', function(err, res) {
		Session.set('isAdmin', res);
	});
	this.next();
})

Router.route('/', function() {
	this.layout(null);
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

Router.route('/blog', function() {
	this.render('Blog');
});
