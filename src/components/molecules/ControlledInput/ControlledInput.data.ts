import { ComponentProps } from 'react';
import { Control } from 'react-hook-form';
import { InputValue } from '../Form/Form.data';

export interface ControlledInputProps {
	name: string;
	control: Control;
	label?: string;
	defaultValue?: InputValue;
	type?: Pick<ComponentProps<'input'>, 'type'>['type'];
}
