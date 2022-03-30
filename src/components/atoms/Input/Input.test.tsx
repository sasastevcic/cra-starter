import renderer from 'react-test-renderer';
import { componentWithTheme, renderWithTheme } from '../../../utils/testsWithTheme';
import Input from './index';

describe('Input', () => {
	it('should render', () => {
		const { getByTestId } = renderWithTheme(<Input isInvalid={false} />);

		const element = getByTestId('Input');

		expect(element).toBeInTheDocument();
	});

	it('should render correctly', () => {
		const tree = renderer.create(componentWithTheme(<Input isInvalid={false} />)).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render type number correctly', () => {
		const tree = renderer
			.create(componentWithTheme(<Input type="number" isInvalid={false} />))
			.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
