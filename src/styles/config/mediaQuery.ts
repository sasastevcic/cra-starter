import { Breakpoints } from './variables';

/*

	Usage:
		In styled-components -

				${respondTo(media.up(Breakpoints.XxLarge))} {
					background: red;
				}
				${respondTo(media.down(Breakpoints.Medium))} {
					background: yellow;
				}
				${respondTo(media.only(Breakpoints.Large))} {
					background: green;
				}
				${respondTo(media.between(Breakpoints.Large, Breakpoints.XLarge))} {
					background: blue;
				}

		In tsx -

				const isLarge = useMedia(media.up(Breakpoints.Large));

*/

export const BREAKPOINT_DIFFERENCE = 0.02;

export const getNext = (breakpoint: Breakpoints): Breakpoints => {
	const currentIndex = Object.values(Breakpoints).indexOf(breakpoint);

	const value = Object.values(Breakpoints)[currentIndex + 1];

	return value as Breakpoints;
};

export const getBreakpointDifference = (breakpoint: Breakpoints): number =>
	breakpoint - BREAKPOINT_DIFFERENCE;

const up = (breakpoint: Breakpoints): string => `(min-width: ${breakpoint}px)`;

const down = (breakpoint: Breakpoints): string =>
	`(max-width: ${getBreakpointDifference(breakpoint)}px)`;

const only = (breakpoint: Breakpoints): string =>
	`(min-width: ${breakpoint}px)${
		getNext(breakpoint) ? ` and (max-width: ${getBreakpointDifference(getNext(breakpoint))}px)` : ''
	}`;

const between = (breakpoint: Breakpoints, breakpointSec: Breakpoints): string =>
	`(min-width: ${breakpoint}px)${
		breakpointSec > breakpoint
			? ` and (max-width: ${getBreakpointDifference(breakpointSec)}px)`
			: ''
	}`;

/**
 * @description The util functions for generating media query breakpoints
 * @example
 * media.up(Breakpoints.Large) --> '(min-width: 1024px)'
 * media.down(Breakpoints.Large) --> '(max-width: 1023.98px)'
 * media.only(Breakpoints.Large) --> '(min-width: 1024px) and (max-width: 1439.98px)'
 * media.between(Breakpoints.Large, Breakpoints.XxLarge) --> '(min-width: 1024px) and (max-width: 1639.98px)'
 */
export const media = {
	up,
	down,
	only,
	between,
};
