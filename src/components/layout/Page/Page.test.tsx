import renderer from 'react-test-renderer';
import { renderWithTheme } from '../../../utils/testsWithTheme';
import Noop from '../../atoms/Noop';
import Page from './index';

describe('Page', () => {
	describe('Render', () => {
		it('should render', () => {
			const { getByTestId } = renderWithTheme(
				<Page>
					<Noop />
				</Page>,
			);

			const element = getByTestId('Page');

			expect(element).toBeInTheDocument();
		});

		it('should render correctly', () => {
			const tree = renderer
				.create(
					<Page>
						<Noop />
					</Page>,
				)
				.toJSON();

			expect(tree).toMatchSnapshot();
		});
	});

	describe('Content', () => {
		it('should have elements as children', () => {
			const { getByTestId } = renderWithTheme(
				<Page>
					<span>Child</span>
				</Page>,
			);

			const element = getByTestId('Page');
			const child = element.querySelector('span');

			expect(element).toContainElement(child);
		});
	});
});
