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
		itemHelpers.getItems()
			.then(function(response){
				this.handleItemsChange(response);				
			}.bind(this))
	},
	handleItemsChange: function(newData) {
		// var that = this;
		// console.log('this', this)
		// itemHelpers.getItems()
		// 	.then(function(apiResponse) {
		// 		console.log('apiResponse: ', apiResponse)
		// 		console.log('that', that)
		// 		that.setState({
		// 			items: apiResponse.data.items,
		// 			budgeter: apiResponse.data.budgeter
		// 		})
		// 	})
		// console.log('this', this)
		// console.log('newDataItems', newData.data.items)
		this.setState({
			items: newData.data.items,
			budgeter: newData.data.budgeter
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