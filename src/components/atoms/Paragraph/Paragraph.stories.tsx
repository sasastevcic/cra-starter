import { ReactElement } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FONT_SIZE_REGEX } from '../../../constants/regex';
import { typeStyle } from '../../../styles/config/typeStyles';
import { Table as GenericTable } from '../../../styles/storybook/Storybook';
import { StyledRow, StyledData } from '../../../styles/storybook/Storybook.styles';
import ParagraphComponent from './index';
import { ParagraphProps, ParagraphType } from './Paragraph.data';

const Table = (props: ParagraphProps): ReactElement => {
	const tableHeadings = ['Type', 'Size', 'Preview'];

	const rows = Object.entries(ParagraphType).map(([name, type]) => {
		const fontSizesRegex = typeStyle[type].join('').match(FONT_SIZE_REGEX);

		const fontSizes = fontSizesRegex?.filter((fontSize) => !fontSize.includes('calc')) ?? [];

		if (fontSizes.length > 1) {
			tableHeadings[1] = 'Size (Fluid)';
		}

		return (
			<StyledRow key={name}>
				<StyledData>
					<ParagraphComponent>{name}</ParagraphComponent>
				</StyledData>
				<StyledData>
					<ParagraphComponent>{fontSizes.join(' - ')}</ParagraphComponent>
				</StyledData>
				<StyledData>
					<ParagraphComponent type={type} {...props}>
						Paragraph
					</ParagraphComponent>
				</StyledData>
			</StyledRow>
		);
	});

	return <GenericTable headings={tableHeadings}>{rows}</GenericTable>;
};

export default {
	title: 'Types/Paragraphs',
	component: ParagraphComponent,
} as ComponentMeta<typeof ParagraphComponent>;

const Template: ComponentStory<typeof ParagraphComponent> = (args) => <Table {...args} />;

export const Paragraphs = Template.bind({});
