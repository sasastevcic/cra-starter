import { calculateRatio } from '../aspectRatio';

describe('calculate ratio method', () => {
	it('should return correct aspect ratio', () => {
		const value = calculateRatio([16, 9]);

		expect(value).toBe(56.25);
	});
});
