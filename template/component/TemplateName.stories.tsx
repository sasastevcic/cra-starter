import { ComponentStory, ComponentMeta } from '@storybook/react';
import TemplateNameComponent from './index';

export default {
	title: 'TODO/TemplateName',
	component: TemplateNameComponent,
} as ComponentMeta<typeof TemplateNameComponent>;

const Template: ComponentStory<typeof TemplateNameComponent> = (args) => (
	<TemplateNameComponent {...args} />
);

export const TemplateName = Template.bind({});
TemplateName.args = {
	children: 'TODO',
};
