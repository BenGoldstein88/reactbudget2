var React = require('react');
var ItemContainer = require('../containers/ItemContainer')
var PropTypes = React.PropTypes;

var ItemList = React.createClass({



	render: function() {
	var that = this
		return (
			<table>

				<tbody>
					{this.props.items.map(function(item, i) {

						return <ItemContainer
							key={i}
							id={item.id}
							name={item.name}
							description={item.description}
							price={item.price_in_pennies}
							active={item.active}
							onDeleteItem={that.props.onDeleteItem}
							onItemsChange={that.props.onItemsChange}
						/>

					})} 				

				</tbody>
			</table>
		);
	}

});


ItemList.propTypes = {

	onItemsChange: PropTypes.func.isRequired,
	items: PropTypes.array.isRequired,
	budgeter: PropTypes.object.isRequired,
	onDeleteItem: PropTypes.func.isRequired
}
module.exports = ItemList;