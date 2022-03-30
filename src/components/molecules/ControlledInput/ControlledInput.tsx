import { ReactElement } from 'react';
import { Controller } from 'react-hook-form';
import { Icon } from '../../atoms/Icon/Icon';
import Tooltip from '../../atoms/Tooltip';
import { TooltipType } from '../../atoms/Tooltip/Tooltip.data';
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
						<StyledError>
							<Tooltip type={TooltipType.Error} text={error?.message ?? `${label} is required!`}>
								<Icon.Error />
							</Tooltip>
						</StyledError>
					)}
				</StyledLabel>
			</StyledFormControl>
		)}
	/>
);
