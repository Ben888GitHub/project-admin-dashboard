import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { registerUser } from '../../utils/api-functions';

const initialState = {
	userInfo: {
		username: '',
		email: '',
		password: ''
	}
};

export const createNewUserAsync = createAsyncThunk(
	'data/createNewUserAsync',
	async (payload) => await registerUser(payload)
);

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUserInfo: (state, action) => {
			const { username, email, password } = action.payload;
			state.userInfo = {
				...state.userInfo,
				id: String(Math.random()),
				// todo, destructure this please
				username: username,
				email: email,
				password: password
			};
		}
	}
});

export const { setUserInfo } = authSlice.actions;
