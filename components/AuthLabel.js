import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../redux/features/authSlice';

function AuthLabel({ name, title }) {
	const dispatch = useDispatch();

	const userInfo = useSelector((state) => state.auth.userInfo);

	console.log(userInfo);

	return (
		<div>
			<label
				htmlFor={name}
				className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>
				{title}
			</label>

			{name === 'password' ? (
				<input
					type={name}
					name={name}
					id="toggle"
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
			) : (
				<input
					type={name}
					name={name}
					id={name}
					className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder={name === 'email' ? 'name@company.com' : 'Username'}
					required
					value={name === 'email' ? userInfo.email : userInfo.username}
					onChange={(e) =>
						name === 'email'
							? dispatch(setUserInfo({ ...userInfo, email: e.target.value }))
							: dispatch(setUserInfo({ ...userInfo, username: e.target.value }))
					}
				/>
			)}
		</div>
	);
}

export default AuthLabel;
