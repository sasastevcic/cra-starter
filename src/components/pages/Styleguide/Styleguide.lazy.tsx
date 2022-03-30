import { lazy, Suspense, ReactElement } from 'react';
import Loader from '../../atoms/Loader';

const LazyStyleguide = lazy(async () => ({
	default: (await import('./Styleguide')).Styleguide,
}));

export const Styleguide = (): ReactElement => {
	return (
		<Suspense fallback={<Loader />}>
			<LazyStyleguide />
		</Suspense>
	);
};
