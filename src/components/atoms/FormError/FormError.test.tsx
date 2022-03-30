import { renderWithTheme } from '../../../utils/testsWithTheme';
import FormError from './index';

describe('FormError', () => {
	it('should render', () => {
		// TODO Test
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { getByTestId: _ } = renderWithTheme(<FormError />);

		// const element = getByTestId('FormError');

		expect(true).toBeTruthy();
	});
});
