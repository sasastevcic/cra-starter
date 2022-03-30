import { zodResolver } from '@hookform/resolvers/zod';
import {
	FieldValues,
	useForm as useHookForm,
	UseFormProps as UseHookFormProps,
	UseFormReturn,
} from 'react-hook-form';
import { ZodSchema, TypeOf } from 'zod';

interface UseFormProps<T extends ZodSchema<FieldValues>> extends UseHookFormProps<TypeOf<T>> {
	schema: T;
}

/**
 * @description a hook for handling the useHookForm
 * @returns useHookForm with a resolver and mode
 * @param scheme ZodSchema
 */
export const useForm = <T extends ZodSchema<FieldValues>>({
	schema,
	...formConfig
}: UseFormProps<T>): UseFormReturn => {
	return useHookForm({
		resolver: zodResolver(schema),
		mode: 'onBlur',
		...formConfig,
	});
};
