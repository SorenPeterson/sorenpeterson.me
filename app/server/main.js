Meteor.methods({
	isAdmin: function() {
		return Meteor.userId() && Meteor.user().isAdmin;
	}
});

Meteor.publish('projects', function() {
	return Projects.find();
});

Meteor.publish('videos', function() {
	return Videos.find();
});

Meteor.publish('posts', function() {
	return Posts.find();
});

