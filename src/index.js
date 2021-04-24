import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ColorModeScript, extendTheme } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
	blog: {
		900: '#10002B',
		800: '#240046',
		700: '#3C096C',
		600: '#5A189A',
		500: '#7B2CBF',
		400: '#9D4EDD',
		300: '#C77DFF',
		200: '#E0AAFF',
		100: '#ffffff',
		101: '#1C2541'
	}
};
// const colors2 = {
// 	blog: {
// 		900: '#10002B',
// 		800: '#240046',
// 		700: '#001645',
// 		600: '#09286B',
// 		500: '#184399',
// 		400: '#2C58BF',
// 		300: '#4E77DE',
// 		200: '#7DA0FF',
// 		100: '#ABBCFF',
// 		101: '#1C2541'
// 	}
// };
// const colors1 = {
// 	blog: {
// 		900: '#0B132B',
// 		800: '#1C2541',
// 		700: '#3A506B',
// 		500: '#5BC0BE',
// 		300: '#6FFFE9',
// 		100: '#ffffff',
// 		101: '#1C2541'
// 	}
// };
const config = {
	initialColorMode: 'dark',
	useSystemColorMode: false
};
const theme = extendTheme({ colors, config });

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<App />
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
