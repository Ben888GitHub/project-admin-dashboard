import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { createNewUserAsync, setUserInfo } from '../redux/features/authSlice';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const notify = (message) =>
	toast(message, {
		style: {
			padding: '16px',
			color: '#FFFFFF',
			background: '#B91C1C'
		}
	});

function AuthButton({ register }) {
	const dispatch = useDispatch();
	const router = useRouter();
	const userInfo = useSelector((state) => state.auth.userInfo);

	const [isLoading, setIsLoading] = useState(false);

	const handleSignUp = async (e) => {
		e.preventDefault();
		console.log(userInfo);
		setIsLoading(true);
		const res = await dispatch(createNewUserAsync(userInfo));
		console.log(res);
		if (res.payload.message === 'Registered successfully') {
			alert(`Registered successfully`);
			setIsLoading(false);
		} else {
			await notify(res.payload.message);
			setIsLoading(false);
		}
		// await dispatch(setUserInfo({ username: '', email: '', password: '' }));
	};

	const handleLogIn = async (e) => {
		e.preventDefault();
		console.log(userInfo);
		setIsLoading(true);

		// todo, destructure this please
		const res = await signIn('credentials', {
			id: userInfo.id,
			username: userInfo.username,
			email: userInfo.email,
			password: userInfo.password,
			redirect: false
		});
		if (res?.error) {
			await notify(res.error);
			setIsLoading(false);
		} else if (res.status === 200) {
			router.push('/products');
			setIsLoading(false);
		}
	};

	return (
		<>
			{register ? (
				<button
					disabled={isLoading}
					onClick={handleSignUp}
					className="w-full text-white bg-blue-600  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
				>
					Sign up
				</button>
			) : (
				<button
					disabled={isLoading}
					onClick={handleLogIn}
					className="w-full text-white bg-blue-600  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
				>
					Sign in
				</button>
			)}
			<Toaster
				toastOptions={{
					duration: 2000
				}}
			/>
		</>
	);
}

export default AuthButton;
