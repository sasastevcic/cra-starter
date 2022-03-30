import renderer from 'react-test-renderer';
import { renderWithTheme } from '../../../utils/testsWithTheme';
import Noop from '../../atoms/Noop';
import Flex from './index';

describe('Flex', () => {
	describe('Render', () => {
		it('should render', () => {
			const { getByTestId } = renderWithTheme(
				<Flex>
					<Noop />
				</Flex>,
			);

			const element = getByTestId('Flex');

			expect(element).toBeInTheDocument();
		});

		it('should render header tag', () => {
			const { getByTestId } = renderWithTheme(
				<Flex elementType="header">
					<Noop />
				</Flex>,
			);

			const element = getByTestId('Flex');

			expect(element.tagName).toBe('HEADER');
		});

		it('should render correctly', () => {
			const tree = renderer
				.create(
					<Flex>
						<Noop />
					</Flex>,
				)
				.toJSON();

			expect(tree).toMatchSnapshot();
		});
	});

	describe('Content', () => {
		it('should have elements as children', () => {
			const { getByTestId } = renderWithTheme(
				<Flex>
					<span>Child</span>
				</Flex>,
			);

			const element = getByTestId('Flex');
			const child = element.querySelector('span');

			expect(element).toContainElement(child);
		});
	});
});
