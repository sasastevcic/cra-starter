import { Placement } from '@popperjs/core';
import { motion } from 'framer-motion';
import { size } from 'polished';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { typeStyle } from '../../../styles/config/typeStyles';
import { BorderRadius } from '../../../styles/config/variables';
import { zIndex } from '../../../styles/config/zIndex';
import { Icon } from '../../atoms/Icon/Icon';
import { ColorProps } from './Tooltip.data';

export const StyledTooltipContainer = styled.div`
	display: inline-block;
	position: relative;
`;

export const StyledTooltip = styled(motion.div)`
	${typeStyle.small};
	text-align: center;
	z-index: ${zIndex('tooltip')};
	min-width: 8rem;
	max-width: 20rem;
	pointer-events: none;
`;

export const StyledTooltipContent = styled(motion.div)<ColorProps>`
	background-color: ${({ $backgroundColor }) => $backgroundColor};
	color: ${({ theme }) => theme.color.white};
	border-radius: ${BorderRadius.Medium};
	padding: 0.8rem 1rem;

	stop:nth-child(1) {
		stop-color: ${({ $backgroundColor }) => $backgroundColor};
	}

	stop:nth-child(2) {
		stop-color: ${({ $pointColor }) => $pointColor};
	}
`;

const leftStyles = css`
	top: 50%;
	left: calc(100% - 1px);
	transform: translateY(-50%) rotate(-90deg);
`;

const rightStyles = css`
	top: 50%;
	right: calc(100% - 1px);
	transform: translateY(-50%) rotate(90deg);
`;

const bottomStyles = css`
	bottom: calc(100% - 1px);
	left: 50%;
	transform: translateX(-50%) rotate(180deg);
`;

const topStyles = css`
	top: calc(100% - 1px);
	left: 50%;
	transform: translateX(-50%);
`;

const hiddenStyles = css`
	display: none;
`;

const mapArrowStyles: Record<Placement, FlattenSimpleInterpolation> = {
	left: leftStyles,
	'left-start': hiddenStyles,
	'left-end': hiddenStyles,
	right: rightStyles,
	'right-start': hiddenStyles,
	'right-end': hiddenStyles,
	bottom: bottomStyles,
	'bottom-start': hiddenStyles,
	'bottom-end': hiddenStyles,
	top: topStyles,
	'top-start': hiddenStyles,
	'top-end': hiddenStyles,
	auto: hiddenStyles,
	'auto-start': hiddenStyles,
	'auto-end': hiddenStyles,
};

export const StyledArrow = styled(Icon.TooltipArrow)<{ $placement: Placement }>`
	${size('2rem')}
	position: absolute;

	${({ $placement }) => mapArrowStyles[$placement]}
`;
