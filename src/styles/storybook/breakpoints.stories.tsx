import { ReactElement } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Paragraph from '../../components/atoms/Paragraph';
import { Breakpoints as BreakpointsEnum } from '../config/variables';
import { Table as GenericTable } from './Storybook';
import { StyledData, StyledRow } from './Storybook.styles';

const Table = (): ReactElement => {
	const tableHeadings = ['Name', 'Breakpoint'];

	const rows = Object.entries(BreakpointsEnum)
		.filter(([name]) => isNaN(Number(name)))
		.map(([name, breakpoint]) => (
			<StyledRow key={name}>
				<StyledData>
					<Paragraph>{name}</Paragraph>
				</StyledData>
				<StyledData>
					<Paragraph>{breakpoint}px</Paragraph>
				</StyledData>
			</StyledRow>
		));

	return <GenericTable headings={tableHeadings}>{rows}</GenericTable>;
};

export default {
	title: 'Styles/Breakpoints',
	component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = () => <Table />;

export const Breakpoints = Template.bind({});
