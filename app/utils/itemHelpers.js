var axios = require('axios');


var apiUrl = 'http://localhost:3000/items'

var helpers = {

	createNewItem: function(itemDetails) {
		console.log('about to go axios it and POST to items')

		axios({
			method: 'post',
			url: apiUrl,
			data: {
				name: itemDetails.name,
				description: itemDetails.description,
				price: itemDetails.price
			}
		})
			.then(function(response) {
				console.log("Response: ", response.config.data)
				return response.config.data

			})
		
	},

	getItems: function() {
		console.log('about to axios it and GET the item list')
		return axios.get(apiUrl)

	}	


}

module.exports = helpers;