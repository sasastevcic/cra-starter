import { ComponentPropsWithRef, ReactNode } from 'react';

export interface ContainerProps extends ComponentPropsWithRef<'div'> {
	children: ReactNode;
}
