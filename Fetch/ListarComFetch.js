fetch('https://private-anon-966e848c3a-tradersclubapi.apiary-mock.com/api/cars?search=')
	.then(response => response.json())
	.then(response => {
		response.cars.map((cars) => {
			console.log(cars.title)
		})
	})