import { lazy, Suspense, ReactElement } from 'react';
import { FormErrorProps } from './FormError.data';

const LazyFormError = lazy(async () => ({
	default: (await import('./FormError')).FormError,
}));

export const FormError = (props: FormErrorProps): ReactElement => {
	return (
		<Suspense fallback={null}>
			<LazyFormError {...props} />
		</Suspense>
	);
};
