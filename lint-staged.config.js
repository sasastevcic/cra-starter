module.exports = {
	// Type check TypeScript files
	'**/*.(ts|tsx)': () => 'yarn types',

	// Lint then format TypeScript and JavaScript files
	'**/*.(ts|tsx|js|jsx)': (filenames) => [
		`yarn eslint --fix ${filenames.join(' ')}`,
		`yarn prettier --write ${filenames.join(' ')}`,
		`yarn test --watchAll=false --findRelatedTests --bail ${filenames.join(' ')}`,
	],

	// Format MarkDown and JSON
	'**/*.(md|json)': (filenames) => `yarn prettier --write ${filenames.join(' ')}`,
};
