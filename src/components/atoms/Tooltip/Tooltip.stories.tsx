import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../Button';
import TooltipComponent from './index';

export default {
	title: 'UI Elements/Tooltip',
	component: TooltipComponent,
} as ComponentMeta<typeof TooltipComponent>;

const Template: ComponentStory<typeof TooltipComponent> = (args) => (
	<TooltipComponent {...args}>
		<Button>Hover me!</Button>
	</TooltipComponent>
);

export const Tooltip = Template.bind({});
Tooltip.args = {
	text: 'This is tooltip content',
	placement: 'top',
};
