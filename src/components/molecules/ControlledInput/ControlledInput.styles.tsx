import styled, { css } from 'styled-components';
import { TransitionDuration, TransitionEase } from '../../../styles/config/variables';
import Input from '../../atoms/Input';
import Paragraph from '../../atoms/Paragraph';

export const StyledFormControl = styled.div`
	position: relative;
	margin-bottom: 2rem;

	&:last-child {
		margin-bottom: 0;
	}
`;

export const StyledLabel = styled.label`
	display: inline-block;
	position: relative;
`;

const activeStyles = css`
	top: 0;
	transform: translate(-0.5rem, -50%) scale(0.8);
	opacity: 1;
`;

export const StyledText = styled(Paragraph)<{ $isActive: boolean }>`
	position: absolute;
	left: 1.5rem;
	top: 50%;
	transform: translateY(-50%);
	background-color: ${({ theme }) => theme.color.white};
	transition: ${TransitionDuration.Normal} ${TransitionEase.Default};
	transition-property: top, transform, opacity;
	pointer-events: none;
	padding: 0.1rem;
	opacity: 0.4;

	${({ $isActive }) => $isActive && activeStyles}
`;

export const StyledError = styled(Paragraph)`
	position: absolute;
	top: 100%;
	left: 0;
	color: ${({ theme }) => theme.color.red};
`;

export const StyledInput = styled(Input)`
	&:focus {
		~ ${StyledText} {
			${activeStyles}
		}

		~ ${StyledError} {
			display: none;
		}
	}
`;
