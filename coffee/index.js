const order = new Promise((res, rej) => {
	const user = prompt("커피입력?", "아메리카노");
	if (!!user) {
		document.querySelector(".box").innerHTML = `${user}준비중`;
		setTimeout(() => res(user), 3000);
	} else {
		document.querySelector(".box").innerHTML = "커피를 주문하지 않음";
	}
});

const done = (user) =>
	(document.querySelector(".box").innerHTML = `${user} 주문 완료`);

order.then(done);
