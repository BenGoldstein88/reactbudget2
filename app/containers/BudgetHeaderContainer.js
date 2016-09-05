var React = require('react');
var BudgetHeader = require('../components/BudgetHeader')
var PropTypes = React.PropTypes

var BudgetHeaderContainer = React.createClass({


	render: function() {
		return (
			<BudgetHeader 
				prettyTotal={this.props.prettyTotal}
				prettyMaxTotal={this.props.prettyMaxTotal}
			/>
		);
	}

});

BudgetHeaderContainer.propTypes = {
	items: PropTypes.array.isRequired,
	budgeter: PropTypes.object.isRequired,
	prettyTotal: PropTypes.string.isRequired,
	prettyMaxTotal: PropTypes.string.isRequired

}


module.exports = BudgetHeaderContainer;