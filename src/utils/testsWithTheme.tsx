/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ReactElement, ComponentType, ReactNode } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/config/theme';

export const componentWithTheme = (component: ReactNode): ReactElement => (
	// @ts-ignore
	<ThemeProvider theme={theme}>{component}</ThemeProvider>
);

export const renderWithTheme = (component: ReactElement, options?: RenderOptions): RenderResult => {
	const wrapper: ComponentType<{ children: ReactNode }> = ({ children }) =>
		componentWithTheme(children);

	return render(component, { wrapper, ...options });
};
