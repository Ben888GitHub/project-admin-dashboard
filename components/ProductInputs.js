import { Dialog } from '@headlessui/react';
import { useRouter } from 'next/router';
import { useRef } from 'react';

function ProductInputs({ setOpen, edit }) {
	const cancelButtonRef = useRef(null);

	return (
		<>
			<div className="bg-white dark:bg-[#2D3748] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
				<div className=" sm:items-start">
					<div className="mt-3 sm:mt-0 sm:text-left">
						<Dialog.Title
							as="h3"
							className=" text-lg font-medium leading-6 text-gray-900 dark:text-white mb-4"
						>
							{edit ? 'Edit Product' : 'Add new Product'}
						</Dialog.Title>

						<form className="space-y-6 mt-2" action="#">
							<div>
								<label
									htmlFor="newProduct"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
								>
									Name
								</label>
								<input
									type="text"
									name="newProduct"
									id="newProduct"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
									placeholder="New Product"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="newProduct"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
								>
									Price
								</label>
								<div className="flex">
									<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
										$
									</span>
									<input
										type="number"
										id="price"
										className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="0"
									/>
								</div>
							</div>
							<div>
								<label
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
									htmlFor="file_input"
								>
									Upload Image
								</label>
								<input
									className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
									aria-describedby="file_input_help"
									id="file_input"
									type="file"
								/>
								<p
									className="mt-1 text-sm text-gray-500 dark:text-gray-300"
									id="file_input_help"
								>
									SVG, PNG, JPG or GIF (MAX. 800x400px).
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
				<button
					type="button"
					className="inline-flex w-full justify-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-700 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
					onClick={() => setOpen(false)}
				>
					Add
				</button>
				<button
					type="button"
					className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 dark:border-none bg-white dark:bg-gray-500 dark:text-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
					onClick={() => setOpen(false)}
					ref={cancelButtonRef}
				>
					Cancel
				</button>
			</div>
		</>
	);
}

export default ProductInputs;