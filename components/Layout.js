import Header from './Header';
import NavigationBar from './NavigationBar';

function Layout({ children }) {
	return (
		<div>
			<Header />
			<main>{children}</main>
		</div>
	);
}

export default Layout;
