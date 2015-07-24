Meteor.subscribe('projects');

Template.Portfolio.helpers({
	projects: function() {
		return Projects.find();
	}
});

