import Link from 'next/link';

function AuthButton({ register }) {
	return (
		<Link href="/products">
			<button
				// type="submit"
				className="w-full text-white bg-blue-600  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
			>
				{register ? 'Sign up' : 'Sign in'}
			</button>
		</Link>
	);
}

export default AuthButton;
