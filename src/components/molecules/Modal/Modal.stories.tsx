import { ComponentStory, ComponentMeta } from '@storybook/react';
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
			<ModalComponent {...args} isOpen={modal === ModalEnum.Test} onClose={closeModal} />
		</>
	);
};

export const Modal = Template.bind({});
Modal.args = {
	children: 'Modal content',
};
