import { useEffect, useState } from 'react';

const isBrowser = typeof window !== 'undefined';

/**
 * @description a hook for using media queries
 * @param query query string that we want to check
 * @param defaultState fallback if not a browser
 * @example const isLarge = useMedia(media.up(Breakpoints.Large));
 */
export const useMedia = (query: string, defaultState = false): boolean => {
	const [state, setState] = useState(
		isBrowser ? () => window.matchMedia(query).matches : defaultState,
	);

	useEffect(() => {
		let isMounted = true;
		const mediaQueryList = window.matchMedia(query);

		const handleChange = (): void => {
			if (!isMounted) {
				return;
			}
			setState(mediaQueryList.matches);
		};

		mediaQueryList.addEventListener('change', handleChange);
		setState(mediaQueryList.matches);

		return () => {
			isMounted = false;
			mediaQueryList.removeEventListener('change', handleChange);
		};
	}, [query]);

	return state;
};
