const pizzaList = [
	{ name: "마르게리따", price: 8500 },
	{ name: "고르곤졸라", price: 7500 },
	{ name: "디아볼로", price: 8500 },
	{ name: "메가피자", price: 10500 },
];

const getPizza = new Promise((res, rej) => {
	setTimeout(() => {
		// res(pizzaList);
		rej("피자 메뉴 없음");
	}, 3000);
});

getPizza.then((res) => console.log(res)).catch((rej) => console.log(rej));
