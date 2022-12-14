import clientPromise from '../../lib/mongodb';
import bcrypt from 'bcrypt';
import validator from 'email-validator';

export default async function handler(req, res) {
	const client = await clientPromise;
	const db = client.db('test');
	const users = db.collection('users');

	const { body } = req;

	console.log(body);

	const validateEmail = validator.validate(body.email);

	// query the registered user by email
	const registeredUser = await users.findOne({ email: body.email });

	console.log(body.password.length);

	if (registeredUser) {
		res.status(200).json({ message: 'User already registered' });
		return;
	}
	if (body.password === '' || body.email === '' || body.username === '') {
		res
			.status(200)
			.json({ message: 'Password / Email / Username cannot be empty' });
		return;
	}
	if (validateEmail === false) {
		res
			.status(200)
			.json({ message: 'Please enter an email in the right format' });
		return;
	}
	if (body.password.length < 6) {
		res.status(200).json({ message: 'Password must be at least 6 characters' });
		return;
	}

	// generate salt to hash password
	const salt = await bcrypt.genSalt(10);
	// now we set user password to hashed password
	const hashpass = await bcrypt.hash(body.password, salt);

	const bodyObject = {
		email: body.email,
		password: hashpass,
		username: body.username
	};
	console.log(bodyObject);
	const newUser = await users.insertOne(bodyObject);
	res.json({
		status: 200,
		message: 'Registered successfully',
		newUser: newUser
	});
}
