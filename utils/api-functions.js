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
	console.log(payload);
	const res = await fetch('/api/products', {
		method: 'POST',
		body: JSON.stringify(payload)
	});
	const newProduct = await res.json();
	console.log(newProduct);
	return payload;
};

const getProducts = async (payload) => {
	console.log(payload);
	const res = await fetch(`/api/products/${payload}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const allProducts = await res.json();
	return allProducts.data;
};

const deleteSingleProduct = async (payload) => {
	console.log(payload);
	const res = await fetch(`/api/product/${payload}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const deleteProduct = await res.json();
	console.log(deleteProduct);
	return payload;
};

const deleteSelectedProducts = async (payload) => {
	console.log(payload);
	const res = await fetch(`/api/delete-products`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(payload)
	});
	const deleteProducts = await res.json();
	console.log(deleteProducts);
	return payload;
};

const updateSingleProduct = async (payload) => {
	console.log(payload);
	const res = await fetch(`/api/product/${payload.sku}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(payload)
	});
	const updateProduct = await res.json();
	console.log(updateProduct);
	return payload;
};

export {
	registerUser,
	addNewProduct,
	getProducts,
	deleteSingleProduct,
	deleteSelectedProducts,
	updateSingleProduct
};
