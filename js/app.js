let arrayPrices = [200, 550, 4000, 23, 58, 5000, 485, 711];
let minGamePoints = 10000;
let arraySum = (array) =>
	{
		let sum = 0;
		for (let value of array) 
			{sum += value};
		console.log (sum);
	};



const bonus = (array) => {
	if (arraySum(array) > 10000 ) {
		arraySum(array) * 0.05;
	};
};

console.log(bonus(arrayPrices));

// это для теста второй задачи
// let a = prompt ('Сколько баллов');

let num2str = function(x) {  
        let n = Math.abs(x) % 100; 
        let n1 = n % 10;
        let textForms = ["балл", "балла", "баллов"];
        if (n > 10 && n < 20) { return textForms[2]; }
        if (n1 > 1 && n1 < 5) { return textForms[1]; }
        if (n1 == 1) { return textForms[0]; }
        return textForms[2];
    }


console.log (bonus(arrayPrices) + num2str(bonus(arrayPrices)));

