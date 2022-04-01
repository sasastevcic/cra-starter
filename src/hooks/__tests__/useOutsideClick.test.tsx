import { fireEvent, Matcher, MatcherOptions, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { Keyboard } from '../../constants/keyboard';
import { useOutsideClick } from '../useOutsideClick';

describe('useOutsideClick hook', () => {
	let getByTestId: (id: Matcher, options?: MatcherOptions | undefined) => HTMLElement;

	beforeEach(() => {
		({ getByTestId } = render(
			<div data-testid="outside">
				<div data-testid="inner">Inner</div>
			</div>,
		));
	});

	it('should trigger callback on an Escape key', () => {
		const inner = getByTestId('inner');

		const ref = {
			current: inner,
		};

		const callback = jest.fn();

		renderHook(() => useOutsideClick(ref, callback));

		expect(callback).toBeCalledTimes(0);

		fireEvent.keyDown(window, {
			key: Keyboard.Escape,
		});

		expect(callback).toBeCalledTimes(1);
	});

	it('should NOT trigger callback on an Enter key', () => {
		const inner = getByTestId('inner');

		const ref = {
			current: inner,
		};

		const callback = jest.fn();

		renderHook(() => useOutsideClick(ref, callback));

		expect(callback).toBeCalledTimes(0);

		fireEvent.keyDown(window, {
			key: Keyboard.Enter,
		});

		expect(callback).toBeCalledTimes(0);
	});

	it('should trigger callback on an outside click', () => {
		const inner = getByTestId('inner');
		const outside = getByTestId('outside');
		inner.contains = jest.fn().mockReturnValue(false);

		const ref = {
			current: inner,
		};

		const callback = jest.fn();

		renderHook(() => useOutsideClick(ref, callback));

		expect(callback).toBeCalledTimes(0);

		fireEvent.mouseDown(window, {
			target: outside,
		});

		expect(callback).toBeCalledTimes(1);
	});

	it('should NOT trigger callback on an inner click', () => {
		const inner = getByTestId('inner');
		inner.contains = jest.fn().mockReturnValue(true);

		const ref = {
			current: inner,
		};

		const callback = jest.fn();

		renderHook(() => useOutsideClick(ref, callback));

		expect(callback).toBeCalledTimes(0);

		fireEvent.mouseDown(window, {
			target: inner,
		});

		expect(callback).toBeCalledTimes(0);
	});
});
