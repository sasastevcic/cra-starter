/* eslint-disable prefer-const */
import { act, renderHook } from '@testing-library/react-hooks';
import { rejectHandler } from '../../mocks/handlers';
import { useAxios } from '../useAxios';

describe('useAxios hook', () => {
	it('loader works as expected', async () => {
		const { result, waitForNextUpdate } = renderHook(() => useAxios());
		let [{ isLoading }, sendRequest] = result.current;

		expect(isLoading).toBe(false);

		act(() => {
			sendRequest('/some-api');
		});

		[{ isLoading }] = result.current;
		expect(isLoading).toBe(true);

		await waitForNextUpdate();

		[{ isLoading }] = result.current;
		expect(isLoading).toBe(false);
	});

	it('should get a valid data', async () => {
		const { result } = renderHook(() => useAxios<{ title: string }>());
		let [{ data, error }, sendRequest] = result.current;

		expect(data).toBe(undefined);
		expect(error).toBe(undefined);

		await act(async () => {
			await sendRequest('/some-api');
		});

		[{ data, error }] = result.current;

		expect(data).toStrictEqual({ title: 'Test API' });
		expect(error).toBe(undefined);
	});

	it('should get an error', async () => {
		rejectHandler('/invalid-url');

		const { result } = renderHook(() => useAxios<{ title: string }>());
		let [{ data, error }, sendRequest] = result.current;

		expect(data).toBe(undefined);
		expect(error).toBe(undefined);

		await act(async () => {
			await sendRequest('/invalid-url');
		});

		[{ data, error }] = result.current;

		expect(data).toBe(undefined);
		expect(error).toBeInstanceOf(Error);
	});
});
