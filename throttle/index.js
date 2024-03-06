document.body.style.height = "300vh";

window.addEventListener(
	"scroll",
	_.throttle(() => {
		const scrollY = window.scrollY;
		const innerHeight = window.innerHeight;
		const totalHeight = document.documentElement.scrollHeight;
		if (scrollY + innerHeight >= totalHeight) console.log("끝");
		const height = document.body.style.height;
		const numHeight = Number(height.split("vh")[0]) + 100;
		document.body.style.height = numHeight + "vh";
	}, 5000)
);
