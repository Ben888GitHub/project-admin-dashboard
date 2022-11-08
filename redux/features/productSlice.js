import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
	addNewProduct,
	deleteSelectedProducts,
	deleteSingleProduct,
	getProducts
} from '../../utils/api-functions';

const initialState = {
	products: [],
	productInfo: {
		title: '',
		price: 1,
		image: '',
		sku: ''
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

export const deleteProductAsync = createAsyncThunk(
	'data/deleteProductAsync',
	async (payload) => await deleteSingleProduct(payload)
);

export const deleteSelectedProductsAsync = createAsyncThunk(
	'data/deleteSelectedProductsAsync',
	async (payload) => await deleteSelectedProducts(payload)
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
			}),
			builder.addCase(deleteProductAsync.fulfilled, (state, action) => {
				state.products = state.products.filter(
					(product) => product.sku !== action.payload
				);
			}),
			builder.addCase(
				deleteSelectedProductsAsync.fulfilled,
				(state, action) => {
					console.log(action);
					state.products = state.products.filter(
						(product) => !action.payload.includes(product.sku)
					);
				}
			);
	}
});

export const { setProductInfo } = productSlice.actions;
