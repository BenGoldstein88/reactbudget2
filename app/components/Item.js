var React = require('react');
var PropTypes = React.PropTypes;

var Item = React.createClass({

	render: function() {
		if(this.props.active == true) {
			var button = <button
	                		className='btn btn-block btn-success'
	                		type='submit'>
	                  		Deactivate
	              		</button>
	        var active = 'success'
		} else {
			var button = <button
	                		className='btn btn-block btn-warning'
	                		type='submit'>
	                  		Activate
	              		</button>
	        var active = 'danger'      		
		} 

		return (
			<tr className={active}>
				<td>{this.props.name}</td>
				<td>{this.props.description}</td>
				<td>{this.props.price}</td>
				<td>
					<form onSubmit={this.props.onUpdateItem}>
						{button}
	              	</form>
				</td>
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
	onItemsChange: PropTypes.func.isRequired,
	onUpdateItem: PropTypes.func.isRequired
}

module.exports = Item;