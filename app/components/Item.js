var React = require('react');
var PropTypes = React.PropTypes;

var Item = React.createClass({

	render: function() {
		return (
			<tr>
				<td>{this.props.name}</td>
				<td>{this.props.description}</td>
				<td>{this.props.price}</td>
				<td>{this.props.active}</td>
			</tr>
		);
	}

});

Item.propTypes = {

	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	active: PropTypes.bool.isRequired
}

module.exports = Item;