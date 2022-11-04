import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import ColorMode from './ColorMode';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function NavigationBar() {
	return (
		<Navbar
			className="bg-neutral-800 dark:bg-neutral-800 border-b  border-gray-600 px-2 sm:px-4 py-3 w-full z-20 top-0 left-0"
			fluid={true}
			rounded={true}
		>
			<div className="container flex flex-wrap justify-between  mx-auto">
				<div className="cursor-pointer flex items-center bg-[#FEEC1A]  p-2 rounded-md  text-md md:text-xl lg:text-xl ">
					<svg
						className="w-6 h-6 text-black  "
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
						/>
					</svg>

					<h1 className="font-semibold self-center text-black  whitespace-nowrap ml-1">
						Mighty Jaxx
					</h1>
				</div>
				<div className="flex md:order-2">
					<div className="mr-2">
						<ColorMode />
					</div>

					{/* <Dropdown
						arrowIcon={false}
						inline={true}
						label={
							<div className="text-white cursor-pointer w-36 h-10  rounded-md bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-400 transition-all duration-300 focus:outline-none">
								Bonnie Green
								<span>
									<ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" />{' '}
								</span>
							</div>
						}
					>
						<Dropdown.Header>
							<span className="block text-sm text-black dark:text-white">
								Bonnie Green
							</span>
							<span className="block truncate text-black dark:text-white text-sm font-medium">
								name@flowbite.com
							</span>
						</Dropdown.Header>

						<Dropdown.Item className="text-black dark:text-white">
							Sign out
						</Dropdown.Item>
					</Dropdown> */}
					<Navbar.Toggle />
				</div>
				<Navbar.Collapse>
					{/* <Navbar.Link href="/navbars" active={true}>
						Home
					</Navbar.Link>
					<Navbar.Link href="/navbars">About</Navbar.Link> */}
					<div className="flex justify-end">
						<button className="text-white text-lg w-52 h-12  rounded-lg bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-400 transition-all duration-300 focus:outline-none">
							Add new Product
						</button>
					</div>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
}

export default NavigationBar;
