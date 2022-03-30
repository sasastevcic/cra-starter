import { position, size } from 'polished';
import styled, { css } from 'styled-components';
import { aspectRatio } from '../../../styles/helpers/aspectRatio';
import type { FitType, StyledImageProps } from './Image.data';

export const StyledImage = styled.div<StyledImageProps>`
	${size('auto', '100%')};

	${({ $hasFit }) => $hasFit && position('absolute', 0)};
	${({ $aspectRatio }) => $aspectRatio && aspectRatio($aspectRatio)};
`;

export const StyledImageElement = styled.img<{ $fit?: FitType }>`
	width: 100%;

	${({ $fit }) =>
		$fit &&
		css`
			height: 100%;
			object-fit: ${$fit};
		`}
`;

export const StyledPicture = styled.picture<{ $fullView: boolean }>`
	${({ $fullView }) =>
		$fullView &&
		css`
			${position('absolute', 0)};
			overflow: hidden;

			${StyledImageElement} {
				${position('absolute')};
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		`}
`;
