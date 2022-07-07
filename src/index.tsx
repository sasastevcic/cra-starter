/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { MotionConfig } from 'framer-motion';
import { createRoot } from 'react-dom/client';
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
	// @ts-ignore
	[ThemeProvider, { theme }],
	[MotionConfig, { transition: getTransition() }],
	[GlobalStoreProvider],
]);

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<ErrorBoundary>
			<GlobalProviders>
				{/* @ts-ignore */}
				<GlobalStyle />
				<App />
			</GlobalProviders>
		</ErrorBoundary>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
