import { ReactElement } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FONT_SIZE_REGEX } from '../../../constants/regex';
import { typeStyle } from '../../../styles/config/typeStyles';
import { Table as GenericTable } from '../../../styles/storybook/Storybook';
import { StyledRow, StyledData } from '../../../styles/storybook/Storybook.styles';
import Paragraph from '../Paragraph';
import { HeadingProps, HeadingType } from './Heading.data';
import HeadingComponent from './index';

const Table = (props: HeadingProps): ReactElement => {
	const tableHeadings = ['Type', 'Size', 'Preview'];

	const rows = Object.entries(HeadingType).map(([name, type]) => {
		const fontSizesRegex = typeStyle[type].join('').match(FONT_SIZE_REGEX);

		const fontSizes = fontSizesRegex?.filter((fontSize) => !fontSize.includes('calc')) ?? [];

		if (fontSizes.length > 1) {
			tableHeadings[1] = 'Size (Fluid)';
		}

		return (
			<StyledRow key={name}>
				<StyledData>
					<Paragraph>{name}</Paragraph>
				</StyledData>
				<StyledData>
					<Paragraph>{fontSizes.join(' - ')}</Paragraph>
				</StyledData>
				<StyledData>
					<HeadingComponent type={type} {...props}>
						Heading
					</HeadingComponent>
				</StyledData>
			</StyledRow>
		);
	});

	return <GenericTable headings={tableHeadings}>{rows}</GenericTable>;
};

export default {
	title: 'Types/Headings',
	component: HeadingComponent,
} as ComponentMeta<typeof HeadingComponent>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Headings = Template.bind({});
