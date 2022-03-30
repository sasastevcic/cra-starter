import { ReactElement } from 'react';
import { Path } from '../../../routes/Path';
import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';
import Container from '../../layout/Container';
import Page from '../../layout/Page';
import { NotFoundProps } from './NotFound.data';

export const NotFound = ({ title = 'Page not found', copy }: NotFoundProps): ReactElement => (
	<Page>
		<Container>
			<Heading>{title}</Heading>
			{copy && <Paragraph>{copy}</Paragraph>}
			<Button href={Path.Home}>Home</Button>
		</Container>
	</Page>
);
