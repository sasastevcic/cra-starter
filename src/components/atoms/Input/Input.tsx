import { forwardRef, ReactElement } from 'react';
import { InputProps } from './Input.data';
import { StyledInput } from './Input.styles';

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ isInvalid, type = 'text', ...props }, ref): ReactElement => (
		<StyledInput ref={ref} data-testid="Input" type={type} $isInvalid={isInvalid} {...props} />
	),
);
