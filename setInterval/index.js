const time = () => {
	const div = document.querySelector("div");
	div.innerHTML = new Date();
};

setInterval(time, 1000);
