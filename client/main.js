Meteor.subscribe('projects');

Meteor.startup(function() {
	Session.set('background', 'url("/squared_metal.png")');
});

Template.Portfolio.helpers({
	projects: function() {
		return Projects.find();
	}
});

