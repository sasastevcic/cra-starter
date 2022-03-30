/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentProps, ComponentType, FunctionComponent } from 'react';

type Providers = Array<[ComponentType<any>, ComponentProps<any>?]>;

export const combineProviders = (providers: Providers): FunctionComponent<unknown> =>
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
