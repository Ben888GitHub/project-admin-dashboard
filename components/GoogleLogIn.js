import { FcGoogle } from 'react-icons/fc';

function GoogleLogIn() {
	return (
		<button
			type="button"
			className="justify-center inline-flex w-full text-gray-900 bg-white hover:bg-gray-100 border border-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-md px-5 py-2.5 text-center  items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 maz-auto"
		>
			<FcGoogle className="w-6 h-6 mr-2 -ml-1" />
			Login with Google
		</button>
	);
}

export default GoogleLogIn;
