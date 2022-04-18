import { lazy, Suspense, ReactElement } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ModalProps } from './Modal.data';

const LazyModal = lazy(async () => ({
	default: (await import('./Modal')).Modal,
}));

export const Modal = ({ isOpen, ...props }: ModalProps): ReactElement => {
	return (
		<Suspense fallback={null}>
			<AnimatePresence>{isOpen && <LazyModal {...props} />}</AnimatePresence>
		</Suspense>
	);
};
