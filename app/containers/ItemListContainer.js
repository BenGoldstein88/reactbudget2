var React = require('react');
var ItemList = require('../components/ItemList')
var itemHelpers = require('../utils/itemHelpers')

var ItemListContainer = React.createClass({


	getInitialState: function() {
		return {
			items: [],
			budgeter: {} 
		};
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
	componentWillMount: function() {
		this.handleItemsChange();
	},
	// componentDidMount: function() {
	// 	this.handleItemsChange();

	// },

	render: function() {
		return (
			<ItemList 
				onItemsChange={this.handleItemsChange}
				items={this.state.items}
				budgeter={this.state.budgeter}
			/>
		);
	}

});

module.exports = ItemListContainer;