var React = require('react');
var NewItemForm = require('../components/NewItemForm')
var itemHelpers = require('../utils/itemHelpers')
var PropTypes = React.PropTypes;

var NewItemFormContainer = React.createClass({


	getInitialState: function() {
		return {
			name: '',
			description: '', 
			price: 0,
			open: false
		};
	},
	handleUpdateName: function(e) {
		this.setState({
			name: e.target.value
		})

	},
	handleUpdateDescription: function(e) {
		this.setState({
			description: e.target.value
		})

	},
	handleUpdatePrice: function(e) {
		this.setState({
			price: e.target.value
		})
	},
	handleToggleForm: function(e) {
		e.preventDefault();
		console.log('open', this.state.open)
		this.setState({
			open: !this.state.open
		})
	},
	handleSubmitItem: function(e) {
		e.preventDefault();
		var name = this.state.name
		var description = this.state.description
		var price = this.state.price
		this.setState({
			name: '',
			description: '', 
			price: 0,
			open: false
		});

		var itemAsJSON = {
			name: name,
			description: description,
			price: price
		};

		var that = this;
		itemHelpers.createNewItem(itemAsJSON)
			.then(function(response) {
				console.log('response', response)
				itemHelpers.getItems()
					.then(function(response) {
						console.log("Get Response after update: ", response)
						that.props.onItemsChange(response)
					})
				// this.props.onItemsChange()
			})
		// console.log("Response: ", response)
	},



	render: function() {
		return (
			<NewItemForm 
				onUpdateName={this.handleUpdateName}
				name={this.state.name}
				onUpdateDescription={this.handleUpdateDescription}
				description={this.state.description}
				onUpdatePrice={this.handleUpdatePrice}
				price={this.state.price}
				onSubmitItem={this.handleSubmitItem}
				onItemsChange={this.props.onItemsChange}
				open={this.state.open}
				onToggleForm={this.handleToggleForm}
			/>
		);
	}

});

NewItemFormContainer.propTypes = {
	onItemsChange: PropTypes.func.isRequired
}

module.exports = NewItemFormContainer;