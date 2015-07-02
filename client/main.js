Meteor.subscribe('projects');
Meteor.subscribe('videos');
Meteor.subscribe('posts');

Meteor.startup(function() {
	Session.set('background', 'url("/squared_metal.png")');
});

var Helpers = {
	isAdmin: function() {
		var result = ReactiveVar();
		Meteor.call('isAdmin', function(err, res) {
			result.set(res);
		})
		return result.get();
	}
}

Template.Portfolio.helpers({
	projects: function() {
		return Projects.find();
	}
});

Template.Layout.events({
	'click marquee': function() {
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

Template.Blog.events({
	'submit form.update': function(e, tmpl) {
		e.preventDefault();
		Posts.update(this._id, {$set: {content: $(e.target).find('textarea').val()}});
	}
});	


















