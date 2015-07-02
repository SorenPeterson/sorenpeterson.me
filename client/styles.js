/*
var currentStyleSheet = jss.createStyleSheet({});

jss.style = function(style) {
	Tracker.autorun(function() {
		currentStyleSheet.detach();
		currentStyleSheet = jss.createStyleSheet(style(), {named:false});
		currentStyleSheet.attach();
	});
};

var footerSize = ReactiveVar(0);

var getFooterSize = function() {
	if(innerWidth <= 768 ) {
		return $('#social-links');
	} else {
		return 0;
	}
};

$(document).resize(function() {
	footerSize.set(getFooterSize());
});

Template.Layout.onRendered(function() {
	footerSize.set(getFooterSize());
	jss.style(function() {
		return {
			body: {
				'background-image': Session.get('background')
			},
			'.content': {
				'margin-bottom': footerSize.get()
			}
		}
	});
});
*/
