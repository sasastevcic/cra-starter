import { ReactElement } from 'react';
import { Path } from '../../../routes/Path';
import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';
import Container from '../../layout/Container';
import Flex from '../../layout/Flex';
import Page from '../../layout/Page';

export const Home = (): ReactElement => {
	return (
		<Page>
			<Container>
				<Flex flexDirection="column" justifyContent="center" alignItems="center">
					<Heading>Create React App - Starter</Heading>
					<Button href={Path.Styleguide}>Styleguide</Button>
				</Flex>
			</Container>
		</Page>
	);
};
