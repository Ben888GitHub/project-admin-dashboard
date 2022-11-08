import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addNewProduct, getProducts } from '../../utils/api-functions';
import uuid from 'react-uuid';

const skuID = uuid().slice(0, uuid().length - 30);

const initialState = {
	products: [],
	productInfo: {
		title: '',
		price: 0,
		image: '',
		sku: skuID
	}
};

export const addProductAsync = createAsyncThunk(
	'data/addProductAsync',
	async (payload) => await addNewProduct(payload)
);

export const getProductsAsync = createAsyncThunk(
	'data/getProductsAsync',
	async (payload) => await getProducts(payload)
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
		}),
			builder.addCase(getProductsAsync.fulfilled, (state, action) => {
				state.products = action.payload;
			});
	}
});

export const { setProductInfo } = productSlice.actions;
