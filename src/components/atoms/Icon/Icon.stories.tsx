import { ReactElement } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table as GenericTable } from '../../../styles/storybook/Storybook';
import { StyledRow, StyledData, StyledIcon } from '../../../styles/storybook/Storybook.styles';
import Paragraph from '../Paragraph';
import { Icon } from './Icon';

const Table = (): ReactElement => {
	const tableHeadings = ['Name', 'Preview'];

	const rows = Object.entries(Icon).map(([name, Svg]) => (
		<StyledRow key={name}>
			<StyledData>
				<Paragraph>{name}</Paragraph>
			</StyledData>
			<StyledData>
				<StyledIcon as={Svg} />
			</StyledData>
		</StyledRow>
	));

	return <GenericTable headings={tableHeadings}>{rows}</GenericTable>;
};

export default {
	title: 'Vector/Icons',
	component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = () => <Table />;

export const Icons = Template.bind({});
