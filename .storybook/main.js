module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.tsx'],
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/preset-create-react-app',
		'storybook-addon-styled-component-theme/dist/preset',
	],
	framework: '@storybook/react',
	core: {
		builder: 'webpack5',
	},
};
