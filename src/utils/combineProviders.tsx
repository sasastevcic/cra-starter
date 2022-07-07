/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentProps, ComponentType, FunctionComponent, ReactNode } from 'react';

type Providers = Array<[ComponentType<any>, ComponentProps<any>?]>;

export const combineProviders = (
	providers: Providers,
): FunctionComponent<{ children: ReactNode }> =>
	providers.reduce(
		(AccumulatedProviders, [Provider, props = {}]) =>
			({ children }) =>
				(
					<AccumulatedProviders>
						<Provider {...props}>{children}</Provider>
					</AccumulatedProviders>
				),
		({ children }) => <>{children}</>,
	);
