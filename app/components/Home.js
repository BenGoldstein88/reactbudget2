var React = require('react');
var BudgetContainer = require('../containers/BudgetContainer');
var Notifications = require('react-notify-toast');


var Home = React.createClass({

	handleFailedSubmission: function() {
		console.log("Attempting to toast...")
		console.log("Please??")
		Notifications.notify.show("Please do not leave any fields empty!", 'warning', 5000)

	},
	render: function() {
		return (
			<div>

				<BudgetContainer 
					onFailedSubmission={this.handleFailedSubmission}
				/> 
			</div>
		);
	}

});

module.exports = Home;