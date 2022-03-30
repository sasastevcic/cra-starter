import { ComponentStory, ComponentMeta } from '@storybook/react';
import { z } from 'zod';
import { useForm } from '../../../hooks/useForm';
import ControlledInputComponent from './index';

export default {
	title: 'Form Elements/Input',
	component: ControlledInputComponent,
} as ComponentMeta<typeof ControlledInputComponent>;

const schema = z.object({
	firstName: z.string(),
	age: z.number(),
});

const Template: ComponentStory<typeof ControlledInputComponent> = () => {
	const { control } = useForm({
		schema,
	});

	return (
		<>
			<ControlledInputComponent name="firstName" label="First Name" control={control} />
			<ControlledInputComponent
				name="age"
				label="Age"
				defaultValue="Test number"
				control={control}
			/>
		</>
	);
};

export const Input = Template.bind({});
