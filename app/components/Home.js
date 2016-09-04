var React = require('react');
var BudgetContainer = require('../containers/BudgetContainer')

var Home = React.createClass({

	render: function() {
		return (
			<div>
				<BudgetContainer /> 
			</div>
		);
	}

});

module.exports = Home;