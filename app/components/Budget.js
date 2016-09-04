var React = require('react');
var ItemListContainer = require('../containers/ItemListContainer')
var NewItemFormContainer = require('../containers/NewItemFormContainer')


var Budget = React.createClass({

	render: function() {
		return (
			<div> 
				<ItemListContainer />
				<NewItemFormContainer />
			</div>
		);
	}

});

module.exports = Budget;