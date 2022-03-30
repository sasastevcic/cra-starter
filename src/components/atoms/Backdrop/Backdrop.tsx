import { ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { animate, variants } from '../../../styles/config/framer';
import { BackdropProps } from './Backdrop.data';
import { StyledBackdrop } from './Backdrop.styles';

const container = document.getElementById('modal') as HTMLDivElement;

export const Backdrop = ({ children, ...props }: BackdropProps): ReactElement => {
	const content = (
		<StyledBackdrop {...animate(variants.fadeIn)} {...props}>
			{children}
		</StyledBackdrop>
	);

	return createPortal(content, container);
};
