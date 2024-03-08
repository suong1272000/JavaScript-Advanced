const pizza = (x) => new Promise((res) => res(`${x}피자주문`));
const msg = (x) => console.log(x);
pizza("새우").then((v) => {
	msg(v);
});
