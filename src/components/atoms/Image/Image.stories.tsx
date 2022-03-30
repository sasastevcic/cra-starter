import { ComponentStory, ComponentMeta } from '@storybook/react';
import { media } from '../../../styles/config/mediaQuery';
import { Breakpoints } from '../../../styles/config/variables';
import ImageComponent from './index';

export default {
	title: 'UI Elements/Image',
	component: ImageComponent,
} as ComponentMeta<typeof ImageComponent>;

const Template: ComponentStory<typeof ImageComponent> = (args) => <ImageComponent {...args} />;

export const Cover = Template.bind({});
Cover.args = {
	src: 'https://via.placeholder.com/150',
	alt: 'Placeholder',
	fit: 'cover',
};

export const Contain = Template.bind({});
Contain.args = {
	src: 'https://via.placeholder.com/150',
	alt: 'Placeholder',
	fit: 'contain',
};

export const AspectRatio = Template.bind({});
AspectRatio.args = {
	src: 'https://via.placeholder.com/150',
	alt: 'Placeholder',
	fit: 'cover',
	aspectRatio: [16, 9],
};

export const Responsive = Template.bind({});
Responsive.args = {
	src: 'https://via.placeholder.com/450',
	alt: 'Placeholder',
	fit: 'contain',
	source: [
		{
			media: media.down(Breakpoints.Small),
			srcset: 'https://via.placeholder.com/150',
		},
		{
			media: media.down(Breakpoints.Large),
			srcset: 'https://via.placeholder.com/300',
		},
	],
};
