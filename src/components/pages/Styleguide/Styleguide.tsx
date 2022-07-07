import { ReactElement, useCallback, useState } from 'react';
import { z } from 'zod';
import { Modal as ModalEnum } from '../../../constants/modal';
import { useForm } from '../../../hooks/useForm';
import { useGlobalStore } from '../../../hooks/useGlobalStore';
import { useModal } from '../../../hooks/useModal';
import { Path } from '../../../routes/Path';
import { theme } from '../../../styles/config/theme';
import { FontWeight, TextAlign, TextTransform } from '../../../styles/config/variables';
import Button from '../../atoms/Button';
import { ButtonTheme } from '../../atoms/Button/Button.data';
import Heading from '../../atoms/Heading';
import { HeadingType } from '../../atoms/Heading/Heading.data';
import { Icon } from '../../atoms/Icon/Icon';
import Paragraph from '../../atoms/Paragraph';
import { ParagraphType } from '../../atoms/Paragraph/Paragraph.data';
import Container from '../../layout/Container';
import Flex from '../../layout/Flex';
import Page from '../../layout/Page';
import ControlledInput from '../../molecules/ControlledInput';
import Form from '../../molecules/Form';
import Modal from '../../molecules/Modal';
import { StyledBlock, StyledColorPalette } from './Styleguide.styles';

const schema = z.object({
	email: z.string().email('Please enter a valid email address.'),
	password: z
		.string()
		.min(6, 'Please choose a longer password')
		.max(256, 'Consider using a short password'),
});

const ColorPalette = (): ReactElement => {
	const colors = Object.entries(theme.color).map(([name, color]) => (
		<div key={name}>
			<Paragraph textAlign={TextAlign.Center}>{name}</Paragraph>
			<StyledColorPalette $color={color} />
		</div>
	));
	return <Flex flexWrap="wrap">{colors}</Flex>;
};

export const Styleguide = (): ReactElement => {
	const [formData, setFormData] = useState<string>('');
	const form = useForm({
		schema,
	});
	const { modal, openModal, closeModal } = useModal();
	const { counter, increment, decrement } = useGlobalStore();

	const handleSubmit = useCallback((data: unknown) => {
		setFormData(JSON.stringify(data));
	}, []);

	return (
		<Page>
			<Container>
				<Button href={Path.Home}>Back</Button>
				<Heading type={HeadingType.H2}>Color Palette:</Heading>
				<StyledBlock>
					<ColorPalette />
				</StyledBlock>
				<Heading type={HeadingType.H2}>Types:</Heading>
				<StyledBlock>
					<Heading>Heading H1</Heading>
					<Heading type={HeadingType.H2}>Heading H2</Heading>
					<Heading type={HeadingType.H3} as={HeadingType.H2}>
						Heading H3 as H2
					</Heading>
					<Heading
						type={HeadingType.H4}
						textAlign={TextAlign.Center}
						textTransform={TextTransform.UpperCase}
						fontWeight={FontWeight.Normal}
					>
						Heading H4 - center, uppercase, font weight normal
					</Heading>
					<Heading type={HeadingType.H5} color="blackFaded">
						Heading H5 - faded
					</Heading>
					<Heading type={HeadingType.H6}>Heading H6</Heading>
					<Paragraph>Paragraph Default</Paragraph>
					<Paragraph type={ParagraphType.Small}>Paragraph Small</Paragraph>
					<Paragraph type={ParagraphType.Large}>Paragraph Large</Paragraph>
				</StyledBlock>
				<Heading type={HeadingType.H2}>Buttons:</Heading>
				<StyledBlock>
					<div style={{ background: '#f2f2f2', padding: '2rem 5rem' }}>
						<Flex alignItems="center">
							<Button>Default</Button>
							<Button icon={<Icon.Logo />}>Default With Icon</Button>
							<Button icon={<Icon.Logo />} />
						</Flex>
					</div>
					<div style={{ background: 'black', padding: '2rem 5rem' }}>
						<Flex alignItems="center">
							<Button buttonTheme={ButtonTheme.Light}>Light</Button>
							<Button buttonTheme={ButtonTheme.Light} icon={<Icon.Logo />}>
								Light With Icon
							</Button>
							<Button buttonTheme={ButtonTheme.Light} icon={<Icon.Logo />} />
						</Flex>
					</div>
				</StyledBlock>
				<Heading type={HeadingType.H2}>Modal:</Heading>
				<StyledBlock>
					<Button onClick={() => openModal(ModalEnum.Test)}>Toggle Modal</Button>
					<Modal isOpen={modal === ModalEnum.Test} onClose={closeModal}>
						<Paragraph>Modal content</Paragraph>
					</Modal>
				</StyledBlock>
				<Heading type={HeadingType.H2}>Global store:</Heading>
				<StyledBlock>
					<Heading type={HeadingType.H4}>{counter}</Heading>
					<Flex>
						<Button onClick={increment}>+</Button>
						<Button onClick={decrement}>-</Button>
					</Flex>
				</StyledBlock>
				<Heading type={HeadingType.H2}>Form:</Heading>
				<StyledBlock>
					<Form form={form} onSubmit={handleSubmit}>
						<ControlledInput control={form.control} name="email" label="Email" />
						<ControlledInput
							control={form.control}
							name="password"
							type="password"
							label="Password"
						/>
						<Button type="submit">Submit</Button>
						{formData && <Paragraph>Submitted data: {formData}</Paragraph>}
					</Form>
				</StyledBlock>
			</Container>
		</Page>
	);
};
