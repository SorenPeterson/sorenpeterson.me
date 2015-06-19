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

Router.route('/opensource', function() {
	this.render('OpenSource');
});

