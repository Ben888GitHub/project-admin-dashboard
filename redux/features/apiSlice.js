import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAuth: false
};

export const apiSlice = createSlice({
	name: 'apiSlice',
	initialState,
	reducers: {
		setAuth: (state) => {
			state.isAuth = true;
		}
	}
});

export const { setAuth } = apiSlice.actions;
