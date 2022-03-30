import { renderHook, act } from '@testing-library/react-hooks';
import { useToggle } from '../useToggle';

describe('useToggle hook', () => {
	it('should toggle previous state', () => {
		const { result } = renderHook(() => useToggle());
		const [state, toggleState] = result.current;

		expect(state).toBe(false);

		act(() => {
			toggleState();
		});

		const [updatedState] = result.current;

		expect(updatedState).toBe(true);
	});

	it('should toggle previous state with initial value', () => {
		const { result } = renderHook(() => useToggle(true));
		const [state, toggleState] = result.current;

		expect(state).toBe(true);

		act(() => {
			toggleState();
		});

		const [updatedState] = result.current;

		expect(updatedState).toBe(false);
	});
});
