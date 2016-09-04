var React = require('react');
var Budget = require('../components/Budget')
var itemHelpers = require('../utils/itemHelpers')

var BudgetContainer = React.createClass({

	getInitialState: function() {
		return {
			items: [],
			budgeter: {},
			prettyTotal: '',
			prettyMaxTotal: ''
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
		this.updatePrettyTotals()
	},
	calculateTotal: function() {
		var total = 0
		for (var i = 0; i < this.state.items.length; i++) {
			if(this.state.items[i].active === true) {
				total += parseInt(this.state.items[i].price_in_pennies)
			}
		}
		return total
	},
	calculateMaxTotal: function() {
		var total = 0
		for (var i = 0; i < this.state.items.length; i++) {
				total += parseInt(this.state.items[i].price_in_pennies)
		}
		return total
	}, 
	updatePrettyTotals: function() {
		var totalPennies = this.calculateTotal()
		var totalFloat = totalPennies/100
		var totalFloatAsCurrency = totalFloat.toFixed(2)
		var pretty = '$' + totalFloatAsCurrency


		var totalMaxPennies = this.calculateMaxTotal()
		var totalMaxFloat = totalMaxPennies/100
		var totalMaxFloatAsCurrency = totalMaxFloat.toFixed(2)
		var prettyMax = '$' + totalMaxFloatAsCurrency

		this.setState({
			prettyTotal: pretty,
			prettyMaxTotal: prettyMax
		})
	},
	render: function() {
		return (
			<div>
			<Budget 
				onItemsChange={this.handleItemsChange}
				items={this.state.items}
				budgeter={this.state.budgeter}
				prettyTotal={this.state.prettyTotal}
				prettyMaxTotal={this.state.prettyMaxTotal}
			/>
			</div>
			);
	}

});



module.exports = BudgetContainer;