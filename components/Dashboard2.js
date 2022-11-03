import Image from 'next/image';

const products = [
	{
		id: 1,
		name: 'Throwback Hip Bag',
		href: '#',
		color: 'Salmon',
		price: '$90.00',
		quantity: 1,
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
		imageAlt:
			'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.'
	},
	{
		id: 2,
		name: 'Medium Stuff Satchel',
		href: '#',
		color: 'Blue',
		price: '$32.00',
		quantity: 1,
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
		imageAlt:
			'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.'
	}
	// More products...
];

function Dashboard2() {
	return (
		<div className="container  mx-auto flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
			<div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
				<div className="flex items-start justify-between">
					<div className="mt-8">
						<div className="flow-root">
							<ul role="list" className="-my-6 divide-y divide-gray-200">
								{products.map((product) => (
									<li key={product.id} className="flex py-6">
										<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
											<img
												src={product.imageSrc}
												alt={product.imageAlt}
												className="h-full w-full object-cover object-center"
											/>
										</div>

										<div className="ml-4 flex flex-1 flex-col">
											<div>
												<div className="flex justify-between text-base font-medium text-gray-900">
													<h3>
														<a href={product.href}>{product.name}</a>
													</h3>
													<p className="ml-4">{product.price}</p>
												</div>
												<p className="mt-1 text-sm text-gray-500">
													{product.color}
												</p>
											</div>
											<div className="flex flex-1 items-end justify-between text-sm">
												<p className="text-gray-500">Qty {product.quantity}</p>

												<div className="flex">
													<button
														type="button"
														className="font-medium text-indigo-600 hover:text-indigo-500"
													>
														Remove
													</button>
												</div>
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard2;
{
	/* <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-auto">
			<div className=" w-full rounded-t-lg  md:rounded-none md:rounded-l-lg">
				<Image
					width={500}
					height={700}
					src="https://flowbite.com/docs/images/blog/image-4.jpg"
					alt="photimg"
				/>
			</div>
			<div className="flex flex-col justify-between p-4 leading-normal">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Noteworthy technology acquisitions 2021
				</h5>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					Here are the biggest enterprise technology acquisitions of 2021 so
					far, in reverse chronological order.
				</p>
			</div>
		</div> */
}
