import Image from 'next/image';
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import {
	deleteProductAsync,
	setProduct
} from '../../redux/features/productSlice';
import EditProductModal from '../EditProduct/EditProductModal';

function AllProducts({ product, setSelectedItems, selectedItems }) {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const [isModal, setIsModal] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleDeleteProduct = async (sku) => {
		setIsLoading(true);
		const res = await dispatch(deleteProductAsync(sku));
		if (res.payload) {
			setIsLoading(false);
		}
	};

	return (
		<>
			<div className="mt-7 md:mt-8 lg:mt-8 rounded-lg  mx-auto w-80 bg-white  border border-gray-200 shadow-md dark:bg-[#2D3748] dark:border-gray-700">
				<div>
					<Image
						className="rounded-t-lg"
						src={product.image}
						alt=""
						width={920}
						height={800}
						priority
					/>
				</div>

				<div className="p-5 py-1.5 md:py-4 lg:py-4">
					<div className=" flex justify-between mb-2 md:mb-1 lg:mb-1 lg:mt-0 md:mt-0 mt-2">
						<button
							onClick={() => {
								dispatch(setProduct(product));
								setIsModal(true);
								setOpen(true);
							}}
							className="bg-gray-100 text-gray-800 text-md font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300 "
						>
							Edit
						</button>
						<input
							id="default-checkbox"
							type="checkbox"
							className="float-right mt-2 w-5 h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							onClick={(e) => {
								e.target.checked === true
									? setSelectedItems([...selectedItems, product.sku])
									: setSelectedItems(
											selectedItems.filter(
												(selectedItem) => selectedItem !== product.sku
											)
									  );
							}}
						/>
					</div>
					<div className=" mb-2 ">
						<p className=" text-xl md:text-2xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							{product.title}
						</p>
					</div>

					<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
						SKU: <span className="font-medium">{product.sku}</span>
					</p>
					<div className="flex justify-between items-center mb-3 lg:mb-0 md:mb-0">
						<span className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 dark:text-white">
							${product.price}
						</span>
						{product.sku && (
							<button
								disabled={isLoading}
								onClick={() => handleDeleteProduct(product.sku)}
								className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm md:text-md lg:text-md px-5 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
							>
								{isLoading ? 'Loading' : 'Delete'}
							</button>
						)}
					</div>
				</div>
			</div>
			{/* <EditProductModal open={open} setOpen={setOpen} /> */}
			{isModal && <EditProductModal open={open} setOpen={setOpen} />}
			{/* <ProductModal open={open} setOpen={setOpen} edit="edit" /> */}
		</>
	);
}

export default AllProducts;
