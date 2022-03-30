import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '../../atoms/Icon/Icon';
import { ButtonTheme } from './Button.data';
import Button from './index';

export default {
	title: 'Form Elements/Buttons',
	component: Button,
	args: {
		children: 'Button',
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const darkTheme = {
	buttonTheme: ButtonTheme.Dark,
};

const lightTheme = {
	buttonTheme: ButtonTheme.Light,
};

export const Dark = Template.bind({});
Dark.args = darkTheme;

export const DarkWithIcon = Template.bind({});
DarkWithIcon.args = {
	...darkTheme,
	icon: <Icon.Logo />,
};

export const DarkIcon = Template.bind({});
DarkIcon.args = {
	...darkTheme,
	icon: <Icon.Logo />,
	children: null,
};

export const Light = Template.bind({});
Light.args = lightTheme;
Light.parameters = {
	backgrounds: { default: 'dark' },
};

export const LightWithIcon = Template.bind({});
LightWithIcon.args = {
	...lightTheme,
	icon: <Icon.Logo />,
};
LightWithIcon.parameters = {
	backgrounds: { default: 'dark' },
};

export const LightIcon = Template.bind({});
LightIcon.args = {
	...lightTheme,
	icon: <Icon.Logo />,
	children: null,
};
LightIcon.parameters = {
	backgrounds: { default: 'dark' },
};
