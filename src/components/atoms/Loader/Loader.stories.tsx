import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoaderComponent from './index';

export default {
	title: 'UI Elements/Loader',
	component: LoaderComponent,
} as ComponentMeta<typeof LoaderComponent>;

const Template: ComponentStory<typeof LoaderComponent> = (args) => <LoaderComponent {...args} />;

export const Loader = Template.bind({});
Loader.parameters = {
	backgrounds: { default: 'light' },
};
