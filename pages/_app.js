import { Provider } from 'react-redux';
import Layout from '../components/Layout';
import { store } from '../redux/store';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<SessionProvider session={session}>
			<Provider store={store}>
				<ThemeProvider defaultTheme="system" attribute="class">
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			</Provider>
		</SessionProvider>
	);
}

export default MyApp;
