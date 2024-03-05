//fetch(가지고 오다)
const url = "https://fakerapi.it/api/v1/books?_quantity=1";
fetch(url)
	.then((res) => res.json())
	.then((res) => console.log(res.data));
