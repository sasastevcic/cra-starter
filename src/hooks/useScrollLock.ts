import { useEffect, useLayoutEffect, useState } from 'react';

type ReturnTuple = [boolean, (lock: boolean) => void];

const getScrollbarWidth = (): number => {
	const outer = document.createElement('div');
	const { body } = document;

	outer.style.visibility = 'hidden';
	outer.style.overflow = 'scroll';

	body.appendChild(outer);

	const inner = document.createElement('div');
	outer.appendChild(inner);

	const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

	body.removeChild(outer);

	return scrollbarWidth;
};

/**
 * @description a hook for locking background scroll
 * @param initialLock an initial state
 * @returns a tuple with lock state and the setLock method
 * @example useScrollLock(true);
 * const [lock, setLock] = useScrollLock(false);
 */
export const useScrollLock = (initialLock = false): ReturnTuple => {
	const [lock, setLock] = useState(initialLock);

	useLayoutEffect(() => {
		if (!lock) {
			return;
		}

		const originalOverflow = document.body.style.overflow;
		const originalPaddingRight = document.body.style.paddingRight;

		document.body.style.overflow = 'hidden';

		const scrollBarWidth = getScrollbarWidth();

		if (scrollBarWidth) {
			document.body.style.paddingRight = `${scrollBarWidth}px`;
		}

		return () => {
			document.body.style.overflow = originalOverflow;

			if (scrollBarWidth) {
				document.body.style.paddingRight = originalPaddingRight;
			}
		};
	}, [lock]);

	useEffect(() => {
		if (lock !== initialLock) {
			setLock(initialLock);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [initialLock]);

	return [lock, setLock];
};
