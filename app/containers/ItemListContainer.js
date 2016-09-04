var React = require('react');
var ItemList = require('../components/ItemList')
var itemHelpers = require('../utils/itemHelpers')
var PropTypes = React.PropTypes;

var ItemListContainer = React.createClass({


	// getInitialState: function() {
	// 	return {
	// 		items: [],
	// 		budgeter: {} 
	// 	};
	// },
	handleItemsChange: function() {

		// var that = this;

		// itemHelpers.getItems()
		// 	.then(function(apiResponse) {
		// 		console.log('apiResponse: ', apiResponse)
		// 		that.setState({
		// 			items: apiResponse.data.items,
		// 			budgeter: apiResponse.data.budgeter
		// 		})
		// 	}.bind(this))
	},

	componentWillMount: function() {
		// this.handleItemsChange();
	},
	// componentDidMount: function() {
	// 	this.handleItemsChange();

	// },

	render: function() {
		return (
			<ItemList 
				onItemsChange={this.props.onItemsChange}
				items={this.props.items}
				budgeter={this.props.budgeter}
			/>
		);
	}

});

ItemListContainer.propTypes = {

	items: PropTypes.array.isRequired,
	budgeter: PropTypes.object.isRequired,
	onItemsChange: PropTypes.func.isRequired

}


module.exports = ItemListContainer;