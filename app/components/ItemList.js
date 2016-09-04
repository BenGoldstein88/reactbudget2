var React = require('react');
var ItemContainer = require('../containers/ItemContainer')
var PropTypes = React.PropTypes;

var ItemList = React.createClass({



	render: function() {
		return (
			<table>

				<tbody>
					{this.props.items.map(function(item, i) {

						return <ItemContainer
							key={i}
							name={item.name}
							description={item.description}
							price={item.price_in_pennies}
							active={item.active}
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
	budgeter: PropTypes.object.isRequired
}
module.exports = ItemList;