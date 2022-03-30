import { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import Noop from '../Noop';
import Paragraph from '../Paragraph';
import { FormErrorProps } from './FormError.data';

export const FormError = (props: FormErrorProps): ReactElement => {
	const {
		formState: { isValid, isSubmitted, errors },
	} = useFormContext();

	if (isValid) {
		return <Noop />;
	}

	if (!isSubmitted) {
		return <Noop />;
	}

	return (
		<Paragraph data-testid="FormError" {...props}>
			Invalid form{' '}
			{Object.entries(errors)
				.map(([errorField]) => errorField)
				.join(', ')}
		</Paragraph>
	);
};
