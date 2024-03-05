// 피자 메뉴 가져오는 서버 코드[10초]
// 버튼에 이벤트 등록하는 코드
// setTimeout(콜백함수, 시간)
// console.log("1");
// setTimeout(() => {
// 	console.log("1초후 실행");
// }, 1000);
// console.log("2");

const makeDough = (next) => {
	console.log("도우 만들기");
	next();
};
const makeTomato = (next) => {
	console.log("토마토 바르기");
	next();
};
const makeCheese = (next) => {
	console.log("치즈 뿌리기");
	next();
};
const makeHot = (next) => {
	console.log("피자 굽기");
	next();
};

makeDough(() => {
	setTimeout(() => {
		makeTomato(() => {
			setTimeout(() => {
				makeCheese(() => {
					setTimeout(() => {
						makeHot(() => {
							setTimeout(() => console.log("피자완성"), 1000);
						});
					}, 2000);
				});
			}, 2000);
		});
	}, 2000);
});
