import { ReactElement, useRef } from 'react';
import { createPortal } from 'react-dom';
import { animate, variants } from '../../../styles/config/framer';
import { BackdropProps } from './Backdrop.data';
import { StyledBackdrop } from './Backdrop.styles';

export const Backdrop = ({ children, ...props }: BackdropProps): ReactElement => {
	const containerRef = useRef(document.getElementById('modal') as HTMLDivElement);

	const content = (
		<StyledBackdrop {...animate(variants.fadeIn)} {...props}>
			{children}
		</StyledBackdrop>
	);

	return createPortal(content, containerRef.current);
};
