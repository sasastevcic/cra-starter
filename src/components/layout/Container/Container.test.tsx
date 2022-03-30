import renderer from 'react-test-renderer';
import { renderWithTheme } from '../../../utils/testsWithTheme';
import Noop from '../../atoms/Noop';
import Container from './index';

describe('Container', () => {
	describe('Render', () => {
		it('should render', () => {
			const { getByTestId } = renderWithTheme(
				<Container>
					<Noop />
				</Container>,
			);

			const element = getByTestId('Container');

			expect(element).toBeInTheDocument();
		});

		it('should render correctly', () => {
			const tree = renderer
				.create(
					<Container>
						<Noop />
					</Container>,
				)
				.toJSON();

			expect(tree).toMatchSnapshot();
		});
	});

	describe('Content', () => {
		it('should have elements as children', () => {
			const { getByTestId } = renderWithTheme(
				<Container>
					<span>Child</span>
				</Container>,
			);

			const element = getByTestId('Container');
			const child = element.querySelector('span');

			expect(element).toContainElement(child);
		});
	});
});
