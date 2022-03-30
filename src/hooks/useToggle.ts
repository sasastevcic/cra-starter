import { useState, useCallback } from 'react';

type ReturnTuple = [boolean, () => void];

/**
 * @description a hook for toggling the previous state
 * @param initialState an initial state
 * @returns a tuple with current state and toggle method
 * @example const [state, toggleState] = useToggle();
 */
export const useToggle = (initialState = false): ReturnTuple => {
	const [state, setState] = useState(initialState);

	const toggle = useCallback(() => setState((previousState) => !previousState), []);

	return [state, toggle];
};
