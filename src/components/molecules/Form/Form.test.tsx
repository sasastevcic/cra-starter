import { renderHook } from '@testing-library/react-hooks';
import { useForm } from 'react-hook-form';
import { noop } from '../../../utils/noop';
import { renderWithTheme } from '../../../utils/testsWithTheme';
import Form from './index';

describe('Form', () => {
	it('should render', () => {
		const { result } = renderHook(() => useForm());
		const form = result.current;

		const { getByTestId } = renderWithTheme(<Form form={form} onSubmit={noop} />);

		const element = getByTestId('Form');

		expect(element).toBeInTheDocument();
	});
});
