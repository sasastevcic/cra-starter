import { useCallback, useState } from 'react';
import { Modal } from '../constants/modal';

type ModalType = null | Modal;

type ReturnType = {
	modal: ModalType;
	openModal: (modal: Modal) => void;
	closeModal: () => void;
};

/**
 * @description a hook for using modals
 * @returns an object with current modal, and methods for opening and closing
 * @example const { modal, openModal, closeModal } = useModal();
 * <Button onClick={() => openModal(ModalEnum.Test)}>Toggle Modal</Button>
 *
 * {modal === ModalEnum.Test && (
 * 	<Modal onClose={closeModal}>
 * 		Modal Content
 * 	</Modal>
 * )}
 */
export const useModal = (): ReturnType => {
	const [modal, setModal] = useState<ModalType>(null);

	const closeModal = useCallback(() => {
		setModal(null);
	}, []);

	const openModal = useCallback((modal: Modal) => {
		setModal(modal);
	}, []);

	return { modal, openModal, closeModal };
};
