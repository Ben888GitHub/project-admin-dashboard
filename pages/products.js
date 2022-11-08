import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';
import Products from '../components/Products';

function products() {
	return (
		<div className="container mx-auto">
			<Head>
				<title>Dashboard</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<p className="text-2xl text-center m-5">Search Bar</p>
			<div className="flex flex-wrap ">
				{Array(4)
					.fill(0)
					.map((_, idx) => (
						<Products key={idx} />
					))}
			</div>
		</div>
	);
}

export default products;

export const getServerSideProps = async (context) => {
	const { req } = context;
	const session = await getSession({ req });

	console.log(session);

	// const {email, image}

	if (!session) {
		return {
			redirect: { destination: '/auth/login' }
		};
	}

	return {
		props: { data: 'products' }
	};
};
