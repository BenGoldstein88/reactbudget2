var React = require('react');
var PropTypes = React.PropTypes;

var NewItemForm = React.createClass({

	render: function() {
		return (
			<div> 
				<h1> New Budget Item </h1>
				<div>
					<form onSubmit={this.props.onSubmitItem}>
						<input
							placeholder='Name'
							type='text'
							onChange={this.props.onUpdateName}
							value={this.props.name}
						/>
						<input
							placeholder='Description'
							type='text'
							onChange={this.props.onUpdateDescription}
							value={this.props.description}
						/>
						<input
							type='number'
							onChange={this.props.onUpdatePrice}
							value={this.props.price}
						/>
						<button
	                		className='btn btn-block btn-success'
	                		type='submit'>
	                  		Continue
	              		</button>
					</form>
				</div>
			</div>
		);
	}

});

NewItemForm.propTypes = {
	// onSubmitItem
	onUpdateName: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	onUpdateDescription: PropTypes.func.isRequired,
	description: PropTypes.string.isRequired,
	onUpdatePrice: PropTypes.func.isRequired,
	price: PropTypes.number.isRequired,

	onSubmitItem: PropTypes.func.isRequired,
	onItemsChange: PropTypes.func.isRequired
	// name
	// description
	// cost_in_pennies
	// active?

}

module.exports = NewItemForm;