import { ReactElement } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Paragraph from '../../components/atoms/Paragraph';
import { keyframes } from '../config/keyframes';
import { Table as GenericTable } from './Storybook';
import { StyledData, StyledRow, StyledKeyframe } from './Storybook.styles';

interface TableProps {
	duration: number;
}

const Table = ({ duration }: TableProps): ReactElement => {
	const tableHeadings = ['Name', 'Preview'];

	const rows = Object.entries(keyframes).map(([name, keyframe]) => (
		<StyledRow key={name}>
			<StyledData>
				<Paragraph>{name}</Paragraph>
			</StyledData>
			<StyledData>
				<StyledKeyframe $keyframe={keyframe} $duration={duration} />
			</StyledData>
		</StyledRow>
	));

	return <GenericTable headings={tableHeadings}>{rows}</GenericTable>;
};

export default {
	title: 'Styles/Keyframes',
	component: Table,
	args: {
		duration: 1.5,
	},
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Keyframes = Template.bind({});
