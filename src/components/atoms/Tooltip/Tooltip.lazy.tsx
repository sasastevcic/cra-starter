import { lazy, Suspense, ReactElement } from 'react';
import { TooltipProps } from './Tooltip.data';

const LazyTooltip = lazy(async () => ({
	default: (await import('./Tooltip')).Tooltip,
}));

export const Tooltip = (props: TooltipProps): ReactElement => {
	return (
		<Suspense fallback={null}>
			<LazyTooltip {...props} />
		</Suspense>
	);
};
