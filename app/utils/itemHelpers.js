var axios = require('axios');


var apiUrl = 'http://localhost:3000/items'

var helpers = {

	createNewItem: function(itemDetails) {
		console.log('about to go axios it')

		axios({
			method: 'post',
			url: apiUrl,
			data: {
				name: itemDetails.name,
				description: itemDetails.description,
				price: itemDetails.price
			}
		});

		// var response = axios.post(apiUrl, {
			// headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			// name: itemDetails.name,
			// description: itemDetails.description,
			// price: itemDetails.price
			// data: 'Hello!'
		// })

		// console.log("response: ", response)

		// .then(function (response) {
		// 	console.log("Response: ", response)
		// }).catch(function (error) {
		// 	console.log("Error: ", error)
		// })

		
	}
}

module.exports = helpers;