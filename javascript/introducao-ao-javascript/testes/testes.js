// y = 0;
/* x = 1;
m = 0;
*/

/*
ax + b = 0;

f(1) = a.1 + b; */

//var preco = 2;
var desconto = 0.2;
const PRECO = 2; //constantes são com letra maiuscula
var total = PRECO - desconto;

//preco = preco - desconto; isso não pode mais

function soma(a, b) {
	//console.log(a + b);
	return a + b;
}

soma(3, 5);

function returnEvenValues(array) {
	for (let i=0; i < array.length; i++) {
		if (array[i] %2 ===0 ){
			evenNums.push(array[i]);
		}
	}
	console.log(evenNums);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array);
