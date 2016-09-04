var React = require('react');
var Budget = require('../components/Budget')


var BudgetContainer = React.createClass({

	render: function() {
		return (
			<div>
				<Budget />
			</div>
		);
	}

});

module.exports = BudgetContainer;