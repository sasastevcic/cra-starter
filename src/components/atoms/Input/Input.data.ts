import { ComponentProps } from 'react';

export interface InputProps {
	isInvalid: boolean;
	type?: Pick<ComponentProps<'input'>, 'type'>['type'];
}
