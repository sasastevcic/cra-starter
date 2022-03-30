import { useEffect, useLayoutEffect, useRef } from 'react';

type EventCallback<K extends keyof DocumentEventMap> = (
	event: DocumentEventMap[K],
) => unknown | EventListenerOrEventListenerObject;

interface EventDispatcherLike {
	addEventListener<K extends keyof DocumentEventMap>(
		type: K,
		listener: (event: DocumentEventMap[K]) => unknown,
		options?: boolean | AddEventListenerOptions,
	): void;
	addEventListener(
		type: string,
		listener: EventListenerOrEventListenerObject,
		options?: boolean | AddEventListenerOptions,
	): void;
	removeEventListener<K extends keyof DocumentEventMap>(
		type: K,
		listener: (event: DocumentEventMap[K]) => unknown,
		options?: boolean | EventListenerOptions,
	): void;
	removeEventListener(
		type: string,
		listener: EventListenerOrEventListenerObject,
		options?: boolean | EventListenerOptions,
	): void;
}

export const useEventListener = <K extends keyof DocumentEventMap>(
	eventName: K,
	callback: EventCallback<K>,
	/**
	 * if the value passed is a `ref.current`
	 * then the callback will not properly update
	 * this is intended. If you wish to use a ref of a component
	 * then set and store it with a `useState`.
	 */
	target: EventDispatcherLike = window,
	options?: AddEventListenerOptions,
): void => {
	const savedCallback = useRef<EventCallback<K>>(callback);

	// https://github.com/facebook/react/issues/14476#issuecomment-471199055
	// JSON.stringify comes from a suggestion made by Dan Abramov
	// on how to better handle dynamic objects when they have to be part
	// of a dependency array. Since our configuration contains primitive values
	// and is single level, then using JSON.stringify _should_ be plenty quick
	// for our use case
	const stringifiedOptions = JSON.stringify(options);

	// Update ref.current value if handler changes.
	// This allows our effect below to always get latest handler ...
	// ... without us needing to pass it in effect deps array ...
	// ... and potentially cause effect to re-run every render.
	useLayoutEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	useEffect(() => {
		const listener: EventCallback<K> = (...args) => savedCallback.current(...args);

		if (target) {
			target.addEventListener(eventName, listener, options);

			return () => {
				target.removeEventListener(eventName, listener, options);
			};
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [eventName, target, stringifiedOptions]);
};
