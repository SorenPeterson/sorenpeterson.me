var $$ = topScope;
$$.Projects = new Mongo.Collection('projects');
$$.Videos = new Mongo.Collection('videos');
$$.Posts = new Mongo.Collection('posts');

Posts.allow({
	update: function() {
		return true;
	}
});

