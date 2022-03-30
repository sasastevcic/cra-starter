import { ReactElement } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Paragraph from '../../components/atoms/Paragraph';
import { theme } from '../config/theme';
import { Table as GenericTable } from './Storybook';
import { StyledData, StyledPalette, StyledRow } from './Storybook.styles';

const Palette = (): ReactElement => {
	const tableHeadings = ['Name', 'Code', 'Preview'];

	const rows = Object.entries(theme.color).map(([name, color]) => (
		<StyledRow key={name}>
			<StyledData>
				<Paragraph>{name}</Paragraph>
			</StyledData>
			<StyledData>
				<Paragraph>{color}</Paragraph>
			</StyledData>
			<StyledData>
				<StyledPalette $color={color} />
			</StyledData>
		</StyledRow>
	));

	return <GenericTable headings={tableHeadings}>{rows}</GenericTable>;
};

export default {
	title: 'Theme/Color Palette',
	component: Palette,
} as ComponentMeta<typeof Palette>;

const Template: ComponentStory<typeof Palette> = () => <Palette />;

export const ColorPalette = Template.bind({});
ColorPalette.parameters = {
	backgrounds: { default: 'light' },
};
