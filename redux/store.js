import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './features/apiSlice';
import { authSlice } from './features/authSlice';

export const store = configureStore({
	reducer: {
		[apiSlice.name]: apiSlice.reducer,
		[authSlice.name]: authSlice.reducer
	}
});
