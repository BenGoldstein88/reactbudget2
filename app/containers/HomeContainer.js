var React = require('react');
var Notifications = require('react-notify-toast');

var HomeContainer = React.createClass({


	handleFailedSubmission: function() {
		console.log("Attempting to toast...")
		console.log("Please??")
		Notifications.notify.show("Please do not leave any fields empty!", 'warning', 5000)

	},
	render: function() {
		return (
			<Home />
		);
	}

});

module.exports = HomeContainer;