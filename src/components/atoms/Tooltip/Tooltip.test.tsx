import { renderWithTheme } from '../../../utils/testsWithTheme';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
	it('should render', () => {
		const { getByTestId } = renderWithTheme(
			<Tooltip text="text">
				<div>Element with tooltip</div>
			</Tooltip>,
		);

		const element = getByTestId('Tooltip');

		expect(element).toBeInTheDocument();
	});
});
