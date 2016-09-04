var React = require('react');
var PropTypes = React.PropTypes;
var Item = require('../components/Item')

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
	render: function() {
		return (
			<Item 
				name={this.props.name}
				description={this.props.description}
				price={this.props.price}
				active={this.props.active}
			/>
		);
	}

});

ItemContainer.propTypes = {

	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	active: PropTypes.bool.isRequired

};

module.exports = ItemContainer;