import { useState } from 'react';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import ProductModal from './ProductModal';

function AddNewProduct() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button
				aria-label="add new product"
				className="authentication-modal text-white text-md w-44 h-10  rounded-lg bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-400 transition-all duration-300 focus:outline-none"
				onClick={() => setOpen(true)}
			>
				Add new product
				<span>
					<HiOutlinePlusCircle className="w-6 h-6 ml-1" />
				</span>
				<br />
			</button>
			<meta name="viewport" content="width=device-width, user-scalable=no" />
			<ProductModal open={open} setOpen={setOpen} />
		</>
	);
}

export default AddNewProduct;
