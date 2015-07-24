Meteor.methods({
	isAdmin: function() {
		return Meteor.user().admin;
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

Posts.allow({
	update: function(userId, doc, fieldNames, modifier) {
		return Meteor.user().admin;
	}
});

