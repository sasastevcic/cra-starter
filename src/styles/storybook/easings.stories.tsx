import { ReactElement } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Paragraph from '../../components/atoms/Paragraph';
import { Ease } from '../config/easing';
import { Table as GenericTable } from './Storybook';
import { StyledData, StyledRow, StyledEasing } from './Storybook.styles';

interface TableProps {
	duration: number;
}

const Table = ({ duration }: TableProps): ReactElement => {
	const tableHeadings = ['Name', 'Code', 'Preview'];

	const rows = Object.entries(Ease).map(([name, easing]) => (
		<StyledRow key={name}>
			<StyledData>
				<Paragraph>{name}</Paragraph>
			</StyledData>
			<StyledData>
				<Paragraph>{easing}</Paragraph>
			</StyledData>
			<StyledData>
				<StyledEasing $easing={easing} $duration={duration} />
			</StyledData>
		</StyledRow>
	));

	return <GenericTable headings={tableHeadings}>{rows}</GenericTable>;
};

export default {
	title: 'Styles/Easings',
	component: Table,
	args: {
		duration: 1.5,
	},
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Easings = Template.bind({});
