import { lazy, Suspense, ReactElement } from 'react';
import Loader from '../../atoms/Loader';
import { NotFoundProps } from './NotFound.data';

const LazyNotFound = lazy(async () => ({
	default: (await import('./NotFound')).NotFound,
}));

export const NotFound = (props: NotFoundProps): ReactElement => {
	return (
		<Suspense fallback={<Loader />}>
			<LazyNotFound {...props} />
		</Suspense>
	);
};
