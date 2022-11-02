import GoogleSignIn from './GoogleSignIn';

function SignIn() {
	return (
		// 	<section className="bg-gray-50 dark:bg-gray-900">
		<div className="md:flex lg:flex   items-center justify-center  py-8 mx-auto h-screen lg:py-0">
			{/* <div>
				<p className="text-3xl  lg:text-5xl font-bold lg:mb-0 md:mb-0 mb-10">
					LOGIN / REGISTER
				</p>
				<p className="text-xl  lg:text-xl  lg:mb-0 md:mb-0 mb-10 w-96">
					By creating an account with our store, you will be able to move
					through the checkout process faster, store multiple shipping
					addresses, view and track your orders in your account and more.
				</p>
			</div> */}
			<div className="w-full bg-white rounded-lg shadow border md:mt-0  sm:max-w-md xl:p-0 dark:bg-[#2D3748] dark:border-gray-700  border-gray-200">
				<div className="pz-6 space-y-4 md:space-y-6 p-6  md:p-8 lg:p-8 ">
					<h1 className="mb-8 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white ">
						Sign in to your account
					</h1>
					<form className="space-y-8 " action="#">
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Email Address
							</label>
							<input
								type="email"
								name="email"
								id="email"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="name@company.com"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Password
							</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="••••••••"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required
							/>
						</div>
						<button
							type="submit"
							className="w-full text-white bg-blue-600 dark:bg-[#4299E1] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						>
							Sign in
						</button>
						<p className="text-sm font-light text-gray-500 dark:text-gray-400">
							Don’t have an account yet?{' '}
							<a
								href="#"
								className="font-medium text-primary-600 hover:underline dark:text-primary-500"
							>
								Sign up
							</a>
						</p>
						<div className="inline-flex justify-center items-center w-full">
							<hr className=" w-full h-px border-0  bg-gray-200  dark:bg-gray-500" />
							<span className="dark:bg-[#2D3748] bg-white absolute left-1/2 px-3 font-medium  -translate-x-1/2 ">
								or
							</span>
						</div>
						<GoogleSignIn />
					</form>
				</div>
			</div>
		</div>
		// </section>
	);
}

export default SignIn;
