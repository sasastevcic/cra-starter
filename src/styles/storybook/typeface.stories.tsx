import { ReactElement } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Paragraph from '../../components/atoms/Paragraph';
import { ParagraphType } from '../../components/atoms/Paragraph/Paragraph.data';
import { FontFamily } from '../config/variables';
import { Table as GenericTable } from './Storybook';
import { StyledData, StyledRow, StyledFontPreview } from './Storybook.styles';

const Table = (): ReactElement => {
	const tableHeadings = ['Name', 'Preview'];

	const rows = Object.entries(FontFamily).map(([name, font]) => (
		<StyledRow key={name}>
			<StyledData>
				<Paragraph>{name}</Paragraph>
			</StyledData>
			<StyledData>
				<StyledFontPreview type={ParagraphType.Large} $fontFamily={font}>
					Almost before we knew it, we had left the ground.
				</StyledFontPreview>
				<Paragraph color="blackFaded">
					<em>{font}</em>
				</Paragraph>
			</StyledData>
		</StyledRow>
	));

	return <GenericTable headings={tableHeadings}>{rows}</GenericTable>;
};

export default {
	title: 'Types/Typefaces',
	component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = () => <Table />;

export const Typefaces = Template.bind({});
