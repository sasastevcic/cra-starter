import renderer from 'react-test-renderer';
import { renderWithTheme, componentWithTheme } from '../../../utils/testsWithTheme';
import { Icon } from '../../atoms/Icon/Icon';
import Button from './index';

describe('Button', () => {
	describe('Render', () => {
		it('should render', () => {
			const { getByTestId } = renderWithTheme(<Button />);

			const element = getByTestId('Button');

			expect(element).toBeInTheDocument();
		});

		it('should render an icon', () => {
			const { getByTestId } = renderWithTheme(<Button icon={<Icon.Logo />} />);

			const element = getByTestId('Button');
			const child = element.querySelector('svg');

			expect(element).toContainElement(child);
		});

		it('should be an anchor tag if there is a href prop', () => {
			const { getByTestId } = renderWithTheme(<Button href="https://www.google.com" />);

			const element = getByTestId('Button');

			expect(element).toContainHTML('</a>');
			expect(element).toHaveAttribute('href', 'https://www.google.com');
		});

		it('should be button tag by default', () => {
			const { getByTestId } = renderWithTheme(<Button />);

			const element = getByTestId('Button');

			expect(element).toContainHTML('</button>');
		});

		it('should render correctly', () => {
			const tree = renderer.create(componentWithTheme(<Button />)).toJSON();

			expect(tree).toMatchSnapshot();
		});
	});

	describe('Content', () => {
		it('should have elements as children', () => {
			const { getByTestId } = renderWithTheme(
				<Button>
					<span>Child</span>
				</Button>,
			);

			const element = getByTestId('Button');
			const child = element.querySelector('span');

			expect(element).toContainElement(child);
		});
	});

	describe('Attributes', () => {
		it('should be disabled', () => {
			const { getByTestId } = renderWithTheme(<Button disabled />);

			const element = getByTestId('Button');

			expect(element).toBeDisabled();
		});
	});
});
