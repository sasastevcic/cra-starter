import { ReactElement } from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Home from '../components/pages/Home';
import NotFound from '../components/pages/NotFound';
import Styleguide from '../components/pages/Styleguide';
import { Path } from './Path';

export const Routes = (): ReactElement => (
	<RouterRoutes>
		{process.env.NODE_ENV === 'development' && (
			<Route path={Path.Styleguide} element={<Styleguide />} />
		)}
		<Route path={Path.Home} element={<Home />} />
		<Route path={Path.NotFound} element={<NotFound />} />
	</RouterRoutes>
);
