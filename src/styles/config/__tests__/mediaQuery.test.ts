import { BREAKPOINT_DIFFERENCE, getBreakpointDifference, getNext, media } from '../mediaQuery';
import { Breakpoints } from '../variables';

describe('Media method', () => {
	it('getNext returns next breakpoint', () => {
		const value = getNext(Breakpoints.XxLarge);

		expect(value).toBe(Breakpoints.XxxLarge);
	});

	it('getBreakpointDifference breakpoints lower value', () => {
		const breakpoint = getBreakpointDifference(Breakpoints.XxLarge);

		expect(breakpoint).toBe(Breakpoints.XxLarge - BREAKPOINT_DIFFERENCE);
	});

	it('getNext returns undefined for largest breakpoint', () => {
		const value = getNext(Breakpoints.XxxLarge);

		expect(value).toBe(undefined);
	});

	it('up returns correct string', () => {
		const value = media.up(Breakpoints.XxLarge);

		expect(value).toMatch(`(min-width: ${Breakpoints.XxLarge}px)`);
	});

	it('down returns correct string', () => {
		const value = media.down(Breakpoints.Medium);

		expect(value).toMatch(`(max-width: ${getBreakpointDifference(Breakpoints.Medium)}px)`);
	});

	it('only returns correct string', () => {
		const value = media.only(Breakpoints.Large);

		expect(value).toMatch(
			`(min-width: ${Breakpoints.Large}px)${
				getNext(Breakpoints.Large)
					? ` and (max-width: ${getBreakpointDifference(getNext(Breakpoints.Large))}px)`
					: ''
			}`,
		);
	});

	it('between returns correct string', () => {
		const value = media.between(Breakpoints.XxLarge, Breakpoints.XxxLarge);

		expect(value).toMatch(
			`(min-width: ${Breakpoints.XxLarge}px)${
				Breakpoints.XxxLarge > Breakpoints.XxLarge
					? ` and (max-width: ${getBreakpointDifference(Breakpoints.XxxLarge)}px)`
					: ''
			}`,
		);
	});
});
