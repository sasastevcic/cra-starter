import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../../utils/testsWithTheme';
import ScreenReader from './index';

describe('ScreenReader', () => {
	it('should render', () => {
		const { getByTestId } = renderWithTheme(<ScreenReader text="Only for screen readers" />);

		const element = getByTestId('ScreenReader');

		expect(element).toBeInTheDocument();
	});

	it('should render correct content', () => {
		renderWithTheme(<ScreenReader text="Only for screen readers" />);

		const element = screen.getByText('Only for screen readers');

		expect(element).toBeInTheDocument();
	});
});
