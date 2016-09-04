var React = require('react');
var Budget = require('../components/Budget')
var itemHelpers = require('../utils/itemHelpers')

var BudgetContainer = React.createClass({

	getInitialState: function() {
		return {
			items: [],
			budgeter: {} 
		};
	},
	componentWillMount: function() {
		this.handleItemsChange();
	},
	handleItemsChange: function() {

		var that = this;

		itemHelpers.getItems()
			.then(function(apiResponse) {
				console.log('apiResponse: ', apiResponse)
				that.setState({
					items: apiResponse.data.items,
					budgeter: apiResponse.data.budgeter
				})
			})
	},
	render: function() {
		return (
			<div>
				<Budget 
					onItemsChange={this.handleItemsChange}
					items={this.state.items}
					budgeter={this.state.budgeter}
				/>
			</div>
		);
	}

});



module.exports = BudgetContainer;