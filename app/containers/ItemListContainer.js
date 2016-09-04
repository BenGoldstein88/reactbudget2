var React = require('react');
var ItemList = require('../components/ItemList')

var ItemListContainer = React.createClass({

	render: function() {
		return (
			<ItemList />
		);
	}

});

module.exports = ItemListContainer;