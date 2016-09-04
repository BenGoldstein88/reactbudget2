var React = require('react');
var ItemListContainer = require('../containers/ItemListContainer')
var NewItemFormContainer = require('../containers/NewItemFormContainer')
var BudgetHeaderContainer = require('../containers/BudgetHeaderContainer')
var PropTypes = React.PropTypes;


var Budget = React.createClass({


	render: function() {
		return (
			<div>
				<BudgetHeaderContainer
					prettyTotal={this.props.prettyTotal} 
					items={this.props.items}
					budgeter={this.props.budgeter}
				/> 
				<ItemListContainer 
					items={this.props.items}
					budgeter={this.props.budgeter}
					onItemsChange={this.props.onItemsChange}
				/>
				<NewItemFormContainer 
					onItemsChange={this.props.onItemsChange}
				/>
			</div>
		);
	}

});

Budget.propTypes = {
	onItemsChange: PropTypes.func.isRequired,
	items: PropTypes.array.isRequired,
	budgeter: PropTypes.object.isRequired,
	prettyTotal: PropTypes.string.isRequired
}

module.exports = Budget;