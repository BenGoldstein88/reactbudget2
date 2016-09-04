var React = require('react');
var PropTypes = React.PropTypes;


var BudgetHeader = React.createClass({


	render: function() {
		return (
			<div>
				
				<h1>Total: {this.props.prettyTotal}</h1>
			 </div>
			
		);
	}

});


BudgetHeader.propTypes = {
	
	prettyTotal: PropTypes.string.isRequired
}

module.exports = BudgetHeader;