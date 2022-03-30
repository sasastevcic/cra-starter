import { size } from 'polished';
import styled, { css, Keyframes, keyframes } from 'styled-components';
import Paragraph from '../../components/atoms/Paragraph';
import { FontFamily, TransitionEase } from '../config/variables';

export const StyledTable = styled.table`
	border-collapse: collapse;
	margin: 0 auto;
	min-width: 80rem;
`;

export const StyledThead = styled.thead`
	tr {
		border-color: ${({ theme }) => theme.color.black};
		border-width: 2px;
	}
`;

export const StyledTbody = styled.tbody`
	tr:last-child {
		border-bottom: 0;
	}
`;

export const StyledRow = styled.tr`
	border-bottom: 1px solid ${({ theme }) => theme.color.blackFaded};
`;

export const StyledData = styled.td`
	text-align: left;
	padding: 1.5rem 2rem;
`;

export const StyledPalette = styled.div<{ $color: string }>`
	${size('4rem')};
	background-color: ${({ $color }) => $color};
`;

const animate = keyframes`
	20% {
		transform: translateX(0);
	}
	80% {
		transform: translateX(15rem);
	}
	100% {
		transform: translateX(15rem);
	}
`;

export const StyledEasing = styled.div<{ $easing: string; $duration: number }>`
	${size('2rem')};
	margin-right: 10rem;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.color.green};
	animation: ${({ $easing, $duration }) =>
		css`
			${animate} ${$easing} ${$duration}s infinite
		`};
`;

export const StyledKeyframe = styled.div<{ $keyframe: Keyframes; $duration: number }>`
	${size('0.3rem', '5rem')};
	background-color: ${({ theme }) => theme.color.green};
	animation: ${({ $keyframe, $duration }) =>
		css`
			${$keyframe} ${TransitionEase.Default} ${$duration}s
				infinite
		`};
`;

export const StyledIcon = styled.span`
	${size('3rem')};
`;

export const StyledFontPreview = styled(Paragraph)<{ $fontFamily: FontFamily }>`
	font-family: ${({ $fontFamily }) => $fontFamily};
`;
