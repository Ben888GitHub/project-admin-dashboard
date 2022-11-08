import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addNewProduct } from '../../utils/api-functions';

const initialState = {
	products: [],
	productInfo: {
		title: '',
		price: 0,
		image: '',
		sku: ''
	}
};

export const addProductAsync = createAsyncThunk(
	'data/addProductAsync',
	async (payload) => await addNewProduct(payload)
);

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProductInfo: (state, action) => {
			const { title, price, image, sku } = action.payload;
			state.productInfo = {
				...state.productInfo,
				title,
				price,
				image,
				sku
			};
		}
	},
	extraReducers: (builder) => {
		builder.addCase(addProductAsync.fulfilled, (state, action) => {
			console.log(action);
			state.products = [...state.products, action.payload];
		});
	}
});

export const { setProductInfo } = productSlice.actions;
