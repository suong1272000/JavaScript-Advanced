window.addEventListener("scroll", () => {
	// 바디의 높이 찾기
	const scrollY = window.scrollY;
	// 내부 높이 찾기
	const innerHeight = window.innerHeight;
	// 브라우저 진짜 높이
	const totalHeight = document.documentElement.scrollHeight;
	// 스크롤된 화면 위치가 브라우저 높이보다 큰가?
	console.log(scrollY + innerHeight >= totalHeight ? "나락" : "중간");
	if (scrollY + innerHeight >= totalHeight) alert("끝!");
});
