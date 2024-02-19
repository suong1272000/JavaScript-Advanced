// 🐣->🐥->🐓->🍗->🥗 console.log(egg) => 🥗
const egg = { state: "🥚" };

const newbornChick = (x, next) => {
	x.state = "🐣";
	console.log("부화 완료");
	next();
};
const growingChick = (x, next) => {
	x.state = "🐥";
	console.log("병아리 성장");
	next();
};
const matureChicken = (x, next) => {
	x.state = "🐓";
	console.log("닭 성장");
	next();
};
const chickenMeat = (x, next) => {
	x.state = "🍗";
	console.log("닭고기");
	next();
};
const chickenSalad = (x, next) => {
	x.state = "🥗";
	console.log("샐러드 완성");
	next();
};

newbornChick(egg, () => {
	growingChick(egg, () => {
		matureChicken(egg, () => {
			chickenMeat(egg, () => {
				chickenSalad(egg, () => {
					console.log(egg.state);
				});
			});
		});
	});
});

console.log(egg);
