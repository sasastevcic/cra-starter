import { ComponentProps } from 'react';
import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';

export type InputValue = Pick<ComponentProps<'input'>, 'value'>['value'];

export interface FormProps<T extends FieldValues>
	extends Omit<ComponentProps<'form'>, 'onSubmit' | 'ref'> {
	form: UseFormReturn<T>;
	onSubmit: SubmitHandler<T>;
}
