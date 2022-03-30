import renderer from 'react-test-renderer';
import { renderWithTheme } from '../../../utils/testsWithTheme';
import Noop from '../Noop';
import Paragraph from './index';

describe('Paragraph', () => {
	describe('Render', () => {
		it('should render', () => {
			const { getByTestId } = renderWithTheme(
				<Paragraph>
					<Noop />
				</Paragraph>,
			);

			const element = getByTestId('Paragraph');

			expect(element).toBeInTheDocument();
		});

		it('should render as span tag', () => {
			const { getByTestId } = renderWithTheme(
				<Paragraph as="span">
					<Noop />
				</Paragraph>,
			);

			const element = getByTestId('Paragraph');

			expect(element.tagName).toBe('SPAN');
		});

		it('should render correctly', () => {
			const tree = renderer
				.create(
					<Paragraph>
						<Noop />
					</Paragraph>,
				)
				.toJSON();

			expect(tree).toMatchSnapshot();
		});
	});
	describe('Content', () => {
		it('should have valid content', () => {
			const { getByTestId } = renderWithTheme(<Paragraph>Paragraph text</Paragraph>);

			const element = getByTestId('Paragraph');

			expect(element).toHaveTextContent('Paragraph text');
		});

		it('should have elements as children', () => {
			const { getByTestId } = renderWithTheme(
				<Paragraph>
					<span>P</span>aragraph
				</Paragraph>,
			);

			const element = getByTestId('Paragraph');
			const child = element.querySelector('span');

			expect(element).toContainElement(child);
		});
	});
});
