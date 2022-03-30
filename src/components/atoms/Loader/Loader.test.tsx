import renderer from 'react-test-renderer';
import { renderWithTheme, componentWithTheme } from '../../../utils/testsWithTheme';
import Loader from './index';

describe('Loader', () => {
	it('should render', () => {
		const { getByTestId } = renderWithTheme(<Loader />);

		const element = getByTestId('Loader');

		expect(element).toBeInTheDocument();
	});

	it('should render correctly', () => {
		const tree = renderer.create(componentWithTheme(<Loader />)).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
