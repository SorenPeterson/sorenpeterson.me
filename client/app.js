Meteor.subscribe('projects');

Meteor.startup(function() {
	Session.set('background', 'url("/congruent_pentagon.png")');
});

Template.Portfolio.helpers({
	projects: function() {
		return Projects.find();
	}
});

