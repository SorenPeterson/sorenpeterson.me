Meteor.publish('projects', function() {
	return Projects.find();
});

Meteor.publish('videos', function() {
	return Videos.find();
});

Meteor.publish('admins', function() {
	return Admins.find();
});

