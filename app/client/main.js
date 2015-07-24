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
	'click button.save': function(e, tmpl) {
		var _id = new Mongo.ObjectID(e.target.dataset.id);
		var content = $(e.target.parentNode).find('pre').text();
		console.log(_id);
		console.log(Posts.findOne({_id: _id}));
		Posts.update(_id, {
			$set: {
				content: content
			}
		});
	}
});	

