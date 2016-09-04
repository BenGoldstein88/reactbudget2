var axios = require('axios');


var apiUrl = 'http://localhost:3000/items/'

var helpers = {

	createNewItem: function(itemDetails) {
		console.log('about to go axios it and POST to items')

		return axios({
			method: 'post',
			url: apiUrl,
			data: {
				name: itemDetails.name,
				description: itemDetails.description,
				price: itemDetails.price
			}
		})
			// .then(function(response) {
			// 	console.log("Response: ", response.config.data)
			// 	return response.config.data

			// })
		
	},

	deleteItem: function(id) {
		console.log('about to axios and DELETE an item number ' + id)
		return axios({
			method: 'delete',
			url: apiUrl + id

		})
	},

	updateItem: function(id) {
		console.log('about to axios and UPDATE an item status ', + id)
		return axios({
			method: 'put',
			url: apiUrl + id
		})
	},

	getItems: function() {
		console.log('about to axios it and GET the item list')
		return axios.get(apiUrl)

	}	


}

module.exports = helpers;