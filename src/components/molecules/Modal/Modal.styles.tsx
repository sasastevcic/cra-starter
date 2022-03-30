import { motion } from 'framer-motion';
import { size } from 'polished';
import styled, { css } from 'styled-components';
import { BorderRadius, TransitionDuration, TransitionEase } from '../../../styles/config/variables';
import { hover } from '../../../styles/helpers/hover';
import AbstractButton from '../../atoms/AbstractButton';

export const StyledModal = styled(motion.div)`
	position: relative;
	width: 100%;
	max-width: 40rem;
	background: ${({ theme }) => theme.color.white};
	border-radius: ${BorderRadius.Medium};
	padding: 4rem 2rem;
	margin: 0 auto;
`;

const closeHover = css`
	opacity: 0.5;
`;

export const StyledCloseButton = styled(AbstractButton)`
	${size('2.4rem')};
	position: absolute;
	top: 1rem;
	right: 1rem;
	transition: opacity ${TransitionDuration.Normal} ${TransitionEase.Default};

	${hover(closeHover)};
`;
