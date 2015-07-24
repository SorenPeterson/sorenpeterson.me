Router.onBeforeAction(function() {
	this.layout('Layout');
	this.next();
})

Router.route('/', function() {
	this.layout(null);
	this.render('Home');
});

Router.route('/portfolio', function() {
	this.render('Portfolio');
});

Router.route('/opensource', function() {
	this.render('OpenSource');
});

