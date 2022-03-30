import { css, FlattenSimpleInterpolation } from 'styled-components';
import { getRemFromPixels as rem } from './getRemFromPixels';

export const fluidType = (
	minFontSize: number,
	maxFontSize: number,
	minViewport = 375,
	maxViewport = 1920,
): FlattenSimpleInterpolation => {
	const fontSizeDiff = maxFontSize - minFontSize;
	const viewportDiff = maxViewport - minViewport;
	const fullViewportDiff = `(100vw - ${rem(minViewport)})`;

	const fluidSize = `${rem(minFontSize)} + ${fontSizeDiff} * ${fullViewportDiff} / ${viewportDiff}`;

	return css`
		font-size: ${rem(minFontSize)};

		@media screen and (min-width: ${minViewport}px) {
			font-size: calc(${fluidSize});
		}

		@media screen and (min-width: ${maxViewport}px) {
			font-size: ${rem(maxFontSize)};
		}
	`;
};
