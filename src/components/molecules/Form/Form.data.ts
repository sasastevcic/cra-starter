import { ComponentPropsWithoutRef } from 'react';
import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';

export interface FormProps<T extends FieldValues>
	extends Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'> {
	form: UseFormReturn<T>;
	onSubmit: SubmitHandler<T>;
}
