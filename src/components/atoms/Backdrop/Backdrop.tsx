import { ReactElement } from 'react';
import { animate, variants } from '../../../styles/config/framer';
import Portal from '../../../utils/portal';
import { BackdropProps } from './Backdrop.data';
import { StyledBackdrop } from './Backdrop.styles';

export const Backdrop = ({ children, ...props }: BackdropProps): ReactElement => (
	<Portal portalId="modal">
		<StyledBackdrop {...animate(variants.fadeIn)} {...props}>
			{children}
		</StyledBackdrop>
	</Portal>
);
