import { lazy, Suspense, ReactElement } from 'react';
import Loader from '../../atoms/Loader';

const LazyTemplateName = lazy(async () => ({
	default: (await import('./TemplateName')).TemplateName,
}));

export const TemplateName = (): ReactElement => {
	return (
		<Suspense fallback={<Loader />}>
			<LazyTemplateName />
		</Suspense>
	);
};
