import { ReactElement, ReactNode } from 'react';
import Paragraph from '../../components/atoms/Paragraph';
import { ParagraphType } from '../../components/atoms/Paragraph/Paragraph.data';
import { StyledData, StyledRow, StyledTable, StyledTbody, StyledThead } from './Storybook.styles';

interface TableProps {
	headings: Array<string>;
	children: ReactNode;
}

export const Table = ({ headings, children }: TableProps): ReactElement => (
	<StyledTable>
		<StyledThead>
			<StyledRow>
				{headings.map((heading) => (
					<StyledData as="th" key={heading}>
						<Paragraph type={ParagraphType.Large}>{heading}</Paragraph>
					</StyledData>
				))}
			</StyledRow>
		</StyledThead>
		<StyledTbody>{children}</StyledTbody>
	</StyledTable>
);
