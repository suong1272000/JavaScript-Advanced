const fetchData = async (num) => {
	const addresses = await fetch(
		`https://fakerapi.it/api/v1/addresses?_quantity=${num}`
	);
	const addressesData = await addresses.json();
	const users = await fetch(
		`https://fakerapi.it/api/v1/users?_quantity=${num}&_gender=male`
	);
	const userData = await users.json();

	const streetNames = addressesData.data.map((v) => v.streetName);
	const lastNames = userData.data.map((v) => v.lastname);

	const combined = streetNames.map((v, i) => {
		return { address: v, user: lastNames[i] };
	});

	return combined;
};
fetchData(15).then((v) => console.log(v));
