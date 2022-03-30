import renderer from 'react-test-renderer';
import { renderWithTheme } from '../../../utils/testsWithTheme';
import AbstractButton from './index';

describe('AbstractButton', () => {
	it('should render', () => {
		const { getByTestId } = renderWithTheme(<AbstractButton />);

		const element = getByTestId('AbstractButton');

		expect(element).toBeInTheDocument();
	});

	it('should render anchor tag with href as prop', () => {
		const { getByTestId } = renderWithTheme(<AbstractButton href="https://www.google.com" />);

		const element = getByTestId('AbstractButton');

		expect(element).toContainHTML('a');
	});

	it('should render button tag as default', () => {
		const { getByTestId } = renderWithTheme(<AbstractButton />);

		const element = getByTestId('AbstractButton');

		expect(element).toContainHTML('button');
	});

	it('should render button correctly', () => {
		const tree = renderer.create(<AbstractButton />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render submit button correctly', () => {
		const tree = renderer.create(<AbstractButton type="submit" />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render anchor correctly', () => {
		const tree = renderer.create(<AbstractButton href="https://www.google.com" />).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
