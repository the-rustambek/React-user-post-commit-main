import React from 'react';
import { useHistory, Switch, Route } from 'react-router-dom';

function Settings() {
	const history = useHistory();

	return (
		<>
			<div>
				<button onClick={() => history.goBack()}>ortga</button>
			</div>

			<button onClick={() => history.push('/settings')}>Settings</button>
			<button onClick={() => history.push('/settings/privacy')}>
				Privacy
			</button>

			<Switch>
				<Route path='/settings' exact>
					<h2>Settings</h2>
				</Route>
				<Route path='/settings/privacy' exact>
					<h2>Privacy</h2>
				</Route>
			</Switch>
		</>
	);
}

export default Settings;
