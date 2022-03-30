import { ReactElement, useRef } from 'react';
import FocusLock from 'react-focus-lock';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { useScrollLock } from '../../../hooks/useScrollLock';
import { animate, variants } from '../../../styles/config/framer';
import Backdrop from '../../atoms/Backdrop';
import { Icon } from '../../atoms/Icon/Icon';
import ScreenReader from '../../atoms/ScreenReader';
import { ModalProps } from './Modal.data';
import { StyledCloseButton, StyledModal } from './Modal.styles';

export const Modal = ({ onClose, children, ...props }: ModalProps): ReactElement => {
	const modalRef = useRef<HTMLDivElement>(null);

	useScrollLock(true);

	useOutsideClick(modalRef, () => {
		onClose();
	});

	return (
		<Backdrop>
			<FocusLock>
				<StyledModal ref={modalRef} {...animate(variants.scaleIn)} {...props}>
					<StyledCloseButton onClick={onClose}>
						<ScreenReader text="Close" />
						<Icon.Close />
					</StyledCloseButton>
					{children}
				</StyledModal>
			</FocusLock>
		</Backdrop>
	);
};
