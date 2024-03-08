const pizza = (x) => new Promise((res) => res(`${x}피자주문`));

pizza(prompt("피자주문")).then((v) => {
	console.log(v);
});
