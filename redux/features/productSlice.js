import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
	addNewProduct,
	deleteSelectedProducts,
	deleteSingleProduct,
	getProducts,
	updateSingleProduct
} from '../../utils/api-functions';

const initialState = {
	products: [],
	productInfo: {
		title: '',
		price: 1,
		image: '',
		sku: ''
	},
	product: {}
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

export const updateSingleProductAsync = createAsyncThunk(
	'data/updateSingleProductAsync',
	async (payload) => await updateSingleProduct(payload)
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
		},
		setProduct: (state, action) => {
			state.product = action.payload;
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
			),
			builder.addCase(updateSingleProductAsync.fulfilled, (state, action) => {
				console.log(action);
				state.products = state.products.map((product) =>
					product.sku === action.payload.sku ? action.payload : product
				);
			});
	}
});

export const { setProductInfo, setProduct } = productSlice.actions;
