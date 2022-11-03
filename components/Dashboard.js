import Image from 'next/image';

function Dashboard() {
	return (
		<div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
			<div className="flex justify-start item-start space-y-2 flex-col">
				<h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
					Products
				</h1>
				{/* <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">
					21st Mart 2021 at 10:34 PM
				</p> */}
			</div>
			<div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
				<div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
					<div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-white px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
						<p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
							Customer’s Cart
						</p>

						<div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
							<div className="pb-4 md:pb-8 w-full md:w-40">
								<div className="w-full hidden md:block">
									<Image
										width={208}
										height={244}
										src="https://i.ibb.co/84qQR4p/Rectangle-10.png"
										alt="dress"
									/>
								</div>
								<div className="w-full md:hidden">
									<Image
										width={622}
										height={288}
										src="https://i.ibb.co/L039qbN/Rectangle-10.png"
										alt="dress"
									/>
								</div>
							</div>

							<div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
								<div className="w-full flex flex-col justify-start items-start space-y-8">
									<h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
										Premium Quaility Dress
									</h3>
									<div className="flex justify-start items-start flex-col space-y-2">
										<p className="text-sm leading-none text-gray-800">
											<span className="text-gray-300">Style: </span> Italic
											Minimal Design
										</p>
										<p className="text-sm leading-none text-gray-800">
											<span className="text-gray-300">Size: </span> Small
										</p>
										<p className="text-sm leading-none text-gray-800">
											<span className="text-gray-300">Color: </span> Light Blue
										</p>
									</div>
								</div>

								<div className="flex justify-between space-x-8 items-start w-full">
									<p className="text-base xl:text-lg leading-6">$36.00 </p>
									<p className="text-base xl:text-lg leading-6 text-gray-800">
										1
									</p>
									<p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
										$36.00
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
