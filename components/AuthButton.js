import { useSelector, useDispatch } from 'react-redux';
import { createNewUserAsync } from '../redux/features/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const authFailure = (message) => {
	toast(message, {
		style: {
			padding: '10px',
			color: '#FFFFFF',
			background: '#B91C1C'
		}
	});
};

const signUpSuccess = (message) => {
	toast(message, {
		style: {
			padding: '16px',
			color: '#FFFFFF',
			background: '#15803d'
		}
	});
};

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
			console.log(userInfo);
			await signUpSuccess(res.payload.message);
			await signIn('credentials', {
				...userInfo,
				redirect: false
			});
			router.push('/products');
			setIsLoading(false);
		} else {
			await authFailure(res.payload.message);
			setIsLoading(false);
		}
	};

	const handleLogIn = async (e) => {
		e.preventDefault();
		console.log(userInfo);
		setIsLoading(true);

		const res = await signIn('credentials', {
			...userInfo,
			redirect: false
		});
		if (res?.error) {
			await authFailure(res.error);
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
					{isLoading ? 'Loading...' : 'Sign up'}
				</button>
			) : (
				<button
					disabled={isLoading}
					onClick={handleLogIn}
					className="w-full text-white bg-blue-600  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
				>
					{isLoading ? 'Loading...' : 'Sign in'}
				</button>
			)}
			<ToastContainer
				position="top-center"
				autoClose={1500}
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover={false}
				theme="colored"
			/>
		</>
	);
}

export default AuthButton;
