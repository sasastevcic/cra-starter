import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface PageProps extends ComponentPropsWithoutRef<'div'> {
	children: ReactNode;
}
