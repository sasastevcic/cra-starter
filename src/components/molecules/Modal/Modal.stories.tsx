import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AnimatePresence } from 'framer-motion';
import { Modal as ModalEnum } from '../../../constants/modal';
import { useModal } from '../../../hooks/useModal';
import Button from '../../atoms/Button';
import ModalComponent from './index';

export default {
	title: 'UI Elements/Modal',
	component: ModalComponent,
} as ComponentMeta<typeof ModalComponent>;

const Template: ComponentStory<typeof ModalComponent> = (args) => {
	const { modal, openModal, closeModal } = useModal();

	return (
		<>
			<Button onClick={() => openModal(ModalEnum.Test)}>Click me!</Button>
			<AnimatePresence>
				{modal === ModalEnum.Test && <ModalComponent {...args} onClose={closeModal} />}
			</AnimatePresence>
		</>
	);
};

export const Modal = Template.bind({});
Modal.args = {
	children: 'Modal content',
};
