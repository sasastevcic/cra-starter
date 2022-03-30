# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

See the [Design System](https://cra-design-system.netlify.app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `yarn cypress:open`

Launches the e2e tests.

### `yarn storybook`

Launches the Storybook UI tool for building components and pages in isolation.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.\
Official page: https://storybook.js.org/

### `yarn build-storybook`

Publishes Storybook.\
Read more: https://storybook.js.org/docs/react/workflows/publish-storybook

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time.
This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel,
ESLint, etc) right into your project so you have full control over them. All of the commands except
`eject` will still work, but they will point to the copied scripts so you can tweak them. At this
point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle
deployments, and you shouldn’t feel obligated to use this feature. However we understand that this
tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn generate ComponentName`

Learn more about
[Generate React CLI](https://github.com/arminbro/generate-react-cli#generate-react-cli).

In order to generate lazy component, add `--type=componentLazy` as argument.\
`yarn generate ComponentName --type=componentLazy`

In order to generate a page, add `--type=page` as argument.\
`yarn generate PageName --type=page`

In order to generate lazy page, add `--type=pageLazy` as argument.\
`yarn generate PageName --type=pageLazy`

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Folder Structure

The structure follows [atomic design](https://bradfrost.com/blog/post/atomic-web-design/)
guidelines.

- atoms - the smallest unit, must be self contained and not dependant on any external modules.
  (types and configuration being the exception)
  - `Icon`, `Paragraph`, `Heading`, `Input`, `Button`, etc...
- molecules - must be restrained to only use atoms and minimal internal state.
  - atom composition, `Modal`, `Carousel`, etc...
- organisms - full freedom to use and be anything, but generally reserved for complex state uses.
  - molecule composition, `SpecificModal`, `SpecificCarousel`, etc...
- layout - only for layout-based components.
  - `Container`, `Grid`, etc...
- pages - consist mostly of groups of organisms stitched together.

## Component Structure

- Component.tsx - the component logic and UI
- Component.lazy.tsx - lazy loaded component
- Component.styles.tsx - styled-components
- Component.data.ts - types and data
- Component.test.tsx - unit tests
- Component.stories.tsx - Storybook UI components
- Component.config.ts - configuration for the component
- index.ts - default export for the component
