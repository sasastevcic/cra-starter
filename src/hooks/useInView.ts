import { useRef, useEffect, useCallback, MutableRefObject, useState } from 'react';

type ReturnTuple<T> = [MutableRefObject<T | null>, boolean];

/**
 * @description a hook for checking if the component is in view
 * @returns a tuple with the ref from the component we want to observe and inView state
 * @param rootMargin offset from component and screen in view
 */
export const useInView = <T extends Element>(rootMargin = '0px'): ReturnTuple<T> => {
	const targetRef = useRef<T | null>(null);
	const observerRef = useRef<IntersectionObserver | null>(null);
	const [inView, setInView] = useState<boolean>(false);

	const observerCallback: IntersectionObserverCallback = useCallback(
		(entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry: IntersectionObserverEntry) => {
				setInView(entry.isIntersecting);
			});
		},
		[],
	);

	useEffect(() => {
		if (!targetRef.current) {
			return;
		}

		observerRef.current = new IntersectionObserver(observerCallback, {
			rootMargin,
		});

		const targetCurrent = targetRef.current;
		const observerCurrent = observerRef.current;

		observerCurrent.observe(targetCurrent);

		return () => {
			observerCurrent.unobserve(targetCurrent);
		};
	}, [observerCallback, rootMargin]);

	return [targetRef, inView];
};
