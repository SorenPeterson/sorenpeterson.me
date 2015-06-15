Router.map(function() {
	this.onBeforeAction(function() {
		this.layout('Layout');
		this.next();
	})

	this.route('/', function() {
		this.render('Home');
	});

	this.route('/portfolio', function() {
		this.render('Portfolio');
	});
});
