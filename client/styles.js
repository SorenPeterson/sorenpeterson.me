var currentStyleSheet = jss.createStyleSheet({});

jss.style = function(style) {
	Tracker.autorun(function() {
		currentStyleSheet.detach();
		currentStyleSheet = jss.createStyleSheet(style(), {named:false});
		currentStyleSheet.attach();
	});
};

Template.Home.onRendered(function() {
	jss.style(function() {
		return {
		   	body: {
				'background-image': Session.get('background')
			}
		}
	});
});

