import renderer from 'react-test-renderer';
import { renderWithTheme } from '../../../utils/testsWithTheme';
import Noop from '../Noop';
import { HeadingType } from './Heading.data';
import Heading from './index';

describe('Heading', () => {
	describe('Render', () => {
		it('should render', () => {
			const { getByTestId } = renderWithTheme(
				<Heading>
					<Noop />
				</Heading>,
			);

			const element = getByTestId('Heading');

			expect(element).toBeInTheDocument();
		});

		it('should render H1', () => {
			const { getByTestId } = renderWithTheme(<Heading type={HeadingType.H1}>Heading H1</Heading>);

			const element = getByTestId('Heading');

			expect(element).toContainHTML('h1');
		});

		it('should render H2', () => {
			const { getByTestId } = renderWithTheme(<Heading type={HeadingType.H2}>Heading H2</Heading>);

			const element = getByTestId('Heading');

			expect(element).toContainHTML('h2');
		});

		it('should render H3', () => {
			const { getByTestId } = renderWithTheme(<Heading type={HeadingType.H3}>Heading H3</Heading>);

			const element = getByTestId('Heading');

			expect(element).toContainHTML('h3');
		});

		it('should render H4', () => {
			const { getByTestId } = renderWithTheme(<Heading type={HeadingType.H4}>Heading H4</Heading>);

			const element = getByTestId('Heading');

			expect(element).toContainHTML('h4');
		});

		it('should render H5', () => {
			const { getByTestId } = renderWithTheme(<Heading type={HeadingType.H5}>Heading H5</Heading>);

			const element = getByTestId('Heading');

			expect(element).toContainHTML('h5');
		});

		it('should render H6', () => {
			const { getByTestId } = renderWithTheme(<Heading type={HeadingType.H6}>Heading H6</Heading>);

			const element = getByTestId('Heading');

			expect(element).toContainHTML('h6');
		});

		it('should render H3 with H2 styles', () => {
			const { getByTestId } = renderWithTheme(
				<Heading as={HeadingType.H3} type={HeadingType.H2}>
					Heading H3 with H2 styles
				</Heading>,
			);

			const element = getByTestId('Heading');

			expect(element).toContainHTML('h3');
		});

		it('should render correctly', () => {
			const tree = renderer.create(<Heading>Heading</Heading>).toJSON();

			expect(tree).toMatchSnapshot();
		});
	});

	describe('Content', () => {
		it('should have valid content', () => {
			const { getByTestId } = renderWithTheme(<Heading>Heading text</Heading>);

			const element = getByTestId('Heading');

			expect(element).toHaveTextContent('Heading text');
		});

		it('should have elements as children', () => {
			const { getByTestId } = renderWithTheme(
				<Heading>
					<span>H</span>eading
				</Heading>,
			);

			const element = getByTestId('Heading');
			const child = element.querySelector('span');

			expect(element).toContainElement(child);
		});
	});
});
