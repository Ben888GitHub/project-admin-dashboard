import Image from 'next/image';

function Products() {
	return (
		<div className="mt-20 mx-auto max-w-xs md:max-w-sm lg:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#2D3748] dark:border-gray-700">
			{/* <div className="p-5 bg-neutral-800">
				<p className="text-right font-normal text-gray-700 dark:text-gray-400">
					SKU: <span className="font-medium">KS778899</span>
				</p>
			</div> */}
			<div>
				<Image
					className="rounded-t-lg"
					src="https://flowbite.com/docs/images/blog/image-1.jpg"
					alt=""
					width={920}
					height={613}
				/>
			</div>
			<div className="p-5">
				<a href="#">
					<h5 className="mb-2 text-xl md:text-2xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						Apple Watch Series 7
					</h5>
				</a>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					SKU: <span className="font-medium">KS778899</span>
				</p>
				<div className="flex justify-between items-center">
					<span className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 dark:text-white">
						$599
					</span>
					<a
						href="#"
						className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm md:text-md lg:text-md px-5 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
					>
						Delete
					</a>
					{/* <a
						href="#"
						className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm md:text-md lg:text-md px-5 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
					>
						Edit
					</a> */}
				</div>
			</div>
		</div>
	);
}

export default Products;
