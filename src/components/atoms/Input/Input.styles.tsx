import styled, { css } from 'styled-components';
import { keyframes } from '../../../styles/config/keyframes';
import { typeStyle } from '../../../styles/config/typeStyles';
import { BorderRadius, FontFamily } from '../../../styles/config/variables';

const errorInputStyles = css`
	&:not(:focus) {
		border-color: ${({ theme }) => theme.color.red};
		animation: ${keyframes.wiggle} 1s linear forwards;
	}
`;

export const StyledInput = styled.input<{ $isInvalid: boolean }>`
	${typeStyle.large};
	font-family: ${FontFamily.Lato};
	width: 100%;
	padding: 1.2rem 3rem 1.2rem 1.5rem;
	border: 1px solid ${({ theme }) => theme.color.black};
	border-radius: ${BorderRadius.Medium};
	outline-color: ${({ theme }) => theme.color.black};

	${({ $isInvalid }) => $isInvalid && errorInputStyles}
`;
