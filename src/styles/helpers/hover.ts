import { css, FlattenInterpolation, ThemeProps, DefaultTheme } from 'styled-components';
import { isTouchDevice } from '../../utils/isTouchDevice';

export const hover = (
	styles: FlattenInterpolation<ThemeProps<DefaultTheme>>,
): FlattenInterpolation<ThemeProps<DefaultTheme>> => css`
	${!isTouchDevice() &&
	css`
		&:hover:not(:disabled) {
			${styles};
		}
	`};
`;
