import React from 'react';
import Link from 'next/link';
import GoogleLogIn from './GoogleLogIn';
import AuthLabel from './AuthLabel';

function Auth({ login, register }) {
	return (
		<div className="md:flex lg:flex   items-center justify-center  py-8 mx-auto mt-10 md:mt-20 lg:mt-20 lg:py-0">
			<div className="w-full bg-white rounded-lg shadow border md:mt-0  sm:max-w-md dark:bg-[#2D3748] dark:border-gray-700  border-gray-200">
				<div className="pz-6 space-y-4 md:space-y-6 p-6  md:p-8 lg:p-8 ">
					<h1 className="mb-8 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white ">
						{register ? 'Sign up' : 'Sign in to your account'}
					</h1>
					<form className="space-y-8 " action="#">
						{register && (
							<>
								<AuthLabel name="firstName" title="First Name" />
								<AuthLabel name="lastName" title="Last Name" />
							</>
						)}
						<AuthLabel name="email" title="Email Address" />
						<AuthLabel name="password" title="Password" />
						<button
							type="submit"
							className="w-full text-white bg-blue-600  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						>
							{register ? 'Sign up' : 'Sign in'}
						</button>
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
