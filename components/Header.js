import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AddNewProduct from './AddNewProduct';
import AuthDropdown from './AuthDropdown';

const ColorMode = dynamic(() => import('./ColorMode'), { ssr: false });

function Header() {
	const router = useRouter();

	return (
		<nav
			className={`bg-neutral-800 border-b  border-gray-600 px-2 sm:px-4 py-3 w-full z-20 top-0 left-0 `}
		>
			<div className="container flex flex-wrap justify-between  mx-auto">
				{router.route === '/products' ? (
					<div>
						<AddNewProduct />
					</div>
				) : (
					<Link href="/">
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
					</Link>
				)}

				<div className="flex">
					{/* todo, change this to the User is Authenticated then show the Dropdown */}
					{router.route === '/products' && <AuthDropdown />}

					<ColorMode />
				</div>
			</div>
		</nav>
	);
}

export default Header;
