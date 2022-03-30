import { RefObject, useCallback } from 'react';
import { Keyboard } from '../constants/keyboard';
import { useEventListener } from './useEventListener';

/**
 * @description a hook for handling click outside of the component
 * @param ref a ref from the component, that we want to listen for an outside click
 * @param callback callback function that gets called if the click outside of the ref component
 * @example useOutsideClick(modalRef, () => {
 * 	onClose();
 * });
 */
export const useOutsideClick = <T extends Element>(
	ref: RefObject<T>,
	callback: (event?: Event) => void,
): void => {
	const handleEvent = useCallback(
		(event: Event): void => {
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return;
			}
			callback(event);
		},
		[ref, callback],
	);

	const handleKeydown = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === Keyboard.Escape) {
				callback(event);
			}
		},
		[callback],
	);

	useEventListener('mousedown', handleEvent);
	useEventListener('touchstart', handleEvent);
	useEventListener('keydown', handleKeydown);
};
