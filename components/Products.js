import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import ProductModal from './ProductModal';

function Products() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div className="mt-10 rounded-lg  mx-auto w-80 bg-white  border border-gray-200 shadow-md dark:bg-[#2D3748] dark:border-gray-700">
				<div className="rounded-t-lg h-[260px] bg-[url('https://flowbite.com/docs/images/blog/image-1.jpg')]   bg-cover ">
					<div className=" p-2 md:p-5 lg:p-5  md:pb-10 lg:pb-10 pb-5 text-center">
						<div className="flex justify-end">
							<button
								aria-label="edit-product"
								className=" w-10 h-10  rounded-lg bg-black flex items-center justify-center hover:ring-2 ring-gray-400 transition-all duration-300 focus:outline-none"
								onClick={() => setOpen(true)}
							>
								<FaEdit className="text-xl text-white cursor-pointer" />
							</button>
						</div>
					</div>
				</div>

				<div className="p-5 py-2.5 md:py-5 lg:py-5">
					<p className="mb-2 text-xl md:text-2xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						Apple Watch Series 7
					</p>

					<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
						SKU: <span className="font-medium">KS778899</span>
					</p>
					<div className="flex justify-between items-center mb-1.5 lg:mb-0 md:mb-0">
						<span className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 dark:text-white">
							$599
						</span>
						<button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm md:text-md lg:text-md px-5 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
							Delete
						</button>
					</div>
				</div>
			</div>
			<ProductModal open={open} setOpen={setOpen} edit="edit" />
		</>
	);
}

export default Products;
