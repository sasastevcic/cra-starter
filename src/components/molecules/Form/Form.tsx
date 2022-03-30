import { ReactElement } from 'react';
import { FieldValues, FormProvider } from 'react-hook-form';
import { FormProps } from './Form.data';
import { StyledForm, StyledFieldset } from './Form.styles';

export const Form = <T extends FieldValues>({
	form,
	onSubmit,
	children,
	...props
}: FormProps<T>): ReactElement => (
	<FormProvider {...form}>
		<StyledForm data-testid="Form" onSubmit={form.handleSubmit(onSubmit)} {...props}>
			<StyledFieldset disabled={form.formState.isSubmitting}>{children}</StyledFieldset>
		</StyledForm>
	</FormProvider>
);
