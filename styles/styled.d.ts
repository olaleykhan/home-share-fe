import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		borderRadius: string;
		colors: {
			dark: string;
			light: string;
			grey: string;
			primary: string;
			contrastText: string;
		};
	}
}
