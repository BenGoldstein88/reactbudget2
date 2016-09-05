var React = require('react');
var ItemList = require('../components/ItemList')
var itemHelpers = require('../utils/itemHelpers')

var PropTypes = React.PropTypes;

var ItemListContainer = React.createClass({

	render: function() {
		return (
			<ItemList 
				onItemsChange={this.props.onItemsChange}
				items={this.props.items}
				budgeter={this.props.budgeter}
			/>
		);
	}

});

ItemListContainer.propTypes = {

	items: PropTypes.array.isRequired,
	budgeter: PropTypes.object.isRequired,
	onItemsChange: PropTypes.func.isRequired

}


module.exports = ItemListContainer;