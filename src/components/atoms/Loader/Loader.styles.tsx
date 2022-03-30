import styled from 'styled-components';
import { keyframes } from '../../../styles/config/keyframes';
import { TransitionEase } from '../../../styles/config/variables';
import { OUTLINE_SIZE, RADIUS, SIZE, STROKE_WIDTH } from './Loader.config';

export const StyledLoaderHolder = styled.div`
	width: 100%;
	text-align: center;
	padding: 1rem 0;
`;

export const StyledLoader = styled.svg.attrs(() => ({
	width: SIZE,
	height: SIZE,
}))`
	animation: ${keyframes.rotate} 2s linear infinite;
`;

const StyledCircle = styled.circle.attrs(() => ({
	cx: SIZE / 2,
	cy: SIZE / 2,
	r: RADIUS,
}))`
	stroke-width: ${STROKE_WIDTH}px;
	fill: none;
`;

export const StyledBaseCircle = styled(StyledCircle)`
	stroke: ${({ theme }) => theme.color.whiteFaded};
`;

export const StyledAnimatingCircle = styled(StyledCircle)`
	stroke-dasharray: 50, ${OUTLINE_SIZE};
	stroke-dashoffset: 0;
	animation: ${keyframes.dash} 1.5s ${TransitionEase.Default} infinite;
	stroke: ${({ theme }) => theme.color.black};
`;
