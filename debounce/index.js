const value = document.querySelector("input");
window.addEventListener(
	"input",
	_.debounce(() => {
		alert("입력됨");
	}, 1000)
);
