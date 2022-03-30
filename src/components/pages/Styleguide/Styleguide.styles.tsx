import { rgba, size } from 'polished';
import styled from 'styled-components';

export const StyledColorPalette = styled.div<{ $color: string }>`
	${size('5rem', '10rem')};
	background-color: ${({ $color }) => $color};
	box-shadow: 0 0.5rem 1rem ${({ theme }) => rgba(theme.color.black, 0.1)};
	margin: 0 1rem 0.5rem;
`;

export const StyledBlock = styled.div`
	padding: 2rem;
`;
