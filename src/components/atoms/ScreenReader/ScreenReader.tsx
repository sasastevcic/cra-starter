import { ReactElement } from 'react';
import { ScreenReaderProps } from './ScreenReader.data';
import { StyledScreenReader } from './ScreenReader.styles';

export const ScreenReader = ({ text, ...props }: ScreenReaderProps): ReactElement => (
	<StyledScreenReader data-testid="ScreenReader" {...props}>
		{text}
	</StyledScreenReader>
);
