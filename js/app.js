let arrayPrices = [200, 550, 4000, 23, 58, 5000, 485, 711];
let minGamePoints = 10000;
let arraySum = (array) =>
	{
		let sum = 0;
		for (let value of array) 
			{sum += value};
		console.log (sum);
	};



const bonus = (array) => 
	if (arraySum(array) > 10000 ) {
		return (arraySum(array) * 5%);
	};

console.log(bonus(arrayPrices));

