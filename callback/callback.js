const grindBean = (next) => {
	console.log("원두 그라인딩");
	next();
};
const takeWater = (next) => {
	console.log("물 받기");
	next();
};
const takeShot = (next) => {
	console.log("샷 받기");
	next();
};
const putShotInWater = (next) => {
	console.log("물에 원두 넣기");
	next();
};

grindBean(() => {
	takeWater(() => {
		takeShot(() => {
			putShotInWater(() => {
				console.log("커피완성!");
			});
		});
	});
});

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

const makePizza = makeDough(() => {
	makeTomato(() => {
		makeCheese(() => {
			makeHot(() => {
				console.log("피자완성!");
			});
		});
	});
});
