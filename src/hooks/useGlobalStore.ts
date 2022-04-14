import { useCallback, useState } from 'react';
import { createStore } from '../utils/createStore';

type GlobalStore = {
	counter: number;
	increment: () => void;
	decrement: () => void;
};

export const [GlobalStoreProvider, useGlobalStore] = createStore<GlobalStore>('GlobalStore', () => {
	const [counter, setCounter] = useState(0);

	const increment = useCallback(() => {
		setCounter((prev) => prev + 1);
	}, []);

	const decrement = useCallback(() => {
		setCounter((prev) => prev - 1);
	}, []);

	return {
		counter,
		increment,
		decrement,
	};
});
