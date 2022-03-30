import { lazy, Suspense, ReactElement } from 'react';
import { ModalProps } from './Modal.data';

const LazyModal = lazy(async () => ({
	default: (await import('./Modal')).Modal,
}));

export const Modal = (props: ModalProps): ReactElement => {
	return (
		<Suspense fallback={null}>
			<LazyModal {...props} />
		</Suspense>
	);
};
