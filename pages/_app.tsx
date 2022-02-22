import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Navbar from '../layouts/Navbar';
import { myTheme } from '../styles/theme';

// const theme = {
// 	colors: {
// 		primary: '#639A30',
// 		secondary: 'orange',
// 		light: '#fff',
// 		grey: '#ccc',
// 	},
// 	shadow: 'box-shadow: 0 0 5px 1px rgb(90 84 84 / 47%)',
// };

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={myTheme}>
				<GlobalStyle />
				<Navbar isActive= {true} />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp
