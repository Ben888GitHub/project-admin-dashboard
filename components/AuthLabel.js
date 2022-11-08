import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../redux/features/authSlice';

function AuthLabel({ username }) {
	const dispatch = useDispatch();

	const userInfo = useSelector((state) => state.auth.userInfo);

	// console.log(userInfo);

	return (
		<>
			{username && (
				<div>
					<label
						htmlFor="username"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Username
					</label>
					<input
						type="username"
						name="username"
						id="username"
						className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Username"
						required
						value={userInfo.username}
						onChange={(e) =>
							dispatch(setUserInfo({ ...userInfo, username: e.target.value }))
						}
					/>
				</div>
			)}
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
					value={userInfo.email}
					onChange={(e) =>
						dispatch(setUserInfo({ ...userInfo, email: e.target.value }))
					}
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
					className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="••••••••"
					required
					minLength={8}
					maxLength={12}
					value={userInfo.password}
					onChange={(e) =>
						dispatch(setUserInfo({ ...userInfo, password: e.target.value }))
					}
				/>
			</div>
		</>
	);
}

export default AuthLabel;
