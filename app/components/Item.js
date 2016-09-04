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
				<td>
					<form onSubmit={this.props.onDeleteItem}>
						<button
	                		className='btn btn-block btn-danger'
	                		type='submit'>
	                  		Delete
	              		</button>
	              	</form>
				</td>
			</tr>
		);
	}

});

Item.propTypes = {

	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	active: PropTypes.bool.isRequired,
	id: PropTypes.number.isRequired,
	onDeleteItem: PropTypes.func.isRequired,
	onItemsChange: PropTypes.func.isRequired
}

module.exports = Item;