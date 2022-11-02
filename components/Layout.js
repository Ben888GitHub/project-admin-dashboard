import React from 'react';
import Header from './Header';

function Layout({ children }) {
	return (
		<div className="bg-[#f7f7f7] dark:bg-[#1a202c]">
			<Header />
			<main>{children}</main>
		</div>
	);
}

export default Layout;
