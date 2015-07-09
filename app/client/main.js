Meteor.subscribe('projects');
Meteor.subscribe('videos');
Meteor.subscribe('posts');

var Helpers = {
	isAdmin: function() {
		return (Session.get('isAdmin') && Meteor.userId());
	}
}

Template.Portfolio.helpers({
	projects: function() {
		return Projects.find();
	}
});

Template.Header.events({
	'click h1': function() {
		var state;
		Tracker.nonreactive(function() {
			state = Session.get('showLogin');
		});
		Session.set('showLogin', !state);
	}
});

Template.Layout.helpers({
	showLogin: function() {
		return Session.get('showLogin');
	}
});

Template.Videos.helpers(Helpers);

Template.VideoCategory.helpers({
	videos: function(category) {
		return Videos.find({category: category});
	}
});

Template.Blog.helpers({
	posts: function() {
		return Posts.find({}, {sort: {_id: 1}, limit: 5});
	}
});
Template.Blog.helpers(Helpers);

Template.Blog.events({
	'submit form.update': function(e, tmpl) {
		e.preventDefault();
		Posts.update(this._id, {$set: {content: $(e.target).find('textarea').val()}});
	}
});	

