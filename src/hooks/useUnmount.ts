import { useEffect } from 'react';

/**
 * @param destructor - function, which is triggered on unmount.
 */
export const useUnmount = (destructor: () => void): void => {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => destructor, []);
};
