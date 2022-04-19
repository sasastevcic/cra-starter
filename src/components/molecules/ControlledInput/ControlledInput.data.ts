import { ComponentProps, InputHTMLAttributes } from 'react';
import { Control } from 'react-hook-form';

type PickInputAttribute<T extends keyof InputHTMLAttributes<HTMLInputElement>> = Pick<
	ComponentProps<'input'>,
	T
>[T];

type InputValue = PickInputAttribute<'value'>;
type InputType = PickInputAttribute<'type'>;

export interface ControlledInputProps {
	name: string;
	control: Control;
	label?: string;
	defaultValue?: InputValue;
	type?: InputType;
}
