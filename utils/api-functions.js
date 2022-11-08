const registerUser = async (payload) => {
	console.log(payload);
	const res = await fetch(`/api/create-user`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(payload)
	});
	const newUser = await res.json();
	console.log(newUser);
	return newUser;
};

const addNewProduct = async (payload) => {
	const res = await fetch('/api/products', {
		method: 'POST',
		body: JSON.stringify(payload)
	});
	const newProduct = await res.json();
	console.log(newProduct);
	return payload;
};

export { registerUser, addNewProduct };
