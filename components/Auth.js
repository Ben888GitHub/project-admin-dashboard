import Link from 'next/link';
import AuthLabel from './AuthLabel';
import AuthButton from './AuthButton';
import GoogleLogIn from './GoogleLogIn';

function Auth({ register }) {
	return (
		<div className="md:flex lg:flex   items-center justify-center  py-8 mx-auto mt-10 md:mt-20 lg:mt-20 lg:py-0">
			<div className="w-full bg-white rounded-lg shadow border md:mt-0  sm:max-w-md dark:bg-[#2D3748] dark:border-gray-700  border-gray-200">
				<div className="pz-6 space-y-4 md:space-y-6 p-6  md:p-8 lg:p-8 ">
					<h1 className="mb-8 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white ">
						{register ? 'Sign up' : 'Sign in to your account'}
					</h1>
					<form className="space-y-7 lg:space-y-8 md:space-y-8 " action="#">
						{register ? <AuthLabel username="username" /> : <AuthLabel />}
						<AuthButton register={register} />
						<p className="text-md font-light text-gray-500 dark:text-gray-400">
							{register
								? 'Already have an account? '
								: 'Don’t have an account yet? '}
							<Link
								href={register ? '/auth/login' : '/auth/register'}
								className="font-medium text-primary-600 hover:underline dark:text-primary-500"
							>
								{register ? 'Sign in' : 'Sign up'}
							</Link>
						</p>

						<div className="inline-flex justify-center items-center w-full">
							<hr className=" w-full h-px border-0  bg-gray-200  dark:bg-gray-500" />
							<span className="dark:bg-[#2D3748] bg-white absolute left-1/2 px-3 font-medium  -translate-x-1/2 ">
								or
							</span>
						</div>
						<GoogleLogIn />
					</form>
				</div>
			</div>
		</div>
	);
}

export default Auth;
