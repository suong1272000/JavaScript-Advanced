//🥚🐣🐥🐓🍗

//hatch grow roostar chicken makeChicken()
const delay = () => new Promise((res) => setTimeout(() => res(), 1000));

const getEgg = async () => {
	console.log(`계란 얻는중`);
	await delay();
	return "🥚";
};
const getHatch = async (egg) => {
	console.log(`${egg} 부화중`);
	await delay();
	return "🐣";
};
const getGrow = async (egg) => {
	console.log(`${egg} 성장중`);
	await delay();
	return "🐥";
};
const getRoostar = async (egg) => {
	console.log(`${egg} 성장`);
	await delay();
	return "🐓";
};
const getChicken = async (egg) => {
	console.log(`${egg} 도축`);
	await delay();
	return "🍗";
};
const makeChicken = async () => {
	const egg = await getEgg();
	const hatch = await getHatch(egg);
	const grow = await getGrow(hatch);
	const roostar = await getRoostar(grow);
	const chicken = await getChicken(roostar);
	await console.log(chicken);
};
makeChicken();
