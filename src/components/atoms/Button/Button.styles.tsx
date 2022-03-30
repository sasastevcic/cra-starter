import { size } from 'polished';
import styled, { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { typeStyle } from '../../../styles/config/typeStyles';
import { FontWeight, TransitionDuration, TransitionEase } from '../../../styles/config/variables';
import { hover } from '../../../styles/helpers/hover';
import { AbstractButton } from '../../atoms/AbstractButton/AbstractButton';
import { ButtonTheme, StyledButtonProps } from './Button.data';

const SIZE = 4;

const darkHover = css`
	background-color: ${({ theme }) => theme.color.blackFaded};
`;

const lightHover = css`
	background-color: ${({ theme }) => theme.color.whiteFaded};
`;

const dark = css`
	background-color: ${({ theme }) => theme.color.black};
	color: ${({ theme }) => theme.color.white};

	${hover(darkHover)}
`;

const light = css`
	background-color: ${({ theme }) => theme.color.white};
	color: ${({ theme }) => theme.color.black};

	${hover(lightHover)}
`;

const disabled = css`
	background-color: ${({ theme }) => theme.color.blackFaded};
	color: ${({ theme }) => theme.color.whiteFaded};
	cursor: not-allowed;
`;

const onlyIcon = css`
	${size(`${SIZE}rem`)};
	min-height: auto;
	border-radius: 50%;
	padding: 0;

	svg {
		margin-left: 0;
	}
`;

const themes: { [key in ButtonTheme]: FlattenInterpolation<ThemeProps<DefaultTheme>> } = {
	dark,
	light,
};

export const StyledButton = styled(AbstractButton)<StyledButtonProps>`
	${typeStyle.normal};
	font-weight: ${FontWeight.Bold};
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0.2rem 2.5rem;
	min-height: ${SIZE}rem;
	border-radius: 4.6rem;
	transition: ${TransitionDuration.Normal} ${TransitionEase.Default};
	transition-property: color, background-color;

	${({ $buttonTheme }) => themes[$buttonTheme]};

	&:disabled {
		${disabled};
	}

	svg {
		${size(`${SIZE * 0.4}rem`)};
		margin-left: 1rem;
	}

	${({ $onlyIcon }) => $onlyIcon && onlyIcon}
`;
