import { motion } from 'framer-motion';
import { position } from 'polished';
import styled from 'styled-components';
import { zIndex } from '../../../styles/config/zIndex';
import Flex from '../../layout/Flex';

export const StyledBackdrop = styled(motion(Flex))`
	${position('fixed', 0)};
	background-color: ${({ theme }) => theme.color.blackFaded};
	z-index: ${zIndex('overlay')};
	overflow-y: auto;
	padding: 2vw;

	[data-focus-lock-disabled] {
		width: 100%;
		margin: auto;
	}
`;
