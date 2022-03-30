import { lazy, Suspense, ReactElement } from 'react';
import { TemplateNameProps } from './TemplateName.data';

const LazyTemplateName = lazy(async () => ({
	default: (await import('./TemplateName')).TemplateName,
}));

export const TemplateName = (props: TemplateNameProps): ReactElement => {
	return (
		<Suspense fallback={null}>
			<LazyTemplateName {...props} />
		</Suspense>
	);
};
