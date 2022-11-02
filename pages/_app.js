import { Provider } from 'react-redux';
import Layout from '../components/Layout';
import { store } from '../redux/store';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<ThemeProvider defaultTheme="system" attribute="class">
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</Provider>
	);
}

export default MyApp;
