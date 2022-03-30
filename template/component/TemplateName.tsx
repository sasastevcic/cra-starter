import { ReactElement } from 'react';
import { TemplateNameProps } from './TemplateName.data';
import { StyledTemplateName } from './TemplateName.styles';

export const TemplateName = (props: TemplateNameProps): ReactElement => {
	return (
		<StyledTemplateName data-testid="TemplateName" {...props}>
			TemplateName
		</StyledTemplateName>
	);
};
