var React = require('react');
var Budget = require('../components/Budget')
var itemHelpers = require('../utils/itemHelpers')
var Notifications = require('react-notify-toast')
var PropTypes = React.PropTypes;

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

		function numberWithCommas(x) {
	    	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		} 

		var totalPennies = this.calculateTotal()
		var totalFloat = totalPennies/100
		var totalFloatAsCurrency = totalFloat.toFixed(2)
		var totalFloatAsCurrencyFormatted = numberWithCommas(totalFloatAsCurrency)
		var pretty = '$' + totalFloatAsCurrencyFormatted


		var totalMaxPennies = this.calculateMaxTotal()
		var totalMaxFloat = totalMaxPennies/100
		var totalMaxFloatAsCurrency = totalMaxFloat.toFixed(2)
		var totalMaxFloatAsCurrencyFormatted = numberWithCommas(totalMaxFloatAsCurrency)
		var prettyMax = '$' + totalMaxFloatAsCurrencyFormatted

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
					onFailedSubmission={this.props.onFailedSubmission}
				/>
			</div>
			);
	}

});

BudgetContainer.propTypes = {
	onFailedSubmission: PropTypes.func.isRequired
}



module.exports = BudgetContainer;