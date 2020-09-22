import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
	<Switch>
		<Route path="/sign-in" exact component={SignIn} />
	</Switch>
);

export default Routes;
