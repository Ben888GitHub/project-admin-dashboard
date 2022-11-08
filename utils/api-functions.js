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

export { registerUser };
