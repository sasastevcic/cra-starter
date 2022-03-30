import { zIndex } from '../zIndex';

describe('zIndex method', () => {
	it('should return 1 for "default" argument', () => {
		const value = zIndex('default');

		expect(value).toBe(1);
	});

	it('should return 0 for "null" argument', () => {
		const value = zIndex('null');

		expect(value).toBe(0);
	});

	it('should return -1 for "negative" argument', () => {
		const value = zIndex('negative');

		expect(value).toBe(-1);
	});
});
