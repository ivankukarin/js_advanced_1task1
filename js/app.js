'use strict';

let arrayPrices = [200, 550, 4000, 23, 58, 5000, 485, 711];
let minGamePoints = 10000;
let strings = ["Ваш баланс"];

const formatGamePoints = (strings, array) =>
	
	{

	const yourBalance = strings[0];

	let sum = 0;
	for (let value of array) 
		{sum += value};
	console.log(sum);

	let bonus;
	if (sum > minGamePoints) {
	bonus = (Math.round(sum * 5 /100)) }
	else console.log("У вас недостаточно бонусных баллов");
	
	let num2str;
    let n = Math.abs(bonus) % 100; 
    let n1 = n % 10;
    let textForms = ["балл", "балла", "баллов"];
    if (n > 10 && n < 20) { num2str = textForms[2]; };
    if (n1 > 1 && n1 < 5) { num2str = textForms[1]; };
    if (n1 == 1) { num2str = textForms[0]; }

    
    // console.log(yourBalance);
    // console.log(bonus);
    // console.log(n);
    // console.log(n1);
    // console.log(num2str);

    return `${yourBalance}${bonus} ${num2str}`;
}

const output = formatGamePoints`Ваш баланс: ${arrayPrices}`;
console.log(output);



let arrayPoints = [74989, 74990, 84990, 62000, 58480, 61800];


