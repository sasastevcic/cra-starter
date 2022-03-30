import { renderWithTheme } from '../../../utils/testsWithTheme';
import TemplateName from './index';

describe('TemplateName', () => {
	it('should render', () => {
		const { getByTestId } = renderWithTheme(<TemplateName />);

		const element = getByTestId('TemplateName');

		expect(element).toBeInTheDocument();
	});
});
