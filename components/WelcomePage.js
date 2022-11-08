import Image from 'next/image';
import Link from 'next/link';
import gameIllustration from '../images/Game analytics-amico.webp';
import { useSession } from 'next-auth/react';

function WelcomePage() {
	const { data: session } = useSession();

	return (
		<div className="bg-[url('../images/toy_background.webp')]  mx-auto  bg-fixed mb-10">
			<div className="backdrop-brightness-50 p-2 md:p-5 lg:p-5  md:pb-10 lg:pb-10 pb-5 text-center">
				<div className="relative h-[215px] md:h-72 lg:h-72 w-full">
					<Image
						src={gameIllustration}
						alt="home cinema"
						layout="fill"
						objectFit="contain"
						priority
						placeholder="empty"
					/>
				</div>
				<p className="font-medium text-lg md:text-5xl lg:text-5xl    text-white  mt-5 ">
					WELCOME TO MIGHTY JAXX
				</p>

				{!session ? (
					<Link href="/auth/login">
						<button className=" mt-3 md:mt-7 lg:mt-7 text-white px-3 h-10 font-medium rounded-lg bg-gray-600 text-md  text-center  inline-flex items-center mr-4 hover:ring-2 ring-gray-400 transition-all duration-300 focus:outline-none">
							SIGN IN
						</button>
					</Link>
				) : (
					<Link href="/products">
						<button className=" mt-3 md:mt-7 lg:mt-7 text-white px-3 h-10 font-medium rounded-lg bg-gray-600 text-md  text-center  inline-flex items-center mr-4 hover:ring-2 ring-gray-400 transition-all duration-300 focus:outline-none">
							View Products
						</button>
					</Link>
				)}
			</div>
		</div>
	);
}

export default WelcomePage;
