import { renderHook } from '@testing-library/react-hooks';
import { useForm } from 'react-hook-form';
import { renderWithTheme } from '../../../utils/testsWithTheme';
import ControlledInput from './index';

describe('ControlledInput', () => {
	it('should render', () => {
		const { result } = renderHook(() => useForm());
		const { control } = result.current;

		const { getByTestId } = renderWithTheme(<ControlledInput name="test" control={control} />);

		const element = getByTestId('ControlledInput');

		expect(element).toBeInTheDocument();
	});
});

describe('Attributes', () => {
	it('should have provided attributes', () => {
		const { result } = renderHook(() => useForm());
		const { control } = result.current;

		const { getByTestId } = renderWithTheme(
			<ControlledInput name="test" type="checkbox" control={control} />,
		);

		const element = getByTestId('ControlledInput');

		expect(element).toHaveAttribute('type', 'checkbox');
		expect(element).toHaveAttribute('name', 'test');
	});
});
