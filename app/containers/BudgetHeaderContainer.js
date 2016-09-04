var React = require('react');
var BudgetHeader = require('../components/BudgetHeader')
var PropTypes = React.PropTypes

var BudgetHeaderContainer = React.createClass({


	// getInitialState: function() {
	// 	return {
	// 		prettyTotal: ''
	// 	};
	// },


	render: function() {
		return (
			<BudgetHeader 
				prettyTotal={this.props.prettyTotal}
			/>
		);
	}

});

BudgetHeaderContainer.propTypes = {
	items: PropTypes.array.isRequired,
	budgeter: PropTypes.object.isRequired,
	prettyTotal: PropTypes.string.isRequired

}


module.exports = BudgetHeaderContainer;