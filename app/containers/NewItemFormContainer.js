var React = require('react');
var NewItemForm = require('../components/NewItemForm')
var itemHelpers = require('../utils/itemHelpers')

var NewItemFormContainer = React.createClass({


	getInitialState: function() {
		return {
			name: '',
			description: '', 
			price: 0
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
	handleSubmitItem: function(e) {
		e.preventDefault();
		var name = this.state.name
		var description = this.state.description
		var price = this.state.price
		this.setState({
			name: '',
			description: '', 
			price: 0
		});

		var itemAsJSON = {
			name: name,
			description: description,
			price: price
		};

		itemHelpers.createNewItem(itemAsJSON);

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
			/>
		);
	}

});

module.exports = NewItemFormContainer;