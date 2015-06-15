var currentStyleSheet = jss.createStyleSheet({});

jss.style = function(style, options) {
	currentStyleSheet.detach();
	currentStyleSheet = jss.createStyleSheet(style, options);
	currentStyleSheet.attach();
};

Template.Home.onRendered(function() {
	currentStyleSheet = jss.style({
		body: {
		}
	}, {
		named: false
	});
});

