function OrderFormController($scope){

	// Define the model properties. The view will loop
	// through the services array and genreate a li
	// element for every one of its items.

	$scope.dishes = [
	{
		name: 'Lasagna',
		price: 12,
		active: true
	},
	{
		name: 'Srawberry Pie',
		price: 7.5,
		active: false
	},
	{
		name: 'Pumpkin Soup',
		price: 8,
		active: false
	},
	{
		name: 'Fresh Oyster',
		price: 20,
		active: false
	},
	{
		name: 'Fruit Salad',
		price: 6.5,
		active: false
	},
	{
		name: 'Banana Smoothie',
		price: '7.8',
		active: false
	},
	{
		name: 'Sushi Hand Roll',
		price: 11.3,
		active: false
	}
	];

	$scope.toggleActive = function(s){
		s.active = !s.active;
	};

	// Helper method for calculating the total price

	$scope.total = function(){

		var total = 0;

		// Use the angular forEach helper method to
		// loop through the services array:

		angular.forEach($scope.dishes, function(s){
			if (s.active){
				total+= s.price;
			}
		});

		return total;
	};
}
