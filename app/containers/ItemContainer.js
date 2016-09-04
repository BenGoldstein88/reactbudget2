var React = require('react');
var PropTypes = React.PropTypes;
var Item = require('../components/Item')
var itemHelpers = require('../utils/itemHelpers')

var ItemContainer = React.createClass({


	// getInitialState: function() {
	// 	return {
	// 		name: '',
	// 		description: '',
	// 		price: 0,
	// 		active: false 
	// 	};
	// },

	componentWillMount: function() {
		
	},
	componentWillReceiveProps: function(newProps) {
		// console.log("newProps", newProps)
		// this.setState({
		// 	name: newProps.name,
		// 	description: newProps.description,
		// 	price: newProps.price,
		// 	active: newProps.active
		// })

	},
	handleDeleteItem: function(e) {
		e.preventDefault();
		var that = this
		itemHelpers.deleteItem(that.props.id)
			.then(function(response) {
				itemHelpers.getItems()
					.then(function(getResponse) {
						console.log("getResponse", getResponse)
						that.props.onItemsChange(getResponse)	
						
					})
			})
	},
	render: function() {
		return (
			<Item 
				name={this.props.name}
				description={this.props.description}
				price={this.props.price}
				active={this.props.active}
				id={this.props.id}
				onDeleteItem={this.handleDeleteItem}
				onItemsChange={this.props.onItemsChange}
			/>
		);
	}

});

ItemContainer.propTypes = {

	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	active: PropTypes.bool.isRequired,
	id: PropTypes.number.isRequired,
	onItemsChange: PropTypes.func.isRequired

};

module.exports = ItemContainer;