import { ReactElement } from 'react';
import { Controller } from 'react-hook-form';
import { ParagraphType } from '../../atoms/Paragraph/Paragraph.data';
import { ControlledInputProps } from './ControlledInput.data';
import {
	StyledFormControl,
	StyledInput,
	StyledLabel,
	StyledText,
	StyledError,
} from './ControlledInput.styles';

export const ControlledInput = ({
	name,
	control,
	label,
	defaultValue = '',
	type = 'text',
	...props
}: ControlledInputProps): ReactElement => (
	<Controller
		name={name}
		control={control}
		defaultValue={defaultValue}
		render={({ fieldState: { invalid, error }, field }) => (
			<StyledFormControl {...props}>
				<StyledLabel>
					<StyledInput data-testid="ControlledInput" type={type} isInvalid={invalid} {...field} />
					<StyledText $isActive={!!field.value}>{label}</StyledText>
					{invalid && (
						<StyledError type={ParagraphType.Small}>
							{error?.message ?? `${label} is required!`}
						</StyledError>
					)}
				</StyledLabel>
			</StyledFormControl>
		)}
	/>
);
