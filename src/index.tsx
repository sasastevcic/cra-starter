import React from 'react';
import { MotionConfig } from 'framer-motion';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './components/App';
import ErrorBoundary from './ErrorBoundary';
import { GlobalStoreProvider } from './hooks/useGlobalStore';
import reportWebVitals from './reportWebVitals';
import { getTransition } from './styles/config/framer';
import { theme } from './styles/config/theme';
import GlobalStyle from './styles/GlobalStyles';
import { combineProviders } from './utils/combineProviders';

const GlobalProviders = combineProviders([
	[BrowserRouter],
	[ThemeProvider, { theme }],
	[MotionConfig, { transition: getTransition() }],
	[GlobalStoreProvider],
]);

render(
	<React.StrictMode>
		<ErrorBoundary>
			<GlobalProviders>
				<GlobalStyle />
				<App />
			</GlobalProviders>
		</ErrorBoundary>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
