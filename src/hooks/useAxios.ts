import { useCallback, useMemo, useReducer, useRef } from 'react';
import { AxiosRequestConfig } from 'axios';
import axios from '../axios';
import { useUnmount } from './useUnmount';

enum Status {
	Success = 'success',
	Loading = 'loading',
	Error = 'error',
}

interface State<T> {
	data?: T;
	error?: Error;
	isLoading: boolean;
}

type Options = Omit<AxiosRequestConfig, 'url' | 'signal'>;

type SendRequest = (url: string, options?: Options) => void;

type ReturnTuple<T> = [state: State<T>, sendRequest: SendRequest];

// discriminated union type
type Action<T> =
	| { type: Status.Loading }
	| { type: Status.Success; payload: T }
	| { type: Status.Error; payload: Error };

/**
 * @description a hook for handling requests using Axios
 * @returns a tuple with state and sendRequest method
 * @example const [state, sendRequest] = useAxios<TypeOfResponseData>();
 * state --> { data: TypeOfResponseData; error: Error; isLoading: boolean }
 */
export const useAxios = <T = unknown>(): ReturnTuple<T> => {
	// Used to prevent state update if the component is unmounted
	const cancelRequest = useRef<boolean>(false);

	// Used to abort active requests if the component is unmounted
	const activeHttpRequests = useRef<Array<AbortController>>([]);

	const initialState: State<T> = useMemo(
		() => ({
			error: undefined,
			data: undefined,
			isLoading: false,
		}),
		[],
	);

	// Keep state logic separated
	const fetchReducer = useCallback(
		(state: State<T>, action: Action<T>): State<T> => {
			switch (action.type) {
				case Status.Loading:
					return { ...initialState, isLoading: true };
				case Status.Success:
					return { ...initialState, data: action.payload };
				case Status.Error:
					return { ...initialState, error: action.payload };
				default:
					return state;
			}
		},
		[initialState],
	);

	const [state, dispatch] = useReducer(fetchReducer, initialState);

	const sendRequest: SendRequest = useCallback(async (url, options) => {
		dispatch({ type: Status.Loading });

		const abortController = new AbortController();
		activeHttpRequests.current.push(abortController);

		try {
			const { data } = await axios.request({
				url,
				signal: abortController.signal,
				...options,
			});

			activeHttpRequests.current = activeHttpRequests.current.filter(
				(reqCtrl) => reqCtrl !== abortController,
			);

			if (cancelRequest.current) {
				return;
			}

			dispatch({ type: Status.Success, payload: data });
		} catch (error) {
			if (cancelRequest.current) {
				return;
			}

			dispatch({ type: Status.Error, payload: error as Error });
		}
	}, []);

	// Use the cleanup function for avoiding a possibly...
	// ...state update after the component was unmounted
	useUnmount(() => {
		cancelRequest.current = true;

		activeHttpRequests.current.forEach((controller) => controller.abort());
	});

	return [state, sendRequest];
};
